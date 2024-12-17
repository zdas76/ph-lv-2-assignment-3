export type TLoginUser = {
  email: string;
  password: string;
};

export type TAuthUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};
