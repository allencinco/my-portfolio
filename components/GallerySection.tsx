"use client";

import { useState } from "react";
import { Images, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import cam from "../assets/cam.jpg";
import game from "../assets/game.jpg";
import gradpic from "../assets/gradpic.jpg";
import group from "../assets/group.jpg";
import hover from "../assets/hover.jpg";
import kme from "../assets/kme.jpg";
import otaw from "../assets/otaw.jpg";
import profile from "../assets/profile.jpg";
import tao from "../assets/tao.jpg";
import thai from "../assets/thai.png";
import webpage from "../assets/webpage.jpg";
import wed from "../assets/wed.jpg";

type GalleryImage = {
  id: number;
  title: string;
  src: string | StaticImageData;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Photography",
    src: profile,
    alt: "Profile photography",
  },
  {
    id: 2,
    title: "Video Production",
    src: thai,
    alt: "Video production",
  },
  {
    id: 3,
    title: "Cultural",
    src: kme,
    alt: "Cultural",
  },
  {
    id: 4,
    title: "Event Coverage",
    src: group,
    alt: "Group event",
  },
  {
    id: 5,
    title: "Photography",
    src: cam,
    alt: "Professional photography",
  },
  {
    id: 6,
    title: "Game Development",
    src: game,
    alt: "Game project",
  },
  {
    id: 7,
    title: "Graduation",
    src: gradpic,
    alt: "Graduation photo",
  },
  {
    id: 8,
    title: "Web Design",
    src: webpage,
    alt: "Web design project",
  },
  {
    id: 9,
    title: "Creative Work",
    src: tao,
    alt: "Creative project",
  },
  {
    id: 10,
    title: "Photography",
    src: otaw,
    alt: "Nature photography",
  },
  {
    id: 11,
    title: "Video Production",
    src: wed,
    alt: "Wedding video",
  },
  {
    id: 12,
    title: "Photo Editing",
    src: hover,
    alt: "Edited photo",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const selected = galleryImages.find(
    (img) => img.id === selectedImage
  );

  const displayedImages = isExpanded ? galleryImages : galleryImages.slice(0, 8);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Images className="w-6 h-6 text-purple-600" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Gallery
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {displayedImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img.id)}
            className="relative group rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-square cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={100}
              priority={img.id === 1}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover contrast-110 saturate-110 transition-all duration-300 group-hover:scale-110"
              placeholder="empty"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm text-center px-2">
                {img.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {!isExpanded && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsExpanded(true)}
            className="px-3 py-2 bg-blue-400 hover:bg-blue-700 text-white font-small rounded-lg transition-colors duration-300"
          >
            Show More ({galleryImages.length - 8} photos)
          </button>
        </div>
      )}

      {/* Show Less Button */}
      {isExpanded && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsExpanded(false)}
            className="px-3 py-2 bg-gray-400 hover:bg-gray-500 text-white font-small rounded-lg transition-colors duration-300"
          >
            Show Less
          </button>
        </div>
      )}

      {/* 🔥 HD Lightbox Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          
          <div className="relative w-full h-full flex items-center justify-center p-4">
            
            {/* TRUE HD IMAGE */}
            <div className="relative w-full max-w-6xl h-[90vh]">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                quality={100}
                priority
                sizes="100vw" 
                className="object-contain select-none"
              />
            </div>

            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur p-3 rounded-full transition"
            >
              <X className="w-6 h-6 text-white" />
            </button>

          </div>
        </div>
      )}
    </div>
  );
}