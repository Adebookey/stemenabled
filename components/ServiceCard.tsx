import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }: { service: any }) {
  return (
    <article className="service-card">
      <div className="service-number">{service.number}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>{service.bullets.map((b: string) => <li key={b}>{b}</li>)}</ul>
      <Link href={service.href} className="text-link">Explore service <ArrowUpRight size={16} /></Link>
    </article>
  );
}
