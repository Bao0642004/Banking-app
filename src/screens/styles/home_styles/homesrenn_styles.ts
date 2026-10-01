import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
  },

  content: {
    padding: 20,
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
  },

  small: {
    color: "#888",
  },

  name: {
    fontSize: 20,
    fontWeight: "900",
    color: "#0756A6",
  },

  balanceCard: {
    backgroundColor: "#0756A6",
    borderRadius: 20,
    padding: 25,
    marginTop: 25,
  },

  balanceLabel: {
    color: "#DCEBFA",
  },

  balance: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    marginVertical: 10,
  },

  account: {
    color: "#DCEBFA",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25,
  },

  action: {
    alignItems: "center",
    width: "30%",
  },

  actionIcon: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#E5F0FC",
    justifyContent: "center",
    alignItems: "center",
  },

  actionText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "900",
    marginBottom: 12,
  },

  transaction: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent:"space-between",
    marginBottom: 10,
  },

  transactionTitle: {
    fontWeight: "700",
  },

  date: {
    color: "#999",
    fontSize: 12,
    marginTop: 4,
  },

  amount: {
    fontWeight: "800",
  },

  empty: {
    padding: 30,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  pinModal: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  lockCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#E5F0FC",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  modalTitle: {
    fontSize: 23,
    fontWeight: "900",
    color: "#0756A6",
    marginBottom: 8,
  },

  modalSubtitle: {
    color: "#777777",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },

  pinInput: {
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    textAlign: "center",
    fontSize: 25,
    letterSpacing: 10,
    color: "#222222",
  },

  pinDots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D9DDE3",
    marginHorizontal: 5,
  },

  dotActive: {
    backgroundColor: "#0756A6",
  },

  confirmButton: {
    width: "100%",
    height: 52,
    borderRadius: 14,
    backgroundColor: "#0756A6",
    justifyContent: "center",
    alignItems: "center",
  },

  confirmText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  logoutButton: {
    marginTop: 15,
    paddingVertical: 8,
  },

  logoutText: {
    color: "#FF3B30",
    fontSize: 14,
    fontWeight: "700",
  },
});
export default styles;