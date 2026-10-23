"use client";

import { useState } from "react";
import TextAnimate from "./magic/TextAnimate";

const WHATSAPP_NUMBER = "5547992488212";

type FieldKey =
  | "nome"
  | "restaurante"
  | "faturamento"
  | "tipo"
  | "cargo"
  | "whatsapp";

const FIELD_LABELS: Record<FieldKey, string> = {
  nome: "Nome",
  restaurante: "Restaurante",
  faturamento: "Faturamento",
  tipo: "Tipo",
  cargo: "Cargo",
  whatsapp: "WhatsApp",
};

const EMPTY: Record<FieldKey, string> = {
  nome: "",
  restaurante: "",
  faturamento: "",
  tipo: "",
  cargo: "",
  whatsapp: "",
};

function maskPhone(raw: string): string {
  let v = raw.replace(/\D/g, "").slice(0, 11);
  if (v.length >= 7) v = "(" + v.slice(0, 2) + ") " + v.slice(2, 7) + "-" + v.slice(7);
  else if (v.length >= 3) v = "(" + v.slice(0, 2) + ") " + v.slice(2);
  else if (v.length > 0) v = "(" + v;
  return v;
}

export default function ContactForm() {
  const [values, setValues] = useState<Record<FieldKey, string>>({ ...EMPTY });
  const [invalid, setInvalid] = useState<Set<FieldKey>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const setField = (key: FieldKey, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const invalidStyle = (key: FieldKey) =>
    invalid.has(key) ? { borderColor: "rgba(196,28,59,0.7)" } : undefined;

  const handleSubmit = () => {
    if (!expanded) {
      setExpanded(true);
      return;
    }
    const missing = (Object.keys(values) as FieldKey[]).filter(
      (k) => !values[k].trim()
    );
    if (missing.length > 0) {
      setInvalid(new Set(missing));
      setTimeout(() => setInvalid(new Set()), 2000);
      return;
    }

    const msg = encodeURIComponent(
      `*Nova demonstração — Fluxa Foods*\n\n` +
        (Object.keys(values) as FieldKey[])
          .map((k) => `${FIELD_LABELS[k]}: ${values[k]}`)
          .join("\n")
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="section form-section on-cream" id="contato">
      <div className="container">
        <div className="form-inner">
          <div className="form-left">
            <div className="eyebrow center reveal">Demonstração gratuita</div>
            <TextAnimate
              as="h2"
              className="section-title"
              text="Agende uma demonstração."
              highlight={["demonstração."]}
            />
          </div>
          <div className="form-right reveal reveal-delay-2">
            <div className="form-box">
              <div className="form-box-title">Comece em 10 segundos</div>
              <div className="form-box-sub">Só o nome e o restaurante pra começar.</div>
              {!submitted && (
                <div id="formWrap">
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="f-nome">
                        Seu nome
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="f-nome"
                        placeholder="Ex: João Silva"
                        autoComplete="given-name"
                        value={values.nome}
                        style={invalidStyle("nome")}
                        onFocus={() => setExpanded(true)}
                        onChange={(e) => setField("nome", e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="f-restaurante">
                        Nome do restaurante
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="f-restaurante"
                        placeholder="Ex: Pizzaria do João"
                        value={values.restaurante}
                        style={invalidStyle("restaurante")}
                        onFocus={() => setExpanded(true)}
                        onChange={(e) => setField("restaurante", e.target.value)}
                      />
                    </div>
                    <div className={`form-extra${expanded ? " open" : ""}`}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="f-faturamento">
                        Faturamento mensal estimado
                      </label>
                      <select
                        className="form-select"
                        id="f-faturamento"
                        value={values.faturamento}
                        style={invalidStyle("faturamento")}
                        onChange={(e) => setField("faturamento", e.target.value)}
                      >
                        <option value="" disabled>
                          Selecione
                        </option>
                        <option>Até R$ 15.000</option>
                        <option>R$ 15.000 – R$ 40.000</option>
                        <option>R$ 40.000 – R$ 80.000</option>
                        <option>R$ 80.000 – R$ 150.000</option>
                        <option>Acima de R$ 150.000</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="f-tipo">
                        Tipo do estabelecimento
                      </label>
                      <select
                        className="form-select"
                        id="f-tipo"
                        value={values.tipo}
                        style={invalidStyle("tipo")}
                        onChange={(e) => setField("tipo", e.target.value)}
                      >
                        <option value="" disabled>
                          Selecione
                        </option>
                        <option>Lanchonete</option>
                        <option>Pizzaria</option>
                        <option>Hamburgueria</option>
                        <option>Restaurante</option>
                        <option>Food Park / Dark Kitchen</option>
                        <option>Outro</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="f-cargo">
                        Seu cargo
                      </label>
                      <select
                        className="form-select"
                        id="f-cargo"
                        value={values.cargo}
                        style={invalidStyle("cargo")}
                        onChange={(e) => setField("cargo", e.target.value)}
                      >
                        <option value="" disabled>
                          Selecione
                        </option>
                        <option>Dono / Sócio</option>
                        <option>Gerente</option>
                        <option>Diretor</option>
                        <option>Outro</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="f-whatsapp">
                        WhatsApp
                      </label>
                      <input
                        className="form-input"
                        type="tel"
                        id="f-whatsapp"
                        placeholder="(47) 9 9999-9999"
                        autoComplete="tel"
                        value={values.whatsapp}
                        style={invalidStyle("whatsapp")}
                        onChange={(e) =>
                          setField("whatsapp", maskPhone(e.target.value))
                        }
                      />
                    </div>
                    </div>
                    <button
                      type="button"
                      className="form-submit"
                      onClick={handleSubmit}
                    >
                      Agendar demonstração gratuita
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="form-note">
                      Sem spam. Seus dados não são compartilhados.
                    </p>
                  </div>
                </div>
              )}
              <div
                className={`form-success${submitted ? " show" : ""}`}
                id="formSuccess"
              >
                <div className="form-success-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <polyline points="4,13 9,18 20,7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Recebemos seu contato.</h3>
                <p>
                  Em até 24 horas úteis a gente entra em contato pelo WhatsApp
                  informado para agendar a sua demonstração do Fluxa Foods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
