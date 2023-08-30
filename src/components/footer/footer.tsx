import React from 'react';
import { Link } from '@mui/material';
import styles from './styles.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h3>
        For partnership inquiries, <br /> please reach us at
      </h3>
      <Link className={styles.email}>ulugbek@themagicai.com</Link>
    </footer>
  );
};
