import { authApi } from './auth/auth.api';
import { cvApi } from './cv/cv.api';

export const {
  useRegisterAuthMutation,
  useLoginAuthMutation,
  useLogoutAuthMutation,
} = authApi;

export const { useCvDetailMutation } = cvApi;
