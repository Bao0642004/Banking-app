import Ionicons           from "@expo/vector-icons/Ionicons";

import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
} from "@react-navigation/bottom-tabs";

import React              from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import HomeScreen         from "../screens/home/HomeScreen";
import ProfileScreen      from "../screens/home/ProfileScreen";
import PromotionScreen    from "../screens/home/PromotionScreen";
import QRScreen           from "../screens/home/QRScreen";
import TransactionsScreen from "../screens/home/TransactionsScreen";
import styles             from "../screens/styles/naugation/MainTabnavigation_styles";


const Tab = createBottomTabNavigator();

function QRButton({
  onPress,
}: BottomTabBarButtonProps) {
  return (
    <TouchableOpacity
      style={styles.qrButtonWrapper}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.qrButton}>
        <Ionicons
          name="qr-code-outline"
          size={32}
          color="#FFFFFF"
        />
      </View>
      <Text style={styles.qrText}>
        Quét QR
      </Text>
    </TouchableOpacity>
  );
}

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#0756A6",
        tabBarInactiveTintColor: "#9AA4B2",
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({
            color,
            focused,
          }) => (
            <Ionicons
              name={
                focused
                  ? "home"
                  : "home-outline"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: "Lịch sử",
          tabBarIcon: ({
            color,
            focused,
          }) => (
            <Ionicons
              name={
                focused
                  ? "time"
                  : "time-outline"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="QR"
        component={QRScreen}
        options={{
          tabBarLabel: "",

          tabBarButton: (props) => (
            <QRButton {...props} />
          ),
        }}
      />

      <Tab.Screen
        name="Promotion"
        component={PromotionScreen}
        options={{
          tabBarLabel: "Khuyến mãi",

          tabBarIcon: ({
            color,
            focused,
          }) => (
            <Ionicons
              name={
                focused
                  ? "gift"
                  : "gift-outline"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Cá nhân",
          tabBarIcon: ({
            color,
            focused,
          }) => (
            <Ionicons
              name={
                focused
                  ? "person"
                  : "person-outline"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
