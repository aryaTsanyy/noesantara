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

import { BackgroundBatik2 } from "./images";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <main className="Neosantara overflow-hidden">
      <Navigationbar />
      <motion.section className="hero Visi-Misi animate-fadeInUp min-h-screen w-full" id="Visi-Misi" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <HeroSection />
      </motion.section>

      <motion.section className="collaboration animate-fadeInUp w-full h-full" id="Kolaborasi" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <CollabSection />
        <CollabBottom />
      </motion.section>

      <motion.section className="layanan-public animate-fadeInUp min-h-screen" id="Layanan" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <LayananPublik />
      </motion.section>

      <motion.section className="Transportasi animate-fadeInUp min-h-screen" id="Transportasi" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <TransportationSection />
      </motion.section>

      <motion.section className="informasi animate-fadeInUp" id="Informasi" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <InformasiSection />
      </motion.section>

      <Image src={BackgroundBatik2} alt="Background Batik" />

      <footer>
        <FooterContent />
      </footer>
    </main>
  );
};

export default Home;
