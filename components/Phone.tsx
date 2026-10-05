/* Moldura de celular em CSS. Envolve um print real ou uma tela recriada.
   `bare` esconde a ilha dinâmica quando o print já traz a própria barra de status. */
export default function Phone({
  children,
  bare = false,
  className = "",
}: {
  children: React.ReactNode;
  bare?: boolean;
  className?: string;
}) {
  return (
    <div className={`phone ${className}`.trim()}>
      <div className="phone-frame">
        {!bare && <span className="phone-island" aria-hidden="true" />}
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}
