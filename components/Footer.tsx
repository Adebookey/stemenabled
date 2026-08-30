import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">STEM<span>Enabled</span></div>
          <p>Empowering Schools. Developing Creators. Building the Future.</p>
          <p className="muted">STEM transformation partner for schools in Nigeria and beyond.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/about">About</Link>
          <Link href="/stem-lab">STEM Lab Setup</Link>
          <Link href="/teacher-training">Teacher Training</Link>
          <Link href="/programmes">Student Programmes</Link>
          <Link href="/consulting">STEM Consulting</Link>
          <Link href="/insights">Insights</Link>
        </div>
        <div>
          <h4>Services</h4>
          <Link href="/stem-lab">STEM Labs</Link>
          <Link href="/programmes">Robotics</Link>
          <Link href="/programmes">AI Education</Link>
          <Link href="/programmes">Physical Computing</Link>
          <Link href="/programmes">3D Design</Link>
          <Link href="/teacher-training">Teacher Training</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Lagos, Nigeria</p>
          <a href="tel:+2347086671984">+234 708 667 1984</a>
          <a href="mailto:omotosoadebukunola@gmail.com">omotosoadebukunola@gmail.com</a>
          <a href="https://wa.me/2347086671984" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} STEMEnabled. All rights reserved.</span>
        <span>Built for practical, future-ready education.</span>
      </div>
    </footer>
  );
}
