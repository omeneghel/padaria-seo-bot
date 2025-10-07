interface Breadcrumb {
  label: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
}

const HeroSection = ({ title, subtitle, breadcrumbs }: HeroSectionProps) => {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <p className="text-primary-foreground/90 mb-2 text-lg">{subtitle}</p>
          <h1 className="text-white mb-6">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap gap-2 text-sm text-primary-foreground/80">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center">
                  {idx > 0 && <span className="mx-2">/</span>}
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="text-primary-foreground font-medium">{crumb.label}</span>
                  ) : (
                    <a href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
