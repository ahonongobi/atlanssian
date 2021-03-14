import React from "react";
import "./Navtop.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import img from "../home_illo@2x.png";

function Main() {
  return (
    <main className="principale" role="main">
      <section className="hero">
        <div className="hero__container">
          <div className="hero__left--col hero__img--wrapper">
            <img width="600" height="500" src={img} alt="" srcset="" />
          </div>
          <div className="hero__right--col">
            <div className="hero__text--wrapper">
              <h1 className="hero__headline">Where Work Happens</h1>
              <p className="hero__copy copy">
                When your team needs to kick off a project, hire a new employee,
                deploy some code, review a sales contract, finalize next year's
                budget, measure an A/B test, plan your next office opening, and
                more, Slack has you covered.
              </p>
            </div>
            <button className="gobi__2 btn2 hero__button--cta button--primary">
              Commencer
              <KeyboardArrowRightIcon />
            </button>
            <p className="hero__copy copy copy--mini-small">
              Already using Confluence bj?{" "}
              <a href="#" aria-label="cta--sign-in">
                Se connecter
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Main;
