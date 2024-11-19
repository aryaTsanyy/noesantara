/** @format */

import React from "react";
import * as PublicIMG from "@/app/images/publicservice";

import CardPublic from "./cardPublic";

const LayananPublick = () => {
  const services = [
    {
      title: "SmartASN",
      description: "Aplikasi SmartASN bertujuan untuk meningkatkan efisiensi dan kualitas pelayanan asn.",
      image: PublicIMG.asn,
    },
    {
      title: "BPJS Kesehatan",
      description: "Layanan kesehatan terpadu untuk masyarakat Indonesia.",
      image: PublicIMG.bpjs,
    },
    {
      title: "IKNOW",
      description: "Pusat informasi dan layanan pengetahuan terintegrasi.",
      image: PublicIMG.iknow,
    },
    {
      title: "Investara",
      description: "Platform investasi digital untuk semua kalangan.",
      image: PublicIMG.investasi,
    },
    {
      title: "MPP",
      description: "Mal Pelayanan Publik untuk kemudahan layanan masyarakat.",
      image: PublicIMG.mpp,
    },
  ];
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-subtitle mx-auto w-24 py-2">Layanan</h2>
        <h3 className="services-title">Layanan Publik Berbasis Digital</h3>

        <div className="services-grid">
          <div className="services-left">
            {services.slice(0, 2).map((service, index) => (
              <CardPublic key={index} initialImage={service.image} title={service.title} description={service.description} />
            ))}
          </div>

          <div className="services-center">
            <div className="services-header">
              <p className="services-description">Nikmati dan Gunakan Layanan Publik Untuk Segala Keperluan Anda</p>
              <button className="services-button">5 Layanan Publik</button>
            </div>
            <CardPublic initialImage={services[2].image} title={services[2].title} description={services[2].description} />
          </div>

          <div className="services-right">
            {services.slice(3).map((service, index) => (
              <CardPublic key={index} initialImage={service.image} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananPublick;
