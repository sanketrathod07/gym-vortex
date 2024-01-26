import React, { useEffect, useRef } from 'react'
import './About.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const About = () => {

    const aboutMainRef = useRef(null);
    const aboutMainCardRef = useRef(null);
    const leftColonRef = useRef(null);
    const rightColonRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#aboutMain",
                scroller: 'body',
                start: 'top 90%',
                end: 'top 60%',
                // markers:true,
                scrub: 2,
            },
        });

        tl.to("#aboutMain", {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            stagger: 0.1,
        }).to("#aboutMain img", {
            y: -50,
            duration: 1,
        });

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#cardsContainer",
                scroller: 'body',
                start: 'top 80%',
                end: 'top 70%',
                scrub: 2,
            },
        });

        t2.to("#cardsContainer", {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.5,
            onComplete: () => console.log('Card animation complete'),
        });





        // Colon Animation
        const c1 = gsap.timeline({
            scrollTrigger: {
                trigger: leftColonRef.current,
                scroller: "body",
                // markers: true,
                start: "top 85%",
                end: "top 35%",
                scrub: 4,
            },
        });

        c1.to(leftColonRef.current, {
            x:-25,
            y:-25,
            duration: 2,
        });

        const c2 = gsap.timeline({
            scrollTrigger: {
                trigger: leftColonRef.current,
                // markers: true,
                start: "top 85%",
                end: "top 35%",
                scrub: 4,
            },
        });

        c2.to(rightColonRef.current, {
            x:25,
            y:25,
            duration: 2,
        });



        


        return () => {
            tl.kill();
            t2.kill();
            c1.kill();
            c2.kill();
        };
    }, []);


    


    return (
        <>
            <div className="aboutMain" id='aboutMain' ref={aboutMainRef}>
                <img className='aboutImg' src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww" alt="" />
                <div className="aboutTextContain">
                    <h3 className='aboutMainHeader'>About Us</h3>
                    <p className='aboutP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aut quam, nihil vero eum sapiente deserunt quaerat maiores assumenda nulla!</p>
                </div>
                <img className='aboutImg' src="https://images.unsplash.com/photo-1581009137042-c552e485697a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="cardsContainer" id='cardsContainer' ref={aboutMainCardRef}>
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
                <img id="colon1" ref={leftColonRef} src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" alt="" />
                <img id="colon2" ref={rightColonRef} src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg" alt="" />

            </div>
        </>
    )
}

export default About
