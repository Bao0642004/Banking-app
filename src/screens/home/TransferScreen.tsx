import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useNavigation,
} from "@react-navigation/native";

import type {
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import React, {
  useState,
} from "react";

import {
  ActivityIndicator,
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import type {
  Transaction,
} from "../../Redux/storage";

import {
  addTransaction,
} from "../../Redux/storage";

import {
  useAuth,
} from "../../context/AuthContext";

import {
  findUserByAccountNumber,
} from "../services/storage";

import {
  User,
} from "../types/auth";

import styles from "../styles/home_styles/TransferScreen_styles";

import {
  sendPaymentNotification,
} from "../services/notificationService";

// ======================================================
// NAVIGATION
// ======================================================

type RootStackParamList = {
  Transfer: undefined;

  Main: undefined;

  TransferSuccess: {
    transactionId: string;

    recipientName?: string;

    accountNumber: string;

    amount: number;

    message?: string;

    date: string;
  };
};

// ======================================================
// COMPONENT
// ======================================================

export default function TransferScreen() {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        RootStackParamList
      >
    >();

  const {
    user,
    updateUser,
  } = useAuth();

  // ====================================================
  // STATES
  // ====================================================

  const [
    accountNumber,
    setAccountNumber,
  ] = useState("");

  const [
    recipient,
    setRecipient,
  ] = useState<User | null>(null);

  const [
    checkingAccount,
    setCheckingAccount,
  ] = useState(false);

  const [
    amount,
    setAmount,
  ] = useState("");

  const [
    message,
    setMessage,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    pinModalVisible,
    setPinModalVisible,
  ] = useState(false);

  const [
    pin,
    setPin,
  ] = useState("");

  // ====================================================
  // FORMAT MONEY
  // ====================================================

  function formatMoney(
    value: string
  ) {
    const number =
      Number(
        value.replace(/\D/g, "")
      ) || 0;

    return number.toLocaleString(
      "vi-VN"
    );
  }

  // ====================================================
  // ACCOUNT CHANGE
  // ====================================================

  async function handleAccountNumberChange(
    text: string
  ) {
    const cleanAccount =
      text
        .replace(/\D/g, "")
        .slice(0, 20);

    setAccountNumber(
      cleanAccount
    );

    setRecipient(null);

    if (
      cleanAccount.length < 6
    ) {
      setCheckingAccount(false);
      return;
    }

    try {
      setCheckingAccount(true);

      const foundUser =
        await findUserByAccountNumber(
          cleanAccount
        );

      if (foundUser) {
        setRecipient(foundUser);
      } else {
        setRecipient(null);
      }
    } catch (error) {
      console.log(
        "CHECK ACCOUNT ERROR:",
        error
      );

      setRecipient(null);
    } finally {
      setCheckingAccount(false);
    }
  }

  // ====================================================
  // AMOUNT CHANGE
  // ====================================================

  function handleAmountChange(
    text: string
  ) {
    const clean =
      text.replace(/\D/g, "");

    setAmount(clean);
  }

  // ====================================================
  // VALIDATE
  // ====================================================

  function validateTransfer(): boolean {
    if (!user) {
      Alert.alert(
        "Thông báo",
        "Bạn chưa đăng nhập."
      );

      return false;
    }

    if (!accountNumber.trim()) {
      Alert.alert(
        "Thông báo",
        "Vui lòng nhập số tài khoản người nhận."
      );

      return false;
    }

    if (
      accountNumber.trim().length < 6
    ) {
      Alert.alert(
        "Thông báo",
        "Số tài khoản không hợp lệ."
      );

      return false;
    }

    if (
      accountNumber.trim() ===
      user.accountNumber
    ) {
      Alert.alert(
        "Thông báo",
        "Bạn không thể chuyển tiền cho chính mình."
      );

      return false;
    }

    if (!recipient) {
      Alert.alert(
        "Thông báo",
        "Không tìm thấy tài khoản người nhận."
      );

      return false;
    }

    const transferAmount =
      Number(amount);

    if (
      !transferAmount ||
      transferAmount <= 0
    ) {
      Alert.alert(
        "Thông báo",
        "Vui lòng nhập số tiền cần chuyển."
      );

      return false;
    }

    if (
      transferAmount < 1000
    ) {
      Alert.alert(
        "Thông báo",
        "Số tiền chuyển tối thiểu là 1.000 ₫."
      );

      return false;
    }

    if (
      transferAmount >
      user.balance
    ) {
      Alert.alert(
        "Thông báo",
        "Số dư tài khoản không đủ để thực hiện giao dịch."
      );

      return false;
    }

    return true;
  }

  // ====================================================
  // CONFIRM
  // ====================================================

  function handleConfirmTransfer() {
    if (!validateTransfer()) {
      return;
    }

    const transferAmount =
      Number(amount);

    if (
      transferAmount > 200000
    ) {
      setPin("");

      setPinModalVisible(
        true
      );

      return;
    }

    processTransfer();
  }

  // ====================================================
  // VERIFY PIN
  // ====================================================

  function handleVerifyPin() {
    if (!user) {
      return;
    }

    if (pin.length !== 6) {
      Alert.alert(
        "Nhập mã PIN",
        "Vui lòng nhập đủ 6 chữ số."
      );

      return;
    }

    if (pin !== user.pin) {
      Alert.alert(
        "Thông báo",
        "Mã PIN không đúng. Vui lòng thử lại."
      );

      setPin("");

      return;
    }

    setPinModalVisible(
      false
    );

    setPin("");

    processTransfer();
  }

  // ====================================================
  // PROCESS TRANSFER
  // ====================================================

  async function processTransfer() {
    if (!validateTransfer()) {
      return;
    }

    if (!user) {
      return;
    }

    try {
      setLoading(true);

      const transferAmount =
        Number(amount);

      const receiver =
        accountNumber.trim();

      const transferNote =
        message.trim();

      // Mock delay
      await new Promise<void>(
        (resolve) => {
          setTimeout(
            resolve,
            1200
          );
        }
      );

      const newBalance =
        user.balance -
        transferAmount;

      const now =
        new Date();

      const transactionDate =
        `${now.toLocaleDateString(
          "vi-VN"
        )} ${now.toLocaleTimeString(
          "vi-VN",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        )}`;

      const transaction: Transaction = {
        id:
          `TX${Date.now()}`,

        title:
          `Chuyển tiền đến ${
            recipient?.fullName ||
            receiver
          }`,

        amount:
          transferAmount,

        type:
          "send",

        date:
          transactionDate,

        accountNumber:
          receiver,

        message:
          transferNote,

        status:
          "success",
      };

      // ================================================
      // LƯU TRANSACTION RIÊNG CHO USER
      // ================================================

      await addTransaction(
        transaction,
        user.accountNumber
      );

      // ================================================
      // UPDATE BALANCE
      // ================================================

      const updatedUser = {
        ...user,

        balance:
          newBalance,
      };

      await updateUser(
        updatedUser
      );

      // ================================================
      // NOTIFICATION
      // ================================================

      await sendPaymentNotification({
        accountNumber:
          receiver,

        amount:
          transferAmount,

        note:
          transferNote,
      });

      // ================================================
      // RESET FORM
      // ================================================

      setAccountNumber("");

      setRecipient(null);

      setAmount("");

      setMessage("");

      // ================================================
      // SUCCESS SCREEN
      // ================================================

      navigation.navigate(
        "TransferSuccess",
        {
          transactionId:
            transaction.id,

          recipientName:
            recipient?.fullName ||
            "Người nhận",

          accountNumber:
            receiver,

          amount:
            transferAmount,

          message:
            transferNote,

          date:
            transaction.date,
        }
      );
    } catch (error) {
      console.log(
        "TRANSFER ERROR:",
        error
      );

      Alert.alert(
        "Thông báo",
        "Có lỗi xảy ra trong quá trình chuyển tiền. Vui lòng thử lại."
      );
    } finally {
      setLoading(false);
    }
  }

  // ====================================================
  // UI
  // ====================================================

  return (
    <SafeAreaView
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        keyboardShouldPersistTaps="handled"
      >
        {/* HEADER */}

        <View
          style={styles.header}
        >
          <TouchableOpacity
            style={
              styles.backButton
            }
            onPress={() =>
              navigation.goBack()
            }
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>

          <Text
            style={
              styles.headerTitle
            }
          >
            Chuyển tiền
          </Text>

          <View
            style={
              styles.headerPlaceholder
            }
          />
        </View>

        {/* BALANCE */}

        <View
          style={
            styles.balanceCard
          }
        >
          <View
            style={
              styles.balanceIcon
            }
          >
            <Ionicons
              name="wallet-outline"
              size={25}
              color="#FFFFFF"
            />
          </View>

          <View>
            <Text
              style={
                styles.balanceLabel
              }
            >
              Số dư khả dụng
            </Text>

            <Text
              style={
                styles.balanceValue
              }
            >
              {user?.balance
                ? user.balance.toLocaleString(
                    "vi-VN"
                  )
                : "0"}{" "}
              ₫
            </Text>
          </View>
        </View>

        {/* FORM */}

        <View
          style={styles.form}
        >
          {/* ACCOUNT NUMBER */}

          <Text
            style={styles.label}
          >
            Số tài khoản người nhận
          </Text>

          <View
            style={
              styles.inputContainer
            }
          >
            <Ionicons
              name="person-outline"
              size={21}
              color="#6B7280"
            />

            <TextInput
              value={
                accountNumber
              }
              onChangeText={
                handleAccountNumberChange
              }
              placeholder="Nhập số tài khoản"
              placeholderTextColor="#9CA3AF"
              keyboardType="number-pad"
              style={styles.input}
              maxLength={20}
            />
          </View>

          {/* CHECKING */}

          {checkingAccount && (
            <View
              style={{
                flexDirection:
                  "row",

                alignItems:
                  "center",

                marginTop:
                  10,
              }}
            >
              <ActivityIndicator
                size="small"
                color="#0756A6"
              />

              <Text
                style={{
                  marginLeft:
                    8,

                  color:
                    "#6B7280",

                  fontSize:
                    13,
                }}
              >
                Đang kiểm tra tài khoản...
              </Text>
            </View>
          )}

          {/* RECIPIENT */}

          {recipient && (
            <View
              style={{
                marginTop:
                  10,

                padding:
                  12,

                backgroundColor:
                  "#EFF6FF",

                borderRadius:
                  10,

                flexDirection:
                  "row",

                alignItems:
                  "center",
              }}
            >
              <View
                style={{
                  width:
                    38,

                  height:
                    38,

                  borderRadius:
                    19,

                  backgroundColor:
                    "#0756A6",

                  justifyContent:
                    "center",

                  alignItems:
                    "center",
                }}
              >
                <Ionicons
                  name="person"
                  size={20}
                  color="#FFFFFF"
                />
              </View>

              <View
                style={{
                  marginLeft:
                    10,

                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize:
                      12,

                    color:
                      "#6B7280",
                  }}
                >
                  Người nhận
                </Text>

                <Text
                  style={{
                    fontSize:
                      16,

                    fontWeight:
                      "700",

                    color:
                      "#111827",

                    marginTop:
                      2,
                  }}
                >
                  {
                    recipient.fullName
                  }
                </Text>

                <Text
                  style={{
                    fontSize:
                      13,

                    color:
                      "#6B7280",

                    marginTop:
                      2,
                  }}
                >
                  STK:{" "}
                  {
                    recipient.accountNumber
                  }
                </Text>
              </View>

              <Ionicons
                name="checkmark-circle"
                size={24}
                color="#16A34A"
              />
            </View>
          )}

          {/* NOT FOUND */}

          {accountNumber.length >=
            6 &&
            !checkingAccount &&
            !recipient && (
              <View
                style={{
                  marginTop:
                    10,

                  padding:
                    12,

                  backgroundColor:
                    "#FEF2F2",

                  borderRadius:
                    10,

                  flexDirection:
                    "row",

                  alignItems:
                    "center",
                }}
              >
                <Ionicons
                  name="alert-circle-outline"
                  size={20}
                  color="#DC2626"
                />

                <Text
                  style={{
                    marginLeft:
                      8,

                    color:
                      "#DC2626",

                    fontSize:
                      14,

                    flex: 1,
                  }}
                >
                  Không tìm thấy tài khoản này.
                </Text>
              </View>
            )}

          {/* AMOUNT */}

          <Text
            style={[
              styles.label,
              {
                marginTop:
                  22,
              },
            ]}
          >
            Số tiền chuyển
          </Text>

          <View
            style={
              styles.inputContainer
            }
          >
            <Ionicons
              name="cash-outline"
              size={21}
              color="#6B7280"
            />

            <TextInput
              value={
                amount
                  ? formatMoney(
                      amount
                    )
                  : ""
              }
              onChangeText={
                handleAmountChange
              }
              placeholder="Nhập số tiền"
              placeholderTextColor="#9CA3AF"
              keyboardType="number-pad"
              style={styles.input}
            />

            <Text
              style={
                styles.currency
              }
            >
              ₫
            </Text>
          </View>

          {/* MESSAGE */}

          <Text
            style={[
              styles.label,
              {
                marginTop:
                  22,
              },
            ]}
          >
            Nội dung chuyển tiền
          </Text>

          <View
            style={[
              styles.inputContainer,
              styles.messageContainer,
            ]}
          >
            <Ionicons
              name="chatbubble-outline"
              size={21}
              color="#6B7280"
              style={{
                marginTop:
                  2,
              }}
            />

            <TextInput
              value={message}
              onChangeText={
                setMessage
              }
              placeholder="Nhập nội dung"
              placeholderTextColor="#9CA3AF"
              style={[
                styles.input,
                styles.messageInput,
              ]}
              multiline
              maxLength={100}
            />
          </View>

          {/* NOTICE */}

          <View
            style={
              styles.notice
            }
          >
            <Ionicons
              name="shield-checkmark-outline"
              size={23}
              color="#2563EB"
            />

            <View
              style={
                styles.noticeContent
              }
            >
              <Text
                style={
                  styles.noticeTitle
                }
              >
                Giao dịch an toàn
              </Text>

              <Text
                style={
                  styles.noticeText
                }
              >
                Kiểm tra kỹ số tài khoản
                và số tiền trước khi xác
                nhận.
              </Text>
            </View>
          </View>

          {/* TRANSFER BUTTON */}

          <TouchableOpacity
            style={[
              styles.transferButton,

              loading &&
                styles.disabledButton,
            ]}
            onPress={
              handleConfirmTransfer
            }
            disabled={loading}
          >
            {loading ? (
              <>
                <ActivityIndicator
                  size="small"
                  color="#FFFFFF"
                />

                <Text
                  style={
                    styles.buttonText
                  }
                >
                  Đang xử lý...
                </Text>
              </>
            ) : (
              <>
                <Ionicons
                  name="send-outline"
                  size={21}
                  color="#FFFFFF"
                />

                <Text
                  style={
                    styles.buttonText
                  }
                >
                  Xác nhận chuyển tiền
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* PIN MODAL */}

      <Modal
        visible={
          pinModalVisible
        }
        transparent
        animationType="fade"
        onRequestClose={() => {
          setPinModalVisible(
            false
          );
          setPin("");
        }}
      >
        <View
          style={
            styles.modalOverlay
          }
        >
          <View
            style={
              styles.pinModal
            }
          >
            <View
              style={
                styles.lockCircle
              }
            >
              <Ionicons
                name="lock-closed"
                size={30}
                color="#0756A6"
              />
            </View>

            <Text
              style={
                styles.modalTitle
              }
            >
              Xác thực PIN
            </Text>

            <Text
              style={
                styles.modalSubtitle
              }
            >
              Giao dịch trên 200.000 ₫{"\n"}
              Nhập mã PIN 6 số để tiếp tục
            </Text>

            <TextInput
              value={pin}
              onChangeText={(text) => {
                const numberOnly =
                  text
                    .replace(
                      /\D/g,
                      ""
                    )
                    .slice(
                      0,
                      6
                    );

                setPin(
                  numberOnly
                );
              }}
              keyboardType="number-pad"
              secureTextEntry
              maxLength={6}
              placeholder="••••••"
              placeholderTextColor="#AAAAAA"
              style={
                styles.pinInput
              }
              autoFocus
            />

            <View
              style={
                styles.pinDots
              }
            >
              {[
                0,
                1,
                2,
                3,
                4,
                5,
              ].map(
                (index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,

                      index <
                        pin.length &&
                        styles.dotActive,
                    ]}
                  />
                )
              )}
            </View>

            <TouchableOpacity
              style={
                styles.confirmButton
              }
              onPress={
                handleVerifyPin
              }
            >
              <Text
                style={
                  styles.confirmText
                }
              >
                Xác nhận
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                styles.logoutButton
              }
              onPress={() => {
                setPin("");

                setPinModalVisible(
                  false
                );
              }}
            >
              <Text
                style={
                  styles.logoutText
                }
              >
                Hủy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}