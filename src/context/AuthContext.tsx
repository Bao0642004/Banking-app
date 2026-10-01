import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getUser,
  saveUser,
  clearCurrentUser,
} from "../screens/services/storage";
import { User } from "../screens/types/auth";

interface AuthContextType {
  user: User | null;

  loading: boolean;

  login: (
    accountNumber: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;

  updateUser: (
    user: User
  ) => Promise<void>;
}

const AuthContext =
  createContext<
    AuthContextType | undefined
  >(undefined);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      const savedUser =
        await getUser();

      if (savedUser) {
        setUser(savedUser);

        console.log(
          "CURRENT USER:",
          savedUser.accountNumber
        );
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(
        "LOAD USER ERROR:",
        error
      );

      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login(
    accountNumber: string,
    password: string
  ) {
    const savedUser =
      await getUser();

    if (!savedUser) {
      throw new Error(
        "Chưa có tài khoản. Vui lòng đăng ký trước."
      );
    }

    if (
      savedUser.accountNumber !==
      accountNumber.trim()
    ) {
      throw new Error(
        "Số tài khoản không đúng."
      );
    }

    if (!savedUser.password) {
      throw new Error(
        "Tài khoản chưa có mật khẩu."
      );
    }

    if (
      savedUser.password !==
      password
    ) {
      throw new Error(
        "Mật khẩu không đúng."
      );
    }

    setUser(savedUser);
  }

  async function logout() {
    try {
      await clearCurrentUser();

      setUser(null);
    } catch (error) {
      console.log(
        "LOGOUT ERROR:",
        error
      );

      throw error;
    }
  }

  async function updateUser(
    newUser: User
  ) {
    try {
      await saveUser(newUser);

      setUser(newUser);
    } catch (error) {
      console.log(
        "UPDATE USER ERROR:",
        error
      );

      throw error;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth phải được sử dụng trong AuthProvider"
    );
  }

  return context;
}