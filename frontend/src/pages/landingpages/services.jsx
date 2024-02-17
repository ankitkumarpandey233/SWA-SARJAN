import React from 'react';
import image1 from '../../assets/subtitle-img-green.png';
import image2 from '../../assets/service-map.png';

function Services() {
    return (
        <>
      <section class="section service" id="service"style={{ backgroundImage: `url(${image2})` }}>
        <div class="container">

          <p class="section-subtitle">
            <img src={image1} width="32" height="7" alt="Wavy line"/>

            <span>What We Do</span>
          </p>

          <h2 class="h2 section-title">
            We Work Differently to <strong>keep The World Safe</strong>
          </h2>

          <ul class="service-list">

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="leaf-outline"></ion-icon>
                </div>

                <h3 class="h3 card-title">Save Nature</h3>

                <p class="card-text">
                  Tempor incididunt ut labores
                  dolore magna suspene
                </p>

                <a href="#" class="btn-link">
                  <span>Read More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="earth-outline"></ion-icon>
                </div>

                <h3 class="h3 card-title">Save Ecology</h3>

                <p class="card-text">
                  Tempor incididunt ut labores
                  dolore magna suspene
                </p>

                <a href="#" class="btn-link">
                  <span>Read More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="flower-outline"></ion-icon>
                </div>

                <h3 class="h3 card-title">Tree Plantation</h3>

                <p class="card-text">
                  Tempor incididunt ut labores
                  dolore magna suspene
                </p>

                <a href="#" class="btn-link">
                  <span>Read More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <h3 class="h3 card-title">Clear Ocean</h3>

                <p class="card-text">
                  Tempor incididunt ut labores
                  dolore magna suspene
                </p>

                <a href="#" class="btn-link">
                  <span>Read More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

          </ul>

        </div>
      </section>
        </>
    );
}

export default Services;
