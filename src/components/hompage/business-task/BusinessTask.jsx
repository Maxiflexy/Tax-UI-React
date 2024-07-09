import "./business-task.css";

function BusinessTask() {
  return (
    <div id="business__task">
      <div className="business__task__container">
        <h1 className="title">Simplify everyday business tasks. </h1>
        <p className="sub__title">
          Because you would probably be a little confused if we suggested you
          complicate your everyday business tasks instead.
        </p>
        <div className="business__task__cards">
          <div className="card">
            <div className="card__icon">
              <i className="bx bxs-report"></i>
            </div>
            <h5>Reporting</h5>
            <h1>
              Stay on top of things with always up-to-date reporting features.
            </h1>
            <p>
              We talked about reporting in the section above but we needed three
              items here, so mentioning it one more time for posterity.
            </p>
          </div>
          <div className="card">
            <div className="card__icon">
              <i className="bx bxs-bank"></i>
            </div>
            <h5 className="info">Inventory</h5>
            <h1>
              Never lose track of what is in stock with accurate inventory
              tracking.
            </h1>
            <p>
              We do not offer this as part of our software but that statement is
              inarguably true. Accurate inventory tracking would help you for
              sure.
            </p>
          </div>
          <div className="card">
            <div className="card__icon">
              <i className="bx bxs-contact"></i>
            </div>
            <h5 className="info">Contacts</h5>
            <h1>
              Organize all of your contacts, service providers, and invoices in
              one place.
            </h1>
            <p>
              This also is not actually a feature, it is just some friendly
              advice. We definitely recommend that you do this, you will feel
              really organized and professional.
            </p>
          </div>
        </div>
        <div className="business__task__image">
          <img src="image/profit-loss.png" alt="" />
          <img src="image/inventory.png" alt="" />
          <img src="image/contacts.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BusinessTask;
