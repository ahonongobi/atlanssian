import React from "react";
import "./Navtop.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function Mainparttwo() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__top intro">
          <h1 className="hero__headline testimonials__headline">
            You're in good company
          </h1>
          <p className="testimonials__copy copy">
            Millions of people around the world have already made Slack the
            place where their work happens.
          </p>
          <button className="testimonials__button button--secondary">
            Discover why
            <KeyboardArrowRightIcon />
          </button>
        </div>
        <div className="testimonials__bottom logowall">
          <figure className="logowall__item">
            <img
              width="120"
              src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/harvard.png"
              alt=""
              srcset=""
            />
          </figure>
          <figure className="logowall__item">
            <img
              width="120"
              src="https://a.slack-edge.com/4b6fe/marketing/img/logos/company/los-angeles-times.png"
              alt=""
              srcset=""
            />
          </figure>
          <figure className="logowall__item">
            <img
              width="120"
              src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/capital_one.png"
              alt=""
              srcset=""
            />
          </figure>
          <figure className="logowall__item">
            <img
              width="120"
              src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/airbnb.png"
              alt=""
              srcset=""
            />
          </figure>
          <figure className="logowall__item">
            <img
              width="120"
              src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/oracle.png"
              alt=""
              srcset=""
            />
          </figure>
          <figure className="logowall__item">
            <img
              width="120"
              src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/ticketmaster.png"
              alt=""
              srcset=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
export default Mainparttwo;
