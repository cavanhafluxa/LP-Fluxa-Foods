"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "5547992793347";
const MESSAGE = "Olá! Quero saber mais sobre a Fluxa Foods.";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`wa-float${show ? " show" : ""}`}
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
        <path d="M12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.44c1.45.79 3.08 1.21 4.74 1.21 5.44 0 9.87-4.43 9.87-9.87S17.48 2 12.04 2zm0 18.05c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.15.85.84-3.07-.2-.32a8.16 8.16 0 01-1.25-4.34c0-4.51 3.68-8.19 8.2-8.19 4.51 0 8.18 3.68 8.18 8.19 0 4.52-3.67 8.2-8.19 8.2z" />
      </svg>
      <span className="wa-label">Falar no WhatsApp</span>
    </a>
  );
}
