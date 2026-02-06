import { Navbar } from "@/components/navbar";
import Image from "next/image";

const photos = [
  { id: 1, src: "/images/photo1.jpg", alt: "心有猛虎，细嗅蔷薇" },
  { id: 2, src: "/images/photo2.jpg", alt: "月" },
  { id: 3, src: "/images/photo3.jpg", alt: "见过阳光的眼睛，容不下半点黑暗" },
  { id: 4, src: "/images/photo4.jpg", alt: "阴天" },
];

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="w-full max-w-3xl mx-auto px-6 pt-32 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 tracking-tight">Photography</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100 group">
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Hover Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium leading-relaxed drop-shadow-md">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
