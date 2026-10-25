import type { Metadata } from "next";
import LegalPage, { COMPANY } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Uso | Fluxa Foods",
  description: "Regras de uso do site da Fluxa Foods.",
};

export default function TermosPage() {
  return (
    <LegalPage
      eyebrow="Documento legal"
      title="Termos de Uso"
      intro={
        <p>
          Estes Termos regulam o uso do site da <b>{COMPANY.brand}</b>. Ao acessar e
          usar o site, você concorda com eles. Se não concordar, por favor não use o
          site.
        </p>
      }
    >
      <h2>1. Quem somos</h2>
      <p>
        Este site é mantido pela <b>{COMPANY.name}</b>, inscrita no CNPJ sob o nº{" "}
        <b>{COMPANY.cnpj}</b>, titular da marca {COMPANY.brand}. A {COMPANY.brand}{" "}
        oferece um sistema para restaurantes e deliverys, com cardápio digital
        próprio, gestão de pedidos, operação da cozinha e ferramentas de
        relacionamento com clientes.
      </p>

      <h2>2. Finalidade do site</h2>
      <p>
        O site apresenta a {COMPANY.brand}, os seus recursos e planos, e leva você
        para criar a sua conta na plataforma Fluxa Kitchen Hub, em
        fluxakitchens.com.br, ou falar com a nossa equipe pelo WhatsApp. O site não
        realiza cadastros, contratações nem cobranças. A criação de conta, o período de
        teste e a assinatura de qualquer plano acontecem na plataforma e seguem os
        Termos de Uso e as condições aceitos lá, no momento do cadastro.
      </p>

      <h2>3. Informações, preços e planos</h2>
      <p>
        Procuramos manter todas as informações do site corretas e atualizadas.
        Preços, planos, recursos, promoções e condições como período de teste podem
        mudar sem aviso prévio. Valem sempre as condições confirmadas pela nossa
        equipe no momento da contratação.
      </p>

      <h2>4. Resultados, depoimentos e imagens</h2>
      <p>
        Números, depoimentos e casos de clientes mostrados no site refletem
        experiências reais ou ilustrativas e não são garantia de resultado. Os
        resultados de cada restaurante dependem de fatores como operação, mercado,
        cardápio e uso do sistema. Telas, imagens de produtos e nomes de
        estabelecimentos usados em demonstrações podem ser ilustrativos.
      </p>

      <h2>5. Uso adequado</h2>
      <p>Ao usar o site, você se compromete a:</p>
      <ul>
        <li>fornecer informações verdadeiras ao falar com a nossa equipe ou criar a sua conta;</li>
        <li>não usar o site para fins ilegais, fraudulentos ou que prejudiquem terceiros;</li>
        <li>não tentar acessar áreas restritas, interferir no funcionamento ou na segurança do site;</li>
        <li>não copiar, extrair ou reproduzir o conteúdo do site de forma automatizada.</li>
      </ul>

      <h2>6. Propriedade intelectual</h2>
      <p>
        A marca {COMPANY.brand}, o logotipo, os textos, imagens, vídeos, animações,
        layout e demais conteúdos do site pertencem à {COMPANY.name} ou são usados com
        autorização, e são protegidos pela legislação de propriedade intelectual. É
        proibido usá-los sem autorização prévia por escrito.
      </p>

      <h2>7. Links e serviços de terceiros</h2>
      <p>
        O site contém links e integrações com serviços de terceiros, como WhatsApp,
        Facebook e Instagram. Esses serviços têm termos e políticas próprios, e não
        nos responsabilizamos pelo conteúdo ou pelas práticas deles.
      </p>

      <h2>8. Disponibilidade e responsabilidade</h2>
      <p>
        Trabalhamos para manter o site disponível e funcionando, mas ele pode passar
        por interrupções, manutenções ou falhas técnicas. Na máxima extensão permitida
        pela lei, não respondemos por danos indiretos decorrentes do uso ou da
        impossibilidade de uso do site, nem por decisões tomadas apenas com base nas
        informações nele publicadas.
      </p>

      <h2>9. Privacidade</h2>
      <p>
        O tratamento dos seus dados pessoais, incluindo o uso de cookies e do Meta
        Pixel, está descrito na nossa <a href="/privacidade">Política de Privacidade</a>
        , que faz parte destes Termos.
      </p>

      <h2>10. Alterações nestes Termos</h2>
      <p>
        Podemos atualizar estes Termos a qualquer momento. A versão em vigor é sempre
        a publicada nesta página, com a data da última atualização no topo.
      </p>

      <h2>11. Lei aplicável</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil.
        Eventuais conflitos serão resolvidos no foro competente, nos termos da
        legislação aplicável.
      </p>

      <h2>12. Contato</h2>
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
