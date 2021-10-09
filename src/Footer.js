import React from "react";
import "./Footer.css";
import instagram from "./assets/img/instagram.png";
import facebook from "./assets/img/facebook.png";
import linkedin from "./assets/img/linkedin.png";

export default function Footer() {
  return (
    <div className="footerColor">
      <div class="text-start text-light">
        <div class="container">
          <h3 className="pb-4 pt-4">
            <img src={instagram}></img>
          </h3>

          <h3 className="pb-4">
            <img src={linkedin}></img>
          </h3>

          <h3 className="pb-4">
            <img src={facebook}></img>
          </h3>
        </div>
      </div>
    </div>
  );
}
