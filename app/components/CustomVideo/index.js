'use client';
import React, { useState, useRef } from 'react';

export default function CustomVideo({
  videoUrl,
  btnText,
  className = '',
  vimeo = false,
}) {
  const ref = useRef();
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    ref.current.play();
    setPlaying(true);
  };

  const videoClick = () => {
    ref.current.pause();
    setPlaying(false);
  };
  return (
    <div className="relative flex items-center justify-center">
      <video
        ref={ref}
        muted={true}
        playsInline={true}
        controls={playing && true}
        onClick={videoClick}
        className={className}
      >
        <source src="https://i.vimeocdn.com/video/1569713678-c87733b0daa3f3a59933eff2ddc854660db4209c7891b30334ac14fdbd0cdf90-d?mw=1300&mh=731" type="video/mp4" />
      </video>
      {playing ? null : (
        <button
          onClick={playVideo}
          className="absolute top-1/2 left-1/2 z-[99] flex -translate-x-1/2 -translate-y-1/2 items-center bg-white py-[12px] px-[18px] font-urw-din-condensed text-sm font-black uppercase !text-ufc-gray-26"
        >
          {/* <Icon
            icon="ci:play-arrow"
            color="#d20a0a"
            width="24"
            className="mr-1"
          /> */}
          {btnText}
        </button>
      )}
    </div>
  );
}
