import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
  
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    color: "#0756A6",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 18,
  },
  profileCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: "#E2EFFC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },
  profileInfo: {
    flex: 1,
  },

  name: {
    fontSize: 21,
    fontWeight: "900",
    color: "#0756A6",
  },

  email: {
    fontSize: 14,
    color: "#777",

    marginTop: 5,
  },

  ekycRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },

  ekycText: {
    marginLeft: 5,
    color: "#18A558",
    fontSize: 13,
    fontWeight: "700",
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#222",
    marginBottom: 15,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  infoIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EAF3FC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  infoContent: {
    flex: 1,
  },

  label: {
    fontSize: 13,
    color: "#999",
  },

  value: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginTop: 3,
  },

  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: "#FFF0F0",
  },

  logoutText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 8,
  },

});
export default styles;