import {
  Dimensions,
  StyleSheet,
} from "react-native";

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get("window");

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  loadingText: {
    fontSize: 16,
    color: "#555555",
  },

  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  permissionContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  permissionIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#EAF3FC",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  permissionTitle: {
    fontSize: 23,
    fontWeight: "700",
    color: "#111111",
    textAlign: "center",
  },

  permissionText: {
    fontSize: 15,
    color: "#666666",
    textAlign: "center",
    lineHeight: 23,
    marginTop: 12,
    marginBottom: 30,
  },

  permissionButton: {
    width: "100%",
    height: 52,
    backgroundColor: "#0756A6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  permissionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  introContainer: {
    flex: 1,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  faceIconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#EAF3FC",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#111111",
    textAlign: "center",
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: "#666666",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 25,
  },

  instructionBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 25,
  },

  instructionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },

  instructionText: {
    marginLeft: 12,
    fontSize: 14,
    color: "#333333",
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "#000000",
    overflow: "hidden",
  },

  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },

  faceOval: {
    position: "absolute",
    width: SCREEN_WIDTH * 0.68,
    height: SCREEN_HEIGHT * 0.48,
    borderWidth: 3,
    borderColor: "#00E676",
    borderRadius: SCREEN_WIDTH,
    left: SCREEN_WIDTH * 0.16,
    top: SCREEN_HEIGHT * 0.18,
    overflow: "hidden",
  },
  scanLine: {
    position: "absolute",
    width: "100%",
    height: 3,
    backgroundColor: "#00E676",
    top: "50%",
  },
  cornerTopLeft: {
    position: "absolute",
    left: -2,
    top: -2,
    width: 30,
    height: 30,
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderColor: "#00E676",
  },

  cornerTopRight: {
    position: "absolute",
    right: -2,
    top: -2,
    width: 30,
    height: 30,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderColor: "#00E676",
  },

  cornerBottomLeft: {
    position: "absolute",
    left: -2,
    bottom: -2,
    width: 30,
    height: 30,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderColor: "#00E676",
  },

  cornerBottomRight: {
    position: "absolute",

    right: -2,
    bottom: -2,

    width: 30,
    height: 30,

    borderRightWidth: 5,
    borderBottomWidth: 5,

    borderColor: "#00E676",
  },

  // ==========================================================
  // CAMERA TOP TEXT
  // ==========================================================

  cameraTopText: {
    position: "absolute",

    top: 30,

    left: 0,
    right: 0,

    alignItems: "center",
  },

  cameraTitle: {
    color: "#FFFFFF",

    fontSize: 21,

    fontWeight: "800",
  },

  cameraSubtitle: {
    color: "#FFFFFF",

    fontSize: 14,

    marginTop: 6,

    opacity: 0.9,
  },

  // ==========================================================
  // STATUS
  // ==========================================================

  statusContainer: {
    position: "absolute",

    left: 25,
    right: 25,

    bottom: 35,

    backgroundColor:
      "rgba(0,0,0,0.7)",

    borderRadius: 15,

    padding: 18,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusDot: {
    width: 12,
    height: 12,

    borderRadius: 6,

    backgroundColor: "#00E676",

    marginRight: 10,
  },

  statusDotProcessing: {
    backgroundColor: "#FFD600",
  },

  statusText: {
    flex: 1,

    color: "#FFFFFF",

    fontSize: 15,

    fontWeight: "600",
  },

  // ==========================================================
  // PROGRESS
  // ==========================================================

  progressBackground: {
    height: 6,

    backgroundColor:
      "rgba(255,255,255,0.25)",

    borderRadius: 3,

    marginTop: 14,

    overflow: "hidden",
  },

  progressFill: {
    height: "100%",

    backgroundColor: "#00E676",

    borderRadius: 3,
  },

  scanCountText: {
    color: "#CCCCCC",

    fontSize: 12,

    marginTop: 8,

    textAlign: "center",
  },

  // ==========================================================
  // RESULT
  // ==========================================================

  resultContainer: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    paddingHorizontal: 25,
  },

  // ==========================================================
  // SUCCESS
  // ==========================================================

  successIcon: {
    width: 110,
    height: 110,

    borderRadius: 55,

    backgroundColor: "#00A86B",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 25,
  },

  successTitle: {
    fontSize: 25,

    fontWeight: "800",

    color: "#00A86B",

    textAlign: "center",
  },

  successDescription: {
    fontSize: 15,

    color: "#666666",

    textAlign: "center",

    marginTop: 10,

    marginBottom: 25,
  },

  // ==========================================================
  // RESULT CARD
  // ==========================================================

  resultCard: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    borderRadius: 15,

    padding: 20,

    marginBottom: 25,
  },

  resultRow: {
    flexDirection: "row",

    alignItems: "center",

    marginVertical: 8,
  },

  checkCircle: {
    width: 25,
    height: 25,

    borderRadius: 13,

    backgroundColor: "#00A86B",

    justifyContent: "center",

    alignItems: "center",

    marginRight: 12,
  },

  resultText: {
    fontSize: 15,

    color: "#333333",

    flex: 1,
  },

  // ==========================================================
  // FAILED
  // ==========================================================

  failedIcon: {
    width: 110,
    height: 110,

    borderRadius: 55,

    backgroundColor: "#E53935",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 25,
  },

  failedTitle: {
    fontSize: 25,

    fontWeight: "800",

    color: "#E53935",

    textAlign: "center",
  },

  failedDescription: {
    fontSize: 15,

    color: "#666666",

    textAlign: "center",

    lineHeight: 22,

    marginTop: 10,

    marginBottom: 25,
  },

  // ==========================================================
  // RETRY
  // ==========================================================

  retryButton: {
    width: "100%",

    height: 52,

    borderRadius: 12,

    backgroundColor: "#0756A6",

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    gap: 8,
  },

  retryButtonText: {
    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "700",
  },
});

export default styles;
