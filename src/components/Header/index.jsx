import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.logo}>История России</div>
        <nav className={styles.NavBar}>
          <ul className={styles.list}>
            <li><a href="">Главная страница</a></li>
            <li><a href="">Подробности</a></li>
            <li><a href="">Доп. материалы</a></li>
            <li><a href="">О нас</a></li>
          </ul>
        </nav>
      </header>
  );
};