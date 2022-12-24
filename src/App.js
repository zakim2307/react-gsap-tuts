import React, { useRef, useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";
import "./App.css";

function App() {
  let circleBlue = useRef(null);
  let circleRed = useRef(null);
  let circleGreen = useRef(null);
  let app = useRef(null);
  const [expand, setExpand] = useState(false);

  function handleExpand(el) {
    setExpand(!expand);
    console.log(el, "element");
  }

  useEffect(() => {
    if (expand) {
      gsap.to([circleRed, circleBlue, circleGreen], {
        x: 200,
        ease: Power3.easeOut,
        duration: 0.8,
      });
    } else if (!expand) {
      gsap.to([circleRed, circleBlue, circleGreen], {
        x: 75,
        ease: Power3.easeOut,
        duration: 0.8,
      });
    }
  }, [expand]);

  useEffect(() => {
    console.log(app);
    gsap.to(app, { autoAlpha: 1, duration: 0 });
    // gsap.from(circleBlue, {
    //   opacity: 0,
    //   x: 40,
    //   delay: 0.4,
    //   duration: 0.8,
    //   ease: Power3.easeOut,
    // });
    // gsap.from(circleRed, {
    //   opacity: 0,
    //   x: 40,
    //   delay: 0.6,
    //   duration: 0.8,
    //   ease: Power3.easeOut,
    // });
    // gsap.from(circleGreen, {
    //   opacity: 0,
    //   x: 40,
    //   delay: 0.8,
    //   duration: 0.8,
    //   ease: Power3.easeOut,
    // });
    gsap.from(
      [circleBlue, circleRed, circleGreen],
      {
        opacity: 0,
        x: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: Power3.easeOut,
      },
      "+=0.2"
    );
    return () => {};
  }, []);
  return (
    <div ref={(el) => (app = el)} className='App'>
      <header className='App-header'>
        <div className='circle-container'>
          <div
            onClick={(el) => handleExpand(el)}
            ref={(el) => (circleBlue = el)}
            className='circle blue'></div>
          <div
            onClick={(el) => handleExpand(el)}
            ref={(el) => (circleRed = el)}
            className='circle red'></div>
          <div
            onClick={(el) => handleExpand(el)}
            ref={(el) => (circleGreen = el)}
            className='circle green'></div>
        </div>
      </header>
    </div>
  );
}

export default App;
