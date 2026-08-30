import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-card">
        <div>
          <span className="eyebrow">READY TO TAKE THE NEXT STEP?</span>
          <h2>Ready to build your school&apos;s STEM future?</h2>
          <p>Whether you are starting from scratch or upgrading an existing programme, we can help you determine what your school needs and how to implement it.</p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-primary" href="/assessment">Book a STEM Needs Assessment</Link>
          <Link className="btn btn-ghost" href="/contact">Talk to STEMEnabled</Link>
        </div>
      </div>
    </section>
  );
}
