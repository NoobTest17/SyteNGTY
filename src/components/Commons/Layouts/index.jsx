import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layouts.module.scss';

export const Layouts = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
