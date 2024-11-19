/** @format */
"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { AWS, cisco, esri, honeywell, ibm, motorolla, microsoft } from "@/app/images/collab";

gsap.registerPlugin(ScrollTrigger);

const ScrollingCollab = () => {
  // Modified infinite scroll implementation
  useEffect(() => {
    const container = document.querySelector(".sponsors-grid") as HTMLElement;
    if (!container) return;

    const scrollingText = gsap.utils.toArray(".sponsor-item") as HTMLElement[];
    if (scrollingText.length === 0) return;

    // Calculate total width of all items
    const totalWidth = scrollingText.reduce((sum, el) => sum + el.offsetWidth + 32, 0); // 32px for gap (2rem)

    // Set initial position
    gsap.set(scrollingText, {
      x: (i) => i * (totalWidth / scrollingText.length),
    });

    // Create the animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    tl.to(scrollingText, {
      x: `-=${totalWidth}`,
      duration: 5,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
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
    { name: "AWS", logo: AWS },
    { name: "Cisco", logo: cisco },
    { name: "Esri", logo: esri },
    { name: "Honeywell", logo: honeywell },
    { name: "IBM", logo: ibm },
    { name: "Motorola", logo: motorolla },
    { name: "Microsoft", logo: microsoft },
  ];
  return (
    <div className="sponsors-wrapper flex items-center">
      <div className="sponsors-grid flex items-center">
        {collaborators.map((collaborator, index) => (
          <div key={index} className="sponsor-item flex items-center">
            <Image src={collaborator.logo} alt={`${collaborator.name} logo`} className="sponsor-logo flex items-center" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCollab;
