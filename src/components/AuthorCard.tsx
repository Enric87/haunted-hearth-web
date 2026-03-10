interface AuthorCardProps {
  name: string;
  image: string;
  description: string;
  onClick?: () => void;
}

export default function AuthorCard({ name, image, description, onClick }: AuthorCardProps) {
  return (
    <div
      className="card-hover group flex flex-col items-center text-center border border-border rounded-sm overflow-hidden bg-card/50 backdrop-blur-sm max-w-xs mx-auto cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.(); } }}
    >
      <div className="w-full aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={`Ilustración de ${name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-cinzel text-xl font-semibold text-gold tracking-wider mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
