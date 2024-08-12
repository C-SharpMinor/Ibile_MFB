import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faXTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="column" id="c1">
        <h4>HEAD OFFICE</h4> <strong>IBILE Microfinance Bank Ltd.</strong>
        <span> 121 Obafemi Awolowo Way, Allen Roundabout, Ikeja, Lagos.</span>
        <strong>Contact No:</strong>
        <span>0700 444 1 444</span>
        <strong>Customer Care line:</strong>
        <span>0700 444 0 444</span>
      </div>
      <div className="column">
        <h4 style={{ textAlign: "center" }}>THE BANK</h4>
        <ul id="unordered_list">
          <li> Event Galleries</li>
          <li>Videos</li>
          <li>Press Releases</li>
          <li>Publications</li>
          <strong style={{ fontSize: "20px" }}> FIND US!</strong>
        </ul>
        <div className="socials">
          <a
            href="https://web.facebook.com/ibilemicrofinancebank?_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://x.com/IBILEMFB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/company/ibilemicrofinancebank/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.youtube.com/@ibilemfb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.instagram.com/ibilemfb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="column">
        <h4>OUR OFFERINGS</h4>
        <ul id="unordered_list">
          <li> Loan</li>
          <li>Products.</li>
          <li>Deposit</li>
          <li>Products</li>
          <li>Our Services</li>
          <li>LSETF Fund</li>
          <li>Our Partners</li>
          <li> Frequently Asked Questions</li>
        </ul>
      </div>
      <div className="column">
        <h4>MEDIA</h4>
        <ul id="unordered_list">
          <li>Event</li>
          <li>Galleries</li>
          <li>Videos</li>
          <li>Press</li>
          <li>Releases</li>
          <li>Publications</li>
          <li>
            <img
              id="lagos"
              src="https://yabacity.com/wp-content/uploads/2023/01/seal1.jpg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
