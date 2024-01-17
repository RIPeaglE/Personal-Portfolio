import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../style/footer.css'; 

const Footer = () => {
  return (
    <section id='footer'> 
    <footer>
      <h3 className='footerh3'>Get in touch</h3>
      <div className='footersoc'>
        <a href='https://github.com/RIPeaglE' target="_blank">
          <Icon name='github' size='huge' />
        </a>
        <a href='https://www.linkedin.com/in/tayfun-olgun-67791b205/' target="_blank">
          <Icon name='linkedin' size='huge' />
        </a>
        <a href='mailto:olguntayfun@hotmail.com' target="_blank">
          <Icon name='mail' size='huge' />
        </a>
      </div>
    </footer>
    </section>


      //   <footer>
      //   <div className='footersoc'>
      //     <a href='https://github.com/RIPeaglE' target="_blank">
      //       <Icon name='github' size='big' />
      //     </a>
      //     <a href='https://www.linkedin.com/in/tayfun-olgun-67791b205/' target="_blank">
      //       <Icon name='linkedin' size='big' />
      //     </a>
      //     <a href='mailto:olguntayfun@hotmail.com' target="_blank">
      //       <Icon name='mail' size='big' />
      //     </a>
      //     <a href='tel:+46705933001' target="_blank">
      //       <Icon name='phone' size='big' />
      //     </a>
      //   </div>
      // </footer>
  );
};

export default Footer;
