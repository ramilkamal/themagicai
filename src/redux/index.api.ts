import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { UserTypes } from './index.types';

export const api = createApi({
  reducerPath: 'api/themagicai',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SOME_KEY,
    mode: 'cors',
    prepareHeaders: (headers) => {
      const token = Cookies.get('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnFocus: true,
  tagTypes: [
    'cv-detail',
    'letter-detail',
    'login',
    'logout',
    'make-cv',
    'make-letters',
    'password/reset',
    'register',
    'schema',
    'skills',
    'token/refresh',
    'users',
    'users/me',
  ],
  endpoints: (builder) => ({
    getUsers: builder.query<UserTypes[], string>({
      query: () => `/users`,
    }),
  }),
});

export const { useGetUsersQuery } = api;
