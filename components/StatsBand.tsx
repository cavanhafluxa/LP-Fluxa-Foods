const STATS = [
  { n: "0", u: "%", l: "de comissão por pedido" },
  { n: "8", u: "", l: "ferramentas num só sistema" },
  { n: "100", u: "%", l: "dos dados são seus" },
  { n: "24/7", u: "", l: "seu cardápio no ar" },
];

const SEGS = ["Hamburguerias", "Pizzarias", "Açaiterias", "Lanchonetes", "Dark kitchens", "Sushibars"];

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container">
        <div className="stats-band-grid">
          {STATS.map((s) => (
            <div className="reveal" key={s.l}>
              <div className="sb-num">
                {s.n}
                {s.u && <span className="u">{s.u}</span>}
              </div>
              <div className="sb-label">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="stats-band-segs">
          <span className="sg-label">Feito para</span>
          {SEGS.map((s) => (
            <span className="sg" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
