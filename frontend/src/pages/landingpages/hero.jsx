import React from 'react';
import image1 from '../../assets/subtitle-img-white.png';

function Hero() {
  return (
    <>
      <section className="hero" id="home"  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="container">

          <p className="section-subtitle">
            <img src={image1} width="32" height="7" alt="Wavy line"/>

            <span>Welcome to Wildvine</span>
          </p>

          <h2 className="h1 hero-title">
            Give Love for Saving <strong>World Animals</strong>
          </h2>

          <p className="hero-text">
            Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            suspendisse
            ultrices gravida.
          </p>

          <button className="btn btn-primary">
            <span>Donation</span>

            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>

        </div>
      </section>
    </>
  );
}

export default Hero;
