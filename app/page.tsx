"use client";
import { IKN } from "@/app/images/hero-section";
import { Gradient } from "@/app/images/hero-section";
import Image from 'next/image';

// WelcomeSection.tsx
import React, { useState } from 'react';

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

const Home = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const dots: DotInfo[] = [
    {
      id: 1,
      title: "Smart Environment",
      description: "Berupaya menjaga dan memperbaiki kualitas lingkungan melalui teknologi.",
      position: { top: "15%", left: "10%" }
    },
    {
      id: 2,
      title: "Smart Governance",
      description: "Mengoptimalkan pelayanan publik dengan teknologi digital.",
      position: { top: "25%", right: "15%" }
    },
    {
      id: 3,
      title: "Smart Living",
      description: "Menciptakan kualitas hidup yang lebih baik dengan smart technology.",
      position: { top: "45%", left: "25%" }
    },
    {
      id: 4,
      title: "Smart Economy",
      description: "Mendorong pertumbuhan ekonomi berbasis teknologi digital.",
      position: { top: "35%", right: "30%" }
    },
    {
      id: 5,
      title: "Smart People",
      description: "Mengembangkan sumber daya manusia yang adaptif terhadap teknologi.",
      position: { top: "20%", left: "40%" }
    }
  ];

  return (
    <div className="welcome-container">
      {/* Background image container */}
      <div className="background-image">
        <Image src={IKN} alt="background 1"
          className="background-img"
        />
        <Image src={Gradient} alt="background 2"
          className="background-img overlay-image"
        />
      </div>

      {/* Content */}
      <div className="content-wrapper">
        <h1 className="main-title">
          Selamat Datang di <span className="highlight">Noesantara</span>
        </h1>
        <p className="subtitle">
          Platform Smart City Ibu Kota Nusantara yang Terintegrasi
        </p>
      </div>

      {/* Interactive dots and cards */}
      <div className="floating-dots">
        {dots.map((dot) => (
          <div key={dot.id} className="dot-container" style={dot.position}>
            <div
              className={`dot ${activeCard === dot.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(dot.id)}
              onMouseLeave={() => setActiveCard(null)}
            />
            {activeCard === dot.id && (
              <div className="info-card">
                <h3>{dot.title}</h3>
                <p>{dot.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;