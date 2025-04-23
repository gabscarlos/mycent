import React, { ReactElement } from "react";

interface IconeProps {
  size?: number;
  stroke?: number;
  className?: string;
}

interface TituloPaginaProps {
  icone?: ReactElement<IconeProps>;
  principal: string;
  secundario?: string;
  className?: string;
}

export default function TituloPagina(props: TituloPaginaProps) {
  return (
    <div className={`flex items-center gap-3 ${props.className ?? ""}`}>
      {props.icone && (
        <div className="text-zinc-500">
          {React.cloneElement(props.icone, {
            stroke: 1,
            size: props.secundario ? 50 : 24,
          })}
        </div>
      )}
      <div className="flex flex-col text-zinc-500">
        <h1 className="text-2xl font-black">{props.principal}</h1>
        {props.secundario && (
          <h2 className="text-sm font-thin -mt-1">{props.secundario}</h2>
        )}
      </div>
    </div>
  );
}
