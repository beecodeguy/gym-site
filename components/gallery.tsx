"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    category: "Fitness",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop",
    category: "Fit",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1898&auto=format&fit=crop",
    category: "Abs",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    category: "Train",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop",
    category: "Train",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?q=80&w=1909&auto=format&fit=crop",
    category: "Gym",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(photo.url)}
            >
              <Image
                src={photo.url}
                alt={photo.category}
                width={200}
                height={200}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <p className="absolute top-4 left-4 text-xl font-bold md:hidden">
                {photo.category}
              </p>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative h-[90vh] w-[90vw] rounded-lg">
            <Image
              fill
              src={selectedImage}
              alt="Selected"
              className=" object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
