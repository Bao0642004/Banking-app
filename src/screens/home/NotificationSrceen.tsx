
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";

import React, {
  useCallback,
  useState,
} from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";

import {
  getNotifications,
  clearNotifications,
  removeNotification,
  formatVND,
  PaymentNotification,
} from "../services/notificationService";
import styles   from "../styles/home_styles/NotificationSrceen_styles";

const Notification = () => {  const navigation = useNavigation();
  const [notifications, setNotifications] =
    useState<PaymentNotification[]>([]);

  useFocusEffect(
    useCallback(() => {
      const data = getNotifications();
      setNotifications(data);
    }, [])
  );
  const handleClearAll = () => {
    if (notifications.length === 0) {
      return;
    }

    Alert.alert(
      "Xóa thông báo",
      "Bạn có muốn xóa tất cả thông báo không?",
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Xóa",
          style: "destructive",
          onPress: () => {
            clearNotifications();
            setNotifications([]);
          },
        },
      ]
    );
  };

  const handleDelete = (id: string) => {
    Alert.alert(
      "Xóa thông báo",
      "Bạn có muốn xóa thông báo này không?",
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Xóa",
          style: "destructive",
          onPress: () => {
            removeNotification(id);

            setNotifications(
              getNotifications()
            );
          },
        },
      ]
    );
  };

  const renderItem = ({
    item,
  }: {
    item: PaymentNotification;
  }) => {
    return (
      <View style={styles.card}>

        <View style={styles.iconContainer}>
          <Ionicons
    name="arrow-up"
    size={24}
   style={styles.icon}
  />
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.title}>
              Chuyển tiền thành công
            </Text>

            <TouchableOpacity
              onPress={() =>
                handleDelete(item.id)
              }
              hitSlop={{
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              }}
            >
               <Ionicons
              name="close"
              size={24}
              color="#6B7280"
            />
            </TouchableOpacity>
          </View>

          <Text style={styles.amount}>
            -{formatVND(item.amount)}
          </Text>
          <Text style={styles.info}>
            STK nhận:{" "}
            <Text style={styles.bold}>
              {item.accountNumber}
            </Text>
          </Text>
          <Text style={styles.info}>
            Nội dung:{" "}
            <Text style={styles.bold}>
              {item.note ||
                "Không có nội dung"}
            </Text>
          </Text>
          <Text style={styles.datetime}>
            {item.date} • {item.time}
          </Text>

        </View>
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <View style={styles.empty}>

        <View
          style={
            styles.emptyIconContainer
          }
        >
          <Ionicons
            name="notifications-outline"
            size={54}
            color="black"
            style={styles.emptyIcon}
          />
        </View>

        <Text style={styles.emptyTitle}>
          Chưa có thông báo
        </Text>

        <Text style={styles.emptyText}>
          Khi bạn thực hiện chuyển tiền,
          thông báo giao dịch sẽ xuất hiện
          tại đây.
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() =>
            navigation.goBack()
          }
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#111827"
          />
        </TouchableOpacity>

        {/* TITLE */}
        <Text style={styles.headerTitle}>
          Thông báo
        </Text>

      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={renderItem}
        ListEmptyComponent={
          renderEmpty
        }
        contentContainerStyle={
          notifications.length === 0
            ? styles.emptyList
            : styles.list
        }

        showsVerticalScrollIndicator={
          false
        }
      />

    </SafeAreaView>
  );
};

export default Notification;
