"use client";

import { useEffect, useState } from "react";

function ShoppingBagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function StarPointsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function NavigationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

function MessageCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function DollarCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

const ACTIVITIES = [
  { icon: <ShoppingBagIcon />, tone: "red", title: "Lanas Burguer", action: "recebeu pedido de R$ 74,00 via Cardápio Próprio", time: "há 2 min" },
  { icon: <StarPointsIcon />, tone: "amber", title: "Pizzaria Bella Napoli", action: "fidelizou +1 cliente com pontos", time: "há 4 min" },
  { icon: <NavigationIcon />, tone: "blue", title: "Sabor Express Delivery", action: "despachou 3 pedidos com rota otimizada", time: "há 6 min" },
  { icon: <MessageCircleIcon />, tone: "green", title: "Chef Grill", action: "reativou 4 clientes inativos no WhatsApp", time: "há 9 min" },
  { icon: <DollarCheckIcon />, tone: "green", title: "Hamburgueria Artesanal", action: "economizou R$ 240 em taxas hoje", time: "há 12 min" },
];

export default function LiveActivityToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => setVisible(true), 4000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setVisible(true);
      }, 700);
    }, 8500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const current = ACTIVITIES[index];

  return (
    <div className={`live-toast ${visible ? "show" : ""}`} aria-live="polite">
      <div className={`live-toast-icon ${current.tone}`}>{current.icon}</div>
      <div className="live-toast-body">
        <div className="live-toast-head">
          <span className="live-toast-title">{current.title}</span>
          <span className="live-toast-dot" />
          <span className="live-toast-time">{current.time}</span>
        </div>
        <p className="live-toast-action">{current.action}</p>
      </div>
      <button
        type="button"
        className="live-toast-close"
        onClick={() => setVisible(false)}
        aria-label="Fechar notificação"
      >
        ×
      </button>
    </div>
  );
}
