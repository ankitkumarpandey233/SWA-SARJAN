import React from 'react';
import image1 from '../../assets/image6.jpg';

const Testimonials = () => {
  return (
<>
<section className="testi">

<div className="testi-content">

  <p className="section-subtitle">
    <img src="./assets/images/subtitle-img-green.png" width="32" height="7" alt="Wavy line"/>
    <span>Our Testimonials</span>
  </p>
  <h2 className="h2 section-title">
    What People Say About <strong>Our Organization</strong>
  </h2>
  <div className="testi-card">

    <figure className="card-avatar">
      <img src="#" width="60" height="60" loading="lazy" alt="David S. Neuman"/>
    </figure>

    <div>
      <blockquote className="testi-text">
        Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem
        aperiam eaquesa
        quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo enimpsam voluptatem
      </blockquote>

      <h3 className="testi-name">David S. Neuman</h3>

      <p className="testi-title">Business Manager</p>
    </div>

  </div>

</div>

<figure className="testi-banner">
  <img src={image1} width="960" height="846" loading="lazy" alt="Rhinoceros"
    className="img-cover"/>
</figure>

</section>
</>
  );
};

export default Testimonials;
