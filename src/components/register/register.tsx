import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegisterAuthMutation } from '../../redux/index.endpoints';
import styles from './styles.module.scss';

export const Register: React.FC = () => {
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registerAuth, { data: authSignUp, isLoading, isSuccess, isError }] =
    useRegisterAuthMutation();
  const navigate = useNavigate();

  const handleShowPassword1: React.MouseEventHandler = () =>
    setShowPassword1((show) => !show);

  const handleShowPassword2: React.MouseEventHandler = () =>
    setShowPassword2((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  const formSubmit = (values: any) => {
    registerAuth(values);
  };

  useEffect(() => {
    if (authSignUp) {
      Cookies.get('token');
    }
  }, [authSignUp]);

  useEffect(() => {
    if (isSuccess) {
      navigate('/cv');
    }
  }, [isSuccess]);

  return (
    <div className={styles.register} id="#register">
      <form onSubmit={handleSubmit(formSubmit)}>
        <h1>
          Try now for <span>FREE!</span>
        </h1>
        <OutlinedInput
          type="text"
          color="secondary"
          className={styles.OutlinedInput}
          placeholder="Name"
          {...register('name', {
            minLength: 3,
            maxLength: 25,
            pattern: /^[A-Za-z]+$/i,
            required: true,
          })}
        />
        {errors.name && (
          <span className={styles.inputError}>Error name input !</span>
        )}
        <OutlinedInput
          type="email"
          color="secondary"
          className={styles.OutlinedInput}
          placeholder="Email"
          {...register('email', {
            minLength: 10,
            maxLength: 25,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: true,
          })}
        />
        {errors.email && (
          <span className={styles.inputError}>Error email input !</span>
        )}
        <OutlinedInput
          color="secondary"
          type={showPassword1 ? 'text' : 'password'}
          className={styles.OutlinedInput}
          placeholder="Create password"
          {...register('password', {
            minLength: 5,
            maxLength: 20,
            required: true,
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleShowPassword1}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword1 ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && (
          <span className={styles.inputError}>Error password input1 !</span>
        )}
        <OutlinedInput
          color="secondary"
          type={showPassword2 ? 'text' : 'password'}
          className={styles.OutlinedInput}
          placeholder="Confirm password"
          {...register('password', {
            minLength: 5,
            maxLength: 20,
            required: true,
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleShowPassword2}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword2 ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && (
          <span className={styles.inputError}>Error password input2 !</span>
        )}

        <Button
          className={styles.Button}
          type="submit"
          variant="contained"
          color="primary"
        >
          <Link to="cv">Try now</Link>
        </Button>
      </form>
    </div>
  );
};
