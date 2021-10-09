import React, { Component } from "react";
import Slider from "react-slick";
import "../CardMaisRecomendados/estilos.css";

import img1 from "../../../assets/img/img1.png";
import img2 from "../../../assets/img/img2.png";

import img4 from "../../../assets/img/img4.png";
import img5 from "../../../assets/img/img5.png";

export default class CardMentoresMaisRecomendados extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="CardMR">
        <div className="text-posit">
          <h2 className="">Mentores mais recomendados</h2>
          <div class="card-group">
            <div class="card">
              <img src={img5} class="card-img-top pt-3 img-fluid" />
              <div class="card-body">
                <h5 class="card-title">
                  Pedro <br /> Engenharia <br />★ ★ ★ ★ ★
                </h5>
              </div>
            </div>
            <div class="card">
              <img src={img2} class="card-img-top pt-3 img-fluid" />
              <div class="card-body">
                <h5 class="card-title">
                  Fernando <br /> Engenharia
                  <br /> ★ ★ ★ ★ ★
                </h5>
              </div>
            </div>
            <div class="card">
              <img src={img4} class="card-img-top pt-3 img-fluid" />
              <div class="card-body">
                <h5 class="card-title">
                  Alice <br /> Engenharia <br />★ ★ ★ ★ ★
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
