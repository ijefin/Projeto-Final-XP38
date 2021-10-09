import React from "react";
import BannerMentorias from "./components/PaginaMentorias/BannerMentorias/BannerMentorias";
import CardMentoresMaisRecomendados from "./components/PaginaMentorias/CardMaisRecomendados/CardMentoresMaisRecomendados";
import CardMentores from "./components/PaginaMentorias/CardMentores/CardMentores";
import CardSlider from "./components/PaginaMentorias/CardSlider/CardSlider";
import Footer from "./Footer";

export default function PaginaMentorias() {
  return (
    <div>
      <div className="container">
        <BannerMentorias />
        <CardSlider />
      </div>
      <CardMentores />
      <CardMentoresMaisRecomendados />
      <Footer />
    </div>
  );
}
