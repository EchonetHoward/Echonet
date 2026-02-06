"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Link as LinkIcon 
} from "lucide-react";
import { Navbar } from "@/components/navbar";

// --- DATA ---
const photos = [
  { id: 1, src: "/images/photo1.jpg", alt: "心有猛虎，细嗅蔷薇" },
  { id: 2, src: "/images/photo2.jpg", alt: "月" },
  { id: 3, src: "/images/photo3.jpg", alt: "见过阳光的眼睛，容不下半点黑暗" },
  { id: 4, src: "/images/photo4.jpg", alt: "阴天" },
];

const videos = [
  // --- Newest Video (Shows 1st on Home) ---
  { 
    id: 4, 
    title: "2024 年度总结（下）", 
    cover: "/images/video4.jpg", 
    link: "https://www.bilibili.com/video/BV18N6HYnEtK/?spm_id_from=333.1387.upload.video_card.click&vd_source=ece36737ea6082692cef7192e84437b5" 
  },
  // --- 2nd Newest (Shows 2nd on Home) ---
  { 
    id: 3, 
    title: "2024 年度总结（上）", 
    cover: "/images/video3.jpg", 
    link: "https://www.bilibili.com/video/BV1aw6HYpEuz/?spm_id_from=333.1387.upload.video_card.click" 
  },
  // --- 3rd Newest (Shows 3rd on Home) ---
  { 
    id: 2, 
    title: "2023 年度总结", 
    cover: "/images/video2.jpg", 
    link: "https://www.bilibili.com/video/BV1Sc411b72i/?spm_id_from=333.1387.upload.video_card.click&vd_source=ece36737ea6082692cef7192e84437b5" 
  },
  // --- Oldest Video (HIDDEN from Home, visible in Archive) ---
  { 
    id: 1, 
    title: "2022 年度总结", 
    cover: "/images/video1.jpg", 
    link: "https://www.bilibili.com/video/BV1VA411S7BP/?spm_id_from=333.1387.upload.video_card.click" 
  }
];

const socialBanners = [
  { 
    id: "wechat", 
    name: "WeChat", 
    img: "/images/wechat-banner .jpg", 
    action: "modal",
    href: "#" 
  },
  { 
    id: "x", 
    name: "X (Twitter)", 
    img: "/images/x-banner.jpg", 
    href: "https://x.com/Echonet_Howard" 
  },
  { 
    id: "xiaohongshu", 
    name: "RedNote", 
    img: "/images/xhs-banner.jpg", 
    href: "https://www.xiaohongshu.com/user/profile/62ac4357000000001902b899" 
  },
  { 
    id: "bilibili", 
    name: "Bilibili", 
    img: "/images/bilibili-banner.jpg", 
    href: "https://space.bilibili.com/22262402" 
  }
];

