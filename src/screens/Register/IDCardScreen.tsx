import {
  useState,
} from "react";

import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  CameraView,
  useCameraPermissions,
} from "expo-camera";

import {
  mockOCR,
} from "../services/mockEkyc";
import BankButton    from "../../components/BankButton";
import StepIndicator from "../../components/StepIndicator";
import styles        from "../styles/Register/IDCardScreen_styles";


export default function IDCardScreen({
  route,
  navigation,
}: any) {

  const { personalInfo,} = route.params;
  const [ permission,   requestPermission,] = useCameraPermissions();
  const [ side, setSide,] = useState<"front" | "back">("front");
  const [ front, setFront,] = useState<string | null>(null);
  const [  back,setBack,] = useState<string | null>(null);
  const [camera,   setCamera, ] = useState(true);
  const [processing, setProcessing,] = useState(false);
  const [ frontCaptured,  setFrontCaptured,] = useState(false);

  async function enableCamera() {
    if (!permission?.granted) {
      const result =   await requestPermission();
      if (!result.granted) {
        Alert.alert(
          "Quyền camera",
          "Bạn cần cấp quyền camera để chụp CCCD."
        );
        return false;
      }
    }
    return true;
  }

  async function takePhoto() {
    const allowed =  await enableCamera();
    if (!allowed) {
      return;
    }
    const mockImage = `mock_${side}_${Date.now()}.jpg`;
    if (side === "front") {
      setFront(mockImage);
      setCamera(false);
      setFrontCaptured(true);
      return;
    }

    if (side === "back") {
      setBack(mockImage);
      setCamera(false);
      setFrontCaptured(false);
    }
  }

  async function continueToBack() {
    const allowed =  await enableCamera();
    if (!allowed) {
      return;
    }
    setSide("back");
    setFrontCaptured(false);
    setCamera(true);
  }

  async function processOCR() {
    if (!front || !back) {
      Alert.alert(
        "Thiếu ảnh",
        "Vui lòng chụp đầy đủ mặt trước và mặt sau CCCD."
      );
      return;
    }
    setProcessing(true);

    try {
      const result =
        await mockOCR(
          front,
          back
        );

      setProcessing(false);
      navigation.navigate(
        "FaceScan",
        {
          personalInfo,
          idCard: result,
        }
      );

    } catch (error) {
      setProcessing(false);
      Alert.alert(
        "Lỗi",
        "Không thể nhận diện CCCD."
      );
    }
  }

  if (!permission) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>
          Đang kiểm tra quyền camera...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StepIndicator
        current={2}
        total={6}
      />
      <Text style={styles.title}>
        Xác thực CCCD
      </Text>
      <Text style={styles.subtitle}>
        {side === "front"
          ? "Chụp mặt trước CCCD"
          : "Chụp mặt sau CCCD"
        }

      </Text>
      {camera && (
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            facing="back"
          />

          <View style={styles.overlay}>
            <View style={styles.cardFrame} />
            <Text style={styles.cameraText}>
              Đặt CCCD vào khung
            </Text>
          </View>

          <TouchableOpacity
            style={styles.capture}
            onPress={takePhoto}
            activeOpacity={0.8}
          >

            <View
              style={styles.captureInner}
            />

          </TouchableOpacity>
        </View>
      )}

      {!camera && frontCaptured && (

        <View style={styles.confirmContainer}>
          <View style={styles.successCircle}>
            <Text style={styles.successIcon}>
              ✓
            </Text>
          </View>
          <Text style={styles.confirmTitle}>
            Đã chụp mặt trước CCCD
          </Text>
          <Text style={styles.confirmText}>
            Ảnh mặt trước đã được ghi nhận.
            {"\n"}
            Bây giờ hãy chụp mặt sau CCCD.
          </Text>
          <BankButton
            title="Tiếp tục"
            onPress={continueToBack}
          />
        </View>
      )}
      {!camera &&
        !frontCaptured &&
        front &&
        back && (

          <View style={styles.confirmContainer}>
              <View style={styles.successCircle}>

              <Text style={styles.successIcon}>
                ✓
              </Text>

            </View>
            <Text style={styles.confirmTitle}>
              Đã chụp CCCD
            </Text>
            <Text style={styles.checkText}>
              ✓ Mặt trước CCCD
            </Text>
            <Text style={styles.checkText}>
              ✓ Mặt sau CCCD
            </Text>
            <View style={styles.buttonContainer}>
              <BankButton
                title={
                  processing
                    ? "Đang nhận diện..."
                    : "Tiếp tục"
                }
                onPress={processOCR}
                disabled={processing}
              />
            </View>
          </View>
        )}
    </View>
  );
}