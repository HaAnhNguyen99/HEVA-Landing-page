const Pricing = () => {
  return (
    <section id="pricing" className="pricing-container  min-h-screen ">
      <div className="pricing_header mb-14">
        <h2 className="text-primary font-EditorialUltralight ">Live the Heva Life</h2>
      </div>
      <div className="pricing-content xl:grid-1 md:flex-center md:gap-10 sm:gap-10 md:flex-col gap-10">
        <img
          data-aos="fade-right"
          data-aos-duration="5000"
          src="https://cdn.prod.website-files.com/663943bed8a37337f94a3f67/66478740b40605eeef1a1a7b_Home_Last.webp"
          alt=""
          className="rounded-2xl"
        />
        <div className="pricing-right-content font-EditorialUltralight flex flex-col gap-10">
          <div className="pricing-top-content" data-aos="fade-down" data-aos-duration="1000">
            Feeling good is a whole-person endeavor and an ever-evolving journey. Heva empowers you
            to up-level multiple areas of your health—simultaneously or one step at a time. It’s
            your custom treatment plan, at your pace.
            <p className="mt-3">Here’s how it works…</p>
          </div>
          <div className="pricing-bottom-content">
            <div
              className="pricing-table mt-5 font-roboto text-lg"
              data-aos="fade-down"
              data-aos-duration="1000">
              <div className="col">
                <div className="index">/01</div>
                <div className="content ">
                  <h4>
                    <span>
                      Sign up for your $99/mo Heva Wellness Plan to receive unlimited provider
                      consultations, any necessary labs, included 2-day shipping on treatments, and
                      deeply discounted medications.
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="pricing-table mt-5 font-roboto text-lg"
              data-aos="fade-down"
              data-aos-duration="1000">
              <div className="col">
                <div className="index">/02</div>
                <div className="content">
                  <h4>
                    <span>
                      Pick your first wellness journey and tell us about your health factors,
                      history, and goals.
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="pricing-table mt-5 font-roboto text-lg"
              data-aos="fade-down"
              data-aos-duration="1000">
              <div className="col">
                <div className="index">/03</div>
                <div className="content">
                  <h4>
                    <span>
                      A Heva doctor will review your profile and prescribe treatment (if it’s a good
                      match for you). Your Wellness Plan includes exceptionally competitive pricing
                      on leading medications.
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="pricing-table mt-5 font-roboto text-lg"
              data-aos="fade-down"
              data-aos-duration="1000">
              <div className="col">
                <div className="index">/04</div>
                <div className="content">
                  <h4>
                    <span>
                      After pharmacy processing, treatment is sent to your door with rapid 2-day
                      shipping.
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
