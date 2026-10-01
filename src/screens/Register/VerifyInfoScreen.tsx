import React         from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import BankButton    from "../../components/BankButton";
import StepIndicator from "../../components/StepIndicator";
import styles        from "../styles/Register/VerifyInfoScreen_Styles";

export default function VerifyInfoScreen({
  route,
  navigation,
}: any) {

  const {
    personalInfo,
    idCard,
  } = route.params;

  function next() {

    navigation.navigate(
      "CreatePassword",
      {
        personalInfo,
        idCard,
      }
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={
        styles.content
      }
    >
      <StepIndicator
        current={4}
        total={6}
      />

      <Text style={styles.title}>
        Xác nhận thông tin
      </Text>

      <Text style={styles.subtitle}>
        Vui lòng kiểm tra thông tin trước khi
        tiếp tục.
      </Text>

      <View style={styles.card}>

        <Text style={styles.section}>
          THÔNG TIN CÁ NHÂN
        </Text>

        <Info
          label="Họ tên"
          value={personalInfo.fullName}
        />

        <Info
          label="Số điện thoại"
          value={personalInfo.phone}
        />

        <Info
          label="Email"
          value={personalInfo.email}
        />

      </View>

      <View style={styles.card}>

        <Text style={styles.section}>
          THÔNG TIN CCCD
        </Text>

        <Info
          label="Họ tên"
          value={idCard.fullName}
        />

        <Info
          label="Số CCCD"
          value={idCard.idNumber}
        />

        <Info
          label="Ngày sinh"
          value={idCard.dateOfBirth}
        />

        <Info
          label="Địa chỉ"
          value={idCard.address}
        />

      </View>

      <View style={styles.verified}>

        <Text style={styles.verifiedText}>
          ✓ eKYC đã xác thực
        </Text>

      </View>

      <BankButton
        title="Xác nhận và tiếp tục"
        onPress={next}
      />

    </ScrollView>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {

  return (
    <View style={styles.row}>

      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>

    </View>
  );
}
