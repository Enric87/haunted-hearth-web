import type { Person } from "@/data/galeria";

interface PosterCardProps {
  person: Person;
  onClick: () => void;
}

export default function PosterCard({ person, onClick }: PosterCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[3/4] w-full overflow-hidden border border-border bg-card card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <img
        src={person.posterUrl}
        alt={person.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-4 left-0 right-0 text-center font-cinzel text-sm tracking-[0.15em] text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {person.name}
      </span>
    </button>
  );
}
