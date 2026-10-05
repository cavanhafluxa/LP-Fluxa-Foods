"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#sistema", label: "O sistema" },
  { href: "#fidelidade", label: "Fidelidade" },
  { href: "#operacao", label: "Operação" },
  { href: "#precos", label: "Preços" },
  { href: "#case", label: "Resultados" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      if (y < 80) {
        // perto do topo: sempre visível
        setHidden(false);
      } else if (y > lastY.current + 4) {
        // rolando para baixo: esconde
        setHidden(true);
      } else if (y < lastY.current - 4) {
        // rolando para cima: mostra
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const isHidden = hidden && !open;

  return (
    <nav
      className={`${scrolled ? "scrolled" : ""}${isHidden ? " nav-hidden" : ""}`}
    >
      <a href="#topo" className="nav-logo" aria-label="Fluxa Foods">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="nav-logo-icon" src="/fluxa-f.png" alt="" />
        <span className="nav-logo-text">
          <span className="nlt-main">Fluxa</span>
          <span className="nlt-sub">Foods</span>
        </span>
      </a>

      <div className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <a href="#cadastro" className="nav-cta">
          Começar Agora
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M3 7.5h9M8 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <button
          className={`nav-hamburger${open ? " open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav-drawer${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#cadastro" className="nav-drawer-cta" onClick={close}>
          Começar Agora
        </a>
      </div>
    </nav>
  );
}
