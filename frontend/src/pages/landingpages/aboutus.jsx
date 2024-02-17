import React from 'react';
import image1 from '../../assets/deco-img.png';
import image2 from '../../assets/image3.jpg';
import image3 from '../../assets/image4.jpg';
import image4 from '../../assets/image5.jpg';
import image5 from '../../assets/image6.jpg';
import image6 from '../../assets/subtitle-img-green.png';
function AboutUs() {
        return (
                <>
            <section className="section about" id="about">
                <div className="container">

                    <div className="about-banner">

                        <h2 className="deco-title">About Us</h2>

                        <img src={image1} width="58" height="261" alt="" className="deco-img"/>

                        <div className="banner-row">

                            <div className="banner-col">
                                <img src={image2} width="315" height="380" loading="lazy" alt="Tiger"
                                    className="about-img w-100"/>

                                <img src={image3} width="386" height="250" loading="lazy" alt="Panda"
                                    className="about-img about-img-2 w-100"/>
                            </div>

                            <div className="banner-col">
                                <img src={image4} width="250" height="277" loading="lazy" alt="Elephant"
                                    className="about-img about-img-3 w-100"/>

                                <img src={image5} width="315" height="380" loading="lazy" alt="Deer"
                                    className="about-img w-100"/>
                            </div>

                        </div>

                    </div>

                    <div className="about-content">

                        <p className="section-subtitle">
                            <img src={image6} width="32" height="7" alt="Wavy line"/>

                            <span>Why Choose Us</span>
                        </p>

                        <h2 className="h2 section-title">
                            Rise Your Hand to Save <strong>World Animals Life</strong>
                        </h2>

                        <ul className="tab-nav">

                            <li>
                                <button className="tab-btn active">Our Mission</button>
                            </li>

                            <li>
                                <button className="tab-btn">Our Vision</button>
                            </li>

                            <li>
                                <button className="tab-btn">Next Plan</button>
                            </li>

                        </ul>

                        <div className="tab-content">

                            <p className="section-text">
                                But I must explain to you how all this mistaken denouncing pleasure and praising pain was born and I
                                will give you a
                                complete account of the system expoundmaster
                            </p>

                            <ul className="tab-list">

                                <li className="tab-item">
                                    <div className="item-icon">
                                        <ion-icon name="checkmark-circle"></ion-icon>
                                    </div>

                                    <p className="tab-text">Charity For Foods</p>
                                </li>

                                <li className="tab-item">
                                    <div className="item-icon">
                                        <ion-icon name="checkmark-circle"></ion-icon>
                                    </div>

                                    <p className="tab-text">Charity For Education</p>
                                </li>

                                <li className="tab-item">
                                    <div className="item-icon">
                                        <ion-icon name="checkmark-circle"></ion-icon>
                                    </div>

                                    <p className="tab-text">Charity For Water</p>
                                </li>

                                <li className="tab-item">
                                    <div className="item-icon">
                                        <ion-icon name="checkmark-circle"></ion-icon>
                                    </div>

                                    <p className="tab-text">Charity For Medical</p>
                                </li>

                            </ul>

                            <button className="btn btn-secondary">
                                <span>Learn More Us</span>

                                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                            </button>

                        </div>

                    </div>

                </div>
            </section>
                </>
        );
}

export default AboutUs;
