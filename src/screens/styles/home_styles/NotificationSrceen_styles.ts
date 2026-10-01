import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f6f8",
    },

    header: {
      height: 70,
      paddingHorizontal: 20,
      backgroundColor: "#ffffff",
      flexDirection: "row",
      alignItems: "center",
      justifyContent:        "flex-start",
      borderBottomWidth: 1,
      borderBottomColor:   "#eeeeee",
      gap:10,
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
      fontSize: 24,
      fontWeight: "700",
      color: "#222222",
    },

    clear: {
      fontSize: 14,
      fontWeight: "600",
      color: "#e53935",
    },

    list: {
      padding: 15,
    },

    card: {
      backgroundColor: "#ffffff",
      borderRadius: 15,
      padding: 15,
      marginBottom: 12,
      flexDirection: "row",

      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: 2,
      },

      shadowOpacity: 0.08,

      shadowRadius: 5,

      elevation: 2,
    },

    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor:
        "#e8f5e9",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },

    icon: {
      fontSize: 28,
      color: "#2e7d32",
      fontWeight: "bold",
    },

    content: {
      flex: 1,
    },

    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent:
        "space-between",
    },

    title: {
      flex: 1,
      fontSize: 16,
      fontWeight: "700",
      color: "#222222",
    },

    delete: {
      fontSize: 28,
      color: "#999999",
      lineHeight: 28,
      paddingLeft: 10,
    },

    amount: {
      fontSize: 18,
      fontWeight: "700",
      color: "#e53935",
      marginTop: 6,
      marginBottom: 7,
    },

    info: {
      fontSize: 14,
      color: "#555555",
      marginBottom: 4,
      lineHeight: 20,
    },

    bold: {
      fontWeight: "600",
      color: "#333333",
    },

    datetime: {
      fontSize: 12,
      color: "#999999",
      marginTop: 5,
    },

    emptyList: {
      flexGrow: 1,
    },

    empty: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 40,
    },

    emptyIconContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: "#eeeeee",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },

    emptyIcon: {
      fontSize: 40,
    },

    emptyTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: "#333333",
      marginBottom: 8,
    },

    emptyText: {
      fontSize: 14,
      color: "#888888",
      textAlign: "center",
      lineHeight: 22,
    },
  });

export default styles;