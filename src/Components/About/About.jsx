import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
            <div className="aboutMain">
                <img className='aboutImg' src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww" alt="" />
                <div className="aboutTextContain">
                    <h3 className='aboutMainHeader'>About Us</h3>
                    <p className='aboutP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aut quam, nihil vero eum sapiente deserunt quaerat maiores assumenda nulla!</p>
                </div>
                <img className='aboutImg' src="https://images.unsplash.com/photo-1581009137042-c552e485697a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="cardsContainer">
                <div className="card card1">
                    <div className="overlay">
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consectetur.</p>
                    </div>
                </div>
                <div className="card card2">
                    <div className="overlay">
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consectetur.</p>
                    </div>
                </div>
                <div className="card card3">
                    <div className="overlay">
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consectetur.</p>
                    </div>
                </div>
            </div>
            <div id="green-div">
                <img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="" />
                <h4>
                    SIGN UP FOR SIDCUP NEWS AND SPECIAL OFFERS STRAIGHT TO YOUR INBOX
                </h4>
                <img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="" />
            </div>

            <div id="page3">
                <p>
                    Excellent couple of hours, relax and enjoy in the fun. Staff were
                    accommodating, friendly and very helpful. Café on site for
                    refreshments etc. Will keep children enterntained during the holidays.
                    Worth a visit if you havent been.
                </p>
                <img id="colon1" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" alt="" style={{ transform: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }} />
                <img id="colon2" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg" alt="" style={{ transform: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }} />

            </div>
        </>
    )
}

export default About
