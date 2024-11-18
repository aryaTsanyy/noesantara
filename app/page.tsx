"use client";
import { IKN } from "@/app/images/hero-section";
import { Gradient } from "@/app/images/hero-section";
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigationbar } from "@/components/navbar";
import { AWS, cisco, esri, honeywell, ibm, motorolla, microsoft, background, train, buildings, asn, bpjs, investasi, iknow, mpp } from "@/app/images/all-section";
import React, { useEffect, useState } from 'react';
import { Scrollbutton } from "@/components/button";

gsap.registerPlugin(ScrollTrigger);

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
  const [selectedLanguage, setSelectedLanguage] = useState<"ID" | "EN">("ID");

  const handleLanguageChange = (language: "ID" | "EN") => {
    setSelectedLanguage(language);
  };

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

  // Modified infinite scroll implementation
  useEffect(() => {
    const container = document.querySelector('.sponsors-grid') as HTMLElement;
    if (!container) return;

    const scrollingText = gsap.utils.toArray(".sponsor-item") as HTMLElement[];
    if (scrollingText.length === 0) return;

    // Calculate total width of all items
    const totalWidth = scrollingText.reduce((sum, el) => sum + el.offsetWidth + 32, 0); // 32px for gap (2rem)
    
    // Set initial position
    gsap.set(scrollingText, {
      x: (i) => i * (totalWidth / scrollingText.length)
    });

    // Create the animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });

    tl.to(scrollingText, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });

    // Create scroll trigger
    const st = ScrollTrigger.create({
      trigger: ".sponsors-section",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        tl.timeScale(self.direction === 1 ? 1 : -1);
      },
    });

    return () => {
      tl.kill();
      st.kill();
    };
  }, []);

  const collaborators = [
    { name: 'AWS', logo: AWS },
    { name: 'Cisco', logo: cisco },
    { name: 'Esri', logo: esri },
    { name: 'Honeywell', logo: honeywell },
    { name: 'IBM', logo: ibm },
    { name: 'Motorola', logo: motorolla },
    { name: 'Microsoft', logo: microsoft }
  ];

  const services = [
    {
      title: "SmartASN",
      description: "Aplikasi SmartASN bertujuan untuk meningkatkan efisiensi dan kualitas pelayanan asn.",
      image: asn,
    },
    {
      title: "BPJS Kesehatan",
      description: "Layanan kesehatan terpadu untuk masyarakat Indonesia.",
      image: bpjs,
    },
    {
      title: "IKNOW",
      description: "Pusat informasi dan layanan pengetahuan terintegrasi.",
      image: iknow,
    },
    {
      title: "Investara",
      description: "Platform investasi digital untuk semua kalangan.",
      image: investasi,
    },
    {
      title: "MPP",
      description: "Mal Pelayanan Publik untuk kemudahan layanan masyarakat.",
      image: mpp,
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <div className="welcome-container">
        <Navigationbar />
        <div className="background-image">
          <Image src={IKN} alt="background 1" className="background-img" />
          <Image src={Gradient} alt="background 2" className="overlay-image" />
        </div>

        <div className="content-wrapper">
          <h1 className="main-title">
            Selamat Datang di <span className="highlight">Noesantara</span>
          </h1>
          <p className="subtitle">
            Platform Smart City Ibu Kota Nusantara yang Terintegrasi
          </p>
        </div>

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

      {/* Sponsors Section */}
      <section className="sponsors-section">
        <div className="container">
          <h2 className="section-subtitle">Kolaborasi</h2>
          <h3 className="section-title">
            Berbagai perusahaan yang berkolaborasi dalam mewujudkan Smart City IKN
          </h3>
          <div className="sponsors-wrapper">
            <div className="sponsors-grid flex items-center py-7">
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
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-background">
          <Image src={background} alt="background sec" className="background-image" />
          <div className="background-overlay" />
        </div>

        <div className="container vision-content">
          <div className="vision-text">
            <h2 className="vision-title">Sukseskan Nusantara</h2>
            <h3 className="vision-subtitle">Kota Cerdas Masa Depan</h3>
            <p className="vision-description">Bersama Kita!</p>
          </div>

          <div className="vision-images">
            <Image src={train} alt="train" className="vision-image transport" />
            <Image src={buildings} alt="buildings" className="vision-image building" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="services-subtitle">Layanan</h2>
          <h3 className="services-title">Layanan Publik Berbasis Digital</h3>

          <div className="services-grid">
            <div className="services-left">
              {services.slice(0, 2).map((service, index) => (
                <div key={index} className="service-card">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    width={400}
                    height={256}
                  />
                  <div className="service-overlay">
                    <div className="service-content">
                      <h4 className="service-title">{service.title}</h4>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                  <button className="service-expand-button">
                    <svg className="expand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="services-center">
              <div className="services-header">
                <p className="services-description">
                  Nikmati dan Gunakan Layanan Publik Untuk Segala Keperluan Anda
                </p>
                <button className="services-button">5 Layanan Publik</button>
              </div>
              <div className="service-card">
                <Image
                  src={services[2].image}
                  alt={services[2].title}
                  className="service-image"
                  width={400}
                  height={256}
                />
                <div className="service-overlay">
                  <div className="service-content">
                    <h4 className="service-title">{services[2].title}</h4>
                    <p className="service-description">{services[2].description}</p>
                  </div>
                </div>
                <button className="service-expand-button">
                  <svg className="expand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="services-right">
              {services.slice(3).map((service, index) => (
                <div key={index} className="service-card">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    width={400}
                    height={256}
                  />
                  <div className="service-overlay">
                    <div className="service-content">
                      <h4 className="service-title">{service.title}</h4>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                  <button className="service-expand-button">
                    <svg className="expand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;