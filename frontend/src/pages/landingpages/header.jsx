import React, { useState, useEffect } from 'react';


function Header() {
  const [isSticky, setSticky] = useState(false);

  const checkScrollTop = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <>
      <header className={`header ${isSticky ? 'active' : ''}`} data-header>
      <div className="container">

<h1>
  <a href="#" className="logo">Swa-Sarjan</a>
</h1>


<button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
  <ion-icon name="menu-outline"></ion-icon>
</button>

<nav className="navbar" data-navbar>

  <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
    <ion-icon name="close-outline"></ion-icon>
  </button>

  <a href="#" className="logo">Swa-Sarjan</a>

  <ul className="navbar-list">

    <li>
      <a href="#home" className="navbar-link" data-nav-link>
        <span>Home</span>

        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
      </a>
    </li>

    <li>
      <a href="#about" className="navbar-link" data-nav-link>
        <span>About</span>

        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
      </a>
    </li>

    <li>
      <a href="#service" className="navbar-link" data-nav-link>
        <span>Service</span>

        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
      </a>
    </li>

    <li>
      <a href="#donate" className="navbar-link" data-nav-link>
        <span>Donate</span>

        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
      </a>
    </li>

    <li>
      <a href="#event" className="navbar-link" data-nav-link>
        <span>Event</span>

        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
      </a>
    </li>

    <li>
      <a href="#" className="navbar-link" data-nav-link>
        <span>Contact</span>

        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
      </a>
    </li>

  </ul>

</nav>

<div className="header-action">

  <button className="search-btn" aria-label="Search">
    <ion-icon name="search-outline"></ion-icon>
  </button>

  <button className="btn btn-primary">
    <span>Donation</span>

    <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
  </button>

</div>

</div>
      </header>
    </>
  );
}

export default Header;