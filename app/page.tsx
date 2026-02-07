import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  MapPin, 
  Link as LinkIcon 
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { getSortedPostsData } from "@/lib/posts";
import { getPhotography, getVideos } from "@/lib/assets";
import { SocialSection } from "@/components/social-section";
import { PhotographyGrid } from "@/components/photography-grid";

export default function Home() {
  const posts = getSortedPostsData();
  const photos = getPhotography();
  const videos = getVideos();

  return (
    <main className="min-h-screen bg-white pb-32">
      <Navbar />
       
      {/* --- HERO SECTION (Centered & Dreamy) --- */}
      <section id="home" className="relative w-full h-[55vh] min-h-[400px] flex flex-col items-center justify-center mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/hero/hero-bg.jpg" 
            alt="Atmospheric Sky" 
            fill 
            className="object-cover opacity-90"
            priority
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white"></div>
        </div>

        {/* Content (Centered) */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-white/50 shadow-lg">
             <Image src="/images/avatar/avatar.jpg" alt="Howard" fill className="object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">Howard</h1>
          
          {/* Meta Row (Location) */}
          <div className="flex justify-center items-center gap-2 text-sm text-gray-600 font-medium mt-2">
            <MapPin size={14} className="text-gray-400" />
            <span>Yancheng, China</span>
          </div>
        </div>
      </section>

      {/* --- BIO SECTION (Left Aligned - Strictly max-w-3xl) --- */}
      <section id="about" className="w-full max-w-3xl mx-auto px-6 mb-24">
        <h3 className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-6">About</h3>
        
        <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
          <p>Hey,欢迎来到我的秘密基地, 我是 Howard. </p>
          <p>
            04年，ENFP，世界500强外企销售实习生（ing），Echonet 主理人，「写给 00 后」系列撰稿者。
            <br />
            篮球爱好者，健身小白，魔术爱好者，BBOXer，爱打英雄联盟 / 三角洲行动 / CS2。
            <br />
            致力于 00 后觉醒与成长，探索 <span className="font-bold text-black">「AI」「Web3」「两性成长」「出海」</span>的可能性。
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
          {posts.slice(0, 3).map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`} className="block group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 cursor-pointer">
                <span className="text-gray-900 text-sm font-mono min-w-[100px]">{post.date}</span>
                <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">{post.title}</span>
              </div>
            </Link>
          ))}
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
        
        <PhotographyGrid photos={photos.slice(0, 3)} variant="overlay" />

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
            </a>
          ))}
        </div>

        <div className="flex justify-end mt-3">
          <Link href="/videos" className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1">
            More videos <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <SocialSection />
    </main>
  );
}
