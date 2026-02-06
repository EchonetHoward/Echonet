import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-24 dark:bg-zinc-950 md:py-32">
      <div className="mx-auto max-w-[700px]">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          All Posts
        </h1>
        
        <div className="flex flex-col">
          {resumeData.posts.map((post, idx) => (
            <a
              key={idx}
              href={post.url}
              className="group flex cursor-pointer items-baseline justify-between py-4 transition-opacity hover:opacity-100 border-b border-zinc-100 dark:border-zinc-900 last:border-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <span className="w-32 text-sm font-mono text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                  {post.date}
                </span>
                <span className="font-medium text-lg text-zinc-900 dark:text-zinc-100 group-hover:underline">
                  {post.title}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
          
          <div className="mt-12 text-center text-sm text-zinc-400">
            More posts coming soon...
          </div>
        </div>
      </div>
    </div>
  );
}
