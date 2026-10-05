const ITEMS = [
  "Hamburguerias",
  "Pizzarias",
  "Açaiterias",
  "Lanchonetes",
  "Dark kitchens",
  "Sushibars",
];

export default function TrustStrip() {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust-inner">
          <span className="trust-label">Feito para quem vive de restaurante</span>
          <span className="trust-sep" aria-hidden="true" />
          {ITEMS.map((it) => (
            <span className="trust-item" key={it}>
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
