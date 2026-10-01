import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import {
  clients,
  steps,
  DRIVE_FOLDERS,
  WORK_VIDEOS,
  FRAME_IO,
} from "./data";
import { Btn, Reveal, SectionHead } from "./components/ui";
import { ShortFormCarousel, VideoCard } from "./components/VideoCard";

const NAV: [string, string][] = [
  ["Featured", "featured"],
  ["Long-Form", "long"],
  ["Short-Form", "short"],
  ["UGC", "ugc"],
  ["Process", "process"],
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [current, setCurrent] = useState("featured");
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setMenu(false);
    const el = document.getElementById(id);
    if (el) lenisRef.current?.scrollTo(el, { offset: -88 });
  };

  return (
    <div
      className={`min-h-screen overflow-x-clip transition-colors duration-500 ${
        dark ? "theme-dark" : "theme-light"
      }`}
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0c]/75 backdrop-blur-xl">
        <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-4 py-3 sm:px-6 md:grid-cols-[auto_minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-8">
          <button
            onClick={() => go("top")}
            className="justify-self-start text-[17px] font-extrabold tracking-normal text-white"
          >
            FLOWAMIC
          </button>

          <nav className="header-glass-pill hidden items-center gap-0.5 justify-self-center border border-white/10 bg-neutral-900/60 p-1.5 shadow-lg shadow-black/10 backdrop-blur-md md:flex md:gap-0.5 lg:gap-1 lg:justify-self-auto">
            {NAV.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`header-pill-action px-1.5 py-2 text-[10px] transition-colors duration-200 lg:px-4 lg:text-[12px] ${
                  current === id
                    ? "bg-white/10 text-[#ccff00]"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="header-desktop-theme header-pill-action flex h-9 w-9 items-center justify-center border border-white/15 bg-white/5 text-[13px] text-white transition-colors hover:bg-white/10"
            >
              {dark ? "☀" : "☾"}
            </button>
            <Btn
              as="a"
              href="mailto:hello@flowamic.studio"
              variant="outline"
              className="header-book-action header-pill-action border-white/15 bg-white/5 px-3 py-2 text-[10px] text-white hover:bg-white/10 lg:px-4 lg:py-2.5 lg:text-[11px]"
            >
              Book a Call
            </Btn>
            <Btn
              as="a"
              href="mailto:hello@flowamic.studio"
              variant="primary"
              className="header-primary-action header-pill-action px-4 py-2.5 opacity-100 transition-opacity hover:opacity-90"
            >
              Get in Touch
            </Btn>
            <button
              onClick={() => setMenu((m) => !m)}
              aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
              className="header-mobile-menu header-pill-action flex h-9 w-9 items-center justify-center border border-white/15 bg-white/5 text-sm text-white"
            >
              {menu ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/5 bg-[#0a0a0c]/95 backdrop-blur-xl md:hidden"
            >
              <div className="px-5 py-3 sm:px-8">
                {NAV.map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => go(id)}
                    className={`block w-full py-3 text-left text-[14px] transition-colors hover:text-[#ccff00] ${
                      current === id ? "text-[#ccff00]" : "text-white/75"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main id="top" className="overflow-x-clip">
        {/* HERO */}
        <section className="w-full py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-none border px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] muted line">
              <span className="h-1.5 w-1.5 rounded-none bg-[#ccff00]" />
              Video Editing Studio
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2rem,7.4vw,5rem)] font-extrabold leading-[0.98]">
              EDITS THAT MAKE PEOPLE STOP SCROLLING
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed muted sm:text-base">
              We turn raw videos into high-converting visual stories for top
              creators and brands.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn as="button" onClick={() => go("featured")} variant="primary">
                See Our Work
              </Btn>
              <Btn as="a" href="mailto:hello@flowamic.studio" variant="outline">
                Book a Call
              </Btn>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-14 overflow-hidden rounded-none border bg-(--surface) p-2 line sm:p-3">
              <div className="group/player relative aspect-video w-full overflow-hidden rounded-none bg-black">
                <iframe
                  src="https://drive.google.com/file/d/1NnDozhfA3vgouvF50aoHneWSoEoFjrzL/preview"
                  title="Showreel 2026"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-3 text-[11px] uppercase tracking-[0.18em] muted sm:px-3">
                <span>Showreel 2026</span>
                <a
                  href={DRIVE_FOLDERS.showreel}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#ccff00]"
                >
                  Open Drive Folder ↗
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-1 gap-1 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["320+", "Videos Delivered"],
                ["48h", "Avg. Turnaround"],
                ["120M+", "Views Generated"],
                ["40+", "Brands & Creators"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="bg-(--surface) px-5 py-7 text-center sm:text-left"
                >
                  <div className="font-display text-2xl font-bold sm:text-3xl">
                    {n}
                  </div>
                  <div className="mt-1.5 text-[11px] uppercase tracking-[0.16em] muted">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          </div>
        </section>

        {/* FEATURED */}
        <section id="featured" className="section-band w-full py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            label="Selected Projects"
            title="FEATURED WORK"
            sub="A tight selection of recent edits, from documentary storytelling to tutorials."
            action={
              <Btn as="a" href={DRIVE_FOLDERS.featured} target="_blank" rel="noreferrer" variant="outline">
                View All Work
              </Btn>
            }
          />
          <div className="grid gap-8 md:grid-cols-2">
            {WORK_VIDEOS.featured.map((w, i) => (
              <Reveal key={w.id} delay={i * 0.07}>
                <VideoCard work={w} />
              </Reveal>
            ))}
          </div>
          </div>
        </section>

        {/* TICKER */}
        <section className="w-full py-8 sm:py-10">
          <div className="ticker overflow-hidden">
            <div className="ticker-track flex w-max gap-12 pr-12">
              {[...clients, ...clients].map((c, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.22em] muted transition-colors hover:text-(--fg)"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LONG-FORM */}
        <section id="long" className="section-band w-full py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            label="Long-form editing"
            title="LONG-FORM EDITS"
            sub="Documentaries, podcasts and YouTube main-channel videos built around narrative pacing and retention curves."
            action={<Btn as="a" href={DRIVE_FOLDERS.longForm} target="_blank" rel="noreferrer" variant="outline">View Long-Form Work</Btn>}
          />
          <div className="grid gap-8 md:grid-cols-2">
            {WORK_VIDEOS.longForm.map((w, i) => (
              <Reveal key={w.id} delay={(i % 2) * 0.07}>
                <VideoCard work={w} />
              </Reveal>
            ))}
          </div>
          </div>
        </section>

        {/* SHORT-FORM */}
        <section id="short" className="w-full py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            label="Vertical editing"
            title="SHORT-FORM EDITS"
            sub="Vertical 9:16 cuts engineered for Reels, Shorts and TikTok, with hooks landing in the first 1.5 seconds."
            action={<Btn as="a" href={DRIVE_FOLDERS.shortForm} target="_blank" rel="noreferrer" variant="outline">View Short-Form Work</Btn>}
          />
          <ShortFormCarousel items={WORK_VIDEOS.shortForm} />
          </div>
        </section>

        {/* UGC */}
        <section id="ugc" className="section-band w-full py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            label="Creator-led campaigns"
            title="UGC ADS"
            sub="Creator-led performance ads built around hook, problem, product and proof for cold traffic."
            action={<Btn as="a" href={DRIVE_FOLDERS.ugc} target="_blank" rel="noreferrer" variant="outline">View UGC Work</Btn>}
          />
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {WORK_VIDEOS.ugc.map((w, i) => (
              <Reveal key={w.id} delay={i * 0.07}>
                <VideoCard work={w} vertical />
              </Reveal>
            ))}
            <Reveal delay={0.14}>
              <a
                href={FRAME_IO}
                target="_blank"
                rel="noreferrer"
                className="group flex aspect-9/16 flex-col justify-between overflow-hidden bg-[#ccff00] p-6 text-[#0a0a0c] transition-colors hover:bg-[#d9ff3d] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                    Frame.io
                  </span>
                  <span aria-hidden="true" className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    UGC Deliverables
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-extrabold leading-[1.02] sm:text-3xl">
                    YOUR NEXT CAMPAIGN STARTS HERE.
                  </h3>
                  <p className="mt-4 max-w-xs text-[13px] leading-relaxed">
                    Explore creator-led edits and current campaign work.
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 border-b border-[#0a0a0c] pb-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
                    View deliverables <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            </Reveal>
          </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="w-full py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            label="Workflow"
            title="HOW IT WORKS"
            sub="A simple three-step process from raw footage to published content."
          />
          <div className="grid grid-cols-1 border-y border-(--line) md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <article className="h-full border-b border-(--line) py-6 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:py-8 md:last:border-r-0 md:first:pl-0">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[12px] font-semibold text-[#ccff00]">
                      {s.n}
                    </span>
                    <span className="text-[9px] font-medium uppercase tracking-[0.18em] muted">
                      Step {i + 1} of {steps.length}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed muted">
                    {s.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-band w-full py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-7 border-y border-(--line) py-8 sm:gap-9 sm:py-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ccff00]">
                  Let&apos;s work together
                </span>
                <h2 className="mt-3 max-w-3xl font-display text-[clamp(1.9rem,5vw,3.6rem)] font-extrabold leading-[1.02]">
                READY TO LEVEL UP YOUR CONTENT?
                </h2>
                <p className="mt-4 max-w-xl text-[14px] leading-relaxed muted sm:text-[15px]">
                  Have a project in mind? Let&apos;s bring your story to life with
                  powerful edits.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Btn as="a" href="mailto:hello@flowamic.studio" variant="primary">
                  Let’s Connect
                </Btn>
                <Btn as="a" href={DRIVE_FOLDERS.showreel} target="_blank" rel="noreferrer" variant="outline">
                  Browse Showreel
                </Btn>
              </div>
            </div>
          </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full overflow-hidden bg-[#0a0a0c] text-[#f2f2f0]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex justify-end border-b border-[#252528] py-8 sm:py-10">
              <a
                href="mailto:hello@flowamic.studio"
                className="flex max-w-full flex-wrap items-center justify-end gap-2 text-right text-[20px] font-medium leading-none tracking-normal transition-colors hover:text-[#ccff00] sm:text-4xl lg:text-5xl"
              >
                <span>LET&apos;S MAKE SOMETHING GREAT.</span>
                <span aria-hidden="true" className="text-[0.9em]">↗</span>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-8 text-[12px] md:grid-cols-2 md:gap-y-10 md:py-12">
              <div className="max-w-md">
                <p className="leading-relaxed text-[#a0a0a5]">
                  An independent video editing studio crafting long-form,
                  short-form and UGC edits for creators and brands worldwide.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77777d]">
                  Navigate
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {NAV.map(([label, id]) => (
                    <li key={id}>
                      <button
                        onClick={() => go(id)}
                        className="transition-colors hover:text-[#ccff00]"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="flex flex-col justify-between gap-3 border-t border-[#252528] py-5 text-[10px] text-[#77777d] sm:flex-row sm:items-center">
              <span>© 2026 FLOWAMIC. All rights reserved.</span>
              <span>
                Designed and Developed by{" "}
                <a
                  href="https://webixus.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f2f2f0] transition-colors hover:text-[#ccff00]"
                >
                  Webixus
                </a>
              </span>
            </div>
          </div>

          <div className="overflow-hidden bg-[#ccff00] text-[#0a0a0c]">
            <div className="whitespace-nowrap text-center text-[18vw] font-black leading-[0.9] tracking-normal md:text-[18vw] lg:text-[min(18vw,320px)]">
              FLOWAMIC
            </div>
          </div>
        </footer>
      </main>

    </div>
  );
}
