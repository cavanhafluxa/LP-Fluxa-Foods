import SignupLink from "./SignupLink";

const WHATSAPP_URL = `https://wa.me/5547992488212?text=${encodeURIComponent(
  "Olá! Quero ajuda para criar minha conta na Fluxa Foods."
)}`;

const STEPS = [
  { t: "Crie sua conta", p: "Nome do estabelecimento, e-mail, senha, CNPJ, telefone e endereço. Sem cartão." },
  { t: "Monte seu cardápio", p: "Cadastre produtos, fotos e preços do seu jeito, com a sua marca." },
  { t: "Comece a vender", p: "Compartilhe o link do cardápio e receba os pedidos em tempo real na cozinha." },
];

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l3.5 3.5L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Cadastro self-service: o cliente cria a conta sozinho na plataforma
export default function SelfSignup() {
  return (
    <section className="section signup" id="cadastro">
      <div className="container">
        <div className="signup-inner">
          <div className="signup-left">
            <div className="eyebrow reveal">Comece agora</div>
            <h2 className="section-title reveal reveal-delay-1">
              Crie sua conta e teste{" "}
              <span className="mark">5 dias grátis</span>.
            </h2>
            <p className="section-sub reveal reveal-delay-2">
              Sem falar com vendedor e sem cartão de crédito. Você mesmo cria a conta,
              monta o cardápio e começa a receber pedidos.
            </p>
            <ul className="signup-benefits reveal reveal-delay-3">
              <li><Check /> 5 dias grátis, sem cartão</li>
              <li><Check /> 0% de comissão: 100% da venda é sua</li>
              <li><Check /> Planos Basic e Pro a partir de R$ 249,99/mês</li>
            </ul>
          </div>

          <div className="signup-card reveal reveal-delay-2">
            <div className="wizard-step-label">Cadastro self-service</div>
            <div className="wizard-title">Sua conta em 3 passos</div>
            <ol className="self-steps">
              {STEPS.map((s, i) => (
                <li key={s.t} className="self-step">
                  <span className="self-step-num" aria-hidden="true">{i + 1}</span>
                  <span>
                    <b>{s.t}</b>
                    <small>{s.p}</small>
                  </span>
                </li>
              ))}
            </ol>
            <div className="wizard-nav">
              <SignupLink className="wizard-next" source="secao-cadastro">
                Criar minha conta grátis <Arrow />
              </SignupLink>
            </div>
            <p className="signup-note">
              Você vai para fluxakitchens.com.br para criar a conta. Sem spam.
            </p>
            <div className="signup-demo">
              Prefere ajuda pra começar?{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Fale com a gente no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
