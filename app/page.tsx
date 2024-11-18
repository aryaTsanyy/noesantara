"use client";
import { IKN } from "@/app/images/hero-section";
import { Gradient } from "@/app/images/hero-section";
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigationbar } from "@/components/navbar";
import { AWS, cisco, esri, honeywell, ibm, motorolla, microsoft, background, train, buildings, asn, bpjs, investasi, iknow, mpp, appStore, arrowLeft, arrowRight, berita1, berita2, berita3, berita4, berita5, berita6, berita7, facebook, facebookHover, googlePlay, instagram, instagramHover, lihatSemua, logoFooter, twitter, twitterHover, youtube, youtubeHover, backgroundBatik2 } from "@/app/images/all-section";
import React, { useEffect, useState } from 'react';
import { Scrollbutton } from "@/components/button";
import { StaticImageData } from 'next/image';

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

// Interface untuk tipe data slide
interface BeritaSlide {
  image: StaticImageData;
  type: string;
  description: string;
}

const Home = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<"ID" | "EN">("ID");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLine, setActiveLine] = useState(0);

  const beritaSlides: BeritaSlide[] = [
    {
      image: berita1,
      type: "Berita",
      description: "Bandara Nusantara IKN resmi terdaftar Internasional"
    },
    {
      image: berita2,
      type: "Informasi",
      description: "Cara menggunakan layanan transportasi publik ART"
    },
    {
      image: berita3,
      type: "Informasi",
      description: "Begini cara mengikuti kursus di aplikasi SmartASN"
    },
    {
      image: berita4,
      type: "Berita",
      description: "Update pembangunan infrastruktur di IKN"
    },
    {
      image: berita5,
      type: "Informasi",
      description: "Panduan lengkap perizinan usaha di IKN"
    },
    {
      image: berita6,
      type: "Berita",
      description: "Program pengembangan SDM di IKN"
    },
    {
      image: berita7,
      type: "Informasi",
      description: "Fasilitas kesehatan modern di IKN"
    }
  ];

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex >= beritaSlides.length - 3 ? 0 : prevIndex + 1;
      setActiveLine(newIndex);
      return newIndex;
    });
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex <= 0 ? beritaSlides.length - 3 : prevIndex - 1;
      setActiveLine(newIndex);
      return newIndex;
    });
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
    setActiveLine(index);
  };

  const totalPages = beritaSlides.length - 2;

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

      {/* Section 5: Informasi */}
      <section className="information-section">
        <div className="informationCarousel">
          <div className="controlArea">
            {/* Modifikasi indikator untuk menggunakan div terpisah */}
            <div className="indicators">
              {[...Array(totalPages)].map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={index === activeLine ? 'lineActive' : 'line'}
                ></div>
              ))}
            </div>
            <div className="buttonControl">
              <button className="arrowLeft" onClick={prevSlide}>
                <Image src={arrowLeft} alt="arrowLeft"
                  className="arrowBerita"
                />
              </button>
              <button className="arrowRight" onClick={nextSlide}>
                <Image src={arrowRight} alt="arrowRight"
                  className="arrowBerita"
                />
              </button>
            </div>
          </div>
          <div className="carouselViewport">
            <div className="beritaInformasi"
              style={{
                transform: `translateX(-${currentIndex * 14.40}%)`,
                transition: 'transform 0.5s ease-in-out',
                display: 'flex',
                width: `${(beritaSlides.length / 3) * 100}%`,
              }}>
              {beritaSlides.map((slide, index) => (
                <div key={index} className="boxBerita" style={{ width: '33.33%' }}>
                  <Image
                    src={slide.image}
                    alt="berita"
                    className="thumbnailBerita"
                  />
                  <div className="gradasiBerita"></div>
                  <div className="spesifikasi">
                    <p>{slide.type}</p>
                  </div>
                  <p className="deskripsiBerita">{slide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="informationText">
          <div className="highlightInformasi">
            <p>Informasi</p>
          </div>
          <h1 className="judulInformasi">Informasi & Berita Terkini</h1>
          <p className="deskripsiBeritaInformasi">Ikuti terus perkembangan terbaru dari Ibu Kota Nusantara. Temukan berita-berita hangat, update kebijakan, kemajuan infrastruktur, dan program menarik yang menjadikan IKN sebagai kota modern dan berkelanjutan di Indonesia.</p>
          <button className="buttonLihat">
            <p>Lihat semua</p>
            <Image src={lihatSemua} alt="lihatSemua"
              className="lihatSemua"
            />
          </button>
        </div>
      </section>
      <Image src={backgroundBatik2} alt="backgroundBatik2"
        className="backgroundBatik2"
      />
    </main>
  );
};

export default Home;