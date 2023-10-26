import React from 'react';
import styles from './MainItem.module.scss'

export const MainItem = ({ data }) => {
  return (
    <div className={styles.item}>
      <h1>title</h1>
      <p>mainText</p>
    </div>
  );
};
