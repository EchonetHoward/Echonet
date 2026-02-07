import { Navbar } from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPhotography } from "@/lib/assets";
import { PhotographyGrid } from "@/components/photography-grid";

export default function PhotographyPage() {
  const photos = getPhotography();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="w-full max-w-3xl mx-auto px-6 pt-32 pb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-4xl font-bold mb-12 text-gray-900 tracking-tight">Photography</h1>
        
        <PhotographyGrid photos={photos} variant="caption-below" />
      </div>
    </div>
  );
}
