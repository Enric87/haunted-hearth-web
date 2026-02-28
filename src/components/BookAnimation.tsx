import { useState, useEffect, useRef, useCallback } from "react";

const STAGES = [
  { id: "idle", duration: 0 },
  { id: "approach", duration: 2000 },
  { id: "pause", duration: 800 },
  { id: "open-poe", duration: 2200 },
  { id: "open-king", duration: 2200 },
  { id: "open-lovecraft", duration: 2200 },
  { id: "close", duration: 600 },
  { id: "splash", duration: 3000 },
] as const;

type StageId = (typeof STAGES)[number]["id"];

export default function BookAnimation() {
  const [stage, setStage] = useState<StageId>("idle");
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const runSequence = useCallback(() => {
    if (started) return;
    setStarted(true);
    clearTimeouts();

    let elapsed = 0;
    STAGES.forEach((s, i) => {
      if (i === 0) {
        setStage(s.id);
        return;
      }
      elapsed += STAGES[i - 1].duration;
      const t = setTimeout(() => setStage(s.id), elapsed);
      timeoutsRef.current.push(t);
    });

    // Reset after full sequence
    const total = STAGES.reduce((sum, s) => sum + s.duration, 0);
    const t = setTimeout(() => {
      setStarted(false);
      setStage("idle");
    }, total);
    timeoutsRef.current.push(t);
  }, [started]);

  // IntersectionObserver auto-play
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) runSequence();
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeouts();
    };
  }, [runSequence, started]);

  const bookScale = (() => {
    switch (stage) {
      case "idle": return "scale-[0.3] opacity-80";
      case "approach": return "scale-100 opacity-100";
      case "pause": return "scale-100 opacity-60";
      case "close": return "scale-[0.15] opacity-90";
      case "splash": return "scale-0 opacity-0";
      default: return "scale-110 opacity-0";
    }
  })();

  const isOpen = ["open-poe", "open-king", "open-lovecraft"].includes(stage);
  const isSplash = stage === "splash";

  const pageContent = (() => {
    switch (stage) {
      case "open-poe":
        return { title: "POE", subtitle: "Gótico. Obsesivo. Un cuervo que no se marcha.", symbol: "🪶" };
      case "open-king":
        return { title: "KING", subtitle: "El terror vive en lo cotidiano.", symbol: "👁️" };
      case "open-lovecraft":
        return { title: "LOVECRAFT", subtitle: "Horror cósmico. Miedo a lo innombrable.", symbol: "🐙" };
      default:
        return null;
    }
  })();

  return (
    <div
      ref={containerRef}
      className="relative aspect-video bg-background overflow-hidden flex items-center justify-center cursor-pointer select-none"
      onClick={() => !started && runSequence()}
    >
      {/* Dark ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      {/* Book (closed state) */}
      {!isOpen && !isSplash && (
        <div
          className={`relative z-10 flex flex-col items-center justify-center transition-all duration-[1500ms] ease-in-out ${bookScale}`}
        >
          {/* Book shape */}
          <div className="w-36 h-52 md:w-48 md:h-64 bg-gradient-to-br from-[hsl(var(--blood))] to-[hsl(0,50%,25%)] rounded-sm shadow-[0_0_60px_hsl(var(--blood)/0.4)] flex items-center justify-center border border-[hsl(var(--gold)/0.3)]">
            <span className="font-cinzel text-lg md:text-2xl text-[hsl(var(--gold))] tracking-[0.2em] rotate-0">
              H·V
            </span>
          </div>
          {stage === "idle" && (
            <p className="mt-6 text-xs tracking-[0.3em] text-muted-foreground animate-pulse">
              ▶ PULSA PARA INVOCAR
            </p>
          )}
        </div>
      )}

      {/* Open book / pages */}
      {isOpen && pageContent && (
        <div className="relative z-10 flex items-center justify-center w-full h-full animate-fade-in">
          {/* Open book spread */}
          <div className="flex w-[80%] md:w-[60%] max-w-2xl aspect-[2/1] rounded-sm overflow-hidden shadow-[0_0_80px_hsl(var(--blood)/0.3)]">
            {/* Left page */}
            <div className="flex-1 bg-[hsl(35,30%,88%)] flex items-center justify-center p-4">
              <span className="text-5xl md:text-7xl">{pageContent.symbol}</span>
            </div>
            {/* Right page */}
            <div className="flex-1 bg-[hsl(35,25%,85%)] flex flex-col items-center justify-center p-4 gap-3">
              <h3 className="font-cinzel text-2xl md:text-4xl font-bold text-[hsl(var(--blood))] tracking-[0.15em]">
                {pageContent.title}
              </h3>
              <p className="text-xs md:text-sm text-[hsl(220,20%,25%)] text-center leading-relaxed max-w-[80%]">
                {pageContent.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Blood splash + final text */}
      {isSplash && (
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full animate-scale-in">
          {/* Blood splatter circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-[hsl(var(--blood)/0.2)] blur-3xl animate-pulse" />
          </div>
          <div className="absolute top-[20%] left-[15%] w-16 h-16 md:w-24 md:h-24 rounded-full bg-[hsl(var(--blood)/0.35)] blur-2xl" />
          <div className="absolute bottom-[25%] right-[20%] w-20 h-20 md:w-28 md:h-28 rounded-full bg-[hsl(var(--blood)/0.25)] blur-2xl" />

          <h2 className="relative font-cinzel text-2xl md:text-5xl lg:text-6xl font-bold text-primary tracking-[0.1em] mb-4 drop-shadow-[0_0_30px_hsl(var(--blood)/0.6)]">
            NO ES LECTURA.
          </h2>
          <h2 className="relative font-cinzel text-2xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--gold))] tracking-[0.1em] drop-shadow-[0_0_20px_hsl(var(--gold)/0.4)]">
            ES LOCURA.
          </h2>
        </div>
      )}

      {/* Play button overlay when idle */}
      {stage === "idle" && !started && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          {/* subtle vignette */}
        </div>
      )}
    </div>
  );
}
