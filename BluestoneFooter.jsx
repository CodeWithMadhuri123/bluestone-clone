import React from 'react';
import './Bluestone.css';
import appImage from './assets/app-footer.v2.webp'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-column">
          <h4>ABOUT US</h4>
          <ul>
            <li>Who we are?</li>
            <li>Investor Relations</li>
            <li>Careers</li>
            <li>Design Philosophy</li>
          </ul>
          <h4>CUSTOMER DELIGHT</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>18004190086</li>
            <li>cs@bluestone.com</li>
            <li>(9 am–10 pm, 7 days a week)</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>POLICIES</h4>
          <ul>
            <li>30-Day Returns</li>
            <li>Lifetime Exchange & Buy back</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Fraud Warning Disclaimer</li>
          </ul>
          <h4>SHOP WITH CONFIDENCE</h4>
          <ul>
            <li>Why Buy From Us?</li>
            <li>Our Certifications</li>
            <li>Press Room</li>
            <li>Testimonials</li>
            <li>Corporate Gifting</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>JEWELLERY GUIDE</h4>
          <ul>
            <li>Buying and Price Guide</li>
            <li>Certification Guide</li>
            <li>Diamond and Solitaire Guide</li>
            <li>Gemstone Guide</li>
            <li>Gifting Guide</li>
            <li>Jewellery Care Guide</li>
          </ul>
        </div>

        <div className="footer-column app-section">
          <div className="app-content">
            {/* Text part */}
            <div className="app-text">
              <h4>Download<br />BlueStone App</h4>
              <p>Shining new app,<br />made just for you! It’s Free,<br />Easy & Smart.</p>
              <div className="app-buttons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
              </div>
            </div>

            <div className="app-image-wrapper">
              <img src={appImage} alt="Bluestone App" className="app-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-newsletter">
        <input type="text" placeholder="Enter email for our newsletter" />
        <button>SUBSCRIBE</button>
      </div>

      <div className="footer-social">
        <p>Follow us on</p>
        <div className="icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest-p"></i>
        </div>
      </div> 

      <div className="footer-bottom">
        <p>©️ 2025 BlueStone. All Rights Reserved. CIN: U72900KA2011PLC059678</p>
      </div>
    </footer>  
  );
};

export default Footer;