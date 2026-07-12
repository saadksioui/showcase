"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:bg-white/10"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
