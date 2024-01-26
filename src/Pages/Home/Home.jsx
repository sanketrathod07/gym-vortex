import React, { useEffect } from 'react'
import './Home.css'
import Video from '../../Assests/video2.mp4'
import NorthIcon from '@mui/icons-material/North';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from '../../Components/About/About';
import Logo from '../../Assests/logo.png'




// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


const Home = () => {

  


  useEffect(() => {
    gsap.to(".HomeMain", {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: ".HomeMain",
        scroller: "body",
        // markers: true,
        start: "top -15%",
        end: "top -50%",
        scrub: 2,
      },
    });
  }, []); 
  return (
    <>
      <video
        className='HomeBGVideo'
        autoPlay
        loop
        muted
        src={Video}
      ></video>
      <div className='HomeMain'>
        <div className="page1">
          <div className="HomeTextContain">
            <h1>TRAIN. REFUEL. PLAY.</h1>
            <h2>WELCOME TO SIDCUP FAMILY GOLF!</h2>
            <p>
              Sidcup Family Golf is a multipurpose golf facility located in Sidcup,
              South East London. Passionate about technology, player development and
              making golf fun and accessible to everyone.
            </p>
          </div>
          <div className="arrow">
            <NorthIcon style={{ height: "2rem", width: "2rem" }} />
          </div>
        </div>
        <div className="page2">
          <div className="scroller">
            <div className="scroller-in">
              <h4>TRAINING PROGRAMS</h4>
              <h4>FITNESS CLASSES</h4>
              <h4>STRENGTH WORKOUTS</h4>
              <h4>HEALTHY CAFÉ</h4>
              <h4>ATHLETIC EVENTS</h4>
            </div>
            <div className="scroller-in">
              <h4>TRAINING PROGRAMS</h4>
              <h4>FITNESS CLASSES</h4>
              <h4>STRENGTH WORKOUTS</h4>
              <h4>HEALTHY CAFÉ</h4>
              <h4>ATHLETIC EVENTS</h4>
            </div>
          </div>
        </div>
        <div className="page3">
          <About />
          <div id="footer">
            <img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg" alt="" />
            <div className="SubFooter1">
              <div className="FooterLogoMain">
                <img className='FooterLogo' src={Logo} alt="LOGO NOT FOUND" />
                <p className='FooterDescription'>Call Us <span>+917800000089</span></p>
              </div>
              <div className="map">
                <h5 className="mapHeader">Our Location:-</h5>
                <iframe
                  title='1'
                  src="https://embed.waze.com/iframe?zoom=14&lat=19.876165&lon=75.343314&ct=livemap"
                  style={{
                    width: '100%',
                    height: '330px',
                    '@media (maxWidth: 700px)': {
                      width: '100%',
                      height: '330px'
                    }
                  }}
                  allowFullScreen
                ></iframe>

              </div>
            </div>
            <div className="SubFooter2">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
