import { Fragment } from "react";

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function CheckIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7.2l2.6 2.6L11 4.4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PAIRS = [
  { bad: "Perco pedido e o WhatsApp vira uma bagunça.", good: "Pedido cai direto no painel, em tempo real." },
  { bad: "Pago até 30% de comissão pro marketplace.", good: "Canal próprio com 0% de comissão: 100% é seu." },
  { bad: "Não sei o custo real dos meus pratos.", good: "Estoque com receita e a margem real por prato." },
  { bad: "O cliente pede uma vez e some.", good: "Pontos, cupons e reativação automática de quem sumiu." },
  { bad: "O acerto do motoboy é sempre uma briga.", good: "Log de entregas e rota otimizada. O acerto vira relatório." },
  { bad: "Uso 4 sistemas e nenhum conversa entre si.", good: "Cardápio, PDV, cozinha, entrega e financeiro num só." },
];

export default function Pains() {
  return (
    <section className="section pains" id="dores">
      <div className="container">
        <div className="section-head center">
          <h2 className="section-title">
            Se você se reconhece aqui, a Fluxa foi{" "}
            <span className="tk-red">feita pra você</span>.
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            De um lado, as dores de sempre. Do outro, como a Fluxa resolve cada
            uma delas.
          </p>
        </div>

        <div className="vs2 reveal">
          <div className="vs2-h bad">
            <span className="h-ico"><XIcon /></span> Sem a Fluxa
          </div>
          <div className="vs2-h good">
            <span className="h-ico"><CheckIcon size={15} /></span> Com a Fluxa
          </div>

          {PAIRS.map((p) => (
            <Fragment key={p.bad}>
              <div className="vs2-cell bad">
                <span className="x"><XIcon /></span>
                <span>{p.bad}</span>
              </div>
              <div className="vs2-cell good">
                <span className="ck"><CheckIcon /></span>
                <span>{p.good}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
