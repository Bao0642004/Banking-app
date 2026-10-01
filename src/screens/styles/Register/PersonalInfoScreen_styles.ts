import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F8FC",
    },

    content: {
      padding: 25,
      paddingTop: 50,
      paddingBottom: 40,
    },

    title: {
      fontSize: 26,
      fontWeight: "900",
      color: "#0756A6",
    },

    subtitle: {
      color: "#777777",
      fontSize: 14,
      lineHeight: 21,
      marginVertical: 10,
      marginBottom: 20,
    },

    label: {
      fontSize: 14,
      fontWeight: "700",
      color: "#333333",
      marginTop: 18,
      marginBottom: 7,
    },

    input: {
      backgroundColor: "#FFFFFF",
      height: 52,
      borderRadius: 12,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: "#DDDDDD",
      fontSize: 16,
      color: "#222222",
    },

    note: {
      backgroundColor: "#EAF3FF",
      borderRadius: 12,
      padding: 14,
      marginTop: 25,
      marginBottom: 10,
    },

    noteTitle: {
      color: "#0756A6",
      fontSize: 14,
      fontWeight: "800",
      marginBottom: 6,
    },

    noteText: {
      color: "#667788",
      fontSize: 12,
      lineHeight: 19,
    },
  });
  export default styles;