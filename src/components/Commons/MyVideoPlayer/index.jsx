import React from 'react';
import YouTube from 'react-youtube';

export const MyVideoPlayer = () => {
  const videoId = 'siIXMhX8FLY'; // Замените на реальный ID видео

  const opts = {
    height: '390',
    width: '640',
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};
