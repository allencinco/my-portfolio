"use client";

import { useState } from "react";
import { Images, X } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    title: "Project Showcase",
    src: "/gallery/project1.jpg",
    alt: "Project showcase 1",
  },
  {
    id: 2,
    title: "Design Work",
    src: "/gallery/design1.jpg",
    alt: "Design work 1",
  },
  {
    id: 3,
    title: "UI/UX Design",
    src: "/gallery/ui1.jpg",
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

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Images className="w-6 h-6 text-purple-600" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Gallery</h2>
      </div>

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
              className="object-cover transition-opacity duration-300 group-hover:opacity-75"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm text-center px-2">
                {img.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 dark:bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full">
            <Image
              src={galleryImages.find((img) => img.id === selectedImage)?.src || ""}
              alt="Gallery preview"
              width={600}
              height={600}
              className="w-full h-auto rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
