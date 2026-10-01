import { StyleSheet } from "react-native";

const common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  safeContainer: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    backgroundColor: "#0757B8",
    paddingTop: 55,
    paddingBottom: 22,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#DCEBFF",
    fontSize: 14,
    marginTop: 5,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: "#737B8C",
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#172033",
    marginBottom: 12,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  smallCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },

  inputContainer: {
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 8,
  },

  input: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDE2EA",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    color: "#222222",
  },

  inputFocused: {
    borderColor: "#0757B8",
  },

  inputError: {
    borderColor: "#FF3B30",
  },

  errorText: {
    color: "#FF3B30",
    fontSize: 12,
    marginTop: 5,
  },

  button: {
    height: 52,
    backgroundColor: "#0757B8",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    height: 52,
    backgroundColor: "#EAF2FF",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  secondaryButtonText: {
    color: "#0757B8",
    fontSize: 16,
    fontWeight: "700",
  },

  disabledButton: {
    opacity: 0.5,
  },


  cameraContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  camera: {
    width: "100%",
    height: 430,
  },

  cameraOverlay: {
    position: "absolute",
    width: "82%",
    height: 260,
    borderWidth: 3,
    borderColor: "#00D084",
    borderRadius: 20,
  },

  cameraText: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  successBox: {
    backgroundColor: "#E8F8F0",
    borderRadius: 14,
    padding: 15,
    marginBottom: 15,
  },

  successText: {
    color: "#008A5A",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  },

  warningBox: {
    backgroundColor: "#FFF5DD",
    borderRadius: 14,
    padding: 15,
    marginBottom: 15,
  },

  warningText: {
    color: "#A66A00",
    fontSize: 14,
    lineHeight: 20,
  },

  errorBox: {
    backgroundColor: "#FFEAEA",
    borderRadius: 14,
    padding: 15,
    marginBottom: 15,
  },

  errorBoxText: {
    color: "#C62828",
    fontSize: 14,
    lineHeight: 20,
  },

  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E0E4EA",
    justifyContent: "center",
    alignItems: "center",
  },

  stepCircleActive: {
    backgroundColor: "#0757B8",
  },

  stepText: {
    color: "#777777",
    fontSize: 13,
    fontWeight: "700",
  },

  stepTextActive: {
    color: "#FFFFFF",
  },

  stepLine: {
    width: 35,
    height: 2,
    backgroundColor: "#E0E4EA",
  },

  stepLineActive: {
    backgroundColor: "#0757B8",
  },

  pinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    marginVertical: 30,
  },

  pinDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#0757B8",
    backgroundColor: "#FFFFFF",
  },

  pinDotActive: {
    backgroundColor: "#0757B8",
  },

  accountCard: {
    backgroundColor: "#0757B8",
    borderRadius: 22,
    padding: 22,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },

  accountLabel: {
    color: "#DCEBFF",
    fontSize: 13,
    marginBottom: 5,
  },

  accountNumber: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  balanceLabel: {
    color: "#DCEBFF",
    fontSize: 13,
    marginTop: 20,
    marginBottom: 5,
  },

  balance: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
  },


  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    marginBottom: 10,
  },

  menuIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  menuContent: {
    flex: 1,
  },

  menuTitle: {
    color: "#222222",
    fontSize: 15,
    fontWeight: "700",
  },

  menuSubtitle: {
    color: "#888888",
    fontSize: 12,
    marginTop: 3,
  },

  transactionContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  transactionIcon: {
    width: 45,
    height: 45,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  transactionInfo: {
    flex: 1,
  },

  transactionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222222",
  },

  transactionDate: {
    fontSize: 12,
    color: "#888888",
    marginTop: 4,
  },

  transactionAmount: {
    fontSize: 14,
    fontWeight: "800",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 5,
  },

  emptyText: {
    fontSize: 14,
    color: "#888888",
    textAlign: "center",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7FB",
  },

  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: "#777777",
  },

  footer: {
    alignItems: "center",
    marginTop: 20,
  },

  footerText: {
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
    lineHeight: 18,
  },
});

export default common;