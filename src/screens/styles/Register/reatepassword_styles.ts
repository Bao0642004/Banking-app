import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
    padding: 25,
    paddingTop: 55,
  },

  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#0756A6",
    marginTop: 15,
  },

  subtitle: {
    color: "#777",
    marginVertical: 10,
    lineHeight: 21,
  },

  label: {
    fontWeight: "700",
    marginTop: 25,
    marginBottom: 8,
    color: "#333",
  },

  input: {
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#222",
  },

  note: {
    fontSize: 13,
    color: "#777",
    marginTop: 8,
  },
});
export default styles;