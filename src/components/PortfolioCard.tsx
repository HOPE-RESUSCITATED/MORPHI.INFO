interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export default function PortfolioCard({ image, title, category, description, tags }: PortfolioCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{category}</p>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border border-border-subtle text-text-secondary bg-bg-primary/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
