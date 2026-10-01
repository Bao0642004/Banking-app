import * as Notifications from "expo-notifications";

import { Platform }       from "react-native";

export type PaymentNotification = {
  id: string;
  accountNumber: string;
  amount: number;
  note: string;
  date: string;
};

let notificationList: PaymentNotification[] = [];

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export async function setupNotifications() {
  // Android
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("payment", {
      name: "Thông báo giao dịch",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      sound: "default",
      lockscreenVisibility:
        Notifications.AndroidNotificationVisibility.PUBLIC,
    });
  }

  const { status: existingStatus } =
    await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } =
      await Notifications.requestPermissionsAsync();

    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    console.log("Chưa được cấp quyền notification");
    return false;
  }
  console.log("Notification permission OK");
  return true;
}

export function formatVND(amount: number) {
  return amount.toLocaleString("vi-VN") + " ₫";
}

export async function sendPaymentNotification({
  accountNumber,
  amount,
  note,
}: {
  accountNumber: string;
  amount: number;
  note: string;
}) {
  const now = new Date();

  const notification: PaymentNotification = {
    id: Date.now().toString(),
    accountNumber,
    amount,
    note,
    date: now.toLocaleString("vi-VN"),
  };

  // Lưu vào RAM
  notificationList = [
    notification,
    ...notificationList,
  ];

  // Gửi notification hệ thống
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "💸 Chuyển tiền thành công",

      body:
        `Đã chuyển ${formatVND(amount)}\n` +
        `STK: ${accountNumber}\n` +
        `Nội dung: ${note || "Không có nội dung"}`,

      sound: "default",

      data: {
        type: "payment",
        accountNumber,
        amount,
        note,
        date: notification.date,
      },
    },

    trigger: null,
  });

  console.log("Đã gửi notification:", notification);
}

export function getNotifications() {
  return notificationList;
}
export function clearNotifications() {
  notificationList = [];
}

export function removeNotification(id: string) {
  notificationList = notificationList.filter(
    item => item.id !== id
  );
}