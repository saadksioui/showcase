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
    <section className="mt-5">
      <h1>Saad Ksioui</h1>
      <h3>Software Developer</h3>
      <p>Casablanca, Morocco</p>
    </section>
  )
}
export default Hero