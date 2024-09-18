export default function Navbar() {
  return (
    <nav className="grid-1 fix-top bg-white p-4 rounded-2xl border-primary z-20">
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="152"
          height="37"
          viewBox="0 0 152 37"
          fill="none">
          <path
            d="M76.5638 2.00842H81.2197L90.661 35.4479L100.042 2.00842H104.698L94.7036 35.4734H86.5493L76.5638 2.00842Z"
            fill="#39442B"
          />
          <path
            d="M21.1689 2.00842V16.2557H4.9208V16.2387H2.26894L4.9208 13.5749V2.00842H0.549988V35.465H4.9208V20.3155H21.1689V35.465H25.5311V2.00842H21.1689Z"
            fill="#39442B"
          />
          <path
            d="M46.772 31.5414H44.3101L46.772 29.0648V20.1708H61.7676V16.2557H46.772V5.92347H63.2706V2.00842H42.4098V35.465H63.2706V31.55H46.772V31.5414Z"
            fill="#39442B"
          />
          <path
            d="M132.141 2.00842H124.281L113.708 35.4734H118.415L121.033 26.8178H135.295L137.911 35.4734H142.62L132.141 2.00842ZM122.199 22.988H119.97L123.046 20.0687L128.271 2.03396L134.128 22.9964H122.191L122.199 22.988Z"
            fill="#39442B"
          />
        </svg>
      </a>

      <div className="right-nav xl:flex-between md:flex-end gap-3 flex-1 max-w-screen-xl">
        <a href="#pricing" className="nav-items h-[26px] btn-hover hidden xl:block md:hidden">
          <p>treatments</p>
          <p className="text-amber-300">treatments</p>
        </a>
        <a href="#about" className="nav-items h-[26px] btn-hover hidden xl:block md:hidden">
          <p>About</p>
          <p className="text-amber-300">About</p>
        </a>
        <a href="#contact" className="nav-items h-[26px] btn-hover hidden xl:block md:hidden">
          <p>contact</p>
          <p className="text-amber-300">contact</p>
        </a>
        <a href="#" className="nav-items h-[26px] btn-hover hidden xl:block md:hidden">
          <p>research</p>
          <p className="text-amber-300">research</p>
        </a>
        <a href="#" className="nav-items h-[26px] btn-hover hidden xl:block md:hidden">
          <p>partners</p>
          <p className="text-amber-300">partners</p>
        </a>
        <a href="#" className="nav-items h-[26px] btn-hover hidden xl:block md:hidden">
          <p>login</p>
          <p className="text-amber-300">login</p>
        </a>

        {/* "Get started" and SVG always visible */}
        <a
          href="#"
          className="nav-items border-small flex-center hover:bg-primary hover:text-yellow transition">
          get started
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.91857 2.83278H11.8569C12.2827 2.83278 12.6279 3.17794 12.6279 3.6037V10.542C12.6279 10.9678 12.2827 11.313 11.8569 11.313C11.4311 11.313 11.086 10.9678 11.086 10.542V5.46488L3.15092 13.3999L2.06067 12.3097L9.99572 4.37463H4.91857C4.49279 4.37463 4.14765 4.02947 4.14765 3.6037C4.14765 3.17794 4.49279 2.83278 4.91857 2.83278Z"
                fill="#39442B"
              />
            </svg>
          </span>
        </a>
      </div>
    </nav>
  );
}
