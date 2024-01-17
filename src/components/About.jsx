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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque pariatur culpa perspiciatis deserunt dolorem fuga, aliquam magni illo similique corrupti totam quae deleniti provident non numquam nesciunt dicta optio quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic fugit exercitationem reprehenderit alias placeat! Deserunt ipsam veniam nesciunt, est facere voluptatibus eos dolore culpa quae repellendus, dolorum aspernatur vel! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse saepe animi ullam? Officia consequuntur tempore non vero autem veritatis nulla? Perferendis ex debitis aut eaque. Tenetur ea unde ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur ipsum expedita numquam laboriosam voluptatem distinctio aspernatur nesciunt architecto adipisci ducimus quibusdam debitis ab possimus repellendus, dicta alias vero natus Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa impedit ex expedita, sunt sit dolores, sint quod facilis praesentium quidem consequatur consectetur quis nam. Necessitatibus dolorum in praesentium amet asperiores.
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
