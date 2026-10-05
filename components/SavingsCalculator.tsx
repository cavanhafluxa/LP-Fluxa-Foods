"use client";

import { useState } from "react";

function TrendingGrowthIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function ShieldMiniIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function SavingsCalculator() {
  const [revenue, setRevenue] = useState(30000);
  const [feePercent, setFeePercent] = useState(25);

  // Cálculos
  const marketplaceFeeMonthly = (revenue * feePercent) / 100;
  const fluxaMonthly = 259.90;
  const monthlySavings = Math.max(0, marketplaceFeeMonthly - fluxaMonthly);
  const annualSavings = monthlySavings * 12;

  const brl = (val: number) =>
    val.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  return (
    <section className="section calc-section" id="calculadora">
      <div className="container">
        <div className="calc-card reveal">
          <div className="calc-glow" aria-hidden="true" />
          
          <div className="calc-grid">
            <div className="calc-copy">
              <div className="eyebrow amber">Simulador de Lucro</div>
              <h2 className="calc-title">
                Quanto dinheiro você está deixando na mesa com as taxas do marketplace?
              </h2>
              <p className="calc-sub">
                Arraste o simulador e veja quanto sobra no seu bolso todo mês migrando seus clientes pro seu cardápio próprio com <b>0% de comissão</b>.
              </p>

              <div className="calc-slider-box">
                <div className="calc-slider-header">
                  <span className="calc-slider-label">Seu faturamento mensal no delivery</span>
                  <span className="calc-slider-value">{brl(revenue)}</span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={120000}
                  step={1000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="calc-range"
                  aria-label="Faturamento mensal"
                />
                <div className="calc-slider-ticks">
                  <span>R$ 5 mil</span>
                  <span>R$ 60 mil</span>
                  <span>R$ 120 mil</span>
                </div>
              </div>

              <div className="calc-fee-selector">
                <span className="calc-fee-label">Taxa média cobrada pelo marketplace:</span>
                <div className="calc-fee-chips">
                  {[20, 25, 27, 30].map((f) => (
                    <button
                      key={f}
                      type="button"
                      className={`calc-fee-chip ${feePercent === f ? "active" : ""}`}
                      onClick={() => setFeePercent(f)}
                    >
                      {f}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="calc-result">
              <div className="calc-result-header">
                <span className="calc-badge-pulse">Economia Real</span>
                <span className="calc-result-label">Você economiza até:</span>
              </div>

              <div className="calc-numbers">
                <div className="calc-main-num">
                  <span className="calc-currency">R$</span>
                  <span className="calc-val">{Math.round(monthlySavings).toLocaleString("pt-BR")}</span>
                  <span className="calc-per">/mês</span>
                </div>
                <div className="calc-annual-pill">
                  <TrendingGrowthIcon /> <b>{brl(annualSavings)}</b> a mais no seu caixa por ano!
                </div>
              </div>

              <div className="calc-breakdown">
                <div className="calc-row bad">
                  <span>Perda no marketplace ({feePercent}%):</span>
                  <b>- {brl(marketplaceFeeMonthly)}/mês</b>
                </div>
                <div className="calc-row fluxa">
                  <span>Plano Fluxa Pro (fixo):</span>
                  <b>R$ 259,90/mês</b>
                </div>
                <div className="calc-row note">
                  <span>Taxa por pedido na Fluxa:</span>
                  <b className="green">R$ 0,00 (ZERO)</b>
                </div>
              </div>

              <a href="#cadastro" className="btn btn-red btn-lg btn-block calc-cta">
                Garantir Essa Economia Agora
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8.5 3.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="calc-guarantee">
                <ShieldMiniIcon /> Teste grátis de 7 dias · Cancele quando quiser
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
