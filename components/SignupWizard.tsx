"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

const WHATSAPP_NUMBER = "5547992793347";

const PLANOS = ["Basic", "Pro", "Ainda não sei"];
const HORARIOS = ["Manhã", "Tarde", "Noite"];
const SEGMENTOS = ["Hamburgueria", "Pizzaria", "Açaiteria", "Lanchonete", "Restaurante", "Dark kitchen", "Sushibar", "Outro"];

function maskPhone(raw: string): string {
  let v = raw.replace(/\D/g, "").slice(0, 11);
  if (v.length >= 7) v = "(" + v.slice(0, 2) + ") " + v.slice(2, 7) + "-" + v.slice(7);
  else if (v.length >= 3) v = "(" + v.slice(0, 2) + ") " + v.slice(2);
  else if (v.length > 0) v = "(" + v;
  return v;
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10.5l3.5 3.5L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SignupWizard() {
  const [nome, setNome] = useState("");
  const [restaurante, setRestaurante] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [segmento, setSegmento] = useState("");
  const [plano, setPlano] = useState("Ainda não sei");
  const [horario, setHorario] = useState("");
  const [invalid, setInvalid] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  // Os botões dos planos trazem pra cá já com o plano de interesse marcado
  useEffect(() => {
    const onSelect = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail && PLANOS.includes(detail)) setPlano(detail);
    };
    window.addEventListener("fluxa:selectPlan", onSelect);
    return () => window.removeEventListener("fluxa:selectPlan", onSelect);
  }, []);

  const invalidStyle = (key: string) =>
    invalid.has(key) ? { borderColor: "rgba(234,0,51,0.7)" } : undefined;

  const validate = () => {
    const missing = new Set<string>();
    if (!nome.trim()) missing.add("nome");
    if (!restaurante.trim()) missing.add("restaurante");
    if (whatsapp.replace(/\D/g, "").length < 10) missing.add("whatsapp");
    if (!segmento.trim()) missing.add("segmento");
    setInvalid(missing);
    if (missing.size > 0) {
      setTimeout(() => setInvalid(new Set()), 2200);
      return false;
    }
    return true;
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = encodeURIComponent(
      `*Pedido de demonstração | Fluxa Foods*\n\n` +
        `Nome: ${nome}\nRestaurante: ${restaurante}\nWhatsApp: ${whatsapp}\nTipo: ${segmento}\nPlano de interesse: ${plano}` +
        (horario ? `\nMelhor horário: ${horario}` : "")
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="section signup" id="cadastro">
      <div className="container">
        <div className="signup-inner">
          <div className="signup-left">
            <div className="eyebrow reveal">Demonstração gratuita</div>
            <h2 className="section-title reveal reveal-delay-1">
              Veja a Fluxa funcionando{" "}
              <span className="mark">no seu restaurante</span>.
            </h2>
            <p className="section-sub reveal reveal-delay-2">
              Preencha seus dados e a gente chama você no WhatsApp pra mostrar o
              cardápio, a cozinha e a gestão do jeito que vão rodar na sua operação.
            </p>
            <ul className="signup-benefits reveal reveal-delay-3">
              <li><Check /> Sem custo e sem compromisso</li>
              <li><Check /> Tire suas dúvidas sobre os planos Basic e Pro</li>
              <li><Check /> 0% de comissão: 100% da venda é sua</li>
            </ul>
          </div>

          <div className="signup-card reveal reveal-delay-2">
            {!submitted ? (
              <form onSubmit={submit} noValidate>
                <div className="wizard-step-label">Leva menos de 1 minuto</div>
                <div className="wizard-title">Solicite sua demonstração</div>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="s-nome">Seu nome</label>
                    <input className="form-input" id="s-nome" type="text" placeholder="Ex: João Silva" autoComplete="given-name" value={nome} style={invalidStyle("nome")} onChange={(e) => setNome(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="s-rest">Nome do restaurante</label>
                    <input className="form-input" id="s-rest" type="text" placeholder="Ex: Pizzaria do João" autoComplete="organization" value={restaurante} style={invalidStyle("restaurante")} onChange={(e) => setRestaurante(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="s-wpp">WhatsApp</label>
                    <input className="form-input" id="s-wpp" type="tel" inputMode="tel" placeholder="(47) 9 9999-9999" autoComplete="tel" value={whatsapp} style={invalidStyle("whatsapp")} onChange={(e) => setWhatsapp(maskPhone(e.target.value))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="s-seg">Tipo do estabelecimento</label>
                    <select className="form-select" id="s-seg" value={segmento} style={invalidStyle("segmento")} onChange={(e) => setSegmento(e.target.value)}>
                      <option value="" disabled>Selecione</option>
                      {SEGMENTOS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group full">
                    <span className="form-label">Plano de interesse</span>
                    <div className="demo-chips" role="radiogroup" aria-label="Plano de interesse">
                      {PLANOS.map((p) => (
                        <button type="button" key={p} role="radio" aria-checked={plano === p} className={`demo-chip${plano === p ? " on" : ""}`} onClick={() => setPlano(p)}>
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-group full">
                    <span className="form-label">Melhor horário pra conversar (opcional)</span>
                    <div className="demo-chips" role="radiogroup" aria-label="Melhor horário">
                      {HORARIOS.map((h) => (
                        <button type="button" key={h} role="radio" aria-checked={horario === h} className={`demo-chip${horario === h ? " on" : ""}`} onClick={() => setHorario(horario === h ? "" : h)}>
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="wizard-nav">
                  <button type="submit" className="wizard-next">
                    Solicitar demonstração <Arrow />
                  </button>
                </div>
                <p className="signup-note">Ao enviar, abrimos o WhatsApp com a sua solicitação pronta. Sem spam, seus dados não são compartilhados.</p>
              </form>
            ) : (
              <div className="form-success">
                <div className="form-success-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <polyline points="4,13 9,18 20,7" stroke="#1F9D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Solicitação enviada!</h3>
                <p>É só mandar a mensagem no WhatsApp que abrimos. A gente responde por lá pra combinar o melhor horário da sua demonstração.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
