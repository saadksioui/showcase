"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight, Download, ExternalLink, Mail, MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/section-shell";
import { ContactForm } from "@/components/portfolio/contact-form";
import { skills } from "@/data/skills";
import {
  contactCopy,
  education,
  experience,
  navigation,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";

function getIcon(name: string) {
  switch (name) {
    case "mail":
      return Mail;
    default:
      return ExternalLink;
  }
}

export function PortfolioSections() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const filters = useMemo(() => ["All", ...Array.from(new Set(projects.flatMap((project) => project.technologies)))], [projects]);
  const displayedProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.technologies.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <section id="top" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-12 shadow-[0_40px_120px_-50px_rgba(255,255,255,0.16)] backdrop-blur-xl sm:px-10 sm:py-16 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/55">
                {profile.role}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/70">{profile.tagline}</p>
              <p className="max-w-2xl text-base leading-7 text-white/60">{profile.heroSummary}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={profile.cvUrl} target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" /> Download CV
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">
                  View work <MoveRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5">
                {profile.location}
              </span>
              <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5">
                {profile.availability}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-black/40 p-6"
          >
            <div className="mb-6 flex items-center justify-between text-sm text-white/60">
              <span>Current focus</span>
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.25em]">
                Available for new work
              </span>
            </div>
            <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">Now building</p>
              <p className="text-lg leading-8 text-white/80">Elegant interfaces, mindful product strategy, and careful engineering choices for modern teams.</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.slice(0, 3).map((link) => {
                  const Icon = getIcon(link.icon);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/30 hover:bg-white/10"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionShell id="about" eyebrow="About" title="A calm, considered approach to digital products.">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">Profile</p>
            <p className="mt-4 text-base leading-8 text-white/70">
              {profile.about[0]}
            </p>
          </div>
          <div className="space-y-4 text-base leading-8 text-white/70">
            {profile.about.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="skills" eyebrow="Skills" title="A deliberate toolkit for modern interfaces." description="I value clean systems, thoughtful interactions, and production-ready execution.">
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill.name} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
              {skill.name}
            </span>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="experience" eyebrow="Experience" title="Building with clarity, intent, and long-term craft." description="A mix of client work, independent practice, and strong engineering fundamentals.">
        <div className="space-y-5">
          {experience.map((item) => (
            <div key={`${item.company}-${item.role}`} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{item.role}</p>
                  <p className="text-white/70">{item.company}</p>
                </div>
                <div className="text-sm text-white/55">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">{item.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="projects" eyebrow="Projects" title="Selected work that balances form and function." description="Each project emphasizes thoughtful interaction, clear storytelling, and a premium experience.">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-3 py-2 text-sm transition ${activeFilter === filter ? "border-white/30 bg-white/10 text-white" : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          {displayedProjects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/35"
            >
              <div className="relative aspect-4/3 overflow-hidden border-b border-white/10 bg-white/4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-white">{project.title}</p>
                    <p className="text-sm text-white/60">{project.summary}</p>
                  </div>
                  {project.featured ? (
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-white/60">
                      Featured
                    </span>
                  ) : null}
                </div>
                <p className="text-sm leading-7 text-white/70">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <Link href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white">
                    <ExternalLink className="h-4 w-4" /> GitHub
                  </Link>
                  <Link href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white">
                    <ArrowUpRight className="h-4 w-4" /> Live demo
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      {education.length ? (
        <SectionShell eyebrow="Education" title="A foundation shaped by rigorous practice and curiosity.">
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.school} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{item.school}</p>
                    <p className="text-white/70">{item.degree}</p>
                  </div>
                  <p className="text-sm text-white/55">{item.period}</p>
                </div>
                <p className="mt-4 text-base leading-8 text-white/70">{item.details}</p>
              </div>
            ))}
          </div>
        </SectionShell>
      ) : null}

      <SectionShell id="contact" eyebrow="Contact" title="Let’s create something precise and lasting." description={contactCopy.body}>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="flex flex-col gap-6 rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
            <div className="space-y-3">
              <p className="text-lg font-semibold text-white">{contactCopy.title}</p>
              <p className="text-base leading-8 text-white/70">{contactCopy.body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" /> {contactCopy.cta}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={profile.cvUrl} target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" /> Download CV
                </Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-white/60">
              <p>{profile.email}</p>
              <p>{profile.location}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </SectionShell>
    </>
  );
}
