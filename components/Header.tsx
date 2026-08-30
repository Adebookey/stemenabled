'use client';

import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const wa = "https://wa.me/2347086671984?text=Hello%20STEMEnabled%2C%20I%20would%20like%20to%20discuss%20a%20STEM%20programme%20for%20my%20school.";
  const links = [
    ["About", "/about"], ["STEM Labs", "/stem-lab"], ["Teacher Training", "/teacher-training"],
    ["Programmes", "/programmes"], ["Consulting", "/consulting"], ["Insights", "/insights"]
  ];
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="STEMEnabled" width={190} height={88} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <a className="wa-mini" href={wa} target="_blank" rel="noreferrer" aria-label="Chat with STEMEnabled on WhatsApp">
            <MessageCircle size={18} /> WhatsApp
          </a>
          <Link className="btn btn-primary btn-small" href="/assessment">Book Assessment</Link>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="btn btn-primary" href="/assessment" onClick={() => setOpen(false)}>Book a STEM Needs Assessment</Link>
        <a className="mobile-wa" href={wa} target="_blank" rel="noreferrer">Chat with STEMEnabled on WhatsApp</a>
      </nav>}
    </header>
  );
}
