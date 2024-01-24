import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import './Navbar.css';
import Logo from '../../Assests/logo.png';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // GSAP Animation
    gsap.to('.navigationBar', {
      backgroundColor: '#000000',
      duration: 0.5,
      height: '5rem',
      scrollTrigger: {
        trigger: '.navigationBar',
        scroller: 'body',
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="navigationBar">
      <div className="logoDiv">
        <img src={Logo} className='Logo' alt="" />
      </div>
      <ul className="NavUl">
        <li className='NavLi'><a href="/">Home</a></li>
        <li className='NavLi'><a href="/">Location</a></li>
        <li className='NavLi'><a href="/">Enquiry</a></li>
        <li className='NavLi'><a href="/">Photos</a></li>
      </ul>
      <div className="MobileMenu">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="10px" viewBox="0 0 1024 1024" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2 18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
