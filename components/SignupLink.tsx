"use client";

import type { MouseEvent, ReactNode } from "react";

// Cadastro self-service na plataforma (5 dias grátis, sem cartão)
export const SIGNUP_URL = "https://www.fluxakitchens.com.br/comecar";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

// Repassa as UTMs do anúncio (e o plano escolhido) para a página de cadastro
function buildSignupUrl(plan?: string) {
  const url = new URL(SIGNUP_URL);
  try {
    const params = new URLSearchParams(window.location.search);
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) url.searchParams.set(k, v);
    });
  } catch {}
  if (plan) url.searchParams.set("plano", plan.toLowerCase());
  return url.toString();
}

type Props = {
  className?: string;
  plan?: string;
  source: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function SignupLink({ className, plan, source, children, onClick }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    const href = buildSignupUrl(plan);
    e.currentTarget.href = href;

    // Conversão no Meta Pixel (carregado no layout)
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    fbq?.("track", "Lead", { content_name: "Criar conta", plano: plan ?? "não escolhido", origem: source });

    // Clique normal: espera um instante pro evento sair antes de trocar de página.
    // Ctrl/Cmd/clique do meio seguem o comportamento padrão (nova aba).
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setTimeout(() => window.location.assign(href), 200);
  };

  return (
    <a href={SIGNUP_URL} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
