import React from 'react';
import { Layouts } from './components/Commons/Layouts';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';
import { MainPage } from './containers/MainPage';
import { AboutPage } from './containers/AboutPage';
import { VideoPage } from './containers/VideoPage';
import { ParticipantsPage } from './containers/ParticipantsPage';

function App() {
  return (
    <div>
      <Layouts>
        <Routes>
          <Route path={routes.main} element={<MainPage />} />
          <Route path={routes.video} element={<VideoPage />} />
          <Route path={routes.participants} element={<ParticipantsPage />} />
          <Route path={routes.about} element={<AboutPage />} />
        </Routes>
      </Layouts>
    </div>
  );
}

export default App;
