import TextAnimate from "./magic/TextAnimate";

const STEPS = [
  {
    n: "1",
    t: "Escolha o plano e faça o cadastro",
    p: "Aqui mesmo na página, em minutos. Basic ou Pro — o que fizer sentido pro seu momento.",
  },
  {
    n: "2",
    t: "Monte seu cardápio digital",
    p: "Suba produtos, fotos e combos. O Cardápio Fluxa já nasce pronto pra converter e subir o ticket.",
  },
  {
    n: "3",
    t: "Receba pedidos no seu canal",
    p: "Compartilhe seu link e QR code e comece a receber pedidos direto — sem comissão de marketplace.",
  },
];

export default function HowToStart() {
  return (
    <section className="section steps3 on-cream" id="como-comecar">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow center reveal">Como começar</div>
          <TextAnimate
            as="h2"
            className="section-title"
            text="Do cadastro ao primeiro pedido, em 3 passos."
            highlight={["3", "passos."]}
          />
        </div>

        <div className="steps3-grid">
          {STEPS.map((s) => (
            <div className="step3 reveal" key={s.n}>
              <div className="step3-num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>

        <div className="steps3-cta">
          <a href="#cadastro" className="btn-primary">
            Começar agora
          </a>
          <p className="steps3-note">
            Prefere que a gente te mostre antes? Fale com a equipe no WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
