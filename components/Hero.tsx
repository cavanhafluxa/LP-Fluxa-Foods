import type { CSSProperties } from "react";
import HeroLottie from "./HeroLottie";

const delay = (i: number) => ({ "--i": i } as CSSProperties);

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

          {/* Animação do produto: Cardápio do cliente + painel do restaurante */}
          <div className="hero-media hero-in" style={delay(2)}>
            <HeroLottie />
          </div>
        </div>
      </div>
    </section>
  );
}
