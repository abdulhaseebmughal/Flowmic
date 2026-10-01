import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  label,
  title,
  sub,
  action,
}: {
  label?: string;
  title: string;
  sub?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <Reveal className="max-w-2xl">
        {label && (
          <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.3em] muted">
            {label}
          </span>
        )}
        <h2 className="font-display text-[clamp(1.9rem,4.6vw,3.1rem)] font-bold leading-[1.02]">
          {title}
        </h2>
        {sub && (
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed muted">{sub}</p>
        )}
      </Reveal>
      {action && <Reveal delay={0.08}>{action}</Reveal>}
    </div>
  );
}

export function Btn({
  variant = "primary",
  className = "",
  as = "button",
  children,
  ...rest
}: any) {
  const Tag: any = as;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-none px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-[#ccff00] text-[#0a0a0c] hover:bg-[#d9ff3d]"
      : variant === "solid"
        ? "bg-[var(--fg)] text-[var(--bg)] hover:opacity-85"
        : "border text-[var(--fg)] hover:bg-[var(--surface)] line";
  return (
    <Tag className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
