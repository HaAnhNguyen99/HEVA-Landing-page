import 'animate.css';
import { useState, useEffect } from 'react';
import Paragragh from '../paragragh/paragragh';
import heroVideo from '../../assets/videos/Home_Hero.mp4';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    // Ensure the video starts playing when the component mounts
    const videoElement = document.querySelector('.video_element') as HTMLVideoElement;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error('Error attempting to play video:', error);
      });
    }
  }, []);

  return (
    <section className="hero w-screen max-h-screen overflow-hidden relative">
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoad}
        className="video_element w-full h-full object-cover"
      />
      {!isVideoLoaded && (
        <img
          src="https://cdn.prod.website-files.com/663943bed8a37337f94a3f67/665f76257e6d953db0541fb1_home_hero_vid_img%20(1).webp"
          loading="lazy"
          sizes="100vw"
          alt="Loading placeholder"
          className="w-full h-full absolute top-0 left-0 object-cover"
        />
      )}
      <Paragragh bottom="60" />
      <a href="#" className="start-btn absolute z-10 top-[35%] left-[70%]  ">
        <div className="home_hero_btn_bg bg-yellow p-[100px] rounded-full relative ">
          <div className="home_hero_text_content  text-primary relative z-30">start today</div>
          <div className="home_hero_btn_bg_hover bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 hover:p-[80px] hover:bg-primary box-border hover:text-yellow rounded-full  transition"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
