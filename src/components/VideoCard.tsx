import { useState } from "react";
import { motion } from "framer-motion";
import type { Work } from "../data";

function getDrivePoster(embedUrl: string) {
  const fileId = embedUrl.match(/\/d\/([^/]+)/)?.[1];
  return fileId
    ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`
    : undefined;
}

const posterColors = [
  "#cbe8e3",
  "#f0b27c",
  "#d8e09c",
  "#e8b4c3",
  "#9dc4e3",
  "#efcf82",
  "#b9d6a1",
  "#e6a78a",
];

export function VideoCard({
  work,
  vertical = false,
}: {
  work: Work;
  vertical?: boolean;
}) {
  if (!work.embedUrl) return null;

  return (
    <div
      className={`relative w-full overflow-hidden bg-black ${
        vertical ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <iframe
        src={work.embedUrl}
        title={work.title}
        className="absolute inset-0 h-full w-full border-0 object-cover"
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
}

export function ShortFormCarousel({ items }: { items: Work[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const count = items.length;

  if (count === 0) return null;

  const showPrevious = () => {
    setPlayingId(null);
    setActiveIndex((index) => (index - 1 + count) % count);
  };
  const showNext = () => {
    setPlayingId(null);
    setActiveIndex((index) => (index + 1) % count);
  };

  return (
    <div>
      <div
        className="relative mx-auto h-[560px] w-full max-w-6xl overflow-hidden md:h-[620px]"
        style={{ perspective: "1200px" }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Short-form videos"
      >
        {items.map((item, index) => {
          const rawOffset = (index - activeIndex + count) % count;
          const offset = rawOffset > count / 2 ? rawOffset - count : rawOffset;
          const distance = Math.abs(offset);
          const isActive = offset === 0;
          const isPlaying = isActive && playingId === item.id;
          const poster = item.poster || getDrivePoster(item.embedUrl);

          if (distance > 2 || !item.embedUrl) return null;

          return (
            <motion.div
              key={item.id}
              className="absolute left-1/2 top-1/2 w-[min(74vw,300px)] -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: 10 - distance, transformStyle: "preserve-3d" }}
              animate={{
                x: offset * 190,
                rotateY: offset * 26,
                scale: isActive ? 1 : distance === 1 ? 0.8 : 0.64,
                opacity: isActive ? 1 : distance === 1 ? 0.82 : 0.56,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              drag={isActive ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) showNext();
                else if (info.offset.x > 60) showPrevious();
              }}
              aria-label={`${item.title}, ${index + 1} of ${count}`}
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-black shadow-2xl shadow-black/50">
                {isPlaying ? (
                  <iframe
                    src={`${item.embedUrl}${item.embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
                    title={item.title}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      setPlayingId(item.id);
                    }}
                    aria-label={`Play ${item.title}`}
                    className="group absolute inset-0 flex h-full w-full items-center justify-center"
                  >
                    <div
                      className="absolute inset-0 flex flex-col justify-between p-5 text-left text-[#0a0a0c]"
                      style={{ backgroundColor: posterColors[index % posterColors.length] }}
                    >
                      <div className="flex items-center justify-between border-b border-black/20 pb-3">
                        <span className="text-[10px] font-extrabold tracking-normal">FLOWAMIC</span>
                        <span className="font-mono text-[10px]">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                          {item.tag} · VIDEO
                        </span>
                        <p className="mt-2 font-display text-xl font-extrabold leading-tight">
                          {item.title}
                        </p>
                        <p className="mt-2 text-[11px]">{item.client}</p>
                      </div>
                      <span className="h-1 w-full bg-black/15">
                        <span className="block h-full w-1/3 bg-[#0a0a0c]" />
                      </span>
                    </div>
                    {poster && (
                      <img
                        src={poster}
                        alt=""
                        loading={isActive ? "eager" : "lazy"}
                        decoding="async"
                        onError={(event) => event.currentTarget.remove()}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#ccff00] text-[#0a0a0c] shadow-xl transition-transform group-hover:scale-105">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous short-form video"
          className="flex h-11 w-11 items-center justify-center border border-(--line) text-xl transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          <span aria-hidden="true">←</span>
        </button>
        <span className="min-w-16 text-center font-mono text-[11px] tabular-nums muted">
          {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next short-form video"
          className="flex h-11 w-11 items-center justify-center border border-(--line) text-xl transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
