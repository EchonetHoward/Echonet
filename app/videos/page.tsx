import { Navbar } from "@/components/navbar";

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <div className="mx-auto max-w-2xl px-6 pt-24 pb-12">
        <h1 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Videos</h1>
        <div className="grid grid-cols-1 gap-6">
          <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
            Placeholder Video 1
          </div>
          <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
            Placeholder Video 2
          </div>
        </div>
        <p className="mt-8 text-center text-zinc-500">More videos coming soon...</p>
      </div>
    </div>
  );
}
