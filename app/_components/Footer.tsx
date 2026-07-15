import { profile } from "@/data/portfolio"

const Footer = () => {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center gap-2 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
export default Footer