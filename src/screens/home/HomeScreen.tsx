import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useEffect,
  useState,
} from "react";

import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  useAuth,
} from "../../context/AuthContext";
import styles   from "../styles/home_styles/homesrenn_styles";
import {
  getTransactions,
} from "../../screens/services/storage";


export default function HomeScreen({
  navigation,
}: any) {
  const { user } = useAuth();
  const [ transactions, setTransactions, ] = useState<any[]>([]);
  useEffect(() => {
    loadTransactions();
  }, []);


  async function loadTransactions() {
    const data = await getTransactions();
    setTransactions(
      data.slice(0, 3)
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={
          styles.content
        }
      >
        <View
          style={styles.header}
        >
          <View>
            <Text
              style={styles.small}
            >
              Xin chào,
            </Text>

            <Text
              style={styles.name}
            >
              {user.fullName}
            </Text>

          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                "Notification"
              )
            }
          >

            <Ionicons
              name="notifications-outline"
              size={35}
              color="#0756A6"
            />
          </TouchableOpacity>
        </View>
        <View
          style={styles.balanceCard}
        >

          <Text
            style={styles.balanceLabel}
          >
            Số dư khả dụng
          </Text>

          <Text
            style={styles.balance}
          >
            {user.balance.toLocaleString(
              "vi-VN"
            )} ₫
          </Text>

          <Text
            style={styles.account}
          >
            STK {user.accountNumber}
          </Text>
        </View>

        <View
          style={styles.actions}
        >
          <Action
            icon="arrow-up"
            title="Chuyển tiền"
            onPress={() =>
              navigation.navigate(
                "Transfer"
              )
            }
          />

          <Action
            icon="arrow-down"
            title="Nhận tiền"
            onPress={() =>
              navigation.navigate(
                "Transactions"
              )
            }
          />


          <Action
            icon="receipt"
            title="Lịch sử"
            onPress={() =>
              navigation.navigate(
                "Transactions"
              )
            }
          />
        </View>
        <Text
          style={styles.sectionTitle}
        >
          Giao dịch gần đây
        </Text>
        {transactions.length === 0 ? (

          <View
            style={styles.empty}
          >
            <Text>
              Chưa có giao dịch
            </Text>
          </View>
        ) : (
          transactions.map(
            (item) => (
              <View
                key={item.id}
                style={
                  styles.transaction
                }
              >
                <View>
                  <Text
                    style={
                      styles.transactionTitle
                    }
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={styles.date}
                  >
                    {item.date}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.amount,
                    {
                      color:
                        item.type ===
                        "receive"
                          ? "#00A86B"
                          : "#FF3B30",
                    },
                  ]}
                >

                  {item.type ===
                  "receive"
                    ? "+"
                    : "-"}

                  {item.amount.toLocaleString(
                    "vi-VN"
                  )} ₫
                </Text>
              </View>

            )
          )
        )}
      </ScrollView>

    </>
  );
}

function Action({
  icon,
  title,
  onPress,
}: any) {

  return (
    <TouchableOpacity
      style={styles.action}
      onPress={onPress}
    >
      <View
        style={styles.actionIcon}
      >
        <Ionicons
          name={icon}
          size={22}
          color="#0756A6"
        />
      </View>
      <Text
        style={styles.actionText}
      >
        {title}
      </Text>
    </TouchableOpacity>

  );
}