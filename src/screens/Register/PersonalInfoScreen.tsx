import React, { useState } from "react";

import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import BankButton          from "../../components/BankButton";
import StepIndicator       from "../../components/StepIndicator";
import styles              from "../styles/Register/PersonalInfoScreen_styles";

export default function PersonalInfoScreen({
  navigation,
}: any) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  function validateFullName(value: string) {
    const name = value.trim();
    if (!name) {
      return "Vui lòng nhập họ và tên";
    }

    const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
    if (!nameRegex.test(name)) {
      return "Họ tên chỉ được chứa chữ cái";
    }

    const words = name.split(/\s+/);

    if (words.length < 2) {
      return "Vui lòng nhập đầy đủ họ và tên";
    }

    if (name.length < 5) {
      return "Họ tên quá ngắn";
    }

    return "";
  }


  function validatePhone(value: string) {
    if (!value) {
      return "Vui lòng nhập số điện thoại";
    }

    if (!/^\d+$/.test(value)) {
      return "Số điện thoại chỉ được chứa chữ số";
    }

    if (!/^0\d{9}$/.test(value)) {
      return "Số điện thoại phải gồm 10 số và bắt đầu bằng 0";
    }

    return "";
  }


  function validateEmail(value: string) {
    if (!value) {
      return "Vui lòng nhập email";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      return "Email không đúng định dạng";
    }

    return "";
  }

  function validateDOB(value: string) {
    if (!value) {
      return "Vui lòng nhập ngày sinh";
    }
    const dobRegex =
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!dobRegex.test(value)) {
      return "Ngày sinh phải có dạng DD/MM/YYYY";
    }

    const [dayString,monthString,  yearString,] = value.split("/");
    const day = Number(dayString);
    const month = Number(monthString);
    const year = Number(yearString);

    const date = new Date(
      year,
      month - 1,
      day
    );
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return "Ngày sinh không hợp lệ";
    }

    const today = new Date();

    if (date > today) {
      return "Ngày sinh không được lớn hơn ngày hiện tại";
    }

    let age = today.getFullYear() - year;
    const monthDiff =  today.getMonth() -  (month - 1);

    if (
      monthDiff < 0 ||
      (
        monthDiff === 0 &&
        today.getDate() < day
      )
    ) {
      age--;
    }

    if (age < 18) {
      return "Bạn phải đủ 18 tuổi để mở tài khoản";
    }

    if (age > 100) {
      return "Ngày sinh không hợp lệ";
    }

    return "";
  }
  function handleDOBChange(text: string) {
   let value = text.replace(/\D/g, "");
    value = value.slice(0, 8);
    if (value.length > 4) {
      value = value.slice(0, 2) + "/" +  value.slice(2, 4) +  "/" + value.slice(4);
    } else if (value.length > 2) {

      value =
        value.slice(0, 2) +
        "/" +
        value.slice(2);
    }

    setDob(value);
  }
  function handleNameChange(text: string) {
    const value =
      text.replace(
        /[^a-zA-ZÀ-ỹ\s]/g,
        ""
      );

    setFullName(value);
  }

  function handlePhoneChange(text: string) {

    const value =
      text
        .replace(/\D/g, "")
        .slice(0, 10);

    setPhone(value);
  }


  function next() {
    const nameError =
      validateFullName(fullName);

    if (nameError) {

      Alert.alert(
        "Họ và tên",
        nameError
      );

      return;
    }

    const phoneError =
      validatePhone(phone);

    if (phoneError) {

      Alert.alert(
        "Số điện thoại",
        phoneError
      );

      return;
    }

    const emailError = validateEmail(email);

    if (emailError) {
      Alert.alert(
        "Email",
        emailError
      );
      return;
    }

    const dobError =  validateDOB(dob);
    if (dobError) {
      Alert.alert(
        "Ngày sinh",
        dobError
      );

      return;
    }
    navigation.navigate(
      "IDCard",
      {
        personalInfo: {
          fullName:            fullName.trim(),
          phone,
          email:   email.trim().toLowerCase(),
          dateOfBirth:        dob,
        },
      }
    );
  }

  return (
    <ScrollView
      style={styles.container}

      contentContainerStyle={
        styles.content
      }

      keyboardShouldPersistTaps="handled"

      showsVerticalScrollIndicator={
        false
      }
    >
      <StepIndicator
        current={1}
        total={6}
      />
      <Text style={styles.title}>
        Thông tin cá nhân
      </Text>
      <Text style={styles.subtitle}>
        Nhập chính xác thông tin để bắt đầu
        mở tài khoản BEEN BANK
      </Text>

      <Text style={styles.label}>
        Họ và tên
      </Text>

      <TextInput
        value={fullName}

        onChangeText={
          handleNameChange
        }
        placeholder="Nguyễn Văn A"
        placeholderTextColor="#999999"
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.input}
      />

      <Text style={styles.label}>
        Số điện thoại
      </Text>

      <TextInput
        value={phone}
        onChangeText={
          handlePhoneChange
        }
        keyboardType="phone-pad"
        inputMode="numeric"
        placeholder="0912345678"
        placeholderTextColor="#999999"
        maxLength={10}
        style={styles.input}
      />

      <Text style={styles.label}>
        Email
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="example@gmail.com"
        placeholderTextColor="#999999"
        style={styles.input}
      />

      <Text style={styles.label}>
        Ngày sinh
      </Text>

      <TextInput
        value={dob}
        onChangeText={
          handleDOBChange
        }
        keyboardType="number-pad"
        inputMode="numeric"
        placeholder="DD/MM/YYYY"
        placeholderTextColor="#999999"
        maxLength={10}
        style={styles.input}
      />

      <View style={styles.note}>

        <Text style={styles.noteTitle}>
          Lưu ý
        </Text>
        <Text style={styles.noteText}>
          • Họ tên phải đúng với giấy tờ tùy thân
          {"\n"}
          • Số điện thoại gồm 10 chữ số
          {"\n"}
          • Email phải có định dạng hợp lệ
          {"\n"}
          • Người mở tài khoản phải đủ 18 tuổi
          {"\n"}
          • Ngày sinh nhập theo dạng DD/MM/YYYY
        </Text>
      </View>
      <BankButton
        title="Tiếp tục"
        onPress={next}
      />
    </ScrollView>
  );
}
