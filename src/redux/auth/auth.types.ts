//Request API

export type RegisterTypes = {
  name: string;
  email: string;
  password: string;
};

export type LoginTypes = {
  email: string;
  password: string;
};

export type LogoutTypes = {
  refresh: string;
};

//Response API

export type ResponseRegisterTypes = {
  id: number;
  name: string;
  email: string;
};

export type ResponseLoginTypes = {
  access: string;
  refresh: string;
};

export type ResponseLogoutTypes = {
  refresh: string;
};

//Refresh Token API

export type RefreshTokenTypes = {
  refresh: string;
};

export type ResponseRefreshTokenTypes = {
  access: string;
  refresh: string;
};
