import AsyncStorage from "@react-native-async-storage/async-storage";

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

const TRANSACTIONS_KEY = "@been_bank_transactions";

function getAccountTransactionsKey(
  accountNumber?: string
): string {
  if (!accountNumber) {
    return TRANSACTIONS_KEY;
  }

  const cleanAccount =
    accountNumber.trim();

  return `${TRANSACTIONS_KEY}_${cleanAccount}`;
}

export async function getTransactions(
  accountNumber?: string
): Promise<Transaction[]> {
  try {
    const key =
      getAccountTransactionsKey(
        accountNumber
      );

    const data =
      await AsyncStorage.getItem(key);

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
      await getTransactions(
        accountNumber
      );

    const newTransactions = [
      transaction,
      ...oldTransactions,
    ];

    const key =
      getAccountTransactionsKey(
        accountNumber
      );

    await AsyncStorage.setItem(
      key,
      JSON.stringify(newTransactions)
    );

    console.log(
      "TRANSACTION SAVED:",
      transaction
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
  transactionId: string,
  accountNumber?: string
): Promise<void> {
  try {
    const transactions =
      await getTransactions(
        accountNumber
      );

    const filtered =
      transactions.filter(
        (item) =>
          item.id !== transactionId
      );

    const key =
      getAccountTransactionsKey(
        accountNumber
      );

    await AsyncStorage.setItem(
      key,
      JSON.stringify(filtered)
    );
  } catch (error) {
    console.log(
      "DELETE TRANSACTION ERROR:",
      error
    );

    throw error;
  }
}

// ======================================================
// GET TRANSACTION BY ID
// ======================================================

export async function getTransactionById(
  transactionId: string,
  accountNumber?: string
): Promise<Transaction | null> {
  try {
    const transactions =
      await getTransactions(
        accountNumber
      );

    const transaction =
      transactions.find(
        (item) =>
          item.id === transactionId
      );

    return transaction ?? null;
  } catch (error) {
    console.log(
      "GET TRANSACTION BY ID ERROR:",
      error
    );

    return null;
  }
}

// ======================================================
// UPDATE TRANSACTION
// ======================================================

export async function updateTransaction(
  transaction: Transaction,
  accountNumber?: string
): Promise<void> {
  try {
    const transactions =
      await getTransactions(
        accountNumber
      );

    const index =
      transactions.findIndex(
        (item) =>
          item.id === transaction.id
      );

    if (index === -1) {
      throw new Error(
        "Không tìm thấy giao dịch."
      );
    }

    transactions[index] =
      transaction;

    const key =
      getAccountTransactionsKey(
        accountNumber
      );

    await AsyncStorage.setItem(
      key,
      JSON.stringify(transactions)
    );
  } catch (error) {
    console.log(
      "UPDATE TRANSACTION ERROR:",
      error
    );

    throw error;
  }
}

// ======================================================
// CLEAR TRANSACTIONS CỦA 1 ACCOUNT
// ======================================================

export async function clearTransactions(
  accountNumber?: string
): Promise<void> {
  try {
    const key =
      getAccountTransactionsKey(
        accountNumber
      );

    await AsyncStorage.removeItem(key);

    console.log(
      "TRANSACTIONS CLEARED:",
      accountNumber
    );
  } catch (error) {
    console.log(
      "CLEAR TRANSACTIONS ERROR:",
      error
    );
  }
}

// ======================================================
// CLEAR TOÀN BỘ TRANSACTION
// ======================================================

export async function clearAllTransactionStorage(): Promise<void> {
  try {
    const keys =
      await AsyncStorage.getAllKeys();

    const transactionKeys =
      keys.filter((key) =>
        key.startsWith(
          TRANSACTIONS_KEY
        )
      );

    if (transactionKeys.length > 0) {
      await AsyncStorage.multiRemove(
        transactionKeys
      );
    }

    console.log(
      "ALL TRANSACTIONS CLEARED"
    );
  } catch (error) {
    console.log(
      "CLEAR ALL TRANSACTIONS ERROR:",
      error
    );

    throw error;
  }
}