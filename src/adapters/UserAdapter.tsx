import { TChangePassword, TLogin, TPasswordRecovery, TPasswordRestore, TRegister } from "../types/User.Type";

export const loginAdapter = (values: TLogin) => {
  const { email, password } = values
  return {
    email,
    password
  };
};