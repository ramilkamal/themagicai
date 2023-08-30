import React from 'react';
import { Button } from '@mui/material';
import shape from '../../assets/images/Shape.webp';
import styles from './styles.module.scss';

export const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.containerLeft}>
        <div className={styles.containerText}>
          <h1>The magic AI</h1>
          <p>
            Get the job you want using AI. <br />
            write faster, think bigger and improve <br />
            your careativity with the power of magic.
          </p>
        </div>
        <Button className={styles.Button} variant="contained">
          Try now
        </Button>
      </div>
      <img src={shape} alt="Shape logo" />
    </div>
  );
};
