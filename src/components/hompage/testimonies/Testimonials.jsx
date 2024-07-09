import "./testimonials.css";

function Testimonials() {
  return (
    <div>
      <div className="" id="testimonial">
        <div className="testimonial__container">
          <h1>Loved by businesses worldwide. </h1>
          <p>
            Our software is so simple that people can not help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features
          </p>
          <div className="testimonial__wrapper">
            <div className="testimonial__card">
              <i className="bx bxs-quote-alt-left blockquote__icon"></i>
              <blockquote className="testimonial__blockquote">
                <p>
                  TaxPal is so easy to use I can’t help but wonder if it’s
                  really doing the things the government expects me to do.
                </p>
              </blockquote>

              <div className="testimonial__info">
                <div>
                  <h2>Sheryl Berge</h2>
                  <p>CEO at Lynch LLC</p>
                </div>
                <img src="image/avatars/avatar-1.png" alt="Sheryl Berge" />
              </div>
            </div>
            <div className="testimonial__card">
              <i className="bx bxs-quote-alt-left blockquote__icon"></i>
              <blockquote className="testimonial__blockquote">
                <p>
                  I’m trying to get a hold of someone in support, I’m in a lot
                  of trouble right now and they are saying it has something to
                  do with my books. Please get back to me right away.
                </p>
              </blockquote>
              <div className="testimonial__info">
                <div>
                  <h2>Amy Hahn</h2>
                  <p>Director at Velocity Industries</p>
                </div>
                <img src="image/avatars/avatar-4.png" alt="Sheryl Berge" />
              </div>
            </div>
            <div className="testimonial__card">
              <i className="bx bxs-quote-alt-left blockquote__icon"></i>
              <blockquote className="testimonial__blockquote">
                <p>
                  The best part about TaxPal is every time I pay my employees,
                  my bank balance doesn’t go down like it used to. Looking
                  forward to spending this extra cash when I figure out why my
                  card is being declined..
                </p>
              </blockquote>
              <div className="testimonial__info">
                <div>
                  <h2>Leland Kiehn</h2>
                  <p>Founder of Kiehn and Sons</p>
                </div>
                <img src="image/avatars/avatar-5.png" alt="Sheryl Berge" />
              </div>
            </div>
            <div className="testimonial__card">
              <i className="bx bxs-quote-alt-left blockquote__icon"></i>
              <blockquote className="testimonial__blockquote">
                <p>
                  There are so many things I had to do with my old software that
                  I just don’t do at all with TaxPal. Suspicious but I can’t say
                  I don’t love it.
                </p>
              </blockquote>
              <div className="testimonial__info">
                <div>
                  <h2>Erin Powlowski</h2>
                  <p>COO at Armstrong Inc.</p>
                </div>
                <img src="image/avatars/avatar-2.png" alt="Sheryl Berge" />
              </div>
            </div>
            <div className="testimonial__card">
              <i className="bx bxs-quote-alt-left blockquote__icon"></i>
              <blockquote className="testimonial__blockquote">
                <p>
                  I used to have to remit tax to the EU and with TaxPal I
                  somehow don’t have to do that anymore. Nervous to travel there
                  now though.
                </p>
              </blockquote>
              <div className="testimonial__info">
                <div>
                  <h2>Peter Renolds</h2>
                  <p>Founder of West Inc.</p>
                </div>
                <img src="image/avatars/avatar-3.png" alt="Sheryl Berge" />
              </div>
            </div>
            <div className="testimonial__card">
              <i className="bx bxs-quote-alt-left blockquote__icon"></i>
              <blockquote className="testimonial__blockquote">
                <p>
                  This is the fourth email I’ve sent to your support team. I am
                  literally being held in jail for tax fraud. Please answer your
                  damn emails, this is important.
                </p>
              </blockquote>
              <div className="testimonial__info">
                <div>
                  <h2>Amy Hahn</h2>
                  <p>Director at Velocity Industries</p>
                </div>
                <img src="image/avatars/avatar-4.png" alt="Sheryl Berge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
