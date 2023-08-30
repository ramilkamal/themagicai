import React from 'react';
import Cookies from 'js-cookie';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLogoutAuthMutation } from '../../redux/index.endpoints';
import styles from './styles.module.scss';

export const Logout: React.FC = () => {
  const [logoutAuth, { data: authSignOut, isLoading, isSuccess, isError }] =
    useLogoutAuthMutation();
  const navigate = useNavigate();

  const logoutBtn: React.MouseEventHandler<HTMLElement> = () => {
    Cookies.remove('token');
    navigate('/');
  };

  return (
    <div>
      <Button variant="contained" onClick={logoutBtn}>
        Logout
      </Button>
    </div>
  );
};
