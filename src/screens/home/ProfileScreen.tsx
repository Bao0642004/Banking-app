import Ionicons    from "@expo/vector-icons/Ionicons";

import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView ,
  ScrollView
} from "react-native";

import { useAuth } from "../../context/AuthContext";
import styles      from "../styles/home_styles/profilesrceen_styles";

export default function ProfileScreen({ navigation }: any) {
  const { user, logout } = useAuth();
  if (!user) return null;
  function handleLogout() {
    Alert.alert(
      "Đăng xuất",
      "Bạn có chắc chắn muốn đăng xuất?",
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Đăng xuất",
          style: "destructive",
          onPress: async () => {
            await logout();

            navigation.reset({
              index: 0,
              routes: [
                {
                  name: "Welcome",
                },
              ],
            });
          },
        },
      ]
    );
  }

  return (    
    <ScrollView style={styles.container}>    
    <SafeAreaView>
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Ionicons
            name="person"
            size={48}
            color="#0756A6"
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            {user.fullName}
          </Text>

          <Text style={styles.email}>
            {user.email}
          </Text>

          <View style={styles.ekycRow}>
            <Ionicons
              name="checkmark-circle"
              size={18}
              color="#18A558"
            />

            <Text style={styles.ekycText}>
              Đã xác thực eKYC
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Thông tin tài khoản
        </Text>

        <Info
          icon="card-outline"
          label="Số tài khoản"
          value={user.accountNumber}
        />

        <Info
          icon="finger-print-outline"
          label="CIF"
          value={user.cif}
        />

        <Info
          icon="call-outline"
          label="Số điện thoại"
          value={user.phone}
        />

        <Info
          icon="id-card-outline"
          label="CCCD"
          value={user.idNumber}
        />

      </View>
      <TouchableOpacity
        style={styles.logout}
        onPress={handleLogout}
        activeOpacity={0.7}
      >
        <Ionicons
          name="log-out-outline"
          size={22}
          color="#FF3B30"
        />

        <Text style={styles.logoutText}>
          Đăng xuất
        </Text>
      </TouchableOpacity>
        </SafeAreaView>
    </ScrollView>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.info}>
      <View style={styles.infoIcon}>
        <Ionicons
          name={icon}
          size={21}
          color="#0756A6"
        />
      </View>
      <View style={styles.infoContent}>
        <Text style={styles.label}>
          {label}
        </Text>
        <Text style={styles.value}>
          {value || "Chưa cập nhật"}
        </Text>
      </View>
    </View>
  );
}