import { api } from '../index.api';
import {
  RegisterTypes,
  LoginTypes,
  LogoutTypes,
  ResponseRegisterTypes,
  ResponseLoginTypes,
  ResponseLogoutTypes,
  RefreshTokenTypes,
  ResponseRefreshTokenTypes,
} from './auth.types';
import {
  transformResponse,
  transformErrorResponse,
} from '../../utils/transformResponse';
import { ServerResponse } from '../index.types';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerAuth: builder.mutation<
      ServerResponse<RegisterTypes>,
      RegisterTypes
    >({
      query: (body) => ({
        url: 'api/register/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['register'],
      transformResponse,
      transformErrorResponse,
    }),
    loginAuth: builder.mutation<any, LoginTypes>({
      query: (body) => ({
        url: 'api/login/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['login'],
      transformResponse,
      transformErrorResponse,
    }),
    logoutAuth: builder.mutation<any, LogoutTypes>({
      query: (body) => ({
        url: 'api/logout/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['logout'],
      transformResponse,
      transformErrorResponse,
    }),
    refreshToken: builder.mutation<any, RefreshTokenTypes>({
      query: (body) => ({
        url: 'api/token/refresh/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['token/refresh'],
      transformResponse,
      transformErrorResponse,
    }),
  }),
});
