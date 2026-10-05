import TextAnimate from "./magic/TextAnimate";

const CHIPS = [
  "iFood",
  "99Food",
  "Maquininhas",
  "Pix",
  "WhatsApp",
  "Impressora de pedidos",
];

export default function Integrations() {
  return (
    <section className="section integ on-paper" id="integracoes">
      <div className="container">
        <div className="integ-head section-head center">
          <div className="eyebrow center reveal">Sem largar nada</div>
          <TextAnimate
            as="h2"
            className="section-title"
            text="O marketplace te acha o cliente. A Fluxa faz ele voltar."
            highlight={["A", "Fluxa", "faz", "ele", "voltar."]}
          />
          <p className="section-sub reveal reveal-delay-2" style={{ margin: "0 auto" }}>
            Continue no iFood e nas maquininhas se quiser. A Fluxa te dá o canal
            próprio, sem comissão, para trazer o cliente de volta e construir a sua
            base.
          </p>
        </div>

        <div className="integ-chips reveal reveal-delay-2">
          {CHIPS.map((c) => (
            <span className="integ-chip" key={c}>
              <span className="dot" aria-hidden="true" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
