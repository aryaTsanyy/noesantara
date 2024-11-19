/** @format */
"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowCircleRight, ArrowLeft, ArrowRight, Berita4, Berita5, Berita6, Berita7, HpIMG, KeretaIMG, PlaneIMG } from "@/app/images/informasi";

// Interface untuk tipe data slide
interface BeritaSlide {
  image: StaticImageData;
  type: string;
  description: string;
}

const InformasiSection = () => {
  const beritaSlides: BeritaSlide[] = [
    {
      image: PlaneIMG,
      type: "Berita",
      description: "Bandara Nusantara IKN resmi terdaftar Internasional",
    },
    {
      image: KeretaIMG,
      type: "Informasi",
      description: "Cara menggunakan layanan transportasi publik ART",
    },
    {
      image: HpIMG,
      type: "Informasi",
      description: "Begini cara mengikuti kursus di aplikasi SmartASN",
    },
    {
      image: Berita4,
      type: "Berita",
      description: "Update pembangunan infrastruktur di IKN",
    },
    {
      image: Berita5,
      type: "Informasi",
      description: "Panduan lengkap perizinan usaha di IKN",
    },
    {
      image: Berita6,
      type: "Berita",
      description: "Program pengembangan SDM di IKN",
    },
    {
      image: Berita7,
      type: "Informasi",
      description: "Fasilitas kesehatan modern di IKN",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLine, setActiveLine] = useState(0);
  const totalPages = beritaSlides.length - 2;
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

  return (
    <div className="information-section">
      <div className="informationCarousel">
        <div className="controlArea">
          {/* Modifikasi indikator untuk menggunakan div terpisah */}
          <div className="indicators">
            {[...Array(totalPages)].map((_, index) => (
              <div key={index} onClick={() => goToSlide(index)} className={index === activeLine ? "lineActive" : "line"}></div>
            ))}
          </div>
          <div className="buttonControl">
            <button className="arrowLeft" onClick={prevSlide}>
              <Image src={ArrowLeft} alt="arrowLeft" className="arrowBerita" />
            </button>
            <button className="arrowRight" onClick={nextSlide}>
              <Image src={ArrowRight} alt="arrowRight" className="arrowBerita" />
            </button>
          </div>
        </div>
        <div className="carouselViewport">
          <div
            className="beritaInformasi"
            style={{
              transform: `translateX(-${currentIndex * 14.4}%)`,
              transition: "transform 0.5s ease-in-out",
              display: "flex",
              width: `${(beritaSlides.length / 3) * 100}%`,
            }}
          >
            {beritaSlides.map((slide, index) => (
              <div key={index} className="boxBerita" style={{ width: "33.33%" }}>
                <Image src={slide.image} alt="berita" className="thumbnailBerita" />
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
        <p className="deskripsiBeritaInformasi">
          Ikuti terus perkembangan terbaru dari Ibu Kota Nusantara. Temukan berita-berita hangat, update kebijakan, kemajuan infrastruktur, dan program menarik yang menjadikan IKN sebagai kota modern dan berkelanjutan di Indonesia.
        </p>
        <button className="buttonLihat">
          <p>Lihat semua</p>
          <Image src={ArrowCircleRight} alt="lihatSemua" className="lihatSemua" />
        </button>
      </div>
    </div>
  );
};

export default InformasiSection;
