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
      "link": "https://github.com/saadksioui",
      "component": <GithubIcon height="2em" />
    },
    {
      "link": "https://www.linkedin.com/in/saadksioui/",
      "component": <LinkedinIcon height="2em" />
    },
    {
      "link": "https://leetcode.com/u/saadksioui/",
      "component": <LeetcodeIcon height="2em" />
    },
  ]
  return (
    <div className="flex flex-col items-center gap-4 mt-20">
        <Image src="/avatar.png" alt="Avatar" width={200} height={200} className="rounded-full" />
        <h1 className="text-5xl font-bold text-center tracking-tight text-foreground">
            Hi, I'm Saad Ksioui.
        </h1>
        <p className="text-lg text-muted-foreground">
            Software Developer | 1337 Student | Driven by Code, Creativity & Purpose
        </p>
        <div className="flex items-center gap-2">
          {links.map((link, index) => (
            <Link href={`${link.link}`} target="_blank" key={index}>
              {link.component}
            </Link>
          ))}
        </div>
        <Button>
          <Download/> Resume
        </Button>
    </div>
  )
}
export default Hero