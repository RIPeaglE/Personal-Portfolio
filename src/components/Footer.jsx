import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../style/footer.css';

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <div className='footer-left'>
          <h3 className='location'>Location</h3>
          <p className='locationtext'>Sweden/Stockholm</p>
        </div>
        <div className='footer-right'>
          <h3 className='footerh3'>Get in touch</h3>
          <div className='footersocial'>
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
        </div>
      </footer>
    </section>
  );
};

export default Footer;
