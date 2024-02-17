import React from 'react';
import image1 from '../../assets/partner-1.png';
import image2 from '../../assets/partner-1-active.png';
import image3 from '../../assets/partner-2.png';
import image4 from '../../assets/partner-2-active.png';
import image5 from '../../assets/partner-3.png';
import image6 from '../../assets/partner-3-active.png';
import image7 from '../../assets/partner-4.png';
import image8 from '../../assets/partner-4-active.png';
import image9 from '../../assets/partner-5.png';
import image10 from '../../assets/partner-5-active.png';


function Partners() {
    return (
        <>
            <section className="section partner">
                <div className="container">

                    <a href="#" className="partner-logo">
                        <img src={image1} width="157" height="55" loading="lazy" alt="Children Fund"
                            className="gray"/>

                        <img src={image2} width="157" height="55" loading="lazy" alt="Children Fund"
                            className="color"/>
                    </a>

                    <a href="#" className="partner-logo">
                        <img src={image3} width="163" height="55" loading="lazy" alt="Non Profit Agency"
                            className="gray"/>

                        <img src={image4} width="163" height="55" loading="lazy"
                            alt="Non Profit Agency" className="color"/>
                    </a>

                    <a href="#" className="partner-logo">
                        <img src={image5} width="149" height="55" loading="lazy" alt="Rise Hand Help Us"
                            className="gray"/>

                        <img src={image6} width="149" height="55" loading="lazy"
                            alt="Rise Hand Help Us" className="color"/>
                    </a>

                    <a href="#" className="partner-logo">
                        <img src={image7} width="169" height="58" loading="lazy" alt="Helping" className="gray"/>

                        <img src={image8}width="169" height="58" loading="lazy" alt="Helping"
                            className="color"/>
                    </a>

                    <a href="#" className="partner-logo">
                        <img src={image9} width="211" height="55" loading="lazy" alt="Poor Fund Organization"
                            className="gray"/>

                        <img src={image10} width="211" height="55" loading="lazy"
                            alt="Poor Fund Organization" className="color"/>
                    </a>

                </div>
            </section>
        </>
    );
}

export default Partners;
