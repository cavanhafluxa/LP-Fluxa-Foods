"use client";

import { useEffect, useState } from "react";

/* Recriação em CSS da tela inicial do Fluxa Kitchen Hub. Mesma estrutura do
   print real (/public/kitchen.png): cabeçalho, saudação, 4 indicadores, alerta
   de estoque, últimos pedidos e barra de abas. Os números são ilustrativos de
   uma noite de movimento. Com `live`, os indicadores sobem em contagem e um
   pedido novo entra na lista, mostrando o "tempo real" do painel. */

const FINAL = { pedidos: 47, faturamento: 2318, ticket: 49 };

const ORDERS = [
  { id: "#0192", name: "Cliente Cardápio", tone: "novo", label: "novo", price: "R$ 62" },
  { id: "#0191", name: "Mesa 3", tone: "prep", label: "preparando", price: "R$ 84" },
  { id: "#0190", name: "Delivery", tone: "pronto", label: "pronto", price: "R$ 48" },
];

const TABS = [
  { label: "Início", on: true, d: "M4 11l8-6 8 6v9h-5v-6h-6v6H4z" },
  { label: "Pedidos", d: "M6 3h12v18l-3-2-3 2-3-2-3 2V3zM9 8h6M9 12h6" },
  { label: "Cardápio", d: "M7 3v8a2.5 2.5 0 0 0 5 0V3M9.5 3v18M17 3c-1.6 1.8-2 3.6-2 6.5 0 1.5.6 2.5 2 2.5v9" },
  { label: "Mesas", d: "M3 9h18M6 9l-1.5 7M18 9l1.5 7M9 9V6h6v3" },
  { label: "Mais", d: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" },
];

const brl = (n: number) => "R$ " + Math.round(n).toLocaleString("pt-BR");

function Icon({ d, size = "1.2em" }: { d: string; size?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ width: size, height: size }}
    >
      <path d={d} />
    </svg>
  );
}

const KPI_ICONS = {
  pedidos: "M6 3h12v18l-3-2-3 2-3-2-3 2V3zM9 8h6M9 12h6",
  faturamento:
    "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v9M14.3 9.7c-.4-.9-1.3-1.4-2.3-1.4-1.4 0-2.3.8-2.3 1.8 0 2.4 4.7 1.3 4.7 3.8 0 1-1 1.8-2.4 1.8-1.1 0-2-.6-2.4-1.5",
  ticket: "M5 19v-8M12 19V5M19 19v-8",
  mesas: "M3 9h18M6 9l-1.5 7M18 9l1.5 7M9 9V6h6v3",
};

/* 0 → 1 com ease-out; começa em 1 (valores finais) para o HTML do servidor já vir completo */
function useCountUp(active: boolean) {
  const [t, setT] = useState(1);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now() + 450;
    const dur = 1500;
    let raf = 0;
    setT(0);
    const tick = (now: number) => {
      const p = Math.min(Math.max((now - start) / dur, 0), 1);
      setT(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);
  return t;
}

export default function KitchenApp({ live = false }: { live?: boolean }) {
  const t = useCountUp(live);
  const [showNew, setShowNew] = useState(!live);

  useEffect(() => {
    if (!live) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.setTimeout(() => setShowNew(true), reduce ? 0 : 2200);
    return () => window.clearTimeout(id);
  }, [live]);

  const orders = showNew ? ORDERS : ORDERS.slice(1);

  return (
    <div className="kapp" aria-label="Painel Fluxa Kitchen Hub">
      <div className="kapp-status" aria-hidden="true">
        <span>19:32</span>
        <span className="kapp-status-r">
          <i className="sig" />
          <i className="wifi" />
          <i className="bat" />
        </span>
      </div>

      <div className="kapp-top">
        <div className="kapp-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="kapp-logo" src="/fluxa-f.png" alt="" />
          Lanas Burger
        </div>
        <span className="kapp-avatar" aria-hidden="true">
          <Icon d="M12 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM5 20c1-3.6 3.8-5.5 7-5.5s6 1.9 7 5.5" size="1.3em" />
        </span>
      </div>

      <div className="kapp-body">
        <div className="kapp-greet">Boa noite, Aline!</div>
        <div className="kapp-date">sexta-feira, 11 de setembro</div>

        <div className="kapp-kpis">
          <div className="kapp-kpi">
            <div className="kapp-kpi-h">
              <span className="kapp-kpi-ico r"><Icon d={KPI_ICONS.pedidos} /></span>
              <span className="kapp-kpi-l">Pedidos hoje</span>
            </div>
            <b>{Math.round(FINAL.pedidos * t)}</b>
          </div>
          <div className="kapp-kpi">
            <div className="kapp-kpi-h">
              <span className="kapp-kpi-ico g"><Icon d={KPI_ICONS.faturamento} /></span>
              <span className="kapp-kpi-l">Faturamento</span>
            </div>
            <b>{brl(FINAL.faturamento * t)}</b>
          </div>
          <div className="kapp-kpi">
            <div className="kapp-kpi-h">
              <span className="kapp-kpi-ico b"><Icon d={KPI_ICONS.ticket} /></span>
              <span className="kapp-kpi-l">Ticket médio</span>
            </div>
            <b>{brl(FINAL.ticket * t)}</b>
          </div>
          <div className="kapp-kpi">
            <div className="kapp-kpi-h">
              <span className="kapp-kpi-ico y"><Icon d={KPI_ICONS.mesas} /></span>
              <span className="kapp-kpi-l">Mesas ocupadas</span>
            </div>
            <b>5/8</b>
          </div>
        </div>

        <div className="kapp-alert">
          <div className="kapp-alert-h">
            <Icon d="M12 4 21 20H3L12 4zM12 10v4M12 17h.01" size="1.15em" />
            Estoque baixo (1)
          </div>
          <div className="kapp-alert-row">
            <span>Pão brioche</span>
            <b>-12 un</b>
          </div>
          <div className="kapp-link">Ver estoque →</div>
        </div>

        <div className="kapp-orders">
          <div className="kapp-orders-h">
            Últimos pedidos <span>Ver todos →</span>
          </div>
          {orders.map((o) => (
            <div className={`kapp-order${o.tone === "novo" ? " is-new" : ""}`} key={o.id}>
              <span className="kapp-order-id">{o.id}</span>
              <span className="kapp-order-name">{o.name}</span>
              <span className={`kapp-pill ${o.tone}`}>{o.label}</span>
              <span className="kapp-order-price">{o.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="kapp-tabs" aria-hidden="true">
        {TABS.map((tab) => (
          <div className={`kapp-tab${tab.on ? " on" : ""}`} key={tab.label}>
            <span className="kapp-tab-ico"><Icon d={tab.d} size="1.75em" /></span>
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
}
