import type { ReactNode } from "react";

export const COMPANY = {
  brand: "Fluxa Foods",
  name: "WKS SERVIÇOS INTEGRADOS LTDA",
  cnpj: "65.127.335/0001-10",
  whatsappLabel: "(47) 9 9248-8212",
  whatsappUrl: "https://wa.me/5547992488212",
};

export const LEGAL_UPDATED = "23 de outubro de 2026";

type Props = {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
};

// Moldura das páginas legais (Política de Privacidade e Termos de Uso)
export default function LegalPage({ eyebrow, title, intro, children }: Props) {
  return (
    <>
      <header className="legal-top">
        <div className="container legal-top-inner">
          <a href="/" className="legal-logo" aria-label="Fluxa Foods, voltar para a página inicial">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo" src="/logo-fluxa.svg" alt="" width={960} height={298} />
          </a>
          <a href="/" className="legal-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7.5 3.5L3 8l4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Voltar para o site
          </a>
        </div>
      </header>

      <main className="legal">
        <div className="container legal-inner">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-updated">Última atualização: {LEGAL_UPDATED}</p>
          <div className="legal-intro">{intro}</div>
          <div className="legal-body">{children}</div>
        </div>
      </main>

      <footer className="legal-foot">
        <div className="container legal-foot-inner">
          <span>
            © 2026 {COMPANY.brand}. {COMPANY.name} · CNPJ {COMPANY.cnpj}
          </span>
          <div className="legal-foot-links" role="navigation" aria-label="Documentos legais">
            <a href="/privacidade">Política de Privacidade</a>
            <a href="/termos">Termos de Uso</a>
            <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </footer>
    </>
  );
}
