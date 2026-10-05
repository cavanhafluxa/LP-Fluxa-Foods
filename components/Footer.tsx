export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/fluxa-f.png" alt="" />
              <span className="nav-logo-text">
                <span className="nlt-main">Fluxa</span>
                <span className="nlt-sub">Foods</span>
              </span>
            </div>
            <p className="footer-tagline">
              O sistema que faz o seu cliente{" "}
              <span className="accent">voltar</span>: pontos, WhatsApp e base
              própria, sem comissão.
            </p>
            <a href="#cadastro" className="btn btn-red">
              Começar Agora
            </a>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Funcionalidades</div>
            <ul>
              <li><a href="#fidelidade">Programa de pontos</a></li>
              <li><a href="#whatsapp">Status no WhatsApp</a></li>
              <li><a href="#operacao">PDV + QR mesas</a></li>
              <li><a href="#operacao">Estoque e financeiro</a></li>
              <li><a href="#operacao">Rota do motoboy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Empresa</div>
            <ul>
              <li><a href="#ideia">A grande ideia</a></li>
              <li><a href="#comparativo">Comparativo</a></li>
              <li><a href="#precos">Planos e preços</a></li>
              <li><a href="#case">Case Lanas Burguer</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Contato</div>
            <ul>
              <li><a href="#cadastro">Criar minha conta</a></li>
              <li>
                <a href="https://wa.me/5547992793347" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Fluxa Foods. Todos os direitos reservados.
            {/* TODO: substitua pela razão social e CNPJ reais */}
            <br />
            Fluxa Foods · CNPJ 00.000.000/0001-00
          </span>
          <div className="footer-legal">
            <a href="#">Instagram</a>
            <a href="https://wa.me/5547992793347" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
