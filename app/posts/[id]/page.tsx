import Link from "next/link";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { Navbar } from "@/components/navbar";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => path.params);
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <article className="w-full max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <header className="mb-12">
          <time className="text-sm font-mono text-gray-500 block mb-4">{post.date}</time>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{post.title}</h1>
        </header>

        <div 
          className="prose prose-gray prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
        />
      </article>
    </main>
  );
}
