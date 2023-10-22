import React from 'react';
import Modal from'react-modal'
import styles from './MyModal.module.scss';

export const MyModal = ({ isOpen, onRequestClose, children }) => {
  console.log(styles);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contantLabel='Модальное окно'
      className={styles.modal}
      overlayClassName={styles.overlay}

    >
      <button onClick={onRequestClose} className={styles.button}>Закрыть</button>
      {children}
    </Modal>
  );
};
