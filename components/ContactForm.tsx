"use client";

import { useState } from "react";

const services = ["STEM Lab Setup","Teacher Training","Student Programmes","STEM Curriculum","STEM Club","AI Programme","Robotics","3D Design","Physical Computing"];

export default function ContactForm({ assessment = false }: { assessment?: boolean }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      alert("We could not submit the form right now. Please use WhatsApp or email instead.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) return <div className="success-card"><span className="success-icon">✓</span><h3>Thank you.</h3><p>Your request has been received. A STEMEnabled representative will contact you to discuss the next step.</p></div>;

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Full Name<input name="name" required placeholder="Your name" /></label>
        <label>School Name<input name="school" required placeholder="School name" /></label>
        <label>Job Title<input name="jobTitle" placeholder="Principal, Proprietor, etc." /></label>
        <label>Email<input name="email" type="email" required placeholder="you@school.com" /></label>
        <label>Phone / WhatsApp<input name="phone" required placeholder="+234..." /></label>
        <label>School Location<input name="location" placeholder="Lagos, Abuja, etc." /></label>
        <label>Number of Students<input name="students" type="number" min="1" placeholder="e.g. 450" /></label>
        <label>Student Age Range<input name="ageRange" placeholder="e.g. 8–17" /></label>
        <label>Existing STEM Lab?
          <select name="stemLab"><option>Yes</option><option>No</option><option>Planning one</option></select>
        </label>
        <label>Existing Computer Lab?
          <select name="computerLab"><option>Yes</option><option>No</option></select>
        </label>
        <label>Estimated Timeline
          <select name="timeline"><option>As soon as possible</option><option>1–3 months</option><option>3–6 months</option><option>6–12 months</option><option>Exploring</option></select>
        </label>
      </div>
      <fieldset>
        <legend>Services you&apos;re interested in</legend>
        <div className="check-grid">{services.map(s => <label key={s} className="check"><input type="checkbox" name="services" value={s} /> <span>{s}</span></label>)}</div>
      </fieldset>
      <label>Message<textarea name="message" rows={6} placeholder="Tell us what you want your school to achieve..." /></label>
      <input type="hidden" name="requestType" value={assessment ? "STEM Needs Assessment" : "STEM Consultation"} />
      <button className="btn btn-primary" disabled={loading}>{loading ? "Sending..." : assessment ? "Book a STEM Needs Assessment" : "Request a STEM Consultation"}</button>
    </form>
  );
}
