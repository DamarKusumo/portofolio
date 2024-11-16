import TypingEffect from "@/components/TypingEffect";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="gap-8 row-start-2 items-center sm:items-start">
        <div className="sm:flex sm:flex-row sm:items-center sm:gap-4 sm:text-center">
          <Image
            src="/ava_no_bg.png"
            alt="Damar"
            width={120}
            height={120}
            priority
            className="sm:flex-shrink-0 mx-auto sm:mx-0"
          />
          <br></br>
          <div className="flex flex-col">
            <TypingEffect
              initialText="Hi, I'm Damar,"
              text="a  software engineer based in Jakarta, Indonesia."
              speed={50}  // Adjust typing speed as needed
            />
            <TypingEffect
              text="C urrectly, I'm working at Andal Software as a Fullstack Developer."
              speed={80}  // Adjust typing speed as needed
              delay={3000}
            />
            <br></br>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://www.linkedin.com/in/muhammad-damar-kusumo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See my complete profile
            </a>
          </div>
        </div>

        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a> */}
        {/* </div> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/muhammad-damar-kusumo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/DamarKusumo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/damar_kusumo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
          Instagram
        </a>
      </footer>
    </div>
  );
}
