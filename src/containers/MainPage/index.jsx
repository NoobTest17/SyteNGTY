import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import { MyModal } from '../../components/Commons/MyModal/MyModal';
import { mainArticles } from '../../utils/const/articlesMain';
import { MyVideoPlayer } from '../../components/Commons/MyVideoPlayer';

export const MainPage = () => {
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
      <div>
        <MyVideoPlayer />
      </div>
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
        <h2>{mainArticles[0].title}</h2>
        <div className={styles.content}>
          <p>{mainArticles[0].shortText}</p>
          <button onClick={() => openModal(0)}>Подробнее</button>
          <MyModal isOpen={modalsIsOpen[0]} onRequestClose={closeModal}>
            <h1>{mainArticles[0].title}</h1>
            <p>{mainArticles[0].mainText}</p>
          </MyModal>
        </div>
      </article>

      <article>
        <h1>{mainArticles[1].title}</h1>
        <div className={styles.content}>
          <p>{mainArticles[1].shortText}</p>
          <button onClick={() => openModal(1)}>Подробнее</button>
          <MyModal isOpen={modalsIsOpen[1]} onRequestClose={closeModal}>
            <h1>{mainArticles[1].title}</h1>
            <p>{mainArticles[1].mainText}</p>
          </MyModal>
        </div>
      </article>
    </section>
  );
};
