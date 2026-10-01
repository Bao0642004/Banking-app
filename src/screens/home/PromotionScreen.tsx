import Ionicons from "@expo/vector-icons/Ionicons";

import React    from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import styles   from "../styles/home_styles/PromotionScreen_styles";

interface Promotion {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  expiry: string;
  badge: string;
}

const promotions: Promotion[] = [
  {
    id: "1",
    title: "Ưu đãi khách hàng mới",
    description:
      "Mở tài khoản BEEN BANK và nhận ngay ưu đãi dành riêng cho khách hàng mới.",
    icon: "gift-outline",
    color: "#0756A6",
    expiry: "Hạn đến 30/10/2026",
    badge: "MỚI",
  },
  {
    id: "2",
    title: "Hoàn tiền khi quét QR",
    description:
      "Thanh toán bằng QR và nhận ưu đãi hoàn tiền lên đến 50.000đ.",
    icon: "qr-code-outline",
    color: "#16A085",
    expiry: "Hạn đến 15/10/2026",
    badge: "HOT",
  },
  {
    id: "3",
    title: "Giới thiệu bạn bè",
    description:
      "Giới thiệu bạn bè mở tài khoản BEEN BANK để nhận quà từ chương trình.",
    icon: "people-outline",
    color: "#8E44AD",
    expiry: "Hạn đến 31/12/2026",
    badge: "ƯU ĐÃI",
  },
  {
    id: "4",
    title: "Ưu đãi mua sắm",
    description:
      "Nhận nhiều ưu đãi hấp dẫn khi thanh toán tại các đối tác của BEEN BANK.",
    icon: "cart-outline",
    color: "#E67E22",
    expiry: "Hạn đến 30/11/2026",
    badge: "SALE",
  },
];

export default function PromotionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Ưu đãi</Text>
          <Text style={styles.headerSubtitle}>
            Khám phá ưu đãi dành cho bạn
          </Text>
        </View>

        <View style={styles.notificationButton}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#0756A6"
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerSmall}>BEEN BANK</Text>
            <Text style={styles.bannerTitle}>
              Ưu đãi đặc biệt
            </Text>
            <Text style={styles.bannerDescription}>
              Khám phá những chương trình hấp dẫn dành riêng cho bạn.
            </Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>
                Khám phá ngay
              </Text>
              <Ionicons
                name="arrow-forward"
                size={17}
                color="#0756A6"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.bannerIcon}>
            <Ionicons
              name="gift"
              size={70}
              color="#FFFFFF"
            />
          </View>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Ưu đãi nổi bật
          </Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>
              Xem tất cả
            </Text>
          </TouchableOpacity>
        </View>

        {promotions.map((promotion) => (
          <TouchableOpacity
            key={promotion.id}
            style={styles.card}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: `${promotion.color}15`,
                },
              ]}
            >
              <Ionicons
                name={promotion.icon}
                size={30}
                color={promotion.color}
              />
            </View>

            <View style={styles.cardContent}>
              <View style={styles.titleRow}>
                <Text
                  style={styles.promotionTitle}
                  numberOfLines={1}
                >
                  {promotion.title}
                </Text>
                <View
                  style={[
                    styles.badge,
                    {
                      backgroundColor: promotion.color,
                    },
                  ]}
                >
                  <Text style={styles.badgeText}>
                    {promotion.badge}
                  </Text>
                </View>
              </View>
              <Text
                style={styles.description}
                numberOfLines={2}
              >
                {promotion.description}
              </Text>

              <View style={styles.bottomRow}>
                <View style={styles.expiry}>
                  <Ionicons
                    name="time-outline"
                    size={15}
                    color="#777"
                  />
                  <Text style={styles.expiryText}>
                    {promotion.expiry}
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#0756A6"
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#0756A6"
          />

          <Text style={styles.infoText}>
            Các chương trình ưu đãi có thể thay đổi tùy từng
            thời điểm. Vui lòng kiểm tra điều kiện áp dụng
            trước khi tham gia.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
