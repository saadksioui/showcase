"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-black/35 p-6" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-white/70">
          <span className="block text-white/60">Name</span>
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
          />
        </label>
        <label className="space-y-2 text-sm text-white/70">
          <span className="block text-white/60">Email</span>
          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-white/70">
        <span className="block text-white/60">Project brief</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell me about your idea, timeline, or goals."
          className="w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-white/60" role="status">
          {submitted ? "Thanks — your message is ready to send. This demo keeps the experience front-end only." : "Frontend only demo, designed to feel complete and polished."}
        </p>
        <Button type="submit" size="lg">
          <Send className="h-4 w-4" /> Send note
        </Button>
      </div>
    </form>
  );
}
