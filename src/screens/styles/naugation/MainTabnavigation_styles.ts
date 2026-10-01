import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    height: 72,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E8EDF3",
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  tabBarLabel: {
    fontSize: 11,
    fontWeight: "600",
    marginTop: 2,
  },

  qrButtonWrapper: {
    width: 85,
    height: 85,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -28,
  },

  qrButton: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: "#0756A6",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#FFFFFF",
    shadowColor: "#0756A6",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 9,
    elevation: 12,
  },

  qrText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#0756A6",
    marginTop: 4,
  },

  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#F5F8FC",
  },

  placeholderIcon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#EAF3FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  qrPreview: {
    width: 130,
    height: 130,
    borderRadius: 20,
    backgroundColor: "#EAF3FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  placeholderTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#0756A6",
    marginTop: 15,
    textAlign: "center",
  },

  placeholderText: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    lineHeight: 21,
    marginTop: 10,
    maxWidth: 320,
  },

  scanButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0756A6",
    paddingHorizontal: 25,
    height: 48,
    borderRadius: 24,
    marginTop: 25,
    gap: 8,
    shadowColor: "#0756A6",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },

  scanButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
});
export default styles;