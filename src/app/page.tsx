import { Hero, About, Skills } from "@/components/sections";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Script from "next/script";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* JSON-LD: Person */}
      <Script id="ld-person" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: SITE_NAME,
            alternateName: ["Damar", "Damar Kusumo"],
            url: absoluteUrl('/'),
            image: absoluteUrl('/ava_no_bg.png'),
            jobTitle: "Google Certified Associate Cloud Engineer, Full-Stack Developer",
            sameAs: [
              "https://www.linkedin.com/in/muhammad-damar-kusumo/",
              "https://github.com/DamarKusumo",
              "https://www.instagram.com/damar_kusumo"
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jakarta",
              addressCountry: "ID"
            }
          })
        }}
      />
      {/* JSON-LD: WebSite with potentialAction for sitelinks search box */}
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: absoluteUrl('/'),
            potentialAction: {
              "@type": "SearchAction",
              target: `${absoluteUrl('/')}?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
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
