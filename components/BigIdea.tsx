"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const svg = (children: React.ReactNode) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const STEPS = [
  {
    icon: svg(<><rect x="4" y="3.5" width="16" height="17" rx="2.5" /><path d="M8 8h8M8 12h8M8 16h5" /></>),
    t: "O cliente pede no seu cardápio",
    p: "No seu app, com a sua marca. 0% de comissão.",
  },
  {
    icon: svg(<path d="M13 2L4.5 13.5H10l-1 8.5 9.5-12H12l1-8z" />),
    t: "O pedido cai no painel na hora",
    p: "Cozinha, caixa e impressora avisados em tempo real.",
  },
  {
    icon: svg(<path d="M4 5h16v11H9l-5 4V5z" />),
    t: "Ele acompanha pelo WhatsApp",
    p: "Confirmado, preparando, saiu pra entrega. Automático.",
  },
  {
    icon: svg(<path d="M12 2.8l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 21l1.2-6.6L2.5 9.8l6.6-.9L12 2.8z" />),
    t: "Ganha pontos e vira recorrente",
    p: "Cada pedido acumula. Troca por desconto ou item grátis.",
  },
  {
    icon: svg(<><path d="M20 12a8 8 0 10-2.3 5.6" /><path d="M20 6v4h-4" /></>),
    t: "Sumiu? A Fluxa traz de volta",
    p: "Cupom automático no WhatsApp pra quem parou de pedir.",
  },
];

export default function BigIdea() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          wide: "(min-width: 861px) and (prefers-reduced-motion: no-preference)",
          narrow: "(max-width: 860px) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const wide = Boolean(ctx.conditions?.wide);
          const st = { trigger: ".cycle", start: "top 78%", once: true };
          gsap.from(".cycle-line", {
            ...(wide ? { scaleX: 0, transformOrigin: "left center" } : { scaleY: 0, transformOrigin: "top center" }),
            duration: 1.6, ease: "power2.inOut", scrollTrigger: st,
          });
          gsap.from(".cycle-step", {
            y: 22, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.16, scrollTrigger: st,
          });
        }
      );
    },
    { scope: root }
  );

  return (
    <section className="section idea" id="ideia" ref={root}>
      <div className="container">
        <div className="section-head center">
          <h2 className="section-title reveal">
            A maioria dos sistemas cuida da sua cozinha. A Fluxa faz o seu
            cliente <span className="tk-red">voltar</span>.
          </h2>
          <p className="section-sub reveal reveal-delay-1" style={{ margin: "0 auto" }}>
            Vender uma vez qualquer sistema vende. A Fluxa fecha o ciclo: cada
            pedido vira um motivo pro cliente pedir de novo.
          </p>
        </div>

        <ol className="cycle">
          <span className="cycle-line" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <li className="cycle-step" key={s.t}>
              <span className="cycle-ico">
                {s.icon}
                <i>{i + 1}</i>
              </span>
              <h4>{s.t}</h4>
              <p>{s.p}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
