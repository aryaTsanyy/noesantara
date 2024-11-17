"use client";
import { IKN } from "@/app/images/hero-section";
import { Gradient } from "@/app/images/hero-section";
import Image from 'next/image';
import { Navigationbar } from "@/components/navbar";
import { AWS, cisco, esri, honeywell, ibm, motorolla, microsoft, background, train, buildings, asn, bpjs, investasi } from "@/app/images/all-section";



// WelcomeSection.tsx
import React, { useState } from 'react';
import { Scrollbutton } from "@/components/button";

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

  const collaborators = [
    { name: 'AWS', logo: AWS },
    { name: 'Cisco', logo: cisco },
    { name: 'Esri', logo: esri },
    { name: 'Honeywell', logo: honeywell },
    { name: 'IBM', logo: ibm },
    { name: 'Motorola', logo: motorolla },
    { name: 'Microsoft', logo: microsoft }
  ];

  const publicServices = [
    {
      title: 'Smart ASN',
      image: '/api/placeholder/400/256',
      link: '#'
    },
    {
      title: 'BPJS Kesehatan',
      image: '/api/placeholder/400/256',
      link: '#'
    },
    {
      title: 'Layanan Investasi',
      image: '/api/placeholder/400/256',
      link: '#'
    }
  ];

  return (
    <main>
      {/* Your original hero section */}
      <div className="welcome-container">
        <Navigationbar />
        {/* Background image container */}
        <div className="background-image">
          <Image src={IKN} alt="background 1"
            className="background-img"
          />
          <Image src={Gradient} alt="background 2"
            className="overlay-image"
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
          <Scrollbutton />
        </div>
      </div>

      {/* New sections below */}
      {/* Section 1: Sponsors/Collaborators */}
      <section className="sponsors-section">
        <div className="container">
          <h2 className="section-subtitle">Kolaborasi</h2>
          <h3 className="section-title">
            Berbagai perusahaan yang berkolaborasi dalam mewujudkan Smart City IKN
          </h3>
          <div className="sponsors-grid">
            {collaborators.map((collaborator, index) => (
              <div key={index} className="sponsor-item">
                <Image
                  src={collaborator.logo}
                  alt={`${collaborator.name} logo`}
                  className="sponsor-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Vision Statement */}
      <section className="vision-section">
        <div className="vision-background">
          <Image src={background} alt="background sec"
            className="background-image"
          />
          <div className="background-overlay" />
        </div>

        <div className="container vision-content">
          <div className="vision-text">
            <h2 className="vision-title">
              Sukseskan Nusantara
            </h2>
            <h3 className="vision-subtitle">
              Kota Cerdas Masa Depan
            </h3>
            <p className="vision-description">
              Bersama Kita!
            </p>
          </div>

          <div className="vision-images">
            <Image src={train} alt="train"
              className="vision-image transport"
            />
            <Image src={buildings} alt="buildings"
              className="vision-image building"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Public Services */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="services-subtitle">Layanan</h2>
          <h3 className="services-title">
            Layanan Publik Berbasis Digital
          </h3>

          <div className="services-header">
            <p className="services-description">
              Nikmati dan Gunakan Layanan Publik Untuk Segala Keperluan Anda
            </p>
            <button className="services-button">
              5 Layanan Publik
            </button>
          </div>

          <div className="services-grid">
            {publicServices.map((service, index) => (
              <div key={index} className="service-card">
                <Image src={asn} alt="asn"
                  className="service-image"
                />
                <div className="service-overlay">
                  <div className="service-content">
                    <h4 className="service-title">{service.title}</h4>
                  </div>
                </div>
                <button className="service-expand-button">
                  <svg
                    className="expand-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;