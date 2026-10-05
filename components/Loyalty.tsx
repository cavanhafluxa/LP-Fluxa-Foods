function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.8l1.2-6.6L2.5 9l6.6-.9L12 2z" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="3.5" width="16" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function BackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 12a8 8 0 10-2.3 5.6M20 6v4h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function AwardCrownIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}
function SparklesSmallIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  );
}
function ChatAutomationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

const FEATS = [
  {
    icon: <StarIcon />,
    t: "Programa de pontos gamificado",
    p: "Cada R$ 1 gasto vira pontos no app do cliente. Ele acumula e troca por produtos ou descontos. Um motivo real pra voltar no seu restaurante em vez de procurar outro no iFood.",
  },
  {
    icon: <MenuIcon />,
    t: "Cardápio Web com pontos integrados",
    p: "Seu cardápio próprio mostra o saldo de pontos e ofertas personalizadas na hora do pedido. O ticket médio sobe e a venda cai 100% no seu caixa, sem nenhuma taxa retida.",
  },
  {
    icon: <BackIcon />,
    t: "Reativação automática de clientes (Win-back)",
    p: "Cliente parou de pedir há 15 ou 30 dias? A Fluxa dispara automaticamente um cupom com mensagem carinhosa no WhatsApp pra trazê-lo de volta. Você dorme e o sistema vende.",
  },
];

export default function Loyalty() {
  return (
    <section className="section loyalty" id="fidelidade">
      <div className="container">
        <div className="showcase-grid">
          <div className="showcase-copy">
            <div className="eyebrow amber reveal">Retenção & Fidelidade</div>
            <h2 className="section-title reveal reveal-delay-1">
              Dê ao seu cliente um motivo real pra{" "}
              <span className="mark">pedir de novo</span>.
            </h2>
            <p className="section-sub reveal reveal-delay-2">
              Fidelizar quem já comprou custa até 7x menos do que conquistar um cliente novo. A Fluxa junta pontos, cardápio próprio e automação de WhatsApp pra transformar compradores esporádicos em clientes fiéis semanais.
            </p>
            <ul className="feat-list">
              {FEATS.map((f, i) => (
                <li className={`reveal reveal-delay-${i + 1}`} key={f.t}>
                  <span className={`feat-ico${i === 2 ? " amber" : ""}`}>{f.icon}</span>
                  <div className="feat-txt">
                    <h4>{f.t}</h4>
                    <p>{f.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="showcase-media reveal reveal-delay-2">
            <div className="loyalty-visual-stack">
              {/* Card visual de fidelidade com recompensa real */}
              <div className="pts-card">
                <div className="pts-top">
                  <div className="pts-brand-wrap">
                    <span className="pts-logo-dot" />
                    <span className="pts-brand">Lanas Burguer</span>
                  </div>
                  <span className="pts-chip">
                    <AwardCrownIcon /> Nível Ouro
                  </span>
                </div>

                <div className="pts-balance">
                  <div className="pb-n">
                    1.240 <small>pts</small>
                  </div>
                  <div className="pb-l">Cliente VIP: Maria Clara Fernandes</div>
                </div>

                <div className="pts-bar" aria-hidden="true">
                  <span />
                </div>

                <div className="pts-next">
                  <span>Meta do próximo prêmio: 1.500 pts</span>
                  <b>Faltam 260 pts</b>
                </div>

                {/* Prévia da recompensa com foto real e apetitosa */}
                <div className="pts-reward-preview">
                  <div className="pts-reward-img-box">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/reward-combo.jpg"
                      alt="Combo artesanal com burger, batata frita e molho especial"
                      loading="lazy"
                    />
                    <span className="pts-reward-tag">Prêmio Liberado</span>
                  </div>
                  <div className="pts-reward-info">
                    <b>Combo Burger Smash + Batata</b>
                    <span>Resgate disponível com 1.200 pts</span>
                    <button type="button" className="pts-redeem-btn">
                      <SparklesSmallIcon /> Resgatar no Próximo Pedido
                    </button>
                  </div>
                </div>

                {/* Notificação flutuante de reativação WhatsApp */}
                <div className="pts-wa-bubble" aria-hidden="true">
                  <div className="pts-wa-icon">
                    <ChatAutomationIcon />
                  </div>
                  <div className="pts-wa-text">
                    <b>WhatsApp automático:</b> “Oi Maria! Notamos sua falta. Temos cupom de R$ 15 OFF esperando por você hoje!”
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
