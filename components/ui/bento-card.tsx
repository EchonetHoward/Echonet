"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  href?: string;
  target?: string;
}

export const BentoCard = ({
  children,
  className,
  title,
  description,
  href,
  target,
}: BentoCardProps) => {
  const content = (
    <div className="flex h-full flex-col">
      {title && (
        <h3 className="mb-1 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          {title}
        </h3>
      )}
      {description && (
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
      <div className="flex-1">{children}</div>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 block",
          className
        )}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950",
        className
      )}
    >
      {content}
    </motion.div>
  );
};
