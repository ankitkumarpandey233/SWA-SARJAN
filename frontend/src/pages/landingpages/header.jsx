import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");

    const navElemArr = [navOpenBtn, navCloseBtn];

    const toggleNavbar = () => {
      navbar.classList.toggle("active");
    };

    const closeNavbar = () => {
      navbar.classList.remove("active");
    };

    for (let i = 0; i < navElemArr.length; i++) {
      navElemArr[i].addEventListener("click", toggleNavbar);
    }

    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    for (let i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].addEventListener("click", closeNavbar);
    }

    const header = document.querySelector("[data-header]");

    const handleScroll = () => {
      window.scrollY >= 50 ? header.classList.add("active") : header.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      for (let i = 0; i < navElemArr.length; i++) {
        navElemArr[i].removeEventListener("click", toggleNavbar);
      }

      for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].removeEventListener("click", closeNavbar);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  return (
    <>
      <header className="header" data-header>
      <div style={{ width: '100%', overflow: 'hidden' }}>
      <marquee behavior="scroll" direction="left">
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Coming Soon </div>
      </marquee>
    </div>

        <div className="container">
          <h1>
            <a href="#" className="logo">SwaSarjan</a>
          </h1>


          <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <nav className="navbar" data-navbar>

            <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <a href="#" className="logo">SwaSarjan</a>

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

              <li>
                <a href="#home" className="navbar-link" data-nav-link>
                  <span>Terms & condition</span>

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
              <span>login</span>

              <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
            </button>

          </div>

        </div>
      </header>
    </>
  );
}

export default Header;
