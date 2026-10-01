import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#0756A6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
    shadowColor: "#0756A6",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: 1,
  },

  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "900",
    color: "#0756A6",
    letterSpacing: 1,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 17,
    color: "#555555",
    marginTop: 6,
    fontWeight: "600",
  },

  description: {
    textAlign: "center",
    color: "#777777",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 35,
  },

  loadingContainer: {
    width: "75%",
    alignItems: "center",
  },


  loadingTrack: {
    width: "100%",
    height: 5,
    backgroundColor: "#DCE5F0",
    borderRadius: 10,
    overflow: "hidden",
  },


  loadingProgress: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0756A6",
    borderRadius: 10,
  },

  loadingText: {
    marginTop: 10,
    fontSize: 12,
    color: "#888888",
  },

});
export default styles;