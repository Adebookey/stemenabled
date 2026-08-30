import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { images, programmes } from "@/lib/content";

export default function ProgrammesPage() {
  return <main><PageHero eyebrow="STUDENT PROGRAMMES" title="A clear pathway from digital creators to technology innovators." description="Age-appropriate, project-based programmes that develop computational thinking, making, engineering and emerging technology skills." />
    <section className="section"><div className="container split-feature"><div><span className="eyebrow">LEARNING PATHWAY</span><h2>Foundation → Intermediate → Advanced</h2><p>Students progress by combining concepts with practical projects. The exact age and technology mix can be customised around the school's curriculum, timetable and infrastructure.</p><div className="mini-points"><span>Learn</span><span>Build</span><span>Test</span><span>Improve</span><span>Present</span><span>Create</span></div></div><div className="feature-image" style={{backgroundImage:`url(${images.robotics})`}} /></div></section>
    {programmes.map((level)=><section className="section section-soft" key={level.level}><div className="container"><div className="level-heading"><div><span className="path-number">{level.level}</span><h2>{level.audience}</h2></div><p>{level.description}</p></div><div className="services-grid">{level.items.map((p)=><article className="service-card" key={p.title}><div className="program-icon">{p.icon}</div><h3>{p.title}</h3><p>{p.description}</p></article>)}</div></div></section>)}
    <section className="section"><div className="container center-block"><span className="eyebrow">CUSTOM PROGRAMMES</span><h2>Build a programme around your students.</h2><p>We can adapt delivery by age, class size, timetable, available equipment, school objectives and budget.</p><Link className="btn btn-primary" href="/assessment">Discuss a Programme</Link></div></section><CTA /></main>;
}
