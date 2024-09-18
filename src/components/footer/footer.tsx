import Paragragh from '../paragragh/paragragh';
const Footer = () => {
  return (
    <section
      id="contact"
      className=" min-h-screen u-bg-green text-white relative px-10 overflow-hidden">
      <div className="flex justify-center" data-aos="fade-down" data-aos-duration="1000">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="152"
          height="37"
          viewBox="0 0 152 37"
          fill="none"
          className="text-lightYellow mt-10">
          <path
            d="M76.5638 2.00842H81.2197L90.661 35.4479L100.042 2.00842H104.698L94.7036 35.4734H86.5493L76.5638 2.00842Z"
            fill="currentColor"
          />
          <path
            d="M21.1689 2.00842V16.2557H4.9208V16.2387H2.26894L4.9208 13.5749V2.00842H0.549988V35.465H4.9208V20.3155H21.1689V35.465H25.5311V2.00842H21.1689Z"
            fill="currentColor"
          />
          <path
            d="M46.772 31.5414H44.3101L46.772 29.0648V20.1708H61.7676V16.2557H46.772V5.92347H63.2706V2.00842H42.4098V35.465H63.2706V31.55H46.772V31.5414Z"
            fill="currentColor"
          />
          <path
            d="M132.141 2.00842H124.281L113.708 35.4734H118.415L121.033 26.8178H135.295L137.911 35.4734H142.62L132.141 2.00842ZM122.199 22.988H119.97L123.046 20.0687L128.271 2.03396L134.128 22.9964H122.191L122.199 22.988Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="footer-container font-Editorial mt-10 max-w-[50vw] mx-auto flex justify-between gap-3 flex-1  ">
        <a href="#" className="bot-items overflow-hidden ">
          <h3>treatments</h3>
          <h3 className=" text-yellow">treatments</h3>
        </a>
        <a href="#" className="bot-items overflow-hidden">
          <h3>About</h3>
          <h3 className=" text-yellow">About</h3>
        </a>
        <a href="#" className="bot-items overflow-hidden">
          <h3>contact</h3>
          <h3 className=" text-yellow">contact</h3>
        </a>
        <a href="#" className="bot-items overflow-hidden">
          <h3>research</h3>
          <h3 className=" text-yellow">research</h3>
        </a>
        <a href="#" className="bot-items overflow-hidden">
          <h3>partners</h3>
          <h3 className=" text-yellow">partners</h3>
        </a>
      </div>
      <input type="text" placeholder="Email address" className="email-input " />
      <button
        id="subscribe-btn"
        className="text-black btn-hover block bg-lightYellow rounded-2xl h-10 w-64 mx-auto mt-10 ">
        <p className="flex-center gap-2 py-2 px-20">
          Subscribe{' '}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.91857 2.83278H11.8569C12.2827 2.83278 12.6279 3.17794 12.6279 3.6037V10.542C12.6279 10.9678 12.2827 11.313 11.8569 11.313C11.4311 11.313 11.086 10.9678 11.086 10.542V5.46488L3.15092 13.3999L2.06067 12.3097L9.99572 4.37463H4.91857C4.49279 4.37463 4.14765 4.02947 4.14765 3.6037C4.14765 3.17794 4.49279 2.83278 4.91857 2.83278Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </p>
        <p className="flex-center gap-2 bg-yellow py-2 px-20 rounded-2xl">
          Subscribe{' '}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.91857 2.83278H11.8569C12.2827 2.83278 12.6279 3.17794 12.6279 3.6037V10.542C12.6279 10.9678 12.2827 11.313 11.8569 11.313C11.4311 11.313 11.086 10.9678 11.086 10.542V5.46488L3.15092 13.3999L2.06067 12.3097L9.99572 4.37463H4.91857C4.49279 4.37463 4.14765 4.02947 4.14765 3.6037C4.14765 3.17794 4.49279 2.83278 4.91857 2.83278Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </p>
      </button>
      <Paragragh bottom="24" />
      <footer className="flex-between absolute border-t-2 text-sm  border-lightYellow bottom-5  left-10 uppercase right-10 pt-5 px-10">
        <p>© 2024 The Green Clinic. All rights reserved.</p>
        <p className="flex gap-7 ">
          <a href="#" className="text-lightYellow">
            Privacy{' '}
          </a>
          <a href="#" className="text-lightYellow">
            Policy
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Footer;
