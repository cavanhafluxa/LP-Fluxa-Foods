"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5547992793347";

const ITEMS = [
  {
    q: "Preciso sair do iFood?",
    a: "Não. A Fluxa convive com o iFood e as maquininhas. A ideia é você ter um canal próprio, com pontos e sem comissão, pra trazer o cliente de volta e não depender só do marketplace.",
  },
  {
    q: "Como funciona o programa de pontos?",
    a: "Cada pedido no seu cardápio próprio vira pontos pro cliente. Ele acompanha o saldo, sobe de nível e troca por desconto ou item grátis. Um motivo real pra pedir de novo com você.",
  },
  {
    q: "O status no WhatsApp é automático mesmo?",
    a: "Sim. A cada etapa (confirmado, preparando, saiu para entrega) a Fluxa avisa o cliente no WhatsApp sozinha. Sua equipe não precisa digitar nada.",
  },
  {
    q: "Como funciona a reativação de clientes?",
    a: "A Fluxa identifica quem parou de comprar há um tempo e dispara automaticamente um cupom no WhatsApp pra trazer de volta. Recuperação de cliente no piloto automático.",
  },
  {
    q: "Como funciona a cobrança?",
    a: "É uma assinatura mensal do sistema: Basic por R$ 249,99/mês ou Pro por R$ 349,99/mês. Você paga o plano e pronto: 0% de comissão por pedido. 100% do valor da venda cai no seu caixa.",
  },
  {
    q: "Tem teste grátis?",
    a: "Sim. Você testa a Fluxa antes de assinar e só decide depois de ver funcionando no seu restaurante.",
  },
  {
    q: "Serve pro meu tipo de restaurante?",
    a: "Sim. Hamburguerias, pizzarias, açaiterias, lanchonetes, dark kitchens, sushibars e mais. Cardápio, PDV, mesas com QR, estoque, motoboy e financeiro se adaptam à sua operação.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-head center">
          <h2 className="section-title reveal reveal-delay-1">
            Tudo que você quer saber{" "}
            <span className="mark">antes de começar</span>.
          </h2>
        </div>

        <div className="faq-list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
                <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                  {item.q}
                  <svg className="faq-chev" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="faq-cta">
          Ainda com dúvida?{" "}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Tenho uma dúvida sobre a Fluxa Foods.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com a gente no WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
