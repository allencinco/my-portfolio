"use client";

import { useState } from "react";
import { Images, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import cam from "../assets/cam.jpg";
import profile from "../assets/profile.jpg";
import kme from "../assets/kme.jpg";
import thai from "../assets/thai.png";

type GalleryImage = {
  id: number;
  title: string;
  src: string | StaticImageData;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Freelance photography",
    src: profile,
    alt: "Freelance photography sample",
  },
  {
    id: 2,
    title: "Design Work",
    src: thai,
    alt: "Design work 1",
  },
  {
    id: 3,
    title: "UI/UX Design",
    src: kme,
    alt: "UI/UX design 1",
  },
  {
    id: 4,
    title: "Photography",
    src: "/gallery/photo1.jpg",
    alt: "Photography 1",
  },
  {
    id: 5,
    title: "Video Editing",
    src: "/gallery/video1.jpg",
    alt: "Video work 1",
  },
  {
    id: 6,
    title: "Creative Work",
    src: "/gallery/creative1.jpg",
    alt: "Creative work 1",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const selected = galleryImages.find(
    (img) => img.id === selectedImage
  );

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
      <div className="grid grid-cols-2 gap-4">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img.id)}
            className="relative group rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-square cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={100}
              priority={img.id === 1} // preload first image
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