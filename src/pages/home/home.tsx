import React from 'react';
import {
  Header,
  Banner,
  VideoConcept,
  Cards,
  Register,
  Footer,
} from '../../components';
import styles from './styles.module.scss';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.backgroundImage}>
        <Banner />
        <VideoConcept />
        <Cards />
        <Register />
      </div>
      <Footer />
    </div>
  );
};
