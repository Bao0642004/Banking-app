import { User } from "../types/auth";

import {
  getUser,
  saveUser,
} from "./storage";

export async function registerUser(
  user: User
) {

  await saveUser(user);

  return user;
}

export async function loginUser(
  accountNumber: string,
  pin: string
): Promise<User> {

  const user = await getUser();

  if (!user) {
    throw new Error(
      "Tài khoản chưa được đăng ký"
    );
  }

  if (
    user.accountNumber !== accountNumber
  ) {
    throw new Error(
      "Số tài khoản không chính xác"
    );
  }

  if (user.pin !== pin) {
    throw new Error(
      "Mã PIN không chính xác"
    );
  }

  return user;
}