import Ionicons                 from "@expo/vector-icons/Ionicons";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  CameraView,
  useCameraPermissions,
} from "expo-camera";

import { mockFaceVerification } from "../services/mockEkyc";
import BankButton               from "../../components/BankButton";
import StepIndicator            from "../../components/StepIndicator";
import styles                   from "../styles/Register/FaceScanScreen_styles";

export default function FaceScanScreen({
  route,
  navigation,
}: any) {
  const { personalInfo, idCard } = route.params || {};
  const [permission, requestPermission] =    useCameraPermissions();

  const [started, setStarted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [failed, setFailed] = useState(false);

  const [statusText, setStatusText] =useState("Chuẩn bị quét...");

  const [progress, setProgress] = useState(0);
  const [scanCount, setScanCount] = useState(0);
  const cameraRef = useRef<CameraView>(null);
  const scanningRef = useRef(false);
  const mountedRef = useRef(true);

  const scanIntervalRef =  useRef<ReturnType<typeof setInterval> | null>(null);
  const scanAnimation =   useRef(new Animated.Value(0)).current;

  const pulseAnimation =  useRef(new Animated.Value(1)).current;
  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
      stopAutoScan();
    };
  }, []);

  useEffect(() => {
    if (!started || completed || failed) {
      return;
    }

    const scanLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnimation, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
        }),

        Animated.timing(scanAnimation, {
          toValue: 0,
          duration: 1800,
          useNativeDriver: true,
        }),
      ])
    );

    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.04,
          duration: 900,
          useNativeDriver: true,
        }),

        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    );

    scanLoop.start();
    pulseLoop.start();

    return () => {
      scanLoop.stop();
      pulseLoop.stop();

      scanAnimation.setValue(0);
      pulseAnimation.setValue(1);
    };
  }, [
    started,
    completed,
    failed,
    scanAnimation,
    pulseAnimation,
  ]);
  useEffect(() => {
    if (!started || completed || failed) {
      stopAutoScan();
      return;
    }
    startAutoScan();
    return () => {
      stopAutoScan();
    };
  }, [started, completed, failed]);
  async function startScan() {
    try {
      if (!permission?.granted) {
        const result = await requestPermission();

        if (!result.granted) {
          Alert.alert(
            "Quyền camera",
            "Vui lòng cho phép ứng dụng sử dụng camera để xác thực khuôn mặt."
          );

          return;
        }
      }

      setFailed(false);
      setCompleted(false);
      setProcessing(false);
      setProgress(0);
      setScanCount(0);

      setStatusText("Đang mở camera...");

      setStarted(true);
    } catch (error) {
      console.log(
        "Camera permission error:",
        error
      );

      Alert.alert(
        "Lỗi",
        "Không thể mở camera."
      );
    }
  }
  function startAutoScan() {
    if (scanIntervalRef.current) {
      return;
    }

    scanIntervalRef.current = setInterval(
      async () => {
        await performScan();
      },
      1500
    );
  }
  function stopAutoScan() {
    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);

      scanIntervalRef.current = null;
    }
  }

  async function performScan() {
    if (!mountedRef.current) {
      return;
    }

    if (scanningRef.current) {
      return;
    }

    if (processing || completed || failed) {
      return;
    }

    if (!cameraRef.current) {
      return;
    }

    scanningRef.current = true;

    try {
      const nextCount = scanCount + 1;
      setScanCount(nextCount);
      setStatusText(
        "Đang tìm khuôn mặt..."
      );

      setProgress(20);
      const photo =
        await cameraRef.current.takePictureAsync({
          quality: 0.5,
          skipProcessing: true,
        });

      if (!photo?.uri) {
        throw new Error(
          "Không lấy được hình ảnh camera"
        );
      }

      if (!mountedRef.current) {
        return;
      }
      setStatusText(
        "Đang kiểm tra khuôn mặt..."
      );

      setProgress(40);
      await wait(600);
      if (!mountedRef.current) {
        return;
      }
      setStatusText(
        "Đang kiểm tra chuyển động..."
      );

      setProgress(60);
      await wait(600);
      if (!mountedRef.current) {
        return;
      }
      setProcessing(true);
      setStatusText(
        "Đang đối chiếu khuôn mặt..."
      );
      setProgress(80);
      const result =
        await mockFaceVerification(
          photo.uri
        );

      if (!mountedRef.current) {
        return;
      }
      setProcessing(false);
      if (
        result.detected &&
        result.livenessPassed &&
        result.faceMatched
      ) {
        stopAutoScan();
        setProgress(100);
        setStatusText(
          "Xác thực khuôn mặt thành công"
        );
        setCompleted(true);
        return;
      }
      setStatusText(
        "Chưa đủ điều kiện, đang quét lại..."
      );
      setProgress(20);
    } catch (error) {
      console.log(
        "Face scan error:",
        error
      );

      if (mountedRef.current) {
        setProcessing(false);

        setStatusText(
          "Đang quét lại khuôn mặt..."
        );

        setProgress(20);
      }
    } finally {
      scanningRef.current = false;
    }
  }

  function wait(
    milliseconds: number
  ): Promise<void> {
    return new Promise<void>(
      (resolve) => {
        setTimeout(
          resolve,
          milliseconds
        );
      }
    );
  }

  function retryScan() {
    stopAutoScan();
    scanningRef.current = false;
    setStarted(false);
    setProcessing(false);
    setCompleted(false);
    setFailed(false);
    setProgress(0);
    setScanCount(0);
    setStatusText(
      "Chuẩn bị quét..."
    );
  }

  function next() {
    navigation.navigate(
      "VerifyInfo",
      {
        personalInfo,
        idCard,
      }
    );
  }

  if (!permission) {
    return (
      <View
        style={styles.loadingContainer}
      >
        <Text
          style={styles.loadingText}
        >
          Đang kiểm tra quyền camera...
        </Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View
        style={styles.permissionContainer}
      >
        <View
          style={styles.permissionIcon}
        >
          <Ionicons
            name="camera-outline"
            size={55}
            color="#0756A6"
          />
        </View>

        <Text
          style={styles.permissionTitle}
        >
          Cho phép sử dụng camera
        </Text>

        <Text
          style={styles.permissionText}
        >
          Ứng dụng cần sử dụng camera
          để xác thực khuôn mặt của bạn.
        </Text>

        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text
            style={
              styles.permissionButtonText
            }
          >
            Cho phép camera
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{ width: 40 }}
        />
      </View>
      <StepIndicator
        current={3}
        total={6}
      />
      {!started &&
        !completed &&
        !failed && (
          <View
            style={styles.introContainer}
          >

            <View
              style={
                styles.faceIconContainer
              }
            >
              <Ionicons
                name="scan-outline"
                size={85}
                color="#0756A6"
              />
            </View>

            <Text
              style={styles.title}
            >
              Xác thực khuôn mặt
            </Text>

            <Text
              style={styles.description}
            >
              Đưa khuôn mặt của bạn vào
              giữa khung hình. Hệ thống
              sẽ tự động phát hiện và
              xác thực.
            </Text>

            <View
              style={styles.instructionBox}
            >

              <Instruction
                icon="person-outline"
                text="Đặt khuôn mặt vào giữa khung"
              />

              <Instruction
                icon="sunny-outline"
                text="Đảm bảo đủ ánh sáng"
              />

              <Instruction
                icon="eye-outline"
                text="Nhìn thẳng vào camera"
              />

              <Instruction
                icon="remove-circle-outline"
                text="Không đeo kính hoặc khẩu trang"
              />

            </View>
            <BankButton
              title="Bắt đầu xác thực"
              onPress={startScan}
            />
          </View>
        )}
      {started &&
        !completed &&
        !failed && (
          <View
            style={styles.cameraContainer}
          >

            <CameraView
              ref={cameraRef}
              style={
                StyleSheet.absoluteFill
              }
              facing="front"
              mode="picture"
              mirror
            />

            <View
              pointerEvents="none"
              style={styles.darkOverlay}
            />

            <Animated.View
              pointerEvents="none"
              style={[
                styles.faceOval,
                {
                  transform: [
                    {
                      scale:
                        pulseAnimation,
                    },
                  ],
                },
              ]}
            >

              <View
                style={
                  styles.cornerTopLeft
                }
              />

              <View
                style={
                  styles.cornerTopRight
                }
              />

              <View
                style={
                  styles.cornerBottomLeft
                }
              />

              <View
                style={
                  styles.cornerBottomRight
                }
              />

              <Animated.View
                style={[
                  styles.scanLine,
                  {
                    transform: [
                      {
                        translateY:
                          scanAnimation.interpolate(
                            {
                              inputRange: [
                                0,
                                1,
                              ],
                              outputRange: [
                                -170,
                                170,
                              ],
                            }
                          ),
                      },
                    ],
                  },
                ]}
              />

            </Animated.View>
            <View
              style={styles.cameraTopText}
            >
              <Text
                style={
                  styles.cameraTitle
                }
              >
                Đang tự động quét
              </Text>

              <Text
                style={
                  styles.cameraSubtitle
                }
              >
                Không cần bấm nút chụp
              </Text>
            </View>
            <View
              style={
                styles.statusContainer
              }
            >

              <View
                style={styles.statusRow}
              >

                <View
                  style={[
                    styles.statusDot,
                    processing &&
                      styles.statusDotProcessing,
                  ]}
                />

                <Text
                  style={styles.statusText}
                >
                  {statusText}
                </Text>

              </View>

              <View
                style={
                  styles.progressBackground
                }
              >
                <View
                  style={[
                    styles.progressFill,
                    {
                      width:
                        `${progress}%`,
                    },
                  ]}
                />
              </View>

              <Text
                style={
                  styles.scanCountText
                }
              >
                Đang quét tự động · Lần
                {scanCount}
              </Text>

            </View>
          </View>
        )}
      {completed && (
        <View
          style={styles.resultContainer}
        >

          <View
            style={styles.successIcon}
          >
            <Ionicons
              name="checkmark"
              size={65}
              color="#FFFFFF"
            />
          </View>

          <Text
            style={styles.successTitle}
          >
            Xác thực thành công
          </Text>

          <Text
            style={
              styles.successDescription
            }
          >
            Hệ thống đã xác thực khuôn mặt
            của bạn thành công.
          </Text>

          <View
            style={styles.resultCard}
          >

            <ResultRow
              text="Phát hiện khuôn mặt"
            />

            <ResultRow
              text="Kiểm tra Liveness"
            />

            <ResultRow
              text="Đối chiếu khuôn mặt"
            />

          </View>

          <BankButton
            title="Tiếp tục"
            onPress={next}
          />

        </View>
      )}
      {failed && (
        <View
          style={styles.resultContainer}
        >

          <View
            style={styles.failedIcon}
          >
            <Ionicons
              name="close"
              size={65}
              color="#FFFFFF"
            />
          </View>

          <Text
            style={styles.failedTitle}
          >
            Xác thực thất bại
          </Text>

          <Text
            style={
              styles.failedDescription
            }
          >
            Không thể xác thực khuôn mặt.
            Vui lòng thử lại.
          </Text>

          <TouchableOpacity
            style={styles.retryButton}
            onPress={retryScan}
          >

            <Ionicons
              name="refresh"
              size={22}
              color="#FFFFFF"
            />

            <Text
              style={
                styles.retryButtonText
              }
            >
              Quét lại
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

function Instruction({
  icon,
  text,
}: {
  icon: any;
  text: string;
}) {
  return (
    <View
      style={styles.instructionRow}
    >
      <Ionicons
        name={icon}
        size={23}
        color="#0756A6"
      />

      <Text
        style={styles.instructionText}
      >
        {text}
      </Text>
    </View>
  );
}

function ResultRow({
  text,
}: {
  text: string;
}) {
  return (
    <View
      style={styles.resultRow}
    >

      <View
        style={styles.checkCircle}
      >
        <Ionicons
          name="checkmark"
          size={15}
          color="#FFFFFF"
        />
      </View>
      <Text
        style={styles.resultText}
      >
        {text}
      </Text>

    </View>
  );
}