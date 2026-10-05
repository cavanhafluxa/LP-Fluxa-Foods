const ITEMS = [
  {
    t: "Teste grátis",
    p: "Experimente a Fluxa antes de assinar. Você só decide depois de ver funcionando no seu restaurante.",
    icon: (
      <path
        d="M4 12.5l4.5 4.5L20 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    t: "0% de comissão",
    p: "Diferente do marketplace, a Fluxa não fica com um centavo dos seus pedidos. 100% da venda cai no seu caixa.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
        <path d="M8 16L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    t: "Seus clientes são seus",
    p: "A base de clientes fica no seu nome, com o Database Marketing. Se um dia sair, leva os seus dados com você.",
    icon: (
      <path
        d="M12 21s-7-4.35-7-9.5A3.5 3.5 0 0112 8a3.5 3.5 0 017 3.5C19 16.65 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Guarantee() {
  return (
    <section className="section guarantee" id="garantia">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow center reveal">Por que é seguro começar</div>
          <h2 className="section-title">O combinado é claro.</h2>
        </div>

        <div className="guarantee-grid">
          {ITEMS.map((it) => (
            <div className="guar reveal" key={it.t}>
              <div className="guar-ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {it.icon}
                </svg>
              </div>
              <div>
                <h3>{it.t}</h3>
                <p>{it.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
