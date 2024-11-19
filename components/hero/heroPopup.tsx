/** @format */
"use client";

import React, { useState } from "react";

interface DotInfo {
  id: number;
  title: string;
  description: string;
  position: {
    top: string;
    left?: string;
    right?: string;
  };
}

const HeroPopup = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const dots: DotInfo[] = [
    {
      id: 1,
      title: "Smart Environment",
      description: "Berupaya menjaga dan memperbaiki kualitas lingkungan melalui teknologi.",
      position: { top: "45%", left: "7%" },
    },
    {
      id: 2,
      title: "Smart Governance",
      description: "Mengoptimalkan pelayanan publik dengan teknologi digital.",
      position: { top: "45%", right: "7%" },
    },
    {
      id: 3,
      title: "Smart Living",
      description: "Menciptakan kualitas hidup yang lebih baik dengan smart technology.",
      position: { top: "65%", left: "49.5%" },
    },
    {
      id: 4,
      title: "Smart Economy",
      description: "Mendorong pertumbuhan ekonomi berbasis teknologi digital.",
      position: { top: "25%", right: "12%" },
    },
    {
      id: 5,
      title: "Smart People",
      description: "Mengembangkan sumber daya manusia yang adaptif terhadap teknologi.",
      position: { top: "27%", left: "11%" },
    },
  ];

  return (
    <div className="floating-dots">
      {dots.map((dot) => (
        <div key={dot.id} className="dot-container flex items-center" style={dot.position}>
          <div className={`dot ${activeCard === dot.id ? "active" : ""}`} onMouseEnter={() => setActiveCard(dot.id)} onMouseLeave={() => setActiveCard(null)} />
          <div className={`shadow ${activeCard === dot.id ? "active" : ""}`} onMouseEnter={() => setActiveCard(dot.id)} onMouseLeave={() => setActiveCard(null)} />
          {activeCard === dot.id && (
            <div className="info-card">
              <h3>{dot.title}</h3>
              <p>{dot.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeroPopup;
