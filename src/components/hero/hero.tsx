import 'animate.css';
import Paragragh from '../paragragh/paragragh';

const Hero = () => {
  return (
    <section className="hero w-screen max-h-screen overflow-hidden relative">
      <video
        src="https://storage.googleapis.com/evirts-marketing-bucket/Heva/Home_Hero.mp4"
        autoPlay={true}
        muted={false}
        loop={true}
        playsInline={true}
        preload="auto"
        className="video_element  "></video>
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
