import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';

export const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.logo}>История России</div>
        <nav className={styles.NavBar} >
          <ul className={styles.list}>
            <li><Link to={routes.main}>Главная страница</Link></li>
            <li><Link to={routes.participants}>Участники</Link></li>
            <li><Link to={routes.video}>Видио матерялы</Link></li>
            <li><Link to={routes.about}>О нас</Link></li>
          </ul>
        </nav>
      </header>
  );
};