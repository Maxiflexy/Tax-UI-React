import "./homepage.css";

function HereSection() {
  return (
    <div>
      <div id="hero">
        <div className="hero__wrapper">
          <div>
            <h1>
              Accounting <span>made simple</span> for small businesses.
            </h1>
            <p className="booking">
              Most bookkeeping software is accurate, but hard to use. We make
              the opposite trade-off, and hope you don’t get audited.
            </p>
            <div className="hero__btns">
              <a className="hero__btn first" href="#">
                Get 6 months free
              </a>
              <a className="hero__btn second" href="#">
                {" "}
                <i className="bx bx-play"></i> Watch video{" "}
              </a>
            </div>
            <p className="Trusted__companies">
              Trusted by these six companies so far
            </p>
            <div className="companies">
              <img src="/image/transistor.svg" alt="Transistor" />
              <img src="/image/tuple.svg" alt="Tuple" />
              <img src="/image/statickit.svg" alt="Statickit" />
              <img src="/image/mirage.svg" alt="Mirage" />
              <img src="/image/laravel.svg" alt="Laravel" />
              <img src="/image/statamic.svg" alt="Statamic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HereSection;
