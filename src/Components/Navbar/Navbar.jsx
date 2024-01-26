import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Navbar.css';
import Logo from '../../Assests/logo.png';




const Navbar = () => {

  const [isMobileMenu, setIsMobileMenu] = useState('');


  const MobileClick = () => {

    setIsMobileMenu(prevState => prevState === 'MobileMenuActive' ? '' : 'MobileMenuActive');
    console.log(isMobileMenu);
  }





  const navAni = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const Menu = gsap.timeline({
      scrollTrigger: {
        trigger: '#navigationBar',
        start: 'top -10%',
        end: 'top -11%',
        scrub: true,
      },
    });

    Menu.to(
      '#mobileMenuDiv',
      {
        backgroundColor: '#000000',
        duration: 0.1,
      },
      '<'
    );
  }, [isMobileMenu]);



  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline for navbar animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#navigationBar',
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1,
      },
    });

    tl.to('#navigationBar', {
      backgroundColor: '#000000',
      duration: 0.5,
      height: '5rem',
    });





    const cursor = document.querySelector(".cursor");
    var h4all = document.querySelectorAll(".navigationBar .NavUl .NavLi");
    // console.log(h4all)
    h4all.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3;
        cursor.style.border = "0.5px solid #fff";
        cursor.style.backgroundColor = "transparent";
      });
      elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E";
      });
    });

    // Cleanup function
    return () => {
      // Kill the timeline when component unmounts
      tl.kill();
    };
  }, []);



  return (
    <>
      <div className="navigationBar" id='navigationBar' ref={navAni}>
        <div className="logoDiv">
          <img src={Logo} className='Logo' alt="" />
        </div>
        <ul className="NavUl">
          <li className='NavLi'><a href="/">Home</a></li>
          <li className='NavLi'><a href="/">Location</a></li>
          <li className='NavLi'><a href="/">Enquiry</a></li>
          <li className='NavLi'><a href="/">Photos</a></li>
        </ul>
        <div className="MobileMenu" onClick={MobileClick}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="10px" viewBox="0 0 1024 1024" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2 18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z"></path>
          </svg>
        </div>
      </div>
      <div className={`mobileMenuDiv ${isMobileMenu}`} id='mobileMenuDiv' ref={navAni}>
        <ul className="mobileMenuDivNavUl">
          <li className='mobileMenuDivNavLi'><a href="/">Home</a></li>
          <li className='mobileMenuDivNavLi'><a href="/">Location</a></li>
          <li className='mobileMenuDivNavLi'><a href="/">Enquiry</a></li>
          <li className='mobileMenuDivNavLi'><a href="/">Photos</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
