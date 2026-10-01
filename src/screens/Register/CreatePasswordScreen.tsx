
import { useState }  from "react";

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import BankButton    from "../../components/BankButton";
import StepIndicator from "../../components/StepIndicator";
import styles        from "../styles/Register/reatepassword_styles";

export default function CreatePasswordScreen({
  route,
  navigation,
}: any) {
  const {
    personalInfo,
    idCard,
  } = route.params;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  function validate() {
    if (!password.trim()) {
      Alert.alert(
        "Thông Báo",
        "Vui lòng nhập mật khẩu"
      );
      return;
    }

    if (password.length < 6) {
      Alert.alert(
       "Thông Báo",
        "Mật khẩu phải có ít nhất 6 ký tự"
      );
      return;
    }

    if (!confirmPassword.trim()) {
      Alert.alert(
         "Thông Báo",
        "Vui lòng nhập lại mật khẩu"
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        "Thông Báo",
        "Hai mật khẩu không giống nhau"
      );
      return;
    }

    if (
      password === "123456" ||
      password === "12345678" ||
      password.toLowerCase() === "password"
    ) {
      Alert.alert(
      "Thông Báo",
        "Mật khẩu quá đơn giản. Vui lòng chọn mật khẩu khác."
      );
      return;
    }

    navigation.navigate("CreatePin", {
      personalInfo,
      idCard,
      password,
    });
  }

  return (
    <View style={styles.container}>
      <StepIndicator
        current={7}
        total={9}
      />

      <Text style={styles.title}>
        Tạo mật khẩu
      </Text>

      <Text style={styles.subtitle}>
        Tạo mật khẩu để bảo vệ tài khoản của bạn
      </Text>

      <Text style={styles.label}>
        Mật khẩu
      </Text>

      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Nhập mật khẩu"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <Text style={styles.label}>
        Xác nhận mật khẩu
      </Text>

      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Nhập lại mật khẩu"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <Text style={styles.note}>
        • Mật khẩu tối thiểu 6 ký tự
      </Text>

      <Text style={styles.note}>
        • Không nên sử dụng mật khẩu quá đơn giản
      </Text>

      <BankButton
        title="Tiếp tục"
        onPress={validate}
      />
    </View>
  );
}
