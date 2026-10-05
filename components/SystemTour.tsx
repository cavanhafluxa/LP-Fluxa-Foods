"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Phone from "./Phone";
import KitchenApp from "./KitchenApp";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Note = { t: string; p: string; x: number; y: number };

/* Posições (%) dos marcadores sobre a tela de cada celular */
const CLIENT: Note[] = [
  { t: "Sua marca, sua capa, seu app", p: "Foto, logo e cores do seu restaurante. Nada do marketplace na frente do cliente.", x: 50, y: 14 },
  { t: "Avaliações e tempo de entrega", p: "Nota real dos seus clientes, tempo estimado e taxa configurada por região.", x: 64, y: 37 },
  { t: "Promoções e itens em alta", p: "Combos e ofertas no lugar certo pra subir o ticket médio.", x: 16, y: 62 },
  { t: "Pedido direto pra sua cozinha", p: "A sacola vira pedido no seu painel na hora. 0% de comissão.", x: 69, y: 94 },
];

const OWNER: Note[] = [
  { t: "O dia inteiro num olhar", p: "Pedidos, faturamento, ticket médio e mesas ocupadas atualizando sozinhos.", x: 50, y: 31 },
  { t: "Estoque avisa antes de faltar", p: "Baixa automática por receita e alerta quando o ingrediente está acabando.", x: 24, y: 52 },
  { t: "Pedidos com status ao vivo", p: "Novo, preparando, pronto, saiu pra entrega. Sem F5 e sem gritar da cozinha.", x: 90, y: 71 },
  { t: "Tudo no celular", p: "Pedidos, cardápio, mesas, financeiro e equipe na palma da mão.", x: 50, y: 93 },
];

function Markers({ notes }: { notes: Note[] }) {
  return (
    <>
      {notes.map((n, i) => (
        <span className="mk" key={n.t} style={{ left: `${n.x}%`, top: `${n.y}%` }} aria-hidden="true">
          {i + 1}
        </span>
      ))}
    </>
  );
}

function List({ notes }: { notes: Note[] }) {
  return (
    <ol className="tour-list">
      {notes.map((n, i) => (
        <li key={n.t} className={`reveal reveal-delay-${Math.min(i, 3)}`}>
          <span className="tour-num">{i + 1}</span>
          <div>
            <h4>{n.t}</h4>
            <p>{n.p}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function SystemTour() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".tour-phone", {
          y: 40, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: ".tour-grid", start: "top 78%", once: true },
        });
        gsap.from(".mk", {
          scale: 0, opacity: 0, transformOrigin: "center", duration: 0.45, ease: "back.out(2.2)",
          stagger: 0.09, delay: 0.5,
          scrollTrigger: { trigger: ".tour-grid", start: "top 78%", once: true },
        });
        gsap.from(".tour-sync-pill", {
          scale: 0.6, opacity: 0, duration: 0.5, ease: "back.out(1.8)", delay: 0.9,
          scrollTrigger: { trigger: ".tour-grid", start: "top 78%", once: true },
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="section tour" id="sistema" ref={root}>
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow center reveal">Por dentro do sistema</div>
          <h2 className="section-title reveal reveal-delay-1">
            Dois lados. <span className="tk-red">Um sistema só.</span>
          </h2>
          <p className="section-sub reveal reveal-delay-2" style={{ margin: "0 auto" }}>
            O que o seu cliente vê no celular e o que você vê no painel,
            conectados em tempo real.
          </p>
        </div>

        <div className="tour-grid">
          <div className="tour-side tour-client">
            <List notes={CLIENT} />
            <div className="tour-phone">
              <div className="tour-label">O que o seu cliente vê</div>
              <div className="tour-shot">
                <Phone bare>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/cardapio.webp" alt="Tela do Fluxa Cardápio com a marca do restaurante, avaliações, promoções e sacola" loading="lazy" decoding="async" />
                </Phone>
                <Markers notes={CLIENT} />
              </div>
            </div>
          </div>

          <div className="tour-sync" aria-hidden="true">
            <span className="tour-sync-pill">
              <span className="tour-sync-ring" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h13l-3-3M20 16H7l3 3" />
              </svg>
              tempo real
            </span>
          </div>

          <div className="tour-side tour-owner">
            <div className="tour-phone">
              <div className="tour-label">O que você vê</div>
              <div className="tour-shot">
                <Phone>
                  <KitchenApp />
                </Phone>
                <Markers notes={OWNER} />
              </div>
            </div>
            <List notes={OWNER} />
          </div>
        </div>
      </div>
    </section>
  );
}
