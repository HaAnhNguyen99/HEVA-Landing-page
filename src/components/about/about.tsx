const About = () => {
  const aboutImg1 =
    'https://cdn.prod.website-files.com/663943bed8a37337f94a3f67/6647873f3ff3ce624cfa79d5_Home_1.webp';
  const aboutImg2 =
    'https://cdn.prod.website-files.com/663943bed8a37337f94a3f67/6647873f9a00a00b9980599a_Home_2.webp';
  const aboutImg3 =
    'https://cdn.prod.website-files.com/663943bed8a37337f94a3f67/6647873f9a00a00b9980599a_Home_3.webp';
  return (
    <>
      <section id="about" className="about_container">
        <div className="about_header mt-20" data-aos-anchor-placement="center-center">
          <div className="about_header_text ">
            <h2 className="about_header_text_title " data-aos="fade-down" data-aos-duration="1000">
              About - us
            </h2>
          </div>
          <div className="about-list mt-10">
            <ul>
              <li className="mt-5" data-aos="fade-down" data-aos-duration="1000">
                No more dismissal.
              </li>
              <li className="mt-5" data-aos="fade-down" data-aos-duration="1000">
                No more one-size-fits-all.
              </li>
              <li className="mt-5" data-aos="fade-down" data-aos-duration="1000">
                No two lives are alike, so Heva builds your health plan around you
              </li>
              <li className="mt-5" data-aos="fade-down" data-aos-duration="1000">
                Your unique health factors help us pinpoint wellness
              </li>
              <li className="mt-5" data-aos="fade-down" data-aos-duration="1000">
                needs with precision, and our doctors distill your
              </li>
              <li className="mt-5" data-aos="fade-down" data-aos-duration="1000">
                distinct data into actionable treatment plans.
              </li>
            </ul>
          </div>
        </div>

        <div className="about-img-container flex-between gap-36 ">
          <img
            src={aboutImg1}
            alt="about-img-1"
            className="about-img-container_img1 img horizontal-square"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            src={aboutImg2}
            alt="about-img-2 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="about-img-container_img2 img vertical-square"
            data-aos="fade-down"
            data-aos-duration="1000"
          />
          <video
            src="https://storage.googleapis.com/evirts-marketing-bucket/Heva/Home_1.mp4"
            className="about-img-container_img3 horizontal-square img"
            data-aos="fade-down"
            data-aos-duration="1000"></video>
        </div>
      </section>
    </>
  );
};

export default About;
