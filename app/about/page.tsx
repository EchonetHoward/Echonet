import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
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
        
        <div className="prose prose-zinc dark:prose-invert">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            My long story starts here...
          </p>
        </div>
      </div>
    </div>
  );
}
