import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="foo">
        <div className="rows">
          <h2 className="h-footer">Stay Connected</h2>
          <ul>
            <li>Help Centre</li>
            <li> Contact us</li>
            <li>Programs</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className="rows">
          <h2 className="h-footer">Get More Info</h2>
          <ul>
            <li>Trust Centre</li>
            <li>Terms of use</li>
            <li>Privacy and Policy</li>
            <li>Overview</li>
          </ul>
        </div>
        <div className="rows">
          <h2 className="h-footer">About us</h2>
          <p id="p-about">
            We provide a platform where people can rate and review services and
            products and the shops that sell them. It is consumer response -
            satisfied or not!
          </p>
        </div>
        <div className="rows">
          <h2 className="h-footer">Address</h2>
          <address>
            <a href="location">map location</a>
            <p id="p-abouts">car.review@gmail.com</p>
            <p id="p-abouts">CC 4th Floor/ Nairobi</p>
          </address>
        </div>
      </div>

      <div className="rights">
        <h4>2020 @productreview.com.All rights reserved</h4>
      </div>
    </div>
  );
}

export default Footer;
