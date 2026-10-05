const SEGS = [
  "Hamburguerias",
  "Pizzarias",
  "Açaiterias",
  "Lanchonetes",
  "Dark kitchens",
  "Sushibars",
  "Restaurantes",
  "Cafeterias",
  "Pastelarias",
  "Marmitarias",
  "Docerias",
  "Food trucks",
];

export default function SegmentsMarquee() {
  // duplica a lista para o loop ser contínuo (a animação desloca -50%)
  const items = [...SEGS, ...SEGS];

  return (
    <section
      className="seg-marquee"
      aria-label={`Feito para: ${SEGS.join(", ")}`}
    >
      <div className="seg-track" aria-hidden="true">
        {items.map((s, i) => (
          <span className="seg-item" key={i}>
            {s}
            <span className="seg-dot" />
          </span>
        ))}
      </div>
    </section>
  );
}
