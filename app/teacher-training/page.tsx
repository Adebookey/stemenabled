import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { images, teacherProgrammes } from "@/lib/content";

export default function TeacherTrainingPage() {
  return <main><PageHero eyebrow="TEACHER TRAINING" title="Build teachers who can teach the technology — not just use it." description="Practical capacity building that helps educators confidently facilitate STEM projects, use lab equipment and translate emerging technology into classroom experiences." />
    <section className="section"><div className="container split-feature"><div><span className="eyebrow">THE MODEL</span><h2>Training → Practical Project → Classroom Application → Support</h2><p>Our teacher programmes combine hands-on technology with teaching methodology. Educators leave with something they have built, a plan for using it with students and a clearer understanding of how to manage project-based learning.</p><Link className="btn btn-primary" href="/assessment">Book Teacher Training</Link></div><div className="feature-image" style={{backgroundImage:`url(${images.teacher})`}} /></div></section>
    <section className="section section-soft"><div className="container"><div className="section-head"><span className="eyebrow">TRAINING AREAS</span><h2>Choose the capability your school needs.</h2></div><div className="services-grid">{teacherProgrammes.map((p,i)=><article className="service-card" key={p.title}><div className="service-number">0{i+1}</div><h3>{p.title}</h3><p>{p.description}</p></article>)}</div></div></section>
    <section className="section"><div className="container compact-dark light-panel"><div><span className="eyebrow">SUSTAINABILITY</span><h2>We build capability, not dependency.</h2><p>The goal is not simply to deliver a workshop. It is to help the school develop teachers who can continue using the lab, adapting projects and growing their STEM practice.</p></div><Link className="btn btn-dark" href="/contact">Talk to STEMEnabled</Link></div></section><CTA /></main>;
}
