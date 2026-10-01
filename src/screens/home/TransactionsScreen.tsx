import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useFocusEffect,
} from "@react-navigation/native";

import React, {
  useCallback,
  useState,
} from "react";

import {
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  deleteTransaction,
  getTransactions,
  Transaction,
} from "../../Redux/storage";
import {
  useAuth,
} from "../../context/AuthContext";
import styles   from "../styles/home_styles/transactionsSreen_styles";

export default function TransactionsScreen() {
  const {
    user,
  } = useAuth();

  const [
    transactions,
    setTransactions,
  ] = useState<Transaction[]>(
    []
  );

  const [
    refreshing,
    setRefreshing,
  ] = useState(false);

  // ====================================================
  // LOAD
  // ====================================================

  const loadTransactions =
    useCallback(
      async () => {
        if (
          !user?.accountNumber
        ) {
          setTransactions([]);
          return;
        }

        try {
          const data =
            await getTransactions(
              user.accountNumber
            );

          setTransactions(data);
        } catch (error) {
          console.log(
            "LOAD TRANSACTIONS ERROR:",
            error
          );
        }
      },
      [
        user?.accountNumber,
      ]
    );

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [loadTransactions])
  );

  async function handleRefresh() {
    try {
      setRefreshing(true);

      await loadTransactions();
    } finally {
      setRefreshing(false);
    }
  }
  function handleDelete(
    transactionId: string
  ) {
    if (
      !user?.accountNumber
    ) {
      return;
    }

    Alert.alert(
      "Xóa giao dịch",
      "Bạn có chắc muốn xóa giao dịch này?",
      [
        {
          text: "Hủy",
          style: "cancel",
        },

        {
          text: "Xóa",
          style: "destructive",

          onPress:
            async () => {
              try {
                await deleteTransaction(
                  transactionId,
                  user.accountNumber
                );

                await loadTransactions();
              } catch (error) {
                Alert.alert(
                  "Thông báo",
                  "Không thể xóa giao dịch."
                );
              }
            },
        },
      ]
    );
  }

  function formatMoney(
    amount: number
  ) {
    return amount.toLocaleString(
      "vi-VN"
    );
  }

  function renderTransaction({
    item,
  }: {
    item: Transaction;
  }) {
    const isSend =
      item.type ===
      "send";

    return (
      <View
        style={
          styles.transactionCard
        }
      >
        <View
          style={[
            styles.iconCircle,

            isSend
              ? styles.sendIcon
              : styles.receiveIcon,
          ]}
        >
          <Ionicons
            name={
              isSend
                ? "arrow-up"
                : "arrow-down"
            }
            size={20}
            color="#FFFFFF"
          />
        </View>

        <View
          style={
            styles.transactionContent
          }
        >
          <Text
            style={
              styles.transactionTitle
            }
            numberOfLines={1}
          >
            {item.title}
          </Text>

          <Text
            style={
              styles.transactionDate
            }
          >
            {item.date}
          </Text>

          {item.message ? (
            <Text
              style={
                styles.transactionMessage
              }
              numberOfLines={1}
            >
              {item.message}
            </Text>
          ) : null}

          {item.accountNumber ? (
            <Text
              style={
                styles.transactionAccount
              }
            >
              STK:{" "}
              {item.accountNumber}
            </Text>
          ) : null}
        </View>

        <View
          style={
            styles.rightContent
          }
        >
          <Text
            style={[
              styles.amount,

              isSend
                ? styles.sendAmount
                : styles.receiveAmount,
            ]}
          >
            {isSend
              ? "-"
              : "+"}
            {formatMoney(
              item.amount
            )}{" "}
            ₫
          </Text>

          <View
            style={
              styles.status
            }
          >
            <Ionicons
              name="checkmark-circle"
              size={14}
              color="#16A34A"
            />

            <Text
              style={
                styles.statusText
              }
            >
              Thành công
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              handleDelete(
                item.id
              )
            }
            style={
              styles.deleteButton
            }
          >
            <Ionicons
              name="trash-outline"
              size={18}
              color="#DC2626"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderEmpty() {
    return (
      <View
        style={
          styles.emptyContainer
        }
      >
        <View
          style={
            styles.emptyIcon
          }
        >
          <Ionicons
            name="receipt-outline"
            size={42}
            color="#9CA3AF"
          />
        </View>

        <Text
          style={
            styles.emptyTitle
          }
        >
          Chưa có giao dịch
        </Text>

        <Text
          style={
            styles.emptyText
          }
        >
          Các giao dịch của bạn sẽ
          được hiển thị tại đây.
        </Text>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={styles.header}
      >
        <View>
          <Text
            style={
              styles.headerTitle
            }
          >
            Lịch sử giao dịch
          </Text>

          <Text
            style={
              styles.headerSubtitle
            }
          >
            {user?.accountNumber ||
              ""}
          </Text>
        </View>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={
          renderTransaction
        }
        ListEmptyComponent={
          renderEmpty
        }
        contentContainerStyle={
          transactions.length === 0
            ? styles.emptyList
            : styles.list
        }
        refreshControl={
          <RefreshControl
            refreshing={
              refreshing
            }
            onRefresh={
              handleRefresh
          }
          />
        }
        showsVerticalScrollIndicator={
          false
        }
      />
    </SafeAreaView>
  );
}
