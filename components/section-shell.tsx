import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_40px_100px_-40px_rgba(255,255,255,0.12)] backdrop-blur-xl sm:p-8 ${className}`}
    >
      <div className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/55">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="text-base leading-8 text-white/65">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}
