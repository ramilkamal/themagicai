import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {
  Box,
  Button,
  Typography,
  Modal,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { ReactComponent as EyeVisibilitiy } from '../../../assets/icons/eye-solid.svg';
import { ReactComponent as EyeVisibilitiyOff } from '../../../assets/icons/eye-slash-solid.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLoginAuthMutation } from '../../../redux/index.endpoints';
import styles from './styles.module.scss';

const modalFormStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 5,
  borderRadius: '16px',
};

export const LoginModal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginAuth, { data: authSignIn, isLoading, isSuccess, isError }] =
    useLoginAuthMutation();

  const closeModal: React.MouseEventHandler<HTMLElement> = () => setOpen(false);

  const handleShowPassword: React.MouseEventHandler<HTMLElement> = () =>
    setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  const formSubmit = (values: any) => {
    loginAuth(values);
  };

  useEffect(() => {
    if (authSignIn) {
      Cookies.set('token', authSignIn, { expires: 7 });
    }
  }, [authSignIn]);

  useEffect(() => {
    if (isSuccess) {
      navigate('/cv');
    }
  }, [isSuccess]);

  return (
    <div className={styles.login}>
      <Modal open={open} onClose={closeModal}>
        <Box
          sx={modalFormStyle}
          component="form"
          onSubmit={handleSubmit(formSubmit)}
        >
          <h1>Login</h1>
          <OutlinedInput
            color="secondary"
            type="email"
            placeholder="Email"
            fullWidth
            {...register('email', {
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              minLength: 10,
              maxLength: 25,
              required: true,
            })}
          />
          {errors.email && (
            <span className={styles.inputError}>error email input !</span>
          )}
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            color="secondary"
            placeholder="Create password"
            fullWidth
            {...register('password', {
              required: true,
              minLength: 5,
              maxLength: 25,
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <EyeVisibilitiyOff /> : <EyeVisibilitiy />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.password && (
            <span className={styles.inputError}>error password input !</span>
          )}
          <div>
            <Button variant="contained" color="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="secondary">
              Ok
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
