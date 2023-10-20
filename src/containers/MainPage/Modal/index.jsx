import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Modal.module.scss'

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen? 'hidden' : 'auto';
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div>
      <button onClick={openModal}>Открыть модальное окно</button>
      <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
        <div className={styles.modal} onClick={handleModalClick}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            {props.children}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Modal;
