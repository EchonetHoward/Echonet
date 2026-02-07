"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoAsset } from "@/lib/assets";
import { ImageModal } from "@/components/image-modal";

interface PhotographyGridProps {
  photos: PhotoAsset[];
  variant?: "overlay" | "caption-below";
}

export function PhotographyGrid({ photos, variant = "overlay" }: PhotographyGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoAsset | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {photos.map((photo) => (
          <div key={photo.id} className="flex flex-col gap-2 group">
            {/* Image Card */}
            <div 
              className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Overlay Variant: Caption on Hover */}
              {variant === "overlay" && (
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium leading-relaxed drop-shadow-md">
                    {photo.caption || photo.alt}
                  </p>
                </div>
              )}
            </div>

            {/* Caption-Below Variant */}
            {variant === "caption-below" && photo.caption && (
               <p className="text-xs font-medium text-gray-500 text-center">{photo.caption}</p>
            )}
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        imageSrc={selectedPhoto?.src || ""}
        altText={selectedPhoto?.alt || ""}
        caption={selectedPhoto?.caption}
      />
    </>
  );
}
