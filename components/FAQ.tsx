"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ({ items }: { items: string[][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {items.map(([q, a], i) => (
        <button key={q} className={`faq-item ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
          <span><strong>{q}</strong>{open === i && <span className="faq-answer">{a}</span>}</span>
          <Plus size={20} />
        </button>
      ))}
    </div>
  );
}
