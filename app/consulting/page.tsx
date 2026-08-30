import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { consultingAreas, images } from "@/lib/content";

export default function ConsultingPage() {
  return <main><PageHero eyebrow="STEM CONSULTING" title="Make better STEM decisions before you buy, build or launch." description="Practical guidance for school leadership on infrastructure, programmes, teacher capability, implementation and sustainable growth." />
    <section className="section"><div className="container split-feature"><div><span className="eyebrow">FOR SCHOOL LEADERSHIP</span><h2>Turn STEM ambition into an implementation plan.</h2><p>We help leadership teams answer the questions that come before investment: What do we already have? What should we teach? What equipment is actually necessary? Who will deliver it? How do we phase the work?</p><Link className="btn btn-primary" href="/assessment">Start With a Needs Assessment</Link></div><div className="feature-image" style={{backgroundImage:`url(${images.lab})`}} /></div></section>
    <section className="section section-soft"><div className="container"><div className="section-head"><span className="eyebrow">CONSULTING AREAS</span><h2>Advice that connects strategy to execution.</h2></div><div className="services-grid">{consultingAreas.map((a,i)=><article className="service-card" key={a.title}><div className="service-number">0{i+1}</div><h3>{a.title}</h3><p>{a.description}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-head center"><span className="eyebrow">A PRACTICAL STARTING POINT</span><h2>Don't buy STEM equipment before you know what your school needs.</h2><p>A structured STEM Needs Assessment gives leadership a clearer basis for decisions about infrastructure, people, programmes and budget.</p><Link className="btn btn-primary" href="/assessment">Book a STEM Needs Assessment</Link></div></div></section><CTA /></main>;
}
