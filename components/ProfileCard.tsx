"use client";

import { useState } from "react";
import {MapPin,Mail,Send,Copy,Download,Code2,} from "lucide-react";
import Image from "next/image";
import gradpic from "../assets/gradpic.jpg";
import hoverPic from "../assets/hover.jpg";

export default function ProfileCard() {
  const [copied, setCopied] = useState(false);
  const email = "alleniversoncinco@email.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg p-6 mb-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300">

      {/* Toast */}
      {copied && (
        <div className="absolute top-4 right-4 bg-black dark:bg-white text-white dark:text-black text-xs px-3 py-2 rounded-lg shadow-lg animate-fade-in">
          Copied!
        </div>
      )}

      {/* Profile Image */}
      <div className="mb-6 flex justify-center">
        <div className="relative w-40 h-52 rounded-2xl overflow-hidden group border-2 border-white dark:border-gray-700 shadow-md dark:shadow-lg transition-all duration-500 hover:shadow-xl dark:hover:shadow-xl hover:scale-105">

          {/* Default Image */}
          <Image
            src={gradpic}
            alt="Allen Iverson Cinco"
            fill
            sizes="160px"
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            priority
          />

          {/* Hover Image */}
          <Image
            src={hoverPic}
            alt="Hover"
            fill
            sizes="160px"
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-1">
        ALLEN IVERSON CINCO
      </h1>

      {/* Location */}
      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-4">
        <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <span>Davao City, Philippines</span>
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed">
        Aspiring Full-Stack Developer | Freelancer | UI/UX & Photo & Video Editor
      </p>

      {/* Buttons */}
<div className="flex flex-col gap-3">

  {/* GitHub */}
  <a
    href="https://github.com/allencinco"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 w-full bg-black dark:bg-white text-white dark:text-black font-medium py-2 rounded-lg transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
  >
    <Code2 className="w-4 h-4" />
    <span>GitHub</span>
  </a>

  {/* Email */}
  <a
    href={`mailto:${email}`}
    className="flex items-center justify-center gap-2 w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-medium py-2 rounded-lg transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-[1.03] active:scale-[0.98]"
  >
    <Mail className="w-4 h-4" />
    <span>Send Email</span>
  </a>

  {/* Copy Email */}
  <button
    onClick={handleCopy}
    className="flex items-center justify-center gap-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium py-2 rounded-lg border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-[1.03] active:scale-[0.98]"
  >
    <Copy className="w-4 h-4" />
    <span>Copy Email</span>
  </button>

  {/* Telegram */}
  <a
    href="https://t.me/ArenShinko"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium py-2 rounded-lg border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-[1.03] active:scale-[0.98]"
  >
    <Send className="w-4 h-4" />
    <span>Telegram</span>
  </a>

  {/* Download CV */}
  <a
    href="/cv.pdf"
    download
    className="flex items-center justify-center gap-2 w-full bg-black dark:bg-white text-white dark:text-black font-medium py-2 rounded-lg transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
  >
    <Download className="w-4 h-4" />
    <span>Download CV</span>
  </a>

</div>

       {/* Toast Animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}