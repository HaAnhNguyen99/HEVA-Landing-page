const Service = () => {
  return (
    <section className="service-container u-bg-green min-h-screen md:grid-1 sm:flex-center sm:gap-10 sm:flex-col">
      <div className="service_header" data-aos="fade-down" data-aos-duration="1000">
        <div className="sub ">(Custom Wellness)</div>
        <h2>Vitality is vital. Meet your one-of-a-kind wellness journey.</h2>
      </div>
      <div className="right-content max-w-[50ch] flex flex-col gap-4 white-text ml-[2.25rem]">
        <h4 className="service-right-header " data-aos="fade-up" data-aos-duration="1000">
          We know firsthand that well-being affects everything, from your energy and outlook to your
          ability to show up in relationships. This is your life. Make it a lively one.
        </h4>
        <div className="img-container bg-[#D9D9CE] overflow-hidden max-h-[500px] ">
          <img
            src="https://i.pinimg.com/originals/00/83/34/008334ae8224a582cf77c6518ef089c5.png"
            alt=""
            className="w-full h-full object-cover rounded-[1.25rem]"
            data-aos="fade-down"
            data-aos-duration="1000"
          />
        </div>
        <h3 className="font-EditorialNew">Simplicity is key. Support is power.</h3>
        <p className="font-EditorialNew tracking-widest">
          Your body’s needs are unique, and Heva’s responsive approach takes the mystery and
          inflexibility out of up-leveling your health. Your pathway, treatment, and dose can all be
          tailored with provider insight.
        </p>
      </div>
    </section>
  );
};

export default Service;
