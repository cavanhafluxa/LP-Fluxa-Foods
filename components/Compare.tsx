"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Val = "yes" | "no" | "partial" | { t: string; old?: boolean };

const ROWS: { feat: string; sub?: string; comum: Val; mkt: Val; fluxa: Val }[] = [
  { feat: "Comissão por pedido", sub: "quanto some de cada venda", comum: { t: "0%" }, mkt: { t: "até 30%", old: true }, fluxa: { t: "0%" } },
  { feat: "Cardápio digital próprio", comum: "yes", mkt: "no", fluxa: "yes" },
  { feat: "Programa de pontos", sub: "cliente acumula e volta", comum: "partial", mkt: "no", fluxa: "yes" },
  { feat: "Reativação automática (win-back)", comum: "no", mkt: "no", fluxa: "yes" },
  { feat: "Status do pedido no WhatsApp", comum: "partial", mkt: "yes", fluxa: "yes" },
  { feat: "Base de clientes é sua", comum: "partial", mkt: "no", fluxa: "yes" },
  { feat: "Database marketing (dados são seus)", comum: "no", mkt: "no", fluxa: "yes" },
  { feat: "PDV + QR nas mesas", comum: "no", mkt: "no", fluxa: "yes" },
  { feat: "Controle de estoque", comum: "no", mkt: "no", fluxa: "yes" },
  { feat: "Rota do motoboy otimizada", comum: "no", mkt: "partial", fluxa: "yes" },
  { feat: "Financeiro completo", comum: "no", mkt: "no", fluxa: "yes" },
  { feat: "Tudo num sistema só", comum: "no", mkt: "no", fluxa: "yes" },
];

const STACK = [
  "0% de comissão",
  "Programa de pontos",
  "Reativação automática",
  "Status no WhatsApp",
  "PDV + QR nas mesas",
  "Estoque, rota e financeiro",
  "Sua base de clientes",
  "Cardápio que converte",
];

function Cell({ v }: { v: Val }) {
  if (typeof v === "object") {
    return <span className={`ico txt${v.old ? " old" : ""}`}>{v.t}</span>;
  }
  if (v === "yes") return <span className="ico ck" role="img" aria-label="sim">✓</span>;
  if (v === "partial") return <span className="ico pt" role="img" aria-label="às vezes">~</span>;
  return <span className="ico no" role="img" aria-label="não">✕</span>;
}

function MiniCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.2l3 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Compare() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const once = { once: true };
        gsap.from(".cmp-row", {
          opacity: 0, y: 16, duration: 0.5, ease: "power2.out", stagger: 0.05,
          scrollTrigger: { trigger: ".cmp", start: "top 80%", ...once },
        });
        gsap.from(".cmp-fluxa .ck", {
          scale: 0, transformOrigin: "center", duration: 0.4, ease: "back.out(2.2)", stagger: 0.05, delay: 0.35,
          scrollTrigger: { trigger: ".cmp", start: "top 80%", ...once },
        });
        gsap.from(".offer", {
          opacity: 0, y: 30, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".offer", start: "top 88%", ...once },
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="section compare" id="comparativo" ref={root}>
      <div className="container">
        <div className="compare-head section-head center">
          <h2 className="section-title">
            Um cardápio web te dá um menu.{" "}
            <span className="tk-red">A Fluxa te dá o negócio inteiro.</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Veja lado a lado a Fluxa contra um cardápio web comum e contra o
            marketplace. A conta é simples.
          </p>
        </div>

        <div className="cmp-wrap">
          <div className="cmp">
            <div className="cmp-row cmp-head">
              <div className="cmp-cell cmp-feat">Recurso</div>
              <div className="cmp-cell">Cardápio web comum</div>
              <div className="cmp-cell">Marketplace</div>
              <div className="cmp-cell cmp-fluxa">
                <span className="cmp-badge">Melhor escolha</span>
                <span className="cmp-brand">Fluxa Foods</span>
              </div>
            </div>

            {ROWS.map((r) => (
              <div className="cmp-row" key={r.feat}>
                <div className="cmp-cell cmp-feat">
                  <b>{r.feat}</b>
                  {r.sub && <small>{r.sub}</small>}
                </div>
                <div className="cmp-cell"><Cell v={r.comum} /></div>
                <div className="cmp-cell"><Cell v={r.mkt} /></div>
                <div className="cmp-cell cmp-fluxa"><Cell v={r.fluxa} /></div>
              </div>
            ))}
          </div>
        </div>
        <p className="cmp-hint">← arraste para o lado para ver a tabela →</p>

        <div className="offer">
          <div className="offer-eyebrow">A conta fecha pro seu lado</div>
          <h3>
            O cardápio comum te dá um menu. O marketplace fica com a sua margem.{" "}
            <span className="tk-red">A Fluxa te dá o negócio inteiro.</span>
          </h3>
          <div className="offer-stack">
            {STACK.map((s) => (
              <span className="offer-item" key={s}>
                <MiniCheck />
                {s}
              </span>
            ))}
          </div>
          <div className="offer-actions">
            <a href="#cadastro" className="btn btn-red btn-lg">
              Começar Agora
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8.5 3.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#precos" className="btn btn-ghost btn-lg">Ver planos</a>
          </div>
          <div className="offer-note">Assinatura fixa · 0% de comissão · teste grátis antes de assinar</div>
        </div>
      </div>
    </section>
  );
}
