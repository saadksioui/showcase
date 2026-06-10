"use client"
import Image from "next/image"
import GithubIcon from '@iconify-react/mdi/github'
import LinkedinIcon from '@iconify-react/mdi/linkedin'
import LeetcodeIcon from '@iconify-react/fa7-brands/leetcode'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const Hero = () => {
  const links = [
    {
      link: "https://github.com/saadksioui",
      component: <GithubIcon height="1.8em" />,
    },
    {
      link: "https://www.linkedin.com/in/saadksioui/",
      component: <LinkedinIcon height="1.8em" />,
    },
    {
      link: "https://leetcode.com/u/saadksioui/",
      component: <LeetcodeIcon height="1.8em" />,
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/95 px-8 py-12 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.8)] backdrop-blur-xl sm:px-12 sm:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-primary/20 to-transparent blur-3xl" />

      <div className="relative flex flex-col items-center gap-6 text-center">
        <div className="relative overflow-hidden rounded-full border border-white/10 p-1 shadow-xl shadow-primary/20">
          <Image src="/avatar.png" alt="Avatar" width={180} height={180} className="rounded-full bg-slate-950" />
        </div>

        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Software Engineer</p>
          <h1 className="text-5xl font-heading font-semibold tracking-tight text-foreground sm:text-6xl">
            Hi, I'm Saad Ksioui.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
            Software Developer | 1337 Student | Driven by code, creativity, and meaningful user experiences.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {links.map((link, index) => (
            <Link
              href={link.link}
              target="_blank"
              key={index}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground transition hover:border-primary/80 hover:bg-primary/10"
            >
              {link.component}
            </Link>
          ))}
        </div>

        <Button className="mt-2 inline-flex items-center gap-2" size="lg">
          <Download /> Resume
        </Button>
      </div>
    </section>
  )
}
export default Hero