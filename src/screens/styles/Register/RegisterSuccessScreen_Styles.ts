import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
    justifyContent: "center",
    padding: 25,
  },

  loading: {
    flex: 1,
    backgroundColor: "#F5F8FC",
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    fontSize: 16,
    color: "#666",
  },

  icon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#00A86B",
    color: "#FFFFFF",
    fontSize: 60,
    textAlign: "center",
    lineHeight: 85,
    alignSelf: "center",
    marginBottom: 20,
    fontWeight: "900",
  },

  title: {
    fontSize: 25,
    fontWeight: "900",
    color: "#0756A6",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginVertical: 10,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  label: {
    color: "#888",
    marginTop: 10,
    marginBottom: 3,
    fontSize: 13,
  },

  value: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
  },

  account: {
    fontSize: 22,
    fontWeight: "900",
    color: "#0756A6",
    marginTop: 5,
    letterSpacing: 1,
  },

  balance: {
    fontSize: 20,
    fontWeight: "900",
    color: "#00A86B",
    marginTop: 3,
  },
});
export default styles;