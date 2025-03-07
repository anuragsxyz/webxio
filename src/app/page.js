import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <h1 className="text-5xl sm:text-9xl font-bold text-center sm:text-left">
          {" "}
          WebiXO
        </h1>

        <code className="bg-black/[.05] dark:bg-white/[.06] p-4 mb-2  py-0.5 rounded font-medium text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
          We make great <br></br> <b>WEBSITES | MOBILE APPS </b>
        </code>
        <p className="text-m sm:text-m text-center sm:text-center">
          Start building your dream Project with Webixo
        </p>

        {/* <p className="text-m sm:text-m text-center sm:text-center saturate-50">
          At Webixo, we craft powerful digital experiences that drive results.
          Whether you need a high-performance website, a growth-driven digital
          marketing strategy.
        </p> */}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="mailto:hello@webxio.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span> →</span> Your Free Single Page Website
          </a>
        </div>
        <p className="text-xs sm:text-xs text-center sm:text-center">
          {" "}
          **To claim a free website send us an email with subject line &quot;
          <strong>FREE WEBSITE</strong>&quot; by clicking the button above**
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:hello@webxio.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello@webxio.in
        </a>
      </footer>
    </div>
  );
}
