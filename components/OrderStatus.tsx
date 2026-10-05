function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 20a2 2 0 004 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function BikeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5.5" cy="17.5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18.5" cy="17.5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 17.5l4-8h4l3 8M9 9.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5h16v11H9l-5 4V5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

const FEATS = [
  {
    icon: <BellIcon />,
    t: "Confirmação instantânea de pedido",
    p: "Assim que o cliente finaliza no cardápio, a Fluxa envia o comprovante com tempo estimado de preparo, sem ninguém da equipe precisar digitar uma linha.",
  },
  {
    icon: <BikeIcon />,
    t: "Aviso de “Saiu para entrega!” com rastreio",
    p: "Quando o motoboy retira a comanda, o sistema dispara a notificação no WhatsApp com o nome do entregador e tempo previsto de chegada.",
  },
  {
    icon: <ChatIcon />,
    t: "Elimina 90% das mensagens de ansiedade",
    p: "Sua equipe para de gastar tempo respondendo “meu pedido já saiu?” ou “quanto tempo falta?” e foca na produtividade da cozinha e salão.",
  },
];

export default function OrderStatus() {
  return (
    <section className="section orderstatus" id="whatsapp">
      <div className="container">
        <div className="showcase-grid rev">
          <div className="showcase-copy">
            <div className="eyebrow amber reveal">Comunicação Automatizada</div>
            <h2 className="section-title reveal reveal-delay-1">
              O cliente acompanha tudo pelo{" "}
              <span className="mark">WhatsApp</span>, sem te sobrecarregar.
            </h2>
            <p className="section-sub reveal reveal-delay-2">
              A cada mudança na cozinha ou na rota de entrega, a Fluxa notifica o cliente automaticamente pelo WhatsApp oficial. Mais transparência pra quem compra, menos sobrecarga no seu atendimento.
            </p>
            <ul className="feat-list">
              {FEATS.map((f, i) => (
                <li className={`reveal reveal-delay-${i + 1}`} key={f.t}>
                  <span className={`feat-ico${i === 1 ? " amber" : ""}`}>{f.icon}</span>
                  <div className="feat-txt">
                    <h4>{f.t}</h4>
                    <p>{f.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="showcase-media reveal reveal-delay-2">
            <div className="wa-device-wrapper">
              <div className="wa">
                {/* Cabeçalho realista WhatsApp */}
                <div className="wa-head">
                  <span className="wa-ava">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/lanas-logo.png" alt="Lanas Burguer" className="wa-ava-img" />
                  </span>
                  <div className="wa-head-info">
                    <div className="wa-head-name-row">
                      <span className="wa-name">Lanas Burguer Oficial</span>
                      <span className="wa-verified-check" title="Conta Verificada">✓</span>
                    </div>
                    <div className="wa-status">
                      <span className="wa-status-dot" /> Atendimento Automático 24h
                    </div>
                  </div>
                </div>

                {/* Mensagens realistas */}
                <div className="wa-msgs">
                  <div className="wa-msg in">
                    <div className="wa-msg-header">
                      <span>🍔 <b>Pedido #0192 Confirmado!</b></span>
                    </div>
                    <p>Olá, Maria! Seu pedido de <b>1x Combo Smash Bacon + Batata Rústica</b> já foi enviado para a cozinha.</p>
                    <div className="wa-msg-eta">
                      ⏱️ Tempo estimado: <b>30-40 min</b>
                    </div>
                    <span className="wa-time">19:32</span>
                  </div>

                  <div className="wa-msg in">
                    <p>👨‍🍳 <b>Status:</b> O Chef já está grelhando seu burger com todo o capricho!</p>
                    <span className="wa-time">19:44</span>
                  </div>

                  <div className="wa-msg in highlight">
                    <div className="wa-msg-bike-tag">
                      🛵 <b>Saiu para entrega!</b>
                    </div>
                    <p>O entregador <b>Carlos Eduardo</b> acabou de sair com o seu pedido. Chega em ~12 min.</p>
                    <div className="wa-map-preview">
                      <span className="wa-map-pin">📍</span>
                      <span>Rua Rosa Laurentino Lana, 100</span>
                    </div>
                    <span className="wa-time">19:58 <span className="wa-ticks">✓✓</span></span>
                  </div>

                  <div className="wa-msg out">
                    <p>Chegou super rápido e quentinho! Muito obrigado, nota 10! 😍👏</p>
                    <span className="wa-time">20:11 <span className="wa-ticks blue">✓✓</span></span>
                  </div>
                </div>

                <div className="wa-bottom-badge">
                  <span>⚡ 100% Automático via Fluxa Foods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
