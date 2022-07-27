import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
      <header>
          <div className='container header__container'>
              <h2>Hello I'm</h2>
              <h1>Nagasha Jemimah</h1>
              <h2 className='text-light'>
                  A web developer based in <br /> Kampala, Uganda. I love
                  building beautiful interfaces, <br /> web apps, and everything
                  in between!
              </h2>
              <CTA />
              <HeaderSocials />
          </div>
      </header>
  );
}

export default Header