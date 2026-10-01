import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
    paddingTop: 55,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F8FC",
  },

  loadingText: {
    fontSize: 14,
    color: "#777777",
  },

  title: {
    fontSize: 25,
    fontWeight: "900",
    color: "#0756A6",
    paddingHorizontal: 20,
  },

  subtitle: {
    paddingHorizontal: 20,
    marginTop: 8,
    marginBottom: 10,
    color: "#777777",
    fontSize: 14,
  },

  cameraContainer: {
    flex: 1,
    overflow: "hidden",
    marginTop: 10,
    backgroundColor: "#000000",
  },

  camera: {
    flex: 1,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  cardFrame: {
    width: "88%",
    height: 220,
    borderWidth: 3,
    borderColor: "#00E676",
    borderRadius: 18,
  },

  cameraText: {
    color: "#FFFFFF",
    fontWeight: "700",
    marginTop: 15,
    fontSize: 14,
  },

  capture: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  captureInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#0756A6",
  },

  confirmContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E7F8EF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  successIcon: {
    fontSize: 45,
    color: "#00A86B",
    fontWeight: "800",
  },

  confirmTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#222222",
    textAlign: "center",
    marginBottom: 12,
  },

  confirmText: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 25,
  },

  checkText: {
    fontSize: 15,
    color: "#00A86B",
    fontWeight: "700",
    marginBottom: 8,
  },

  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },

});

export default styles;