import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div class="footer-dark">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Web design</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Hosting</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-md-3 item">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 item text">
            <h3>Company Name</h3>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
              ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
            </p>
          </div>
          <div class="col item social">
            <a href="#">
              <img src="Icons\fb.svg" />
            </a>
            <a href="#">
              <img src="Icons\twitter.png" width="38px" />
            </a>
            <a href="#">
              <img src="Icons\insta.svg" />
            </a>
          </div>
        </div>
        <p class="copyright">
          Â© know Your Institute, All rights reserved 2020
        </p>
      </div>
    </div>
  );
}

export default Footer;
