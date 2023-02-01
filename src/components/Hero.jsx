import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>Chess Players Info App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a href="#players" className="btn hero-btn">
            Explore Players
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
