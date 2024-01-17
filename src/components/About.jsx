import React from 'react';
import '../style/about.css';
import { Icon } from 'semantic-ui-react';

const Home = () => {
  return (
    <section id='home'>
    <div className='home'>
      <div className='aboutContainer'>
        <h3 className='about'>About me</h3> 
        <p className='aboutme'>
          Hello! I'm Tayfun Olgun, a 19-year-old student currently enrolled in the High School Engineering program (TE4) at NTI Södertörn, specializing in software design. Before this, I devoted three years to studying the electrical and energy program with a focus on computer and communication technology at the same school. 
        </p>
      </div>

      <div className='skilltree'> 
        <h3 className='about'>My skills</h3>
        <div className='skills'>
              <p className='skillbox'><Icon name='css3 alternate' size='big' />Css</p>
              <p className='skillbox'><Icon name='html5' size='big' />Html</p>
              <p className='skillbox'><Icon name='php' size='big' /></p>
              <p className='skillbox'><Icon name='js' size='big' />JavaScript</p>
              <p className='skillbox'><Icon name='react' size='big' />React</p>
              <p className='skillbox'><Icon name='node' size='big' /></p>
              <p className='skillbox'><Icon name='server icon' size='big' />MySQL</p>
        </div>
      </div>
    </div>
    </section>

  );
}

export default Home;
