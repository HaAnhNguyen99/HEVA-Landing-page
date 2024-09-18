import 'animate.css';
import { useState } from 'react';
import Paragragh from '../paragragh/paragragh';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="hero w-screen max-h-screen overflow-hidden relative">
      {/* {isVideoLoaded ? (
        <img
          src="https://cdn.prod.website-files.com/663943bed8a37337f94a3f67/665f76257e6d953db0541fb1_home_hero_vid_img%20(1).webp"
          loading="lazy"
          sizes="100vw"
          alt=""
          className="w-full h-full"
        />
      ) : ( */}
      <video
        src="https://storage.googleapis.com/evirts-marketing-bucket/Heva/Home_Hero.mp4"
        autoPlay={true}
        muted={false}
        loop={true}
        playsInline={true}
        preload="auto"
        className="video_element  "
        onLoadedData={handleVideoLoad}></video>
      {/* )} */}
      <Paragragh bottom="60" />
      <a href="#" className="start-btn absolute z-10 top-[45%] left-[70%]  ">
        <div className="home_hero_btn_bg bg-yellow p-[100px] rounded-full relative ">
          <div className="home_hero_text_content  text-primary relative z-30 w-full">
            start today
          </div>
          <div className="home_hero_btn_bg_hover bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 hover:p-[100px] hover:bg-primary box-border hover:text-yellow rounded-full  transition"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
