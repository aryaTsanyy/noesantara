/** @format */

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { BtnPublik } from "@/app/images/publicservice";

interface CardProps {
  initialImage: StaticImageData;
  title: string;
  description: string;
}

const CardPublic: React.FC<CardProps> = ({ initialImage, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="cardPublic" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`card-image ${isHovered ? "hidden" : ""}`}>
        <Image src={initialImage} alt="Initial" />
        <button className="card-button bottom-2 absolute">
          <Image src={BtnPublik} alt="BtnPublik" className="animate-float-fast" height={46} width={46} />
        </button>
      </div>

      <div className={`card-hover-content ${isHovered ? "visible" : ""}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardPublic;
