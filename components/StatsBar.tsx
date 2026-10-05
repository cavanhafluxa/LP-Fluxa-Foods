"use client";

import { useState } from "react";

const STATS = [
  { v: "0%", u: "", l: "de comissão por pedido — 100% da venda é sua" },
  { v: "3", u: " em 1", l: "Kitchen + Cardápio + Database Marketing" },
  { v: "100%", u: "", l: "dos clientes e dados ficam com você" },
  { v: "24/7", u: "", l: "seu cardápio no ar, recebendo pedidos" },
];

export default function StatsBar() {
  const [logoOk, setLogoOk] = useState(true);

  return (
    <section className="statsbar">
      <div className="container">
        <div className="statsbar-inner">
          <div className="stats-grid">
            {STATS.map((s) => (
              <div className="stat reveal" key={s.l}>
                <div className="stat-val">
                  {s.v}
                  {s.u && <span className="u">{s.u}</span>}
                </div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="stats-clients">
            <div className="stats-clients-label">Quem já vende com a Fluxa</div>
            <div className="stats-logos">
              <span className="stats-logo">
                {logoOk ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/lanas-logo.png"
                    alt="Lanas Burguer"
                    onError={() => setLogoOk(false)}
                  />
                ) : null}
                Lanas Burguer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
