"use client";

type Feature = string | { label: string; items: string[] };

type Plan = {
  name: string;
  price: string;
  cents: string;
  tagline: string;
  desc: string;
  lead: string;
  features: Feature[];
  excluded?: string;
  closing?: string;
  featured: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Basic",
    price: "249",
    cents: ",99",
    tagline: "Uma experiência melhor para pedir. Uma operação mais simples para receber.",
    desc: "Para restaurantes que querem começar com a experiência Fluxa Foods no cardápio e na operação dos pedidos.",
    lead: "Inclui:",
    features: [
      "Cardápio Fluxa Foods",
      "Gestão de pedidos",
      "Fluxa Kitchen",
      "Experiência de checkout",
      "Operação integrada entre cardápio e cozinha",
    ],
    excluded:
      "Analytics da experiência, gestão de clientes e marketing, gestão de mesas, notas fiscais e gestão de estoque.",
    featured: false,
  },
  {
    name: "Pro",
    price: "349",
    cents: ",99",
    tagline: "Não fique só com o pedido. Entenda e gerencie o que acontece ao redor dele.",
    desc: "Tudo do Basic, mais as ferramentas para entender a experiência do cliente e ampliar a gestão do restaurante.",
    lead: "Tudo do Basic, mais:",
    features: [
      {
        label: "Analytics da experiência de pedido",
        items: [
          "Visualizações e visualizadores",
          "Tempo dentro do cardápio",
          "Produtos visualizados",
          "Carrinho e conversão",
          "Abandono no checkout",
        ],
      },
      "Gestão de clientes",
      "Gestão de marketing para clientes",
      "Gestão de mesas",
      "Sistema de notas fiscais",
      "Gestão de estoque",
    ],
    closing: "Veja o que acontece antes da venda. Conheça quem compra depois dela.",
    featured: true,
  },
];

function Check() {
  return (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.5 9.2l3 3L14.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ZapSpeedIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function HeadphonesChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="12" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Pricing() {
  const selectPlan = (name: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("fluxa:selectPlan", { detail: name }));
    }
  };

  return (
    <section className="section pricing" id="precos">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow center reveal">Planos</div>
          <h2 className="section-title reveal reveal-delay-1">
            Preço aberto. <span className="mark">Sem pegadinha</span>.
          </h2>
          <p className="section-sub reveal reveal-delay-2" style={{ margin: "0 auto" }}>
            Assinatura do sistema, sem comissão por pedido. Você fica com 100% da
            venda.
          </p>
        </div>

        <div className="plan-billing reveal reveal-delay-2">
          Assinatura mensal do sistema
          <span className="pill">0% de comissão</span>
        </div>

        <div className="pricing2">
          {PLANS.map((p) => (
            <div key={p.name} className={`price-card${p.featured ? " featured" : ""}`}>
              {p.featured && <div className="price-badge">Recomendado</div>}
              <div className="price-name">Fluxa {p.name}</div>
              <div className="price-amount">
                <span className="price-currency">R$</span>
                {p.price}
                <span className="price-cents">{p.cents}</span>
                <span className="price-period">/mês</span>
              </div>
              <div className="price-trial">Teste grátis antes de assinar</div>
              <p className="price-tagline">{p.tagline}</p>
              <p className="price-desc">{p.desc}</p>
              <div className="price-lead">{p.lead}</div>
              <ul className="price-features">
                {p.features.map((f) =>
                  typeof f === "string" ? (
                    <li className="price-feature" key={f}>
                      <Check />
                      {f}
                    </li>
                  ) : (
                    <li className="price-feature-group" key={f.label}>
                      <span className="price-feature">
                        <Check />
                        {f.label}
                      </span>
                      <ul className="price-subfeatures">
                        {f.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </li>
                  )
                )}
              </ul>
              {p.excluded && (
                <p className="price-excluded">
                  <b>Não inclui:</b> {p.excluded}
                </p>
              )}
              {p.closing && <p className="price-closing">{p.closing}</p>}
              <a
                href="#cadastro"
                className="btn btn-red btn-block"
                onClick={() => selectPlan(p.name)}
              >
                Começar com {p.name}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8.5 3.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Faixa de garantia com ícones minimalistas e profissionais */}
        <div className="pricing-trust-strip reveal">
          <div className="pricing-trust-item">
            <span className="pricing-trust-icon lock">
              <ShieldCheckIcon />
            </span>
            <div>
              <b>Garantia Incondicional de 7 Dias</b>
              <small>Teste sem risco. Se não for perfeito pra você, cancele sem burocracia.</small>
            </div>
          </div>
          <div className="pricing-trust-item">
            <span className="pricing-trust-icon zap">
              <ZapSpeedIcon />
            </span>
            <div>
              <b>Ativação em até 24h</b>
              <small>Nossa equipe te ajuda a cadastrar seu cardápio e ligar a operação.</small>
            </div>
          </div>
          <div className="pricing-trust-item">
            <span className="pricing-trust-icon chat">
              <HeadphonesChatIcon />
            </span>
            <div>
              <b>Suporte Humano Dedicado</b>
              <small>Atendimento direto no WhatsApp para tirar dúvidas no meio da operação.</small>
            </div>
          </div>
        </div>

        <p className="pricing-foot">
          Prefere conversar antes de decidir?{" "}
          <a href="#cadastro" onClick={() => selectPlan("Pro")}>
            Agende uma demonstração ao vivo
          </a>
          .
        </p>
      </div>
    </section>
  );
}
