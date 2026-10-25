import type { Metadata } from "next";
import LegalPage, { COMPANY } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade | Fluxa Foods",
  description:
    "Como a Fluxa Foods coleta, usa, compartilha e protege os seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PrivacidadePage() {
  return (
    <LegalPage
      eyebrow="Documento legal"
      title="Política de Privacidade"
      intro={
        <p>
          Esta Política explica como a <b>{COMPANY.brand}</b> trata os dados pessoais
          de quem visita este site, clica para criar uma conta ou fala com a gente pelo
          WhatsApp. Ela segue a Lei Geral de Proteção de Dados Pessoais
          (LGPD, Lei nº 13.709/2018). Ao usar o site, você declara que leu e entendeu
          este documento.
        </p>
      }
    >
      <h2>1. Quem é o responsável pelos seus dados</h2>
      <p>
        O controlador dos dados pessoais tratados neste site é a{" "}
        <b>{COMPANY.name}</b>, inscrita no CNPJ sob o nº <b>{COMPANY.cnpj}</b>, que
        opera a marca {COMPANY.brand}.
      </p>
      <p>
        Para qualquer assunto sobre privacidade e proteção de dados, inclusive o
        exercício dos seus direitos, o nosso canal de atendimento é o WhatsApp{" "}
        <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer">
          {COMPANY.whatsappLabel}
        </a>
        .
      </p>

      <h2>2. Quais dados coletamos</h2>
      <h3>2.1 Criação de conta</h3>
      <p>
        Este site não tem formulário de cadastro. Ao clicar em botões como
        &quot;Começar Agora&quot; ou &quot;Criar minha conta grátis&quot;, você é
        direcionado para a plataforma Fluxa Kitchen Hub, em{" "}
        <a href="https://www.fluxakitchens.com.br/comecar" target="_blank" rel="noopener noreferrer">
          fluxakitchens.com.br
        </a>
        , onde cria a sua conta informando nome do estabelecimento, e-mail, senha,
        CNPJ, telefone e endereço. O tratamento desses dados segue os Termos de Uso e a
        Política de Privacidade apresentados e aceitos na própria plataforma, no
        momento do cadastro.
      </p>
      <p>
        Para medir de onde vêm os cadastros, o link para a plataforma pode levar
        parâmetros da campanha que trouxe você ao site (como utm_source e
        utm_campaign) e o plano em que você clicou.
      </p>

      <h3>2.2 Conversas no WhatsApp</h3>
      <p>
        Quando você fala com a gente pelo WhatsApp, tratamos o seu número, o seu nome
        de perfil e as informações que você compartilhar na conversa.
      </p>

      <h3>2.3 Dados coletados automaticamente</h3>
      <p>
        Quando você navega no site, podem ser coletados automaticamente dados técnicos
        e de navegação, como endereço IP, tipo de navegador e dispositivo, páginas
        acessadas, data e hora do acesso, origem da visita (por exemplo, um anúncio) e
        ações realizadas no site, como a visualização da página e o clique para criar
        conta. Essa coleta é feita por meio de cookies e tecnologias semelhantes,
        explicadas no item 5.
      </p>

      <h2>3. Para que usamos os seus dados</h2>
      <ul>
        <li>direcionar você para a criação de conta na plataforma e dar suporte no início do uso;</li>
        <li>responder dúvidas e enviar informações e propostas sobre os nossos planos;</li>
        <li>medir o desempenho das nossas campanhas de anúncios e entender de onde vêm os contatos;</li>
        <li>exibir anúncios mais relevantes nas plataformas da Meta (Facebook e Instagram);</li>
        <li>melhorar o conteúdo, o funcionamento e a segurança do site;</li>
        <li>cumprir obrigações legais e regulatórias e exercer direitos em processos.</li>
      </ul>
      <p>Não vendemos os seus dados pessoais.</p>

      <h2>4. Bases legais</h2>
      <p>Tratamos dados pessoais com base nas hipóteses previstas no art. 7º da LGPD:</p>
      <ul>
        <li>
          <b>procedimentos preliminares a um contrato</b>, a seu pedido, quando você
          clica para criar a sua conta ou pede informações sobre os planos;
        </li>
        <li>
          <b>legítimo interesse</b>, para medir campanhas, melhorar o site e manter a
          segurança, sempre respeitando os seus direitos e expectativas;
        </li>
        <li>
          <b>consentimento</b>, quando ele for exigido, que pode ser revogado a
          qualquer momento;
        </li>
        <li>
          <b>cumprimento de obrigação legal ou regulatória</b> e{" "}
          <b>exercício regular de direitos</b>, quando aplicável.
        </li>
      </ul>

      <h2>5. Cookies e Meta Pixel</h2>
      <p>
        Cookies são pequenos arquivos salvos no seu navegador. Este site usa cookies
        necessários ao funcionamento das páginas e cookies de medição e publicidade.
      </p>
      <p>
        Usamos o <b>Meta Pixel</b>, ferramenta da Meta Platforms, Inc. Ele registra
        eventos como a visualização da página e o clique para criar conta,
        para medir os resultados dos nossos anúncios no Facebook e no Instagram e
        mostrar anúncios a pessoas com interesse parecido. A Meta trata esses dados
        conforme a própria{" "}
        <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
          Política de Privacidade da Meta
        </a>
        .
      </p>
      <p>Você pode controlar o uso de cookies:</p>
      <ul>
        <li>nas configurações do seu navegador, bloqueando ou apagando cookies;</li>
        <li>
          nas{" "}
          <a href="https://www.facebook.com/adpreferences/" target="_blank" rel="noopener noreferrer">
            preferências de anúncios da Meta
          </a>
          , para ajustar os anúncios que você vê.
        </li>
      </ul>
      <p>
        Bloquear cookies pode afetar algumas funções do site, mas não impede você de
        criar a sua conta.
      </p>

      <h2>6. Com quem compartilhamos</h2>
      <p>Os seus dados podem ser compartilhados apenas com:</p>
      <ul>
        <li>
          <b>Meta Platforms</b>, por meio do Meta Pixel e do WhatsApp, para as
          finalidades descritas nesta Política;
        </li>
        <li>
          <b>provedores de hospedagem e infraestrutura</b> que mantêm o site no ar,
          que tratam os dados conforme as nossas instruções;
        </li>
        <li>
          <b>autoridades públicas</b>, quando houver obrigação legal ou ordem
          judicial.
        </li>
      </ul>

      <h2>7. Transferência internacional</h2>
      <p>
        Alguns desses parceiros, como a Meta e provedores de hospedagem, podem
        armazenar ou processar dados fora do Brasil. Nesses casos, a transferência
        ocorre nas hipóteses permitidas pelo art. 33 da LGPD, com parceiros que
        adotam medidas adequadas de proteção.
      </p>

      <h2>8. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados pelo tempo necessário para cumprir as finalidades desta
        Política, como o atendimento comercial e a eventual contratação, ou pelo prazo
        exigido por lei. Depois disso, os dados são excluídos ou anonimizados. Você
        pode pedir a exclusão antes disso, conforme o item 10.
      </p>

      <h2>9. Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger os seus
        dados contra acessos não autorizados, perda ou alteração, como conexão segura
        (HTTPS) e acesso restrito às informações. Nenhum sistema é totalmente imune a
        riscos, mas trabalhamos para reduzi-los ao máximo.
      </p>

      <h2>10. Seus direitos</h2>
      <p>Conforme o art. 18 da LGPD, você pode, a qualquer momento:</p>
      <ul>
        <li>confirmar se tratamos os seus dados e acessá-los;</li>
        <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários ou excessivos;</li>
        <li>pedir a portabilidade dos dados a outro fornecedor;</li>
        <li>pedir a eliminação dos dados tratados com base no seu consentimento;</li>
        <li>saber com quem compartilhamos os seus dados;</li>
        <li>revogar o consentimento e se opor a tratamentos feitos com base em outras hipóteses legais.</li>
      </ul>
      <p>
        Para exercer qualquer um desses direitos, envie uma mensagem para o WhatsApp{" "}
        <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer">
          {COMPANY.whatsappLabel}
        </a>
        . Podemos pedir informações para confirmar a sua identidade antes de atender
        ao pedido. Você também pode apresentar reclamação à Autoridade Nacional de
        Proteção de Dados (
        <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">
          ANPD
        </a>
        ).
      </p>

      <h2>11. Crianças e adolescentes</h2>
      <p>
        Este site e os nossos serviços são voltados a donos e gestores de restaurantes
        e não se destinam a menores de 18 anos. Não coletamos intencionalmente dados
        de crianças e adolescentes.
      </p>

      <h2>12. Alterações nesta Política</h2>
      <p>
        Podemos atualizar esta Política para refletir mudanças no site, nos serviços
        ou na legislação. A data da última atualização fica sempre no topo desta
        página.
      </p>

      <h2>13. Contato</h2>
      <p>
        {COMPANY.name} · CNPJ {COMPANY.cnpj}
        <br />
        WhatsApp:{" "}
        <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer">
          {COMPANY.whatsappLabel}
        </a>
      </p>
    </LegalPage>
  );
}
