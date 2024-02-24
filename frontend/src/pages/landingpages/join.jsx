import React from 'react';
import image1 from '../../assets/image7.jpg';
function Join() {
        return (
<>
<section className="section cta">
                <div className="container">

                    <div className="cta-content">
                        <h2 className="h2 section-title">32+ Trusted Global Partners</h2>

                        <button className="btn btn-outline">
                            <span>Become a Partner</span>

                            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                        </button>
                    </div>

                    <figure className="cta-banner">
                        <img src={image1} width="520" height="228" loading="lazy" alt="Fox"
                            className="img-cover"/>
                    </figure>

                </div>
            </section>
</>
        );
}

export default Join;
