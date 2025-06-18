'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Replace these with your actual YouTube video IDs
  const videos = [
    {
      id: "7ABPZhTTVLI", // Replace with your video ID
      title: "Neural Drive Demo - Wheelchair",
      description: "Watch our technology in action as one of our founders controls a wheelchair with their thoughts."
    },
    {
      id: "wKX6WnQoaUU", // Replace with your video ID  
      title: "Neural Drive Demo - Robot",
      description: "Our CTO controlling a robot with his thoughts."
    }
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index) => {
    setCurrentVideo(index);
  };

  return (
    <div className="video-carousel-container">
      {/* Main Video Display */}
      <div className="video-display">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="video-wrapper"
          >
            <div className="aspect-video rounded-lg overflow-hidden bg-black/20 border border-white/10">
              <iframe
                src={`https://www.youtube.com/embed/${videos[currentVideo].id}?rel=0&modestbranding=1`}
                title={videos[currentVideo].title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Video Info */}
        <motion.div 
          key={`info-${currentVideo}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="video-info"
        >
          <h3 className="video-title">{videos[currentVideo].title}</h3>
          <p className="video-description">{videos[currentVideo].description}</p>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="video-controls">
        {/* Previous/Next Buttons */}
        <button 
          onClick={prevVideo}
          className="nav-button nav-button-prev"
          aria-label="Previous video"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        {/* Video Indicators */}
        <div className="video-indicators">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToVideo(index)}
              className={`indicator ${index === currentVideo ? 'active' : ''}`}
              aria-label={`Go to video ${index + 1}`}
            >
              <span className="indicator-dot"></span>
            </button>
          ))}
        </div>

        <button 
          onClick={nextVideo}
          className="nav-button nav-button-next"
          aria-label="Next video"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>

      {/* Thumbnail Strip (Optional - uncomment if you want thumbnails) */}
      {/* 
      <div className="video-thumbnails">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => goToVideo(index)}
            className={`thumbnail ${index === currentVideo ? 'active' : ''}`}
          >
            <img 
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.title}
              className="thumbnail-image"
            />
          </button>
        ))}
      </div>
      */}
    </div>
  );
};

export default VideoCarousel; 