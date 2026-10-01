import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";

import BankButton from "../../components/BankButton";
import styles     from "../styles/Register/RegisterSuccessScreen_Styles";
import {
  registerUser,
} from "../../screens/services/mockAuth";
import {
  User,
} from "../../screens/types/auth";

export default function RegisterSuccessScreen({
  route,
  navigation,
}: any) {

  const {
    personalInfo,
    idCard,
    password,
    pin,
  } = route.params;

  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {
    createAccount();
  }, []);

  async function createAccount() {
    try {
      // Kiểm tra dữ liệu cần thiết
      if (!password) {
        Alert.alert(
          "Lỗi",
          "Không tìm thấy mật khẩu. Vui lòng đăng ký lại."
        );
        return;
      }

      if (!pin) {
        Alert.alert(
          "Lỗi",
          "Không tìm thấy mã PIN. Vui lòng đăng ký lại."
        );
        return;
      }

      const newUser: User = {
        id:  "USR_" +  Date.now(),
        fullName: idCard?.fullName || personalInfo?.fullName ||     "",
        phone:  personalInfo?.phone || "",
        email:   personalInfo?.email || "",
        idNumber:  idCard?.idNumber ||         "",
        dateOfBirth:       idCard?.dateOfBirth ||   "",
        address:     idCard?.address || "",
        accountNumber:  generateAccountNumber(),
        cif:   generateCIF(),
        password:    password,
        pin:  pin,
        balance:   5000000,
        ekycVerified:   true,
        createdAt:      new Date().toISOString(),
      };

      console.log(
        "================================"
      );

      console.log(
        "TÀI KHOẢN ĐƯỢC TẠO:"
      );

      console.log(
        newUser
      );

      console.log(
        "PASSWORD:",
        newUser.password
      );

      await registerUser(
        newUser
      );
      setUser(newUser);

    } catch (error) {
      console.log(
        "CREATE ACCOUNT ERROR:",
        error
      );

      Alert.alert(
        "Lỗi",
        "Không thể tạo tài khoản"
      );
    }
  }

  function generateAccountNumber() {
    return (
      "1903" +
      Math.floor(
        10000000 +
        Math.random() * 90000000
      )
    );
  }

  function generateCIF() {
    return (
      "CIF" +
      Math.floor(
        100000 +
        Math.random() * 900000
      )
    );
  }

  if (!user) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>
          Đang tạo tài khoản...
        </Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.icon}>
        ✓
      </Text>

      <Text style={styles.title}>
        Mở tài khoản thành công
      </Text>

      <Text style={styles.subtitle}>
        Chào mừng bạn đến với BEEN BANK
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Chủ tài khoản
        </Text>

        <Text style={styles.value}>
          {user.fullName}
        </Text>


        <Text style={styles.label}>
          Số tài khoản
        </Text>

        <Text style={styles.account}>
          {user.accountNumber}
        </Text>

        <Text style={styles.label}>
          CIF
        </Text>

        <Text style={styles.value}>
          {user.cif}
        </Text>

        <Text style={styles.label}>
          Số dư ban đầu
        </Text>

        <Text style={styles.balance}>
          {user.balance.toLocaleString(
            "vi-VN"
          )} ₫
        </Text>
      </View>
      <BankButton
        title="Đăng nhập"
        onPress={() =>
          navigation.replace(
            "Login"
          )
        }
      />
    </SafeAreaView>
  );
}