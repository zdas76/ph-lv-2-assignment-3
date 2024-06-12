import { TUser } from "../user/user.interfact";
import { User } from "../user/user.model";

const createUserInToDB = async (payLoad: TUser) => {
  const result = await User.create(payLoad);
  return result;
};
const loginUser = () => {};

export const AuthService = {
  createUserInToDB,
  loginUser,
};
