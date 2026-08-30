import Link from "next/link";
import { ArrowRight, BrainCircuit, Cpu, DraftingCompass, GraduationCap } from "lucide-react";
import { images, services } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

export default function Home() {
  return <main>
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">STEM EDUCATION • ROBOTICS • AI • DIGITAL MAKING</span>
          <h1>Build a School That Prepares Students for the Future.</h1>
          <p>STEMEnabled helps schools build the right STEM infrastructure, develop teacher capability and deliver practical programmes that turn students into creators.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/assessment">Book a STEM Needs Assessment <ArrowRight size={17}/></Link>
            <Link className="btn btn-ghost" href="/stem-lab">Explore Our Solutions</Link>
          </div>
        </div>
        <div className="hero-visual" style={{backgroundImage:`url(${images.hero})`}}>
          <div className="floating-panel"><b>Infrastructure + Capability + Curriculum</b><span>One partner for the complete STEM ecosystem.</span></div>
        </div>
      </div>
    </section>

    <section className="section compact-section">
      <div className="container">
        <div className="section-head center"><span className="eyebrow">ONE STEM PARTNER</span><h2>From infrastructure to implementation.</h2><p>Everything a school needs to build a practical STEM ecosystem.</p></div>
        <div className="value-grid">
          {[[Cpu,"STEM LABS","Design and equip practical STEM laboratories."],[GraduationCap,"TEACHER TRAINING","Build internal teacher capability."],[BrainCircuit,"STUDENT PROGRAMMES","Deliver structured, project-based STEM learning."],[DraftingCompass,"STEM STRATEGY","Create a sustainable roadmap."]].map(([Icon,title,text]: any)=><div className="value-card" key={title}><div className="icon"><Icon size={20}/></div><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container split-feature">
        <div><span className="eyebrow">WHY STEMENABLED</span><h2>Don't just teach technology. Teach students to create with it.</h2><p>Computers alone do not create a future-ready school. Students need opportunities to design, build, test, improve and present real solutions.</p><div className="mini-points"><span>Infrastructure</span><span>Teacher capability</span><span>Curriculum</span><span>Practical projects</span></div></div>
        <div className="feature-image" style={{backgroundImage:`url(${images.robotics})`}} />
      </div>
    </section>

    <section className="section" id="solutions">
      <div className="container"><div className="section-head"><span className="eyebrow">WHAT WE DO</span><h2>Build capability, not dependency.</h2><p>Our core services connect school strategy, infrastructure, teachers and students.</p></div><div className="services-grid">{services.map(s=><ServiceCard key={s.number} service={s}/>)}</div></div>
    </section>

    <section className="section section-dark">
      <div className="container compact-dark">
        <div><span className="eyebrow">SIGNATURE OFFER</span><h2>The STEM School Transformation Programme</h2><p>Assess → Plan → Equip → Train → Launch → Support.</p></div>
        <Link className="btn btn-primary" href="/assessment">Start With a Needs Assessment <ArrowRight size={17}/></Link>
      </div>
    </section>

    <section className="section">
      <div className="container"><div className="section-head center"><span className="eyebrow">THE LEARNING PATHWAY</span><h2>Learn → Build → Test → Improve → Present → Create</h2></div><div className="pathway"><div className="path-card"><span className="path-number">FOUNDATION</span><h3>Digital Creators</h3><p>Scratch, digital creativity, computational thinking and basic robotics.</p></div><div className="path-card"><span className="path-number">INTERMEDIATE</span><h3>STEM Makers</h3><p>3D design, Arduino, electronics, sensors, robotics and introductory AI.</p></div><div className="path-card"><span className="path-number">ADVANCED</span><h3>Technology Innovators</h3><p>Raspberry Pi, IoT, AI, automation, engineering and prototyping.</p></div></div></div>
    </section>
    <CTA />
  </main>;
}
