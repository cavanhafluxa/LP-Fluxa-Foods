import SignupLink from "./SignupLink";
export default function FinalCta() {
  return (
    <section className="section finalcta">
      <div className="container">
        <div className="finalcta-inner reveal">
          <h2>
            Seus clientes. Sua margem.{" "}
            <span className="mark">Seu sistema.</span>
          </h2>
          <p>
            Pare de entregar cliente e comissão ao marketplace. Comece hoje a
            construir a sua base com pontos, WhatsApp e 0% de comissão.
          </p>
          <SignupLink className="btn btn-red btn-lg" source="cta-final">
            Começar Agora
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8.5 3.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </SignupLink>
          <div className="finalcta-note">5 dias grátis · sem cartão · 0% de comissão</div>
        </div>
      </div>
    </section>
  );
}
