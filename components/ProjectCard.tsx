import Image from "next/image";

export type ProjectCardProps = {
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

export function ProjectCard({
  name,
  category,
  description,
  image,
  href,
}: ProjectCardProps) {
  return (
    <a className="project-card" href={href} target="_blank" rel="noreferrer">
      <div className="project-image-wrap">
        <Image
          src={image}
          alt={`${name} project preview`}
          width={1200}
          height={720}
          className="project-image"
        />
      </div>
      <div className="project-copy">
        <span>{category}</span>
        <div className="project-title-row">
          <h3>{name}</h3>
          <span aria-hidden="true">↗</span>
        </div>
        <p>{description}</p>
      </div>
    </a>
  );
}
