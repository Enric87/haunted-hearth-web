import { useState, useEffect } from "react";

const TARGET = new Date("2026-10-31T18:00:00+02:00").getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  const blocks = [
    { value: pad(days), label: "DÍAS" },
    { value: pad(hours), label: "HORAS" },
    { value: pad(mins), label: "MIN" },
    { value: pad(secs), label: "SEG" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      {blocks.map((b, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="font-cinzel text-3xl md:text-5xl font-bold text-foreground tabular-nums">
            {b.value}
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground mt-1">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}
