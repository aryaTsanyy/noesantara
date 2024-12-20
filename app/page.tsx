/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { CollabBottom, CollabSection } from "@/components/collaboration";
import { FooterContent } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { InformasiSection } from "@/components/informasi";
import { LayananPublik } from "@/components/layananpublik";
import { Navigationbar } from "@/components/navbar";
import { TransportationSection } from "@/components/Transportasi";
import Image from "next/image";
import { Backgroundbatik2 } from "./images";

const heroSectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8
    } 
  },
};

const collabSectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Gerak lebih jauh
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8
    } 
  },
};

const layananPublikVariants = {
  hidden: { opacity: 0, y: 50 }, // Efek scale
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8
    } 
  },
};

const transportationSectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Gerak lebih jauh
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8
    } 
  },
};
/*  */
const informasiSectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Efek scale
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8
    } 
  },
};

const Home = () => {
  return (
    <main className="Neosantara overflow-hidden overx">
      <Navigationbar />
      <motion.section className="hero Visi-Misi animate-fadeInUp min-h-screen w-full" id="Visi-Misi" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroSectionVariants}>
        <HeroSection />
      </motion.section>

      <motion.section className="collaboration animate-fadeInUp w-full h-full" id="Kolaborasi" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={collabSectionVariants}>
        <CollabSection />
        <CollabBottom />
      </motion.section>

      <motion.section className="layanan-public animate-fadeInUp min-h-screen" id="Layanan" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={layananPublikVariants}>
        <LayananPublik />
      </motion.section>

      <motion.section className="Transportasi animate-fadeInUp min-h-screen" id="Transportasi" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={transportationSectionVariants}>
        <TransportationSection />
      </motion.section>

      <motion.section className="informasi animate-fadeInUp" id="Informasi" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={informasiSectionVariants}>
        <InformasiSection />
      </motion.section>

      <Image src={Backgroundbatik2} alt="Background Batik" />

      <footer>
        <FooterContent />
      </footer>
    </main>
  );
};

export default Home;
