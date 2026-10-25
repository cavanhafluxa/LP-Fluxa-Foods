"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "fluxa-cookie-notice";

// Aviso informativo de cookies (LGPD). Não bloqueia o site nem o Meta Pixel.
export default function CookieNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === "ok";
    } catch {}
    if (!seen) setOpen(true);
  }, []);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-cookie-open", open);
    return () => document.documentElement.removeAttribute("data-cookie-open");
  }, [open]);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "ok");
    } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="cookie-notice" role="region" aria-label="Aviso de cookies">
      <p>
        Usamos cookies e o Meta Pixel para medir nossos anúncios e melhorar sua
        experiência. Saiba mais na nossa{" "}
        <a href="/privacidade">Política de Privacidade</a>.
      </p>
      <button type="button" className="cookie-btn" onClick={accept}>
        Entendi
      </button>
    </div>
  );
}
