import React from 'react';
import error404 from '../../assets/images/error.png';
import styles from './styles.module.scss';

export const ErrorPage: React.FC = () => {
  return (
    <div className={styles.errorPage}>
      <img src={error404} className={styles.errorImage} />
    </div>
  );
};
