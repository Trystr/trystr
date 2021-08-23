
import "./Utils.css";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-container">
      Social links
      <div className="footer-content">
        <div className="social-link">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </div>
        <div className="social-link">
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </div>
        <div className="social-link">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </div>
        <div className="social-link">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </div>
      </div>
      <div className="footer-content">
        <Link to="/legal" className="footer-link">
          Legal
        </Link>
        
      </div>
    </footer>
  );
}

export default Footer;

