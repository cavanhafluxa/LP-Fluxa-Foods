import type { CSSProperties } from "react";
import Phone from "./Phone";
import KitchenApp from "./KitchenApp";

const delay = (i: number) => ({ "--i": i } as CSSProperties);

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.44c1.45.79 3.08 1.21 4.74 1.21 5.44 0 9.87-4.43 9.87-9.87S17.48 2 12.04 2zm0 18.05c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.15.85.84-3.07-.2-.32a8.16 8.16 0 01-1.25-4.34c0-4.51 3.68-8.19 8.2-8.19 4.51 0 8.18 3.68 8.18 8.19 0 4.52-3.67 8.2-8.19 8.2z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="#F2A03D" aria-hidden="true">
      <path d="M10 1l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.3 4.8 17l1-5.8-4.2-4.1 5.8-.8L10 1z" />
    </svg>
  );
}

function CheckShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function FastBoltIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="topo">
      {/* Imagem de fundo sutil com atmosfera gastronômica realista */}
      <div className="hero-backdrop" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-ambiance.jpg" alt="" className="hero-backdrop-img" />
        <div className="hero-backdrop-overlay" />
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            {/* Prova social rápida de topo */}
            <div className="hero-social-proof hero-in" style={delay(0)}>
              <div className="hero-avatars">
                <span className="hero-av av1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </span>
                <span className="hero-av av2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                </span>
                <span className="hero-av av3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                </span>
              </div>
              <div className="hero-proof-text">
                <div className="hero-stars">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  <span className="hero-rating">4.9/5</span>
                </div>
                <span>Mais de <b>350 restaurantes</b> parceiros</span>
              </div>
            </div>

            <h1 className="hero-title hero-in" style={delay(1)}>
              O sistema que faz o seu{" "}
              <span className="tk-red">cliente voltar.</span>
            </h1>

            <p className="hero-sub hero-in" style={delay(2)}>
              Cardápio digital próprio com pontos, pedidos em tempo real e reativação
              automática pelo WhatsApp. <b>0% de comissão</b>: a base e o lucro são 100% seus.
            </p>

            <div className="hero-actions hero-in" style={delay(3)}>
              <a href="#cadastro" className="btn btn-red btn-lg hero-cta-btn">
                Começar Teste Grátis
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8.5 3.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#precos" className="btn btn-ghost btn-lg">
                Ver Planos
              </a>
            </div>

            <div className="hero-guarantee-pill hero-in" style={delay(4)}>
              <span className="pill-item"><SparkleIcon /> Sem taxa de adesão</span>
              <span className="dot-sep" />
              <span className="pill-item"><FastBoltIcon /> Ativação em 24h</span>
              <span className="dot-sep" />
              <span className="pill-item"><CheckShieldIcon /> 7 dias grátis</span>
            </div>
          </div>

          {/* Palco do produto: app do cliente (print real) atrás, painel do dono na frente */}
          <div className="hero-media hero-in" style={delay(2)}>
            <div className="hero-stage">
              <div className="hero-stage-glow" aria-hidden="true" />
              
              <div className="stage-phone stage-back">
                <Phone bare className="phone-cardapio">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/cardapio.webp"
                    alt="Fluxa Cardápio: o app de pedidos do seu cliente, com a sua marca"
                    fetchPriority="high"
                    decoding="async"
                  />
                </Phone>
              </div>

              <div className="stage-phone stage-front">
                <Phone className="phone-kitchen">
                  <KitchenApp live />
                </Phone>
              </div>

              <div className="stage-note note-a" aria-hidden="true">
                <span className="live-dot" />
                <span>
                  <b>Novo pedido #0192 · R$ 62,00</b>
                  <small>Cardápio próprio · 0% de comissão</small>
                </span>
              </div>

              <div className="stage-note note-b" aria-hidden="true">
                <span className="note-ico"><WaIcon /></span>
                <span>
                  <b>“Saiu para entrega! 🛵”</b>
                  <small>Aviso no WhatsApp do cliente</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
