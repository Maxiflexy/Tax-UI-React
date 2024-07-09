import "./pricing.css";

function Pricing() {
  return (
    <div id="pricing">
      <div className="pricing__container">
        <h1>Simple pricing, for everyone.</h1>
        <p>
          It doesn’t matter what size your business is, our software won’t work
          well for you.
        </p>
        <div className="pricing__wrapper">
          <div className="pricing__card">
            <h1>$9</h1>
            <p>Starter</p>
            <p className="title">
              Good for anyone who is self-employed and just getting started.
            </p>
            <a href="#">Get Started</a>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Send 10 quotes and invoices</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Connect up to 2 bank accounts</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Track up to 15 expenses per month</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Manual payroll support</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Export up to 3 reports</p>
            </div>
          </div>
          <div className="pricing__card popular">
            <h1>$15</h1>
            <p>Small business</p>
            <p className="title">
              Perfect for small / medium sized businesses.
            </p>
            <a href="#">Get Started</a>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Send 25 quotes and invoices</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Connect up to 5 bank accounts</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Track up to 50 expenses per month</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Automated payroll support</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Export up to 12 reports</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Bulk reconcile transactions</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Track in multiple currencies</p>
            </div>
          </div>
          <div className="pricing__card">
            <h1>$39</h1>
            <p>Enterprise</p>
            <p className="title">For even the biggest enterprise companies</p>
            <a href="#">Get Started</a>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Send unlimited quotes and invoices</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Connect up to 15 bank accounts</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Track up to 200 expenses per month</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Automated payroll support</p>
            </div>
            <div>
              <i className="bx bx-check-circle"></i>
              <p>Export up to 25 reports, including TPS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
