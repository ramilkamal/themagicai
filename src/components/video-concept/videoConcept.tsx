import React from 'react';
import Arrows from '../../assets/images/arrow.png';
import styles from './styles.module.scss';

export const VideoConcept: React.FC = () => {
  return (
    <div className={styles.video}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>How to use</h2>
          <img src={Arrows} alt="arrow" />
        </div>
        <iframe src="" allowFullScreen></iframe>
      </div>
    </div>
  );
};
