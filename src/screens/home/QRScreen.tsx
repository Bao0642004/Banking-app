import React, { useState } from "react";

import {
  View,
  Text,
  Pressable,
  Alert,
  SafeAreaView
} from "react-native";

import {
  CameraView,
  useCameraPermissions,
} from "expo-camera";

import styles              from "../styles/home_styles/QRScreen_styles";

export default function QRScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>
          Đang kiểm tra Camera...
        </Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.cameraIcon}>
          📷
        </Text>

        <Text style={styles.permissionTitle}>
          Cho phép sử dụng Camera
        </Text>

        <Text style={styles.permissionText}>
          Ứng dụng cần quyền Camera để
          quét mã QR.
        </Text>

        <Pressable
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>
            Cho phép Camera
          </Text>
        </Pressable>

      </View>
    );
  }


  const handleBarcodeScanned = ({
    data,
    type,
  }: {
    data: string;
    type: string;
  }) => {

    if (scanned) {
      return;
    }
    setScanned(true);

    console.log("QR TYPE:", type);
    console.log("QR DATA:", data);
    Alert.alert(
      "Quét QR thành công",
      `Nội dung:\n\n${data}`,
      [
        {
          text: "OK",
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={
          scanned
            ? undefined
            : handleBarcodeScanned
        }
      />
      <View
        style={styles.overlay}
        pointerEvents="box-none"
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Quét mã QR
          </Text>
          <Text style={styles.headerDescription}>
            Đưa mã QR vào trong khung
          </Text>
        </View>
        <View style={styles.scanArea}>
          <View
            style={[
              styles.corner,
              styles.topLeft,
            ]}
          />
          <View
            style={[
              styles.corner,
              styles.topRight,
            ]}
          />
          <View
            style={[
              styles.corner,
              styles.bottomLeft,
            ]}
          />
          <View
            style={[
              styles.corner,
              styles.bottomRight,
            ]}
          />
          {!scanned && (
            <View style={styles.scanLine} />
          )}
        </View>
        <View style={styles.bottomContainer}>

          <Text style={styles.bottomTitle}>
            {scanned
              ? "Đã nhận diện mã QR"
              : "Đang tìm mã QR..."}
          </Text>
          <Text style={styles.bottomText}>
            Giữ mã QR nằm trong khung
          </Text>
        </View>
      </View>
      {scanned && (
        <Pressable
          style={styles.scanAgainButton}
          onPress={() => {
            setScanned(false);
          }}
        >
          <Text style={styles.scanAgainText}>
            Quét lại
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}
