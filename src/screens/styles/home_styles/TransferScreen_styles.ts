import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F7FB",
    },

    header: {
      height: 64,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 18,
      backgroundColor: "#FFFFFF",
    },

    backButton: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: "#F3F4F6",
      justifyContent: "center",
      alignItems: "center",
    },

    headerTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: "#111827",
    },

    headerPlaceholder: {
      width: 42,
    },

    balanceCard: {
      marginHorizontal: 18,
      marginTop: 18,
      padding: 18,
      borderRadius: 18,
      backgroundColor: "#2563EB",
      flexDirection: "row",
      alignItems: "center",
    },

    balanceIcon: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor:
        "rgba(255,255,255,0.20)",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 14,
    },

    balanceLabel: {
      color: "#DBEAFE",
      fontSize: 13,
      marginBottom: 4,
    },

    balanceValue: {
      color: "#FFFFFF",
      fontSize: 23,
      fontWeight: "800",
    },

    form: {
      paddingHorizontal: 18,
      paddingTop: 24,
      paddingBottom: 40,
    },

    label: {
      fontSize: 14,
      fontWeight: "700",
      color: "#374151",
      marginBottom: 9,
    },

    inputContainer: {
      minHeight: 54,
      backgroundColor: "#FFFFFF",
      borderRadius: 14,
      paddingHorizontal: 15,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#E5E7EB",
    },

    input: {
      flex: 1,
      marginLeft: 11,
      fontSize: 16,
      color: "#111827",
      paddingVertical: 12,
    },

    currency: {
      fontSize: 15,
      color: "#6B7280",
      fontWeight: "600",
    },

    messageContainer: {
      alignItems: "flex-start",
      minHeight: 100,
      paddingTop: 14,
    },

    messageInput: {
      height: 75,
      textAlignVertical: "top",
    },

    notice: {
      marginTop: 24,
      backgroundColor: "#EFF6FF",
      borderRadius: 15,
      padding: 15,
      flexDirection: "row",
      alignItems: "flex-start",
    },

    noticeContent: {
      flex: 1,
      marginLeft: 10,
    },

    noticeTitle: {
      fontSize: 14,
      fontWeight: "700",
      color: "#1D4ED8",
      marginBottom: 4,
    },

    noticeText: {
      fontSize: 13,
      lineHeight: 19,
      color: "#4B5563",
    },

    transferButton: {
      marginTop: 25,
      height: 56,
      borderRadius: 16,
      backgroundColor: "#2563EB",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 9,
    },

    disabledButton: {
      opacity: 0.7,
    },

    buttonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "700",
    },
    modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.5)",
  justifyContent: "center",
  alignItems: "center",
},

pinModal: {
  width: "88%",
  backgroundColor: "#FFFFFF",
  borderRadius: 20,
  padding: 24,
  alignItems: "center",
},

lockCircle: {
  width: 64,
  height: 64,
  borderRadius: 32,
  backgroundColor: "#EAF2FF",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 16,
},

modalTitle: {
  fontSize: 22,
  fontWeight: "700",
  color: "#111827",
  marginBottom: 8,
},

modalSubtitle: {
  fontSize: 14,
  color: "#6B7280",
  textAlign: "center",
  lineHeight: 21,
  marginBottom: 20,
},

pinInput: {
  width: "100%",
  height: 52,
  borderWidth: 1,
  borderColor: "#D1D5DB",
  borderRadius: 12,
  textAlign: "center",
  fontSize: 24,
  letterSpacing: 12,
  color: "#111827",
},

pinDots: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  marginTop: 16,
  marginBottom: 20,
},

dot: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: "#D1D5DB",
},

dotActive: {
  backgroundColor: "#0756A6",
},

confirmButton: {
  width: "100%",
  height: 50,
  borderRadius: 12,
  backgroundColor: "#0756A6",
  justifyContent: "center",
  alignItems: "center",
},

confirmText: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "700",
},

logoutButton: {
  marginTop: 14,
  paddingVertical: 10,
},

logoutText: {
  color: "#6B7280",
  fontSize: 15,
  fontWeight: "600",
},
  });

  export default styles;