import React from 'react';
import YouTube from 'react-youtube';

export const MyVideoPlayer = ({ videoId, height = 390, width = 640 }) => {
  return (
    <div>
      <YouTube videoId={videoId} opts={{ height, width }} />
    </div>
  );
};
