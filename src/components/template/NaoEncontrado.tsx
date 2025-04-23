import { IconCircleX } from "@tabler/icons-react";
import { ReactNode } from "react";

interface NaoEncontradoProps {
  children: ReactNode;
}

export default function NaoEncontrado(props: NaoEncontradoProps) {
  return (
    <div className="flex flex-col items-center rounded-lg text-zinc-700 py-7">
      <IconCircleX size={80} stroke={1} />
      <span className="text-lg">{props.children}</span>
    </div>
  );
}
