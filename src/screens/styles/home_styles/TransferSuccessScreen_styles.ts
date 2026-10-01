import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },


  successHeader: {
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 22,
  },

  successIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#16A34A",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#16A34A",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 7,
  },

  successTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
  },

  successSubtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 21,
  },


  amountCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 22,
    alignItems: "center",
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  amountLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 8,
  },

  amount: {
    fontSize: 30,
    fontWeight: "800",
    color: "#16A34A",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
    paddingTop: 18,
    paddingBottom: 6,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },

  infoBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F7",
  },

  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  infoText: {
    flex: 1,
  },

  infoLabel: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },


  statusBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#DCFCE7",
  },

  statusContent: {
    flex: 1,
    marginLeft: 11,
  },

  statusTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#15803D",
  },

  statusText: {
    fontSize: 12,
    color: "#4B5563",
    marginTop: 3,
    lineHeight: 18,
  },

  doneButton: {
    height: 54,
    backgroundColor: "#0756A6",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  doneButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  backButton: {
    height: 52,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#0756A6",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
  },

  backText: {
    marginLeft: 8,
    color: "#0756A6",
    fontSize: 15,
    fontWeight: "700",
  },
});
export default styles;