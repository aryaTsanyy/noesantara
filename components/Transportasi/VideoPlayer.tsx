/** @format */
"use client";
import { NoesantaraVideoLogo } from "@/app/images/informasi";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Video from "next-video";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const Video = videoRef.current;

    const updateProgress = () => {
      if (Video) {
        const percentage = (Video.currentTime / Video.duration) * 100;
        setProgress(percentage);
      }
    };

    if (Video) {
      Video.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (Video) {
        Video.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-gray-800">
      {/* Video */}
      <Video ref={videoRef} src="/videos/videoKereta.mp4" loop autoPlay muted className="w-full" />
      {/* Logo */}
      <div className="absolute bottom-4 left-4 text-white text-sm px-3 py-1 rounded-full flex items-center bg-gray-900/70">
        <Image src={NoesantaraVideoLogo} alt="Logo" className="h-10 mr-2" />
        Nusantara Video
      </div>
      {/* Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-700">
        <div className="h-full bg-green-500 transition-all duration-200" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default VideoPlayer;
