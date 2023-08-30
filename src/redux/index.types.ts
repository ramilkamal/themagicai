export type UserTypes = {
  id: number;
  name: string;
};

export type MessageTypes = {
  massage: string;
  data: string;
};

export interface ServerResponse<T> {
  data: T[];
}

export interface ServerResponseObject<T> {
  data: T;
}
