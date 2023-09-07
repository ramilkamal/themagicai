import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { Footer, Header } from '../';
import { HomePage, CVPage } from '../../pages';
import styles from './styles.module.scss';

export const Layout: React.FC = () => {
  const token = Cookies.get('token');

  return (
    <>
      <Header />
      <CVPage />
      {/* {token ? <CVPage /> : <HomePage />} */}
      <Footer />
    </>
  );
};
