import { ReactNode } from "react";

interface ConteudoProps {
  children: ReactNode;
  className?: string;
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div className={`flex flex-col p-7 ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
}
