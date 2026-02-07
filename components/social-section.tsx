"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const socialBanners = [
  { 
    id: "wechat", 
    name: "WeChat", 
    img: "/images/social/wechat-banner.jpg", 
    action: "modal",
    href: "#" 
  },
  { 
    id: "x", 
    name: "X (Twitter)", 
    img: "/images/social/x-banner.jpg", 
    href: "https://x.com/Echonet_Howard" 
  },
  { 
    id: "xiaohongshu", 
    name: "RedNote", 
    img: "/images/social/xhs-banner.jpg", 
    href: "https://www.xiaohongshu.com/user/profile/62ac4357000000001902b899" 
  },
  { 
    id: "bilibili", 
    name: "Bilibili", 
    img: "/images/social/bilibili-banner.jpg", 
    href: "https://space.bilibili.com/22262402" 
  }
];

export function SocialSection() {
  const [showWeChatQR, setShowWeChatQR] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Logic
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % socialBanners.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + socialBanners.length) % socialBanners.length);
  const currentSocial = socialBanners[currentIndex];

  return (
    <>
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
    </>
  );
}
