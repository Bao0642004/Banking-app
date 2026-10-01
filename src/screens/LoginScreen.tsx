import React, {
  useState,
} from "react";

import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import BankButton from "../components/BankButton";
import {
  useAuth,
} from "../context/AuthContext";

import styles     from "./styles/login_styles";


export default function LoginScreen({
  navigation,
}: any) {
  const [
    account,
    setAccount,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const {
    login,
  } = useAuth();

  async function handleLogin() {
    const cleanAccount =
      account.trim();

    const cleanPassword =
      password;

    // --------------------------------------------
    // KIỂM TRA SỐ TÀI KHOẢN
    // --------------------------------------------

    if (!cleanAccount) {
      Alert.alert(
        "Thông báo",
        "Vui lòng nhập số tài khoản."
      );

      return;
    }

    if (
      cleanAccount.length < 6
    ) {
      Alert.alert(
        "Thông báo",
        "Số tài khoản không hợp lệ."
      );

      return;
    }

    if (!cleanPassword.trim()) {
      Alert.alert(
        "Thông báo",
        "Vui lòng nhập mật khẩu."
      );

      return;
    }

    if (
      cleanPassword.length < 6
    ) {
      Alert.alert(
        "Thông báo",
        "Mật khẩu phải có ít nhất 6 ký tự."
      );

      return;
    }

    try {
      console.log(
        "========== LOGIN =========="
      );

      console.log(
        "Account:",
        cleanAccount
      );

      await login(
        cleanAccount,
        cleanPassword
      );

      console.log(
        "ĐĂNG NHẬP THÀNH CÔNG"
      );

      navigation.reset({
        index: 0,

        routes: [
          {
            name: "Main",
          },
        ],
      });
    } catch (error: any) {
      console.log(
        "LOGIN ERROR:",
        error
      );

      Alert.alert(
        "Đăng nhập thất bại",
        error?.message ||
          "Số tài khoản hoặc mật khẩu không đúng."
      );
    }
  }

  function handleRegister() {
    navigation.navigate(
      "PersonalInfo"
    );
  }
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={styles.content}
      >
        <Text
          style={styles.title}
        >
          Đăng nhập
        </Text>

        <Text
          style={styles.subtitle}
        >
          BEEN BANK
        </Text>
        <Text
          style={styles.label}
        >
          Số tài khoản
        </Text>

        <TextInput
          value={account}
          onChangeText={(text) => {
            const numberOnly =
              text
                .replace(
                  /\D/g,
                  ""
                )
                .slice(
                  0,
                  12
                );

            setAccount(
              numberOnly
            );
          }}
          keyboardType="number-pad"
          maxLength={12}
          placeholder="Nhập số tài khoản"
          placeholderTextColor="#999999"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text
          style={styles.label}
        >
          Mật khẩu
        </Text>

        <TextInput
          value={password}
          onChangeText={
            setPassword
          }
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nhập mật khẩu"
          placeholderTextColor="#999999"
          style={styles.input}
        />

        <BankButton
          title="Đăng nhập"
          onPress={
            handleLogin
          }
        />
        <View
          style={
            styles.registerContainer
          }
        >
          <Text
            style={
              styles.registerText
            }
          >
            Bạn chưa có tài khoản?
          </Text>

          <TouchableOpacity
            onPress={
              handleRegister
            }
            activeOpacity={0.7}
          >
            <Text
              style={
                styles.registerButton
              }
            >
              Tạo tài khoản
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}