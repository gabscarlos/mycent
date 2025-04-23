import { Button } from "@mantine/core";
import { ReactNode } from "react";

interface MiniFormularioProps {
  titulo: string;
  descricao: string;
  children: ReactNode;
  msgRodape: string;
  salvar: () => void;
  podeSalvar: boolean;
}
export default function MiniFormulario(props: MiniFormularioProps) {
  return (
    <div className="flex flex-col overflow-hidden border border-zinc-800 rounded-lg">
      <div className="flex flex-col p-7">
        <div className="text-3xl font-black">{props.titulo}</div>
        <div className="mt-4 text-zinc-400">{props.descricao}</div>
        <div className="mt-3">{props.children}</div>
      </div>
      <div className="flex justify-end sm:justify-between items-center bg-black px-7 py-5">
        <span className="hidden md:inline text-zinc-400">
          {props.msgRodape}
        </span>
        <Button
          className={props.podeSalvar ? "bg-green-500" : "bg-gray-900"}
          color={props.podeSalvar ? "green" : "gray"}
          onClick={() => (props.podeSalvar ? props.salvar() : null)}
        >
          Salvar
        </Button>
      </div>
    </div>
  );
}
