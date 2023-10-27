import React, { useState } from 'react';
import styles from './MainItem.module.scss'
import { MyModal } from '../../../components/Commons/MyModal';

export const MainItem = ({ data, children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (index) => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <article>
    <h2>{}</h2>
    <div className={styles.content}>
      <p>{}</p>
      <button onClick={openModal}>Подробнее</button>
      <MyModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {children}
      </MyModal>
    </div>
  </article>
  );
};
