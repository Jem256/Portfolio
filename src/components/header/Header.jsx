import React from 'react';
import './Header.css';
import { IoIosArrowDown } from 'react-icons/io';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h2 className="greet">Hello I'm</h2>
        <h1>Nagasha Jemimah</h1>
        <h2 className="text-light">
          A web developer based in <br /> Kampala, Uganda. I love building
          beautiful interfaces, <br /> web apps, and everything in between!
        </h2>
        <CTA />
        <HeaderSocials />
        <div className="center-con">
          <div className="round">
            <a href="/" className="cta-arrow bounceAlpha">
              <IoIosArrowDown className="arrow primera font-semibold" />
              <IoIosArrowDown className="arrow segunda font-semibold" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
