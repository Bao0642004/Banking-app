import {
  NavigationContainer,
} from "@react-navigation/native";

import { useEffect } from "react";

import {
  AuthProvider,
} from "./src/context/AuthContext";
import AppNavigator  from "./src/navigation/AppNavigator";
import {
  setupNotifications,
} from "./src/screens/services/notificationService";

export default function App() {

  useEffect(() => {
    setupNotifications();
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}