export default function Home() {
  const [showWeChatQR, setShowWeChatQR] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Logic
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % socialBanners.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + socialBanners.length) % socialBanners.length);
  const currentSocial = socialBanners[currentIndex];

  return (
    <main className="min-h-screen bg-white pb-32">
      <Navbar />
       
      {/* --- HERO SECTION (Centered & Dreamy) --- */}
      <section id="home" className="relative w-full h-[55vh] min-h-[400px] flex flex-col items-center justify-center mb-12">
        {/* Background Layer */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Sky Background" 
            fill 
            className="object-cover" 
            priority 
          />
          {/* Cloud Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>

        {/* Centered Content (Floating) */}
        <div className="relative z-10 flex flex-col items-center mt-10">
          {/* Avatar */}
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
            <Image src="/images/avatar.jpg" fill className="object-cover" alt="Howard" />
          </div>
          
          {/* Name */}
          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Howard</h1>
          
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> Yancheng, China
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <a href="#socials" className="flex items-center gap-1 hover:text-black transition-colors">
              <LinkIcon size={14} /> Connect Me
            </a>
          </div>
        </div>
      </section>

      {/* --- BIO SECTION (Left Aligned - Strictly max-w-3xl) --- */}
      <section id="about" className="w-full max-w-3xl mx-auto px-6 mb-24">
        <h3 className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-6">About</h3>
        
        <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
          <p>Hey,欢迎来到我的秘密基地, 我是 Howard. </p>
          <p>
            04年，世界500强外企销售实习生（ing），Echonet 主理人（will do）。
            <br />
            爱好：篮球，健身，魔术，BBOX，英雄联盟/三角洲行动。
            <br />
            致力于 00 后觉醒与成长，专注于 <span className="font-bold text-black">「AI」「Web3」「个人成长」「出海」</span>。
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors">
            More about me <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* --- POSTS SECTION --- */}
      <section id="posts" className="w-full max-w-3xl mx-auto px-6 mt-24">
        <h3 className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-8">Posts</h3>
        <div className="space-y-6">
          {/* Post Items */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 group cursor-pointer">
            <span className="text-gray-900 text-sm font-mono min-w-[100px]">2026-02-02</span>
            <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">写给00后：何谓人格独立？</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 group cursor-pointer">
             <span className="text-gray-900 text-sm font-mono min-w-[100px]">2026-01-26</span>
             <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">写给00后：你的爱好是什么？</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 group cursor-pointer">
             <span className="text-gray-900 text-sm font-mono min-w-[100px]">2026-01-19</span>
             <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">「2」写给00后：为什么我们不能错过 Web3</span>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <Link href="/posts" className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1">
            More posts <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* --- PHOTOGRAPHY SECTION --- */}
      <section id="photo" className="w-full max-w-3xl mx-auto px-6 mt-24">
        <h3 className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-8">Photography</h3>
        
        <div className="grid grid-cols-3 gap-4 w-full">
          {photos.slice(0, 3).map((photo) => (
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

        <div className="flex justify-end mt-3">
          <Link href="/photography" className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1">
            More photos <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* --- VIDEOS SECTION --- */}
      <section id="videos" className="w-full max-w-3xl mx-auto px-6 mt-24">
        <h3 className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-8">Latest Vlogs</h3>
        
        <div className="grid grid-cols-3 gap-4 w-full">
          {videos.slice(0, 3).map((video) => (
            <a key={video.id} href={video.link} target="_blank" className="group block cursor-pointer w-full">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 mb-2 border border-gray-100">
                <Image src={video.cover} alt={video.title} fill className="object-cover transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/30 backdrop-blur-md rounded-full p-2 scale-90 group-hover:scale-100 transition-transform">
                    <Play size={16} className="text-white fill-current" />
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-sm text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                {video.title}
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">{video.views}</p>
            </a>
          ))}
        </div>

        <div className="flex justify-end mt-3">
          <Link href="/videos" className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1">
            More videos <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* --- SOCIALS SECTION --- */}
      <section id="connect" className="w-full max-w-3xl mx-auto px-6 mt-24">
        <h3 className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-8">CONNECT WITH ME</h3>
        
        <div className="relative flex items-center justify-center gap-8">
           {/* Left Arrow */}
           <button 
             onClick={prevSlide} 
             className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-black"
           >
             <ChevronLeft size={20} />
           </button>

           {/* Card */}
           <div className="relative w-32 h-32 sm:w-40 sm:h-40">
             <div 
               key={currentIndex}
               onClick={() => currentSocial.action === "modal" ? setShowWeChatQR(true) : window.open(currentSocial.href, "_blank")}
               className="w-full h-full relative cursor-pointer rounded-[1.5rem] overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group"
             >
               <Image src={currentSocial.img} alt={currentSocial.name} fill className="object-cover" />
               
               {/* Overlay on hover */}
               <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
             <p className="text-center text-xs font-medium text-gray-500 mt-3">{currentSocial.name}</p>
           </div>

           {/* Right Arrow */}
           <button 
             onClick={nextSlide} 
             className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-black"
           >
             <ChevronRight size={20} />
           </button>
        </div>
      </section>

      {/* --- WECHAT MODAL --- */}
      {showWeChatQR && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity"
          onClick={() => setShowWeChatQR(false)}
        >
          <div 
            className="relative bg-white text-black p-6 rounded-2xl max-w-xs w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowWeChatQR(false)}
              className="absolute right-4 top-4 p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="text-center mt-2 mb-6">
              <h3 className="text-lg font-bold">Scan to Connect</h3>
              <p className="text-gray-500 text-xs mt-1">关注我的微信公众号</p>
            </div>
            
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
               <Image 
                 src="/images/wechat-qr.jpg" 
                 fill 
                 className="object-cover" 
                 alt="WeChat QR Code" 
               />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
