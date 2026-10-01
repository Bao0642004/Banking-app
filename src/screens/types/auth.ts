
export interface User {
  id: string;
  fullName: string;
  phone: string;
  email: string;

  idNumber: string;
  dateOfBirth: string;
  address: string;
  accountNumber: string;
  cif: string;

  password: string;
  pin: string;
  balance: number;
  avatar?: string;
  ekycVerified: boolean;
  createdAt: string
}

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