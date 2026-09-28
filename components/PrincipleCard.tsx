export type PrincipleCardProps = {
  index: number;
  title: string;
  text: string;
};

export function PrincipleCard({ index, title, text }: PrincipleCardProps) {
  return (
    <article className="principle-card">
      <span className="card-index">{String(index).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
