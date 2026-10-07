"use client";

import { useEffect, useRef } from "react";

// Animação do hero (Lottie exportado com as telas do Cardápio e do painel).
export default function HeroLottie() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: { destroy: () => void } | undefined;
    let cancelled = false;

    import("lottie-web/build/player/lottie_light").then(({ default: lottie }) => {
      if (cancelled || !ref.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const a = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: !reduce,
        path: "/fluxa-foods-hero.json",
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
      });
      if (reduce) a.addEventListener("DOMLoaded", () => a.goToAndStop(150, true));
      anim = a;
    });

    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hero-lottie"
      role="img"
      aria-label="Cardápio Fluxa no celular do cliente e painel do restaurante recebendo o pedido em tempo real"
    />
  );
}
