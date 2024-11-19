/** @format */
"use client";

import { ArrowLeft, ArrowRight, HpIMG, KeretaIMG, PlaneIMG } from "@/app/images/informasi";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  tag: string;
  imageUrl: StaticImageData;
};
const carouselItems: CarouselItem[] = [
  { id: 1, title: "Berita", description: "Bandara Nusantara IKN resmi terdaftar Internasional", tag: "Berita", imageUrl: KeretaIMG },
  { id: 2, title: "Informasi", description: "Cara menggunakan layanan transportasi publik ART", tag: "Informasi", imageUrl: PlaneIMG },
  { id: 3, title: "Informasi", description: "Begini cara mengikuti kursus di aplikasi SmartASN", tag: "Informasi", imageUrl: HpIMG },
  { id: 4, title: "Berita", description: "Pembangunan MRT tahap 3 dimulai di Jakarta", tag: "Berita", imageUrl: KeretaIMG },
  { id: 5, title: "Informasi", description: "Peluncuran aplikasi MyCity untuk Smart City", tag: "Informasi", imageUrl: PlaneIMG },
  { id: 6, title: "Berita", description: "Kemajuan proyek PLTS terbesar di Indonesia", tag: "Berita", imageUrl: HpIMG },
  { id: 7, title: "Informasi", description: "Cara menggunakan layanan transportasi listrik", tag: "Informasi", imageUrl: KeretaIMG },
  { id: 8, title: "Informasi", description: "Infrastruktur baru di Ibu Kota Negara (IKN)", tag: "Informasi", imageUrl: PlaneIMG },
];

const CarouselInformasi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 3; // Jumlah item pada slide pertama
  const totalSlides = carouselItems.length - itemsPerSlide + 1; // Total jumlah slide (geser 1 per kali)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl overflow-hidden h-full">
      <div className="top-carousel relative py-5 flex items-end justify-between">
        {/* Dots Indicator */}
        <div className="flex items-center mb-4 ">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span key={index} onClick={() => goToSlide(index)} className={`h-1 w-6 mx-1 rounded-full cursor-pointer ${currentIndex === index ? "carousel-dot" : "dot-current"}`} />
          ))}
        </div>
        <div className="button-carousel bg-gray-700 px-3 py-2 flex items-center gap-5 rounded-full hover:bg-gray-600">
          {/* Navigation Buttons */}
          <button onClick={prevSlide} className=" text-white ">
            <Image src={ArrowLeft} alt="ArrowLeft" height={20} />
          </button>
          <button onClick={nextSlide} className="  text-white">
            <Image src={ArrowRight} alt="ArrowRight" height={20} />
          </button>
        </div>
      </div>
      {/* Carousel Container */}
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}>
        {carouselItems.map((item) => (
          <div key={item.id} className="w-1/3 flex-shrink-0 px-2">
            <div className="card-carousel flex items-end relative rounded-lg overflow-hidden h-full">
              <Image src={item.imageUrl} alt={item.description} className="w-full h-full object-cover" />
              <div className="absolute">
                <span className="text-sm text-blue-500 bg-blue-100 px-2 py-1 rounded-md">{item.tag}</span>
                <h2 className="text-lg font-bold text-white mt-2">{item.description}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselInformasi;
