import {
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import React, {
  useEffect,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import styles from "./styles/Welcom_styles";

type Props = NativeStackScreenProps<any>;

export default function WelcomeScreen({
  navigation,
}: Props) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>
            BB
          </Text>
        </View>
        <Text style={styles.title}>
          BEEN BANK
        </Text>
        <Text style={styles.subtitle}>
          Ngân hàng BEEN
        </Text>
        <Text style={styles.description}>
          Ngân hàng số thông minh
        </Text>

        <View style={styles.loadingContainer}>
          <View style={styles.loadingTrack}>
            <View style={styles.loadingProgress} />
          </View>
          <Text style={styles.loadingText}>
            Đang khởi động...
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}