import { Navbar } from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import { getVideos } from "@/lib/assets";

export default function VideosPage() {
  const videos = getVideos();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="w-full max-w-3xl mx-auto px-6 pt-32 pb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl font-bold mb-12 text-gray-900 tracking-tight">Videos</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a key={video.id} href={video.link} target="_blank" className="group block cursor-pointer w-full">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3 border border-gray-100 shadow-sm transition-shadow duration-300 hover:shadow-md">
                {video.cover ? (
                  <Image 
                    src={video.cover} 
                    alt={video.title} 
                    fill 
                    className="object-cover transition-opacity group-hover:opacity-90" 
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                     <Play size={24} className="text-gray-400" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/30 backdrop-blur-md rounded-full p-2 scale-90 group-hover:scale-100 transition-transform shadow-sm">
                    <Play size={16} className="text-white fill-current" />
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-sm text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors text-center">
                {video.title}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
