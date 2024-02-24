import React from 'react';
import image1 from '../../assets/subtitle-img-green.png';

function Events() {
    return (
<>
<section className="section event" id="event">
                <div className="container">

                    <p className="section-subtitle">
                        <img src={image1} width="32" height="7" alt="Wavy line"/>

                        <span>Event & Program</span>

                        <img src={image1} width="32" height="7" alt="Wavy line"/>
                    </p>

                    <h2 className="h2 section-title">
                        Our Most Popular Causes For <strong>Building Fund</strong>
                    </h2>

                    <ul className="event-list">

                        <li>
                            <div className="event-card">

                                <time className="card-time" datetime="01-05">
                                    <span className="month">Mar</span>

                                    <span className="date">05</span>
                                </time>

                                <div className="wrapper">

                                    <div className="card-content">
                                        <p className="card-subtitle">Education</p>

                                        <h3 className="card-title">Far from the countries Vokalia and Consonantia 2022</h3>

                                        <p className="card-text">
                                            Sit amet consectetur adipiscing elit sed do eiusmod tempor
                                        </p>
                                    </div>

                                    <button className="btn btn-white">
                                        <span>View Events</span>

                                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                    </button>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="event-card">

                                <time className="card-time" datetime="02-23">
                                    <span className="month">Feb</span>

                                    <span className="date">23</span>
                                </time>

                                <div className="wrapper">

                                    <div className="card-content">
                                        <p className="card-subtitle">Healthcare</p>

                                        <h3 className="card-title">Far from the countries Vokalia and Consonantia 2022</h3>

                                        <p className="card-text">
                                            Sit amet consectetur adipiscing elit sed do eiusmod tempor
                                        </p>
                                    </div>

                                    <button className="btn btn-white">
                                        <span>View Events</span>

                                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                    </button>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="event-card">

                                <time className="card-time" datetime="03-27">
                                    <span className="month">Mar</span>

                                    <span className="date">27</span>
                                </time>

                                <div className="wrapper">

                                    <div className="card-content">
                                        <p className="card-subtitle">Livelihood</p>

                                        <h3 className="card-title">Far from the countries Vokalia and Consonantia 2022</h3>

                                        <p className="card-text">
                                            Sit amet consectetur adipiscing elit sed do eiusmod tempor
                                        </p>
                                    </div>

                                    <button className="btn btn-white">
                                        <span>View Events</span>

                                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                    </button>

                                </div>

                            </div>
                        </li>

                    </ul>

                    <button className="btn btn-secondary">
                        <span>Learn More Us</span>

                        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                    </button>

                </div>
            </section>
</>
    );
}

export default Events;
