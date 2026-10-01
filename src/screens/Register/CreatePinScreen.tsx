import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";

import BankButton          from "../../components/BankButton";
import StepIndicator       from "../../components/StepIndicator";
import styles              from "../styles/Register/CreatePinScreen_style";

export default function CreatePinScreen({
  route,
  navigation,
}: any) {
  const {
    personalInfo,
    idCard,
    password,
  } = route.params;

  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] =
    useState("");

  function validate() {

    if (pin.length !== 6) {
      Alert.alert(
        "Thông báo",
        "PIN phải có đúng 6 chữ số"
      );
      return;
    }

    if (/^(\d)\1{5}$/.test(pin)) {
      Alert.alert(
        "Thông báo",
        "Không nên sử dụng PIN quá đơn giản"
      );
      return;
    }

    if (confirmPin.length !== 6) {
      Alert.alert(
        "Thông báo",
        "Vui lòng nhập lại đủ 6 số"
      );
      return;
    }

    if (pin !== confirmPin) {
      Alert.alert(
        "PIN",
        "Hai mã PIN không giống nhau"
      );
      return;
    }

    navigation.navigate(
      "RegisterSuccess",
      {
        personalInfo,
        idCard,
        password,
        pin,
      }
    );
  }

  return (
    <View style={styles.container}>
      <StepIndicator
        current={8}
        total={9}
      />

      <Text style={styles.title}>
        Tạo mã PIN
      </Text>

      <Text style={styles.subtitle}>
        Tạo PIN 6 số để bảo vệ tài khoản của bạn
      </Text>

      <Text style={styles.label}>
        Mã PIN
      </Text>

      <TextInput
        value={pin}
        onChangeText={(text) => {
          const numberOnly = text
            .replace(/\D/g, "")
            .slice(0, 6);

          setPin(numberOnly);
        }}
        keyboardType="number-pad"
        secureTextEntry
        maxLength={6}
        placeholder="••••••"
        placeholderTextColor="#999"
        style={styles.pinInput}
      />
      <Text style={styles.label}>
        Nhập lại mã PIN
      </Text>

      <TextInput
        value={confirmPin}
        onChangeText={(text) => {
          const numberOnly = text
            .replace(/\D/g, "")
            .slice(0, 6);

          setConfirmPin(numberOnly);
        }}
        keyboardType="number-pad"
        secureTextEntry
        maxLength={6}
        placeholder="••••••"
        placeholderTextColor="#999"
        style={styles.pinInput}
      />
      <Text style={styles.note}>
        • PIN phải gồm đúng 6 chữ số
      </Text>

      <Text style={styles.note}>
        • Không nên sử dụng PIN quá đơn giản
      </Text>

      <BankButton
        title="Tạo tài khoản"
        onPress={validate}
      />
    </View>
  );
}
