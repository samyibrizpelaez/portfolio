import React, { useEffect } from 'react';
import anime from 'animejs';
import { useRef, useState } from 'react';


export function HomePage()
{

  const animationRef = useRef(null);

  useEffect(() => {

    var landingContent = {
      opacityIn   : [0,1],
      scaleIn     : [0.2, 1],
      scaleOut    : 3,
      durationIn  : 800,
      durationOut : 600,
      delay       : 500,
    };

    animationRef.current = anime.timeline({loop:true})
    .add({
      targets: '.ld-1',
      opacity:landingContent.opacityIn,
      scale: landingContent.scaleIn,
      duration:landingContent.durationIn
    })
    .add({
      targets: '.ld-1',
      opacity: 0,
      scale: landingContent.scaleOut,
      duration:landingContent.durationOut,
      easing: "easeInExpo",
      delay: landingContent.delay
    })
    .add({
      targets: '.ld-2',
      opacity:landingContent.opacityIn,
      scale: landingContent.scaleIn,
      duration:landingContent.durationIn
    })
    .add({
      targets: '.ld-2',
      opacity: 0,
      scale: landingContent.scaleOut,
      duration:landingContent.durationOut,
      easing: "easeInExpo",
      delay: landingContent.delay
    })
    .add({
      targets: '.ld-3',
      opacity:landingContent.opacityIn,
      scale: landingContent.scaleIn,
      duration:landingContent.durationIn
    })
    .add({
      targets: '.ld-3',
      opacity: 0,
      scale: landingContent.scaleOut,
      duration:landingContent.durationOut,
      easing: "easeInExpo",
      delay: landingContent.delay
    })
    .add({
      targets: '.ld-4',
      opacity:landingContent.opacityIn,
      scale: landingContent.scaleIn,
      duration:landingContent.durationIn / 2
    })
    .add({
      targets: '.ld-4',
      opacity: 0,
      scale: landingContent.scaleOut,
      duration:landingContent.durationOut / 2,
      easing: "easeInExpo",
      delay: landingContent.delay / 2
    })
    .add({
      targets: '.ld-5',
      opacity:landingContent.opacityIn,
      scale: landingContent.scaleIn,
      duration:landingContent.durationIn / 2
    })
    .add({
      targets: '.ld-5',
      opacity: 0,
      scale: landingContent.scaleOut,
      duration:landingContent.durationOut / 2,
      easing: "easeInExpo",
      delay: landingContent.delay / 2
    })
    .add({
      targets: '.ld-6',
      opacity:landingContent.opacityIn,
      scale: landingContent.scaleIn,
      duration:landingContent.durationIn / 2
    })
    .add({
      targets: '.ld-6',
      opacity: 0,
      scale: landingContent.scaleOut,
      duration:landingContent.durationOut / 2,
      easing: "easeInExpo",
      delay: landingContent.delay
    })
    .add({
      targets: '.ld-7',
      opacity:landingContent.opacityIn,
      scale: landingContent.scaleIn,
      duration:landingContent.durationIn
    })
    .add({
      targets: '.ld-7',
      opacity: 0,
      scale: landingContent.scaleOut,
      duration:landingContent.durationOut,
      easing: "easeInExpo",
      delay: landingContent.delay
    })
    .add({
      targets: '.ld-8',
      opacity:landingContent.opacityIn,
      scale: landingContent.scaleIn,
      duration:landingContent.durationIn
    })
    .add({
      targets: '.ld-8',
      opacity: 0,
      scale: landingContent.scaleOut,
      duration:landingContent.durationOut,
      easing: "easeInExpo",
      delay: landingContent.delay * 4
    })
    .add({
      targets:'.landing-content-animation',
      opacity: 0,
      duration: 500,
      delay: 1000
    });

  })

  /*
  const [playing, setPlayState] = useState(true);
  const pauseAnimation = () => {
    if(playing){
      animationRef.current.pause();
      setPlayState(false)
    }
    else{
      animationRef.current.play();
      setPlayState(true)
    }
    
  }*/

  return (
    <div>
      <section className="landing-section">
        <h1 id="page-title">Home</h1>
          <div className="landing-content-animation">

            <p className="landing-content ld-1">
              I am Samy
            </p>
            <p className="landing-content ld-2">
              A Full-Stack developer
            </p>
            <p className="landing-content ld-3">
              I build Apps for
            </p>
            <p className="landing-content ld-4">
              Desktop
            </p>
            <p className="landing-content ld-5">
              Browser
            </p>
            <p className="landing-content ld-6">
              Mobile
            </p>
            <p className="landing-content ld-7">
              Code is my Hammer!
            </p>
            <p className="landing-content ld-8">
              <strong>Looking forward to work with you!</strong>
            </p>
          </div>
      </section>

      
      {/* <div>
        <button className='pause-landing-animation' onClick={pauseAnimation}>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/> </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pause" viewBox="0 0 16 16"> <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/> </svg>
        </button>
      </div> */}
    </div>
  )
  
}
