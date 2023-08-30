import React from 'react';
import { Card, CardActionArea, CardContent } from '@mui/material';
import { cardData } from './cards-data';
import styles from './styles.module.scss';

export const Cards: React.FC = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.title}>
        <h1>Generate any type of content</h1>
        <h1>10 times faster</h1>
      </div>
      <div className={styles.CardContainer}>
        {cardData.map((e: any) => (
          <Card className={styles.Card}>
            <CardActionArea key={e.id} className={styles.CardActionArea}>
              <CardContent className={styles.CardContent}>
                <h2>{e.title}</h2>
                <br />
                <p>{e.desc}</p>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};
