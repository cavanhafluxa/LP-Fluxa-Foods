const USES = [
  "Cardápio próprio sem taxas",
  "Programa de fidelidade & pontos",
  "Avisos automáticos no WhatsApp",
  "Frente de Caixa (PDV) + QR Mesas",
];

function TrendUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function UsersAwardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ZeroFeeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  );
}

const METRICS = [
  { val: "+38%", label: "Faturamento no canal próprio", icon: <TrendUpIcon /> },
  { val: "1.240", label: "Clientes acumulando pontos", icon: <UsersAwardIcon /> },
  { val: "0%", label: "Comissão paga de marketplace", icon: <ZeroFeeIcon /> },
];

export default function Case() {
  return (
    <section className="section case" id="case">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow amber">História Real de Sucesso</div>
          <h2 className="section-title">
            Quem usa a Fluxa <span className="tk-red">não volta pro marketplace</span>.
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Veja como a Lanas Burguer assumiu o controle da sua operação, fidelizou sua base e economizou milhares de reais em taxas.
          </p>
        </div>

        <div className="case-card reveal">
          <div className="case-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lanas-foto.jpg"
              alt="Hambúrguer artesanal gourmet da Lanas Burguer, cliente Fluxa Foods"
              loading="lazy"
              decoding="async"
              className="case-photo-img"
            />
            <div className="case-photo-tag">
              <span className="case-photo-dot" />
              <span>Cliente Oficial Fluxa</span>
            </div>
          </div>

          <div className="case-body">
            <div className="case-stars" aria-hidden="true">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="case-star">★</span>
              ))}
              <span className="case-verified-badge">✓ Hamburgueria Verificada</span>
            </div>

            <blockquote className="case-quote">
              “A cozinha parou de travar, o cliente virou{" "}
              <span className="mark">recorrente</span> com os pontos e os dados
              agora são <span className="mark">nossos</span>.”
            </blockquote>

            {/* Métricas reais de conversão com ícones minimalistas */}
            <div className="case-metrics-grid">
              {METRICS.map((m) => (
                <div className="case-metric-box" key={m.label}>
                  <div className="case-metric-val">
                    <span className="case-metric-icon">{m.icon}</span>
                    <b>{m.val}</b>
                  </div>
                  <span className="case-metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="case-meta">
              <div className="case-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/lanas-logo.png" alt="Logo Lanas Burguer" />
              </div>
              <div>
                <div className="case-name">Lanas Burguer</div>
                <div className="case-role">Gaspar / SC · Cliente Fluxa Foods</div>
              </div>
            </div>

            <div className="case-uses">
              <span className="case-uses-l">Módulos ativos:</span>
              {USES.map((u) => (
                <span className="case-chip" key={u}>{u}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
