"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail, Twitter, ArrowUpRight, MapPin, Link as LinkIcon, Camera, ArrowRight, MessageCircle, BookOpen, Tv, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-[55vh] min-h-[500px] w-full">
        {/* Background Image */}
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Background" 
          fill 
          className="object-cover" 
          priority 
        />
        
        {/* Atmospheric Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:via-zinc-950/20 dark:to-zinc-950" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6 h-24 w-24 overflow-hidden rounded-full border border-white/50 bg-white/20 shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/50">
                 <Image 
                   src={resumeData.profile.avatar} 
                   alt={resumeData.profile.name}
                   fill
                   className="object-cover"
                   priority
                 />
            </div>
            
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              {resumeData.profile.name}
            </h1>

            {/* Meta Row */}
            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>{resumeData.profile.location}</span>
              </div>
              <a 
                href={resumeData.profile.connectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-slate-900 dark:hover:text-zinc-200"
              >
                <LinkIcon className="h-3.5 w-3.5" />
                <span>Connect Me</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto max-w-2xl px-6 pt-12 pb-24 flex flex-col gap-16 bg-white dark:bg-zinc-950">
        
        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl"
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
            About
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-lg leading-relaxed text-slate-900 dark:text-zinc-100 font-serif font-medium">
              {resumeData.profile.bio}
            </p>
            <div className="flex justify-end">
              <Link 
                href="/about"
                className="group flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                More about me
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Posts Section */}
        <motion.section
          id="posts"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Posts
          </h2>
          <div className="flex flex-col">
            {resumeData.posts.map((post, idx) => (
              <a
                key={idx}
                href={post.url}
                className="group flex cursor-pointer items-baseline justify-between py-3 transition-opacity hover:opacity-100"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="w-24 text-sm font-mono text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                    {post.date}
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:underline">
                    {post.title}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <Link 
              href="/posts"
              className="group flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              More posts
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.section>

        {/* Socials Section */}
        <motion.section
          id="socials"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Socials
          </h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[100px_1fr]">
            {/* Group A: Blog */}
            <div className="flex flex-col justify-center">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Blog</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={resumeData.socials.wechat}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                title="WeChat"
              >
                <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />
                <span className="sr-only">WeChat</span>
              </a>
              <a
                href={resumeData.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                title="X (Twitter)"
              >
                <Twitter className="h-7 w-7 transition-transform group-hover:scale-110" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href={resumeData.socials.xiaohongshu}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                title="Xiaohongshu"
              >
                <BookOpen className="h-7 w-7 transition-transform group-hover:scale-110" />
                <span className="sr-only">Xiaohongshu</span>
              </a>
            </div>

            {/* Group B: Vlog */}
            <div className="flex flex-col justify-center">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Vlog</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={resumeData.socials.bilibili}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                title="Bilibili"
              >
                <Tv className="h-7 w-7 transition-transform group-hover:scale-110" />
                <span className="sr-only">Bilibili</span>
              </a>
              <a
                href={resumeData.socials.douyin}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                title="Douyin"
              >
                <Video className="h-7 w-7 transition-transform group-hover:scale-110" />
                <span className="sr-only">Douyin</span>
              </a>
            </div>
          </div>
        </motion.section>
      </div>

    </div>
  );
}
