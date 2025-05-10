import React, { useState, useEffect } from 'react';
import '../styles/IntroVideo.css';

const IntroVideo = ({ onVideoEnd }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onVideoEnd();
    }, 5000); // Adjust time based on your video length

    return () => clearTimeout(timer);
  }, [onVideoEnd]);

  return isVisible ? (
    <div className="intro-container">
      <video
        autoPlay
        muted
        className="intro-video"
        onEnded={() => {
          setIsVisible(false);
          onVideoEnd();
        }}
      >
        <source src="/videos/intro-video.mp4" type="video/mp4" />
      </video>
    </div>
  ) : null;
};

export default IntroVideo;
