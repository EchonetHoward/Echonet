import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { Navbar } from "@/components/navbar";
import { ArrowLeft } from "lucide-react";

export default function PostsPage() {
  const posts = getSortedPostsData();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="w-full max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-3xl font-bold mb-12">All Posts</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`} className="block group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
                <span className="text-gray-500 text-sm font-mono min-w-[120px]">{post.date}</span>
                <span className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
