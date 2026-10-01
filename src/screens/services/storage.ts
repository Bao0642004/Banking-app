import AsyncStorage from "@react-native-async-storage/async-storage";

import { User }     from "../types/auth";

const CURRENT_USER_KEY = "@been_bank_current_user";
const USERS_KEY = "@been_bank_users";
const TRANSACTIONS_KEY = "@been_bank_transactions";

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: "send" | "receive";
  date: string;
  accountNumber?: string;
  message?: string;
  status?: "success" | "failed";
}

export async function getUser(): Promise<User | null> {
  try {
    const data = await AsyncStorage.getItem(
      CURRENT_USER_KEY
    );

    if (!data) {
      return null;
    }

    return JSON.parse(data) as User;
  } catch (error) {
    console.log("GET USER ERROR:", error);
    return null;
  }
}

export async function saveUser(
  user: User
): Promise<void> {
  try {
    await AsyncStorage.setItem(
      CURRENT_USER_KEY,
      JSON.stringify(user)
    );

    await addOrUpdateUser(user);

    console.log(
      "CURRENT USER SAVED:",
      user.accountNumber
    );
  } catch (error) {
    console.log("SAVE USER ERROR:", error);
    throw error;
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    const data = await AsyncStorage.getItem(
      USERS_KEY
    );

    if (!data) {
      return [];
    }

    const users: User[] = JSON.parse(data);

    if (!Array.isArray(users)) {
      return [];
    }

    return users;
  } catch (error) {
    console.log("GET USERS ERROR:", error);
    return [];
  }
}

export async function addOrUpdateUser(
  user: User
): Promise<void> {
  try {
    const users = await getUsers();

    const index = users.findIndex(
      (item) =>
        item.accountNumber ===
        user.accountNumber
    );

    if (index === -1) {
      users.push(user);
    } else {
      users[index] = user;
    }

    await AsyncStorage.setItem(
      USERS_KEY,
      JSON.stringify(users)
    );

    console.log(
      "USER SAVED:",
      user.accountNumber
    );
  } catch (error) {
    console.log(
      "ADD OR UPDATE USER ERROR:",
      error
    );

    throw error;
  }
}

export async function findUserByAccountNumber(
  accountNumber: string
): Promise<User | null> {
  try {
    const users = await getUsers();

    const cleanAccount =
      accountNumber
        .replace(/\D/g, "")
        .trim();

    const foundUser = users.find(
      (item) =>
        item.accountNumber === cleanAccount
    );

    return foundUser ?? null;
  } catch (error) {
    console.log(
      "FIND USER ERROR:",
      error
    );

    return null;
  }
}
export async function deleteUser(
  accountNumber: string
): Promise<void> {
  try {
    const users = await getUsers();

    const filtered = users.filter(
      (item) =>
        item.accountNumber !==
        accountNumber
    );

    await AsyncStorage.setItem(
      USERS_KEY,
      JSON.stringify(filtered)
    );

    const currentUser = await getUser();

    if (
      currentUser?.accountNumber ===
      accountNumber
    ) {
      await clearCurrentUser();
    }
  } catch (error) {
    console.log(
      "DELETE USER ERROR:",
      error
    );

    throw error;
  }
}

export async function clearCurrentUser(): Promise<void> {
  try {
    await AsyncStorage.removeItem(
      CURRENT_USER_KEY
    );

    console.log(
      "CURRENT USER CLEARED"
    );
  } catch (error) {
    console.log(
      "CLEAR CURRENT USER ERROR:",
      error
    );

    throw error;
  }
}

export async function clearAllUsers(): Promise<void> {
  try {
    await AsyncStorage.removeItem(
      CURRENT_USER_KEY
    );

    await AsyncStorage.removeItem(
      USERS_KEY
    );

    await AsyncStorage.removeItem(
      TRANSACTIONS_KEY
    );

    console.log(
      "ALL USERS CLEARED"
    );
  } catch (error) {
    console.log(
      "CLEAR ALL USERS ERROR:",
      error
    );

    throw error;
  }
}

export async function getTransactions(): Promise<
  Transaction[]
> {
  try {
    const data =
      await AsyncStorage.getItem(
        TRANSACTIONS_KEY
      );

    if (!data) {
      return [];
    }

    const transactions: Transaction[] =
      JSON.parse(data);

    if (!Array.isArray(transactions)) {
      return [];
    }

    return transactions;
  } catch (error) {
    console.log(
      "GET TRANSACTIONS ERROR:",
      error
    );

    return [];
  }
}

export async function addTransaction(
  transaction: Transaction,
  accountNumber?: string
): Promise<void> {
  try {
    const oldTransactions =
      await getTransactions();

    const transactionToSave: Transaction = {
      ...transaction,

      accountNumber:
        accountNumber ??
        transaction.accountNumber,
    };

    const newTransactions = [
      transactionToSave,
      ...oldTransactions,
    ];

    await AsyncStorage.setItem(
      TRANSACTIONS_KEY,
      JSON.stringify(newTransactions)
    );

    console.log(
      "TRANSACTION SAVED:",
      transactionToSave
    );
  } catch (error) {
    console.log(
      "ADD TRANSACTION ERROR:",
      error
    );

    throw error;
  }
}

export async function deleteTransaction(
  transactionId: string
): Promise<void> {
  try {
    const transactions =
      await getTransactions();

    const filtered =
      transactions.filter(
        (item) =>
          item.id !== transactionId
      );

    await AsyncStorage.setItem(
      TRANSACTIONS_KEY,
      JSON.stringify(filtered)
    );

    console.log(
      "TRANSACTION DELETED:",
      transactionId
    );
  } catch (error) {
    console.log(
      "DELETE TRANSACTION ERROR:",
      error
    );

    throw error;
  }
}

export async function clearTransactions(): Promise<void> {
  try {
    await AsyncStorage.removeItem(
      TRANSACTIONS_KEY
    );

    console.log(
      "ALL TRANSACTIONS CLEARED"
    );
  } catch (error) {
    console.log(
      "CLEAR TRANSACTIONS ERROR:",
      error
    );

    throw error;
  }
}