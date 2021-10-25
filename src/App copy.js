import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  useEffect(() => {
    console.log(logoItem);
    gsap.to(logoItem, {
      opacity: 1,
      duration: 0.8,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(textItem, {
      opacity: 1,
      duration: 0.8,
      y: -20,
      delay: 0.2,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          ref={(el) => (logoItem = el)}
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p className='textItem' ref={(el) => (textItem = el)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
