import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  camera: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },

  loadingText: {
    color: "#fff",
    fontSize: 17,
  },

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },

  cameraIcon: {
    fontSize: 60,
    marginBottom: 20,
  },

  permissionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
    marginBottom: 12,
  },

  permissionText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },

  permissionButton: {
    backgroundColor: "#000",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
  },

  permissionButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 70,
    paddingBottom: 100,
  },

  header: {
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },

  headerDescription: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },
  scanArea: {
    width: 280,
    height: 280,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },

  corner: {
    position: "absolute",
    width: 45,
    height: 45,
    borderColor: "#00ff88",
  },

  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },

  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
  },

  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },

  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
  },

  scanLine: {
    position: "absolute",
    left: 10,
    right: 10,
    top: "50%",
    height: 2,
    backgroundColor: "#00ff88",
  },

  bottomContainer: {
    alignItems: "center",
  },

  bottomTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  bottomText: {
    color: "#ddd",
    fontSize: 14,
  },
  scanAgainButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "#00ff88",
    paddingHorizontal: 35,
    paddingVertical: 13,
    borderRadius: 25,
  },

  scanAgainText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
});
export default styles;