import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",

  },

  header: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: "#0756A6",
  },

  headerSubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#777",
  },

  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#EEF5FC",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  banner: {
    minHeight: 180,
    borderRadius: 22,
    backgroundColor: "#0756A6",
    padding: 22,
    flexDirection: "row",
    overflow: "hidden",
    marginBottom: 25,
  },

  bannerContent: {
    flex: 1,
    paddingRight: 5,
  },

  bannerSmall: {
    color: "#BFDFFF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
    marginTop: 5,
  },

  bannerDescription: {
    color: "#E8F4FF",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8,
  },

  bannerButton: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 13,
  },

  bannerButtonText: {
    color: "#0756A6",
    fontSize: 12,
    fontWeight: "700",
  },

  bannerIcon: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#222",
  },

  seeAll: {
    fontSize: 13,
    color: "#0756A6",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 15,
    marginBottom: 13,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2,
  },

  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  cardContent: {
    flex: 1,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  promotionTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
    marginRight: 8,
  },

  badge: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "800",
  },

  description: {
    fontSize: 12,
    lineHeight: 17,
    color: "#777",
    marginTop: 6,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 9,
  },

  expiry: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  expiryText: {
    fontSize: 11,
    color: "#777",
  },

  infoBox: {
    marginTop: 8,
    backgroundColor: "#EAF3FC",
    borderRadius: 14,
    padding: 14,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 9,
  },

  infoText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 17,
    color: "#526273",
  },
});
export default styles;