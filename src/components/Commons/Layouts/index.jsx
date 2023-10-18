import React from 'react';
import {Header} from "../../Header";
import {Footer} from "../../Footer";
import styles from './Layouts.module.scss'

export const Layouts = () => {
  return (
      <div className={styles.main}>
        <Header/>
        body
        тема
        <p>
          Роль женщин в русской революции 1917 года
        </p>
        <Footer/>
      </div>
  );
};