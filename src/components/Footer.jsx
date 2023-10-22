import React from 'react';
import './../css/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Employer</h4>
            <a href="#">
              <p>Link 1</p>
            </a>
            <a href="#">
              <p>Link 2</p>
            </a>
            <a href="#">
              <p>Link 3</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resource</h4>
            <a href="#">
              <p>Link 4</p>
            </a>
            <a href="#">
              <p>Link 5</p>
            </a>
            <a href="#">
              <p>Link 6</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Privacy Policy</h4>
            <a href="#">
              <p>Link 7</p>
            </a>
            <a href="#">
              <p>Link 8</p>
            </a>
            <a href="#">
              <p>Link 9</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Terms & Conditions</h4>
            <a href="#">
              <p>Link 10</p>
            </a>
            <a href="#">
              <p>Link 11</p>
            </a>
            <a href="#">
              <p>Link 12</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming Soon</h4>
            <p>Content for 'Coming Soon' section</p>
          </div>
          <hr />
          <div className="sb__footer-links_below">
            <div className="sb__footer-copyright">
              <p>Copyright © 2023. All rights reserved</p>
            </div>
            <div className="sb__footer-below-links">
              <a href="#"><p>Privacy</p></a>
              <a href="#"><p>Terms & Conditions</p></a>
              <a href="#"><p>Security</p></a>
              <a href="#"><p>Cookie Declaration</p></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
