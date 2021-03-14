import React from "react";
import "./Navtop.css";

export default function Mainpartthree() {
  return (
    <section classNameName="cta">
      <div className="cta__container mt-5">
        <div className="cta__left--col">
          <h2 className="hero__headline cta__header">Try it for free</h2>
          <p className="copy--mini-medium copy cta__copy">
            Already using Slack?{" "}
            <a href="#" aria-label="cta--sign-in">
              Sign in
            </a>
          </p>
        </div>
        <div className="cta__right--col">
          <button className="gobi__2 btn2">Get started</button>
        </div>
      </div>
    </section>
  );
}
