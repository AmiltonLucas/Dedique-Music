import React from "react";
import BannerImg from "../../Assets/Images/Banner.jpg";

export default function Banner() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <img
        src={BannerImg} // Placeholder para a imagem principal
        alt="Placeholder"
        className="w-full"
      />
    </div>
  );
}
