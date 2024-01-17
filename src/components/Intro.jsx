import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import '../style/intro.css';

const Intro = () => {
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  const text = "Hi, I'm Tayfun";
  const speed = 100;
  const blinkSpeed = 500;

  useEffect(() => {
    if (subIndex === text.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, blinkSpeed);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <section id="intro">
      <div className='intro'>
        <div className='me'>
          <h1>
            {`${text.substring(0, subIndex)}${blink ? "|" : " "}`}
          </h1>
          <p>A young developer building websites</p>
        </div>

        {/* <div className='social'>
          <a href='https://github.com/RIPeaglE' target="_blank">
            <Icon name='github' size='huge' />
          </a>
          <a href='https://www.linkedin.com/in/tayfun-olgun-67791b205/' target="_blank">
            <Icon name='linkedin' size='huge' />
          </a>
          <a href='mailto:olguntayfun@hotmail.com' target="_blank">
            <Icon name='mail' size='huge' />
          </a>
          <a href='tel:+46705933001' target="_blank">
            <Icon name='phone' size='huge' />
          </a>
        </div> */}
      <div className='mouse'></div>
      </div>
    </section>
  );
}

export default Intro;
