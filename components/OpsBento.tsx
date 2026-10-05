"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

/* ---------- ícones ---------- */
const svg = (children: React.ReactNode) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">{children}</svg>
);
const BoltIcon = () => svg(<path d="M13 2L4.5 13.5H10l-1 8.5 9.5-12H12l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />);
const PosIcon = () => svg(<><rect x="4" y="3" width="16" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" /><path d="M8 7h8M8 11h8M8 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></>);
const PrinterIcon = () => svg(<><path d="M7 8V3h10v5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M7 14h10v6H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></>);
const BoxIcon = () => svg(<><path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></>);
const RouteIcon = () => svg(<><circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.8" /><circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.8" /><path d="M6 8.5v4a4 4 0 004 4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 3" /></>);
const ChannelsIcon = () => svg(<><rect x="3" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" /><rect x="14" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" /><rect x="3" y="14" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" /><rect x="14" y="14" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" /></>);
const MoneyIcon = () => svg(<><rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" /></>);
const UsersIcon = () => svg(<><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" /><path d="M3.5 20c.8-3 3-4.5 5.5-4.5S13.7 17 14.5 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M16 5.5a3 3 0 010 5.6M17 20c-.3-2-1.2-3.4-2.4-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></>);

/* ---------- visuais ---------- */
function MiniQR() {
  const cells = "110101 101110 011011 110100 101101 011010".split(" ");
  return (
    <div className="mini-qr" aria-hidden="true">
      {cells.flatMap((row, r) => row.split("").map((c, i) => <i key={`${r}-${i}`} className={c === "1" ? "" : "off"} />))}
    </div>
  );
}
function MiniBars({ hi = 4 }: { hi?: number }) {
  const H = [40, 62, 48, 80, 55, 72, 90];
  return (
    <div className="mini-bars" aria-hidden="true">
      {H.map((h, i) => <span key={i} className={i === hi ? "hi" : ""} style={{ height: `${h}%` }} />)}
    </div>
  );
}
function OpRoute() {
  return (
    <svg className="op-route" viewBox="0 0 200 60" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <path className="route-path" d="M14 46C56 46 52 14 100 14S150 48 186 22" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" />
      <circle className="route-pin" cx="14" cy="46" r="5" fill="var(--ink)" />
      <circle className="route-pin" cx="186" cy="22" r="5" fill="var(--red)" />
      <g className="route-moto"><circle r="7" fill="var(--amber)" /><circle r="3" fill="#fff" /></g>
    </svg>
  );
}
function LiveOrders() {
  return (
    <div className="op-live" aria-hidden="true">
      <div className="op-live-row"><span className="op-live-dot" /> <b>Pedido #184</b> · agora</div>
      <div className="op-live-row"><span className="op-live-dot" /> <b>Pedido #183</b> · preparando</div>
    </div>
  );
}
function Receipt() {
  return (
    <div className="op-receipt" aria-hidden="true">
      <i className="t" /><i /><i /><i /><i />
    </div>
  );
}
function Channels() {
  return (
    <div className="op-channels" aria-hidden="true">
      <span className="op-chan">Mesa/QR</span>
      <span className="op-chan">Delivery</span>
      <span className="op-chan">Balcão</span>
      <span className="op-chan">Quiosque</span>
    </div>
  );
}
function Profiles() {
  return (
    <div className="op-profiles" aria-hidden="true">
      <span className="op-av r">D</span>
      <span className="op-av">G</span>
      <span className="op-av">C</span>
      <span className="op-av">S</span>
      <span className="op-av">M</span>
    </div>
  );
}

const CARDS = [
  {
    cls: "card-live dark", icon: <BoltIcon />, t: "Pedidos em tempo real",
    p: "O pedido cai no painel na hora, sem F5. Cozinha, caixa e entrega sincronizados automaticamente.",
    chips: ["Realtime", "Sem refresh", "Sincroniza tudo"], tag: "Nunca mais perca pedido", visual: <LiveOrders />,
  },
  {
    cls: "card-pdv", icon: <PosIcon />, t: "PDV + QR nas mesas",
    p: "Frente de caixa completa e QR em cada mesa: o cliente escaneia, pede sozinho e o garçom fecha a conta em segundos.",
    chips: ["Comanda", "Split de conta", "QR por mesa"], tag: "Mesa, balcão e delivery", visual: <MiniQR />,
  },
  {
    cls: "card-print", icon: <PrinterIcon />, t: "Impressão automática",
    p: "Pedido entrou? O cupom sai sozinho na cozinha e no caixa, via Print Agent. Sem plugin de navegador, sem gambiarra.",
    chips: ["ESC/POS", "Cozinha + caixa", "Automático"], tag: "O cupom sai sozinho", visual: <Receipt />,
  },
  {
    cls: "card-estoque", icon: <BoxIcon />, t: "Estoque com receita",
    p: "Vendeu o X-Bacon? Baixou pão, bacon e carne sozinho. Você sabe o custo real e a margem de cada prato.",
    chips: ["Ficha técnica", "Baixa automática", "Custo real"], tag: "Sem furo de estoque", visual: <MiniBars hi={3} />,
  },
  {
    cls: "card-rota", icon: <RouteIcon />, t: "Rota do motoboy otimizada",
    p: "A Fluxa monta a melhor rota de entregas e faz o acerto por motoboy. Menos combustível, entrega mais rápida.",
    chips: ["Multi-entregas", "Acerto por moto", "Mapa"], tag: "Entrega mais rápida", visual: <OpRoute />,
  },
  {
    cls: "card-canais", icon: <ChannelsIcon />, t: "Todos os canais num só",
    p: "Salão, mesa, delivery, balcão, retirada e quiosque no mesmo sistema. Um lugar só, sem 4 licenças e sem planilha.",
    chips: ["Salão", "Delivery", "Quiosque"], tag: "Um sistema, todos os canais", visual: <Channels />,
  },
  {
    cls: "card-fin tint", icon: <MoneyIcon />, t: "Financeiro e dashboard",
    p: "Abra o celular às 22h e saiba quanto vendeu, o ticket médio e os cancelados, sem abrir 3 sistemas.",
    chips: ["DRE", "Ticket médio", "Tempo real"], tag: "Quanto sobra de verdade", visual: <MiniBars hi={6} />,
  },
  {
    cls: "card-perfil", icon: <UsersIcon />, t: "Acesso por perfil",
    p: "O garçom não vê o financeiro. O cozinheiro só vê a fila. O dono vê tudo, de qualquer lugar, pelo celular.",
    chips: ["Dono", "Gerente", "Equipe"], tag: "Cada um vê o que precisa", visual: <Profiles />,
  },
];

export default function OpsBento() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const st = (trigger: string) => ({ trigger, start: "top 82%", once: true });

        gsap.from(".ops-head > *", { y: 24, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.1, scrollTrigger: st(".ops-head") });
        gsap.from(".bento-card", { opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.08, scrollTrigger: st(".bento") });

        gsap.from(".card-pdv .mini-qr i", { scale: 0, opacity: 0, transformOrigin: "center", duration: 0.4, ease: "back.out(2)", stagger: { each: 0.02, from: "random" }, scrollTrigger: st(".card-pdv") });
        gsap.from(".card-estoque .mini-bars span", { scaleY: 0, transformOrigin: "bottom", duration: 0.7, ease: "power2.out", stagger: 0.06, scrollTrigger: st(".card-estoque") });
        gsap.to(".card-estoque .mini-bars span.hi", { opacity: 0.35, duration: 0.8, ease: "sine.inOut", repeat: -1, yoyo: true });
        gsap.from(".card-fin .mini-bars span", { scaleY: 0, transformOrigin: "bottom", duration: 0.7, ease: "power2.out", stagger: 0.06, scrollTrigger: st(".card-fin") });

        const path = root.current?.querySelector<SVGPathElement>(".route-path");
        if (path) {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
          gsap.to(path, { strokeDashoffset: 0, duration: 1.4, ease: "power1.inOut", scrollTrigger: st(".card-rota") });
          gsap.from(".card-rota .route-pin", { scale: 0, transformOrigin: "center", duration: 0.4, ease: "back.out(2)", stagger: 0.2, delay: 0.4, scrollTrigger: st(".card-rota") });
          gsap.set(".route-moto", { opacity: 0 });
          gsap.to(".route-moto", { opacity: 1, delay: 1.2, duration: 0.3, scrollTrigger: st(".card-rota") });
          gsap.to(".route-moto", { duration: 3, repeat: -1, ease: "none", delay: 1.2, motionPath: { path, align: path, alignOrigin: [0.5, 0.5] } });
        }
      });
    },
    { scope: root }
  );

  return (
    <section className="section operacao" id="operacao" ref={root}>
      <div className="container">
        <div className="section-head center ops-head">
          <div className="eyebrow center">Operação afiada</div>
          <h2 className="section-title">
            Do clique do cliente ao fim do dia, <span className="tk-red">num sistema só</span>.
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Cardápio, PDV, cozinha, impressão, estoque, entrega e financeiro
            conectados em tempo real, sem planilha e sem sistema colado com fita.
          </p>
        </div>

        <div className="bento four">
          {CARDS.map((c) => (
            <div className={`bento-card ${c.cls}`} key={c.t}>
              <div className="bento-ico">{c.icon}</div>
              <h3>{c.t}</h3>
              <p>{c.p}</p>
              <div className="op-visual">{c.visual}</div>
              <div className="op-chips">
                {c.chips.map((ch) => (
                  <span className="op-chip" key={ch}>{ch}</span>
                ))}
              </div>
              <span className="bento-tag">{c.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
