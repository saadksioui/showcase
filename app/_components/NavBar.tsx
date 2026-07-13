import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profile, socialLinks } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const NavBar = () => {
  
  return (
    <header className="">
      <div className="flex items-center justify-between">
        <Link href="#top" className="text-lg font-semibold tracking-tight text-white">
          {profile.name.split(" ")[0]}
          <span className="ml-1 text-white/60">.</span>
        </Link>

  
        <div className="flex justify-between items-center gap-1">
          {
            socialLinks.map((social, index) => (
              <Link key={index} href={social.href}>
                <Button variant="outline" size="sm" asChild>
                  <div className="flex items-center justify-between gap-2">
                    {social.icon === 'github' ? <FaGithub size={10} /> : social.icon === 'linkedin' ? <FaLinkedin size={10} /> : social.icon === 'mail' ? <Mail size={10} /> : social.icon === 'leetcode' ? <SiLeetcode size={10} /> : ''}
                    <span>{social.label}</span>
                  </div>
                </Button>
              </Link>
            ))
          }
        </div>
        
      </div>
    </header>
  );
};

export default NavBar