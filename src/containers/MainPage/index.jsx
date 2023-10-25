import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import foto from '../../assets/foto.jpg';
import { MyModal } from '../../components/Commons/MyModal';
import { mainArticles } from '../../utils/const/articlesMain';
import { MyVideoPlayer } from '../../components/Commons/MyVideoPlayer';
import { MyLine } from '../../components/Commons/MyLine';

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
      <article className={styles.presenterText}>
        <h1 className={styles.presenterText__title}>Роль женщин в Русской Революции 1917 года</h1>
        <div className={styles.presenterText__content}>
          <div className={styles.presenterText__content_block}>
            <p>
              Добро пожаловать на наш сайт, который посвящен увлекательной и важной главе в истории
              человечества - русской революции 1917 года. Однако, наш фокус здесь направлен на нечто
              особенное и вдохновляющее: на роль, которую женщины сыграли в этом периоде.
            </p>
            <p>
              Добро пожаловать на наш сайт, который посвящен увлекательной и важной главе в истории
              человечества - русской революции 1917 года. Однако, наш фокус здесь направлен на нечто
              особенное и вдохновляющее: на роль, которую женщины сыграли в этом периоде.
            </p>
            <p>
              История женского вклада в Русскую Революцию 1917 года является удивительной и
              вдохновляющей. Эти женщины не только поднимали свои голоса и боролись за свои права,
              но и вдохновляли других своим примером. Они участвовали в митингах, забастовках и
              революционных действиях, борясь за свое место в обществе и будущее своих детей.
            </p>
            <p>
              История женского вклада в Русскую Революцию 1917 года является удивительной и
              вдохновляющей. Эти женщины не только поднимали свои голоса и боролись за свои права,
              но и вдохновляли других своим примером. Они участвовали в митингах, забастовках и
              революционных действиях, борясь за свое место в обществе и будущее своих детей.
            </p>
          </div>
          <div>
            <img src={foto} alt="" />
            <MyVideoPlayer videoId={'EXc5RMI6_W4'} width={480} height={250} />
          </div>
        </div>
      </article>
      <MyLine />

      {/*<article>*/}
      {/*  <h2>{mainArticles[0].title}</h2>*/}
      {/*  <div className={styles.content}>*/}
      {/*    <p>{mainArticles[0].shortText}</p>*/}
      {/*    <button onClick={() => openModal(0)}>Подробнее</button>*/}
      {/*    <MyModal isOpen={modalsIsOpen[0]} onRequestClose={closeModal}>*/}
      {/*      <h1>{mainArticles[0].title}</h1>*/}
      {/*      <p>{mainArticles[0].mainText}</p>*/}
      {/*    </MyModal>*/}
      {/*  </div>*/}
      {/*</article>*/}

      {/*<article>*/}
      {/*  <h1>{mainArticles[1].title}</h1>*/}
      {/*  <div className={styles.content}>*/}
      {/*    <p>{mainArticles[1].shortText}</p>*/}
      {/*    <button onClick={() => openModal(1)}>Подробнее</button>*/}
      {/*    <MyModal isOpen={modalsIsOpen[1]} onRequestClose={closeModal}>*/}
      {/*      <h1>{mainArticles[1].title}</h1>*/}
      {/*      <p>{mainArticles[1].mainText}</p>*/}
      {/*    </MyModal>*/}
      {/*  </div>*/}
      {/*</article>*/}
    </section>
  );
};
