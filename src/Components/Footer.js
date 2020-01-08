import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare,faLinkedin,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col-8">
          <img src="https://innoloft.com/public/wp-content/uploads/2019/09/logo_innoloft_white.png" />
          <p className="grey-text text-lighten-4">
          We've already come a long way. Innoloft can look back on four years of company history. Originally started to digitize the research transfer of the RWTH Aachen University, this idea has now developed into the leading B2B innovation network. The drive to accelerate the implementation of innovations in technology-driven industries through radically improved data transparency has always remained.
         </p>
         <p>We've already come a long way. Innoloft can look back on four years of company history. Originally started to digitize the research transfer of the RWTH Aachen University, this idea has now developed into the leading B2B innovation network. The drive to accelerate the implementation of innovations in technology-driven industries through radically improved data transparency has always remained.
         </p>
        </div>
        <div className="col-4 social-icon">
          <h5 className="white-text">Social Media</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/InnoloftNetwork" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} size="2x"  /></a></li>
            <li><a className="grey-text text-lighten-3" href="https://twitter.com/innoloft_net" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="2x"  /></a></li>
            <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.linkedin.com/company/innoloft"><FontAwesomeIcon icon={faLinkedin} size="2x"  /></a></li>
            <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/innoloft/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x"  /></a></li>
            <li><a className="grey-text text-lighten-3" href="https://www.youtube.com/channel/UCVjfGwUykde8cuCl31CX8Nw" target="_blank"><FontAwesomeIcon icon={faYoutube} size="2x"  /></a></li>
          </ul>
          <h5 className="white-text"><a href="https://www.google.com/maps/dir//c%2Fo+DigitalHUB+Aachen+j%C3%BClicher+Stra%C3%9Fe+72a+52070+Aachen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47c0995d4a023d65:0xc2a64ebe3591b864?sa=X&ved=2ahUKEwimoIjF9PPmAhUPbcAKHblaAVIQ9RcwC3oECA4QDg" target="_blank"><FontAwesomeIcon icon={faMapMarkerAlt} size="1x"  /> Address</a></h5>
          <ul className="address">
          <li>Innoloft GmbH  </li>
          <li>c/o DigitalHUB Aachen </li>
          <li>ülicher Straße 72a</li>
          <li>52070 Aachen</li>
          </ul>
        
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2019 Copyright www.asickweb.com
      </div>
    </div>
  </footer>
  );
}

export default Footer;