import Ionicons from "@expo/vector-icons/Ionicons";

import React    from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles   from "../styles/home_styles/TransferSuccessScreen_styles";

type TransferSuccessRouteParams = {
  transactionId: string;
  recipientName?: string;
  accountNumber: string;
  amount: number;
  message?: string;
  date: string;
};

type Props = {
  route: {
    params: TransferSuccessRouteParams;
  };
  navigation: any;
};

export default function TransferSuccessScreen({
  route,
  navigation,
}: Props) {
  const {
    transactionId,
    recipientName,
    accountNumber,
    amount,
    message,
    date,
  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
  
        <View style={styles.successHeader}>
          <View style={styles.successIcon}>
            <Ionicons
              name="checkmark"
              size={58}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.successTitle}>
            Chuyển tiền thành công
          </Text>

          <Text style={styles.successSubtitle}>
            Giao dịch của bạn đã được thực hiện thành công
          </Text>
        </View>

    
        <View style={styles.amountCard}>
          <Text style={styles.amountLabel}>
            Số tiền giao dịch
          </Text>

          <Text style={styles.amount}>
            {Number(amount).toLocaleString("vi-VN")} ₫
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Thông tin giao dịch
          </Text>

          <InfoRow
            icon="receipt-outline"
            label="Mã giao dịch"
            value={transactionId}
          />

          <InfoRow
            icon="person-outline"
            label="Người nhận"
            value={recipientName || "Người nhận"}
          />

          <InfoRow
            icon="card-outline"
            label="Số tài khoản"
            value={accountNumber}
          />

          <InfoRow
            icon="time-outline"
            label="Thời gian"
            value={date}
          />

          <InfoRow
            icon="chatbubble-outline"
            label="Nội dung"
            value={message?.trim() || "Không có nội dung"}
            last
          />
        </View>

        <View style={styles.statusBox}>
          <Ionicons
            name="shield-checkmark"
            size={22}
            color="#16A34A"
          />

          <View style={styles.statusContent}>
            <Text style={styles.statusTitle}>
              Giao dịch an toàn
            </Text>

            <Text style={styles.statusText}>
              Giao dịch đã được ghi nhận thành công.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.doneButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.doneButtonText}>
            Hoàn tất
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color="#0756A6"
          />

          <Text style={styles.backText}>
            Quay lại
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({
  icon,
  label,
  value,
  last,
}: {
  icon: any;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <View
      style={[
        styles.infoRow,
        !last && styles.infoBorder,
      ]}
    >
      <View style={styles.infoIcon}>
        <Ionicons
          name={icon}
          size={20}
          color="#0756A6"
        />
      </View>

      <View style={styles.infoText}>
        <Text style={styles.infoLabel}>
          {label}
        </Text>

        <Text
          style={styles.infoValue}
          numberOfLines={2}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}

