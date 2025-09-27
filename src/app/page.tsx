import { Hero, About, Skills } from "@/components/sections";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <About />
      <Skills />
      
      <footer className="w-full py-6 mt-auto">
        <div className="flex gap-4 sm:gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200 text-sm sm:text-base"
            href="https://www.linkedin.com/in/muhammad-damar-kusumo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200 text-sm sm:text-base"
            href="https://github.com/DamarKusumo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            GitHub
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200 text-sm sm:text-base"
            href="https://www.instagram.com/damar_kusumo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
