import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // ====================================================
  // CONTAINER
  // ====================================================

  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  // ====================================================
  // HEADER
  // ====================================================

  header: {
    minHeight: 82,
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F7",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0756A6",
    marginBottom: 4,
  },

  headerSubtitle: {
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "500",
  },

  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",
  },

  // ====================================================
  // LIST
  // ====================================================

  list: {
    padding: 16,
    paddingBottom: 30,
  },

  emptyList: {
    flexGrow: 1,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 30,
  },

  // ====================================================
  // TRANSACTION CARD
  // ====================================================

  transactionCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 17,

    padding: 14,
    marginBottom: 12,

    flexDirection: "row",
    alignItems: "flex-start",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.05,
    shadowRadius: 6,

    elevation: 2,
  },

  // ====================================================
  // ICON
  // ====================================================

  iconCircle: {
    width: 46,
    height: 46,

    borderRadius: 23,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
  },

  sendIcon: {
    backgroundColor: "#16A34A",
  },

  receiveIcon: {
    backgroundColor: "#16A34A",
  },

  // ====================================================
  // CONTENT
  // ====================================================

  transactionContent: {
    flex: 1,

    paddingRight: 8,

    minWidth: 0,
  },

  transactionTitle: {
    fontSize: 15,
    fontWeight: "700",

    color: "#111827",

    marginBottom: 4,
  },

  transactionDate: {
    fontSize: 12,

    color: "#6B7280",

    marginBottom: 4,
  },

  transactionMessage: {
    fontSize: 12,

    color: "#6B7280",

    marginBottom: 4,
  },

  transactionAccount: {
    fontSize: 12,

    color: "#6B7280",
  },

  // ====================================================
  // RIGHT CONTENT
  // ====================================================

  rightContent: {
    alignItems: "flex-end",

    justifyContent: "flex-start",

    minWidth: 105,

    paddingLeft: 4,
  },

  amount: {
    fontSize: 14,

    fontWeight: "800",

    textAlign: "right",

    marginBottom: 6,
  },

  sendAmount: {
    color: "#DC2626",
  },

  receiveAmount: {
    color: "#16A34A",
  },

  // ====================================================
  // STATUS
  // ====================================================

  status: {
    flexDirection: "row",

    alignItems: "center",

    marginBottom: 7,
  },

  statusText: {
    fontSize: 11,

    color: "#16A34A",

    marginLeft: 4,

    fontWeight: "600",
  },

  // ====================================================
  // DELETE
  // ====================================================

  deleteButton: {
    width: 32,
    height: 32,

    borderRadius: 16,

    backgroundColor: "#FEF2F2",

    justifyContent: "center",
    alignItems: "center",

    marginTop: 2,
  },

  emptyContainer: {
    alignItems: "center",

    justifyContent: "center",
  },

  emptyIcon: {
    width: 82,
    height: 82,

    borderRadius: 41,

    backgroundColor: "#E5E7EB",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 18,
  },

  emptyTitle: {
    fontSize: 18,

    fontWeight: "800",

    color: "#374151",

    marginBottom: 8,
  },

  emptyText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    color: "#9CA3AF",
  },
});

export default styles;