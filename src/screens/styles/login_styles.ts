import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
  },

  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#0756A6",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: "#888888",
    fontWeight: "600",
    marginBottom: 40,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    fontSize: 16,
    color: "#222222",
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  registerText: {
    color: "#777777",
    fontSize: 14,
    marginRight: 5,
  },

  registerButton: {
    color: "#0756A6",
    fontSize: 14,
    fontWeight: "800",
  },
});
export default styles;