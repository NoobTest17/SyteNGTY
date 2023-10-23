import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import { MyModal } from '../../components/Commons/MyModal/MyModal';

export const MainPage = () => {
  // const [modalIsOpen1, setModalIsOpen1] = useState(false);
  // const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const [modalsIsOpen, setModalsIsOpen] = useState([false, false]);

  const openModal = (index) => {
    setModalsIsOpen(modalsIsOpen.map((item, i) => (i === index ? !item : item)));
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalsIsOpen(modalsIsOpen.map((item, i) => false));
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={styles.main}>
      <article>
        <h1>Роль женщин в Русской Революции 1917 года</h1>
        <div className={styles.content}>
          <p>
            Добро пожаловать на наш сайт, посвященный истории и важной роли, которую женщины сыграли
            в русской революции 1917 года. Этот период русской истории был временем перемен, борьбы
            за равенство и социальную справедливость, и женщины стояли в первых рядах этого
            движения.
          </p>
        </div>
      </article>

      <article>
        <h1>123</h1>
        <div className={styles.content}>
          <p>1</p>
          <button onClick={() => openModal(0)}>Подробнее</button>
          <MyModal isOpen={modalsIsOpen[0]} onRequestClose={closeModal}>
            <h1>2</h1>
            <p>3</p>
          </MyModal>
        </div>
      </article>

      <article>
        <h1>555</h1>
        <div className={styles.content}>
          <p>55</p>
          <button onClick={() => openModal(1)}>Подробнее</button>
          <MyModal isOpen={modalsIsOpen[1]} onRequestClose={closeModal}>
            <h1>5</h1>
            <p>5</p>
          </MyModal>
        </div>
      </article>
    </section>
  );
};
