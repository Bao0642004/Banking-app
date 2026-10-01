import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import React from "react";

import LoginScreen
  from "../screens/LoginScreen";
import WelcomeScreen
  from "../screens/WelcomeScreen";
import CreatePasswordScreen
  from "../screens/Register/CreatePasswordScreen";
import CreatePinScreen
  from "../screens/Register/CreatePinScreen";
import FaceScanScreen
  from "../screens/Register/FaceScanScreen";
import IDCardScreen
  from "../screens/Register/IDCardScreen";
import PersonalInfoScreen
  from "../screens/Register/PersonalInfoScreen";
import RegisterSuccessScreen
  from "../screens/Register/RegisterSuccessScreen";
import VerifyInfoScreen
  from "../screens/Register/VerifyInfoScreen";
import Notification
  from "../screens/home/NotificationSrceen";
import TransferScreen
  from "../screens/home/TransferScreen";
import TransferSuccessScreen
  from "../screens/home/TransferSuccessScreen";

import MainTabNavigator
  from "./MainTabNavigator";

export type RootStackParamList = {

  // ------------------------------
  // AUTH
  // ------------------------------

  Welcome: undefined;

  Login: undefined;
  PersonalInfo: undefined;

  IDCard: undefined;

  FaceScan: undefined;

  VerifyInfo: undefined;

  CreatePassword: undefined;

  CreatePin: undefined;

  RegisterSuccess: undefined;
  Main: undefined;
  Notification: undefined;
  Transfer: undefined;
  TransferSuccess: {
    transactionId: string;
    recipientName: string;
    accountNumber: string;
    amount: number;
    date: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {

  return (

    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfoScreen}
      />

      <Stack.Screen
        name="IDCard"
        component={IDCardScreen}
      />

      <Stack.Screen
        name="FaceScan"
        component={FaceScanScreen}
      />

      <Stack.Screen
        name="VerifyInfo"
        component={VerifyInfoScreen}
      />

      <Stack.Screen
        name="CreatePassword"
        component={CreatePasswordScreen}
      />

      <Stack.Screen
        name="CreatePin"
        component={CreatePinScreen}
      />

      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccessScreen}
      />
      <Stack.Screen
        name="Main"
        component={MainTabNavigator}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
      />
     <Stack.Screen
        name="Transfer"
        component={TransferScreen}
      />
      <Stack.Screen
        name="TransferSuccess"
        component={TransferSuccessScreen}
      />

    </Stack.Navigator>
  );
}
