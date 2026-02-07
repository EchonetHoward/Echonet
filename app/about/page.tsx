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
            Hey,欢迎来到我的秘密基地, 我是 Howard.
            04年，ENFP，世界500强外企销售实习生（ing），Echonet 主理人（will do）。
            篮球爱好者，健身小白，魔术爱好者，BBOXer，爱打英雄联盟 / 三角洲行动 / CS2。
            致力于 00 后觉醒与成长，探索 「AI」「Web3」「两性成长」「出海」的可能性。
          </p>
        </div>
      </div>
    </div>
  );
}
