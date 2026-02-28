interface AuthorCardProps {
  name: string;
  image: string;
  description: string;
}

export default function AuthorCard({ name, image, description }: AuthorCardProps) {
  return (
    <div className="card-hover group flex flex-col items-center text-center border border-border rounded-sm overflow-hidden bg-card/50 backdrop-blur-sm max-w-xs mx-auto">
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
