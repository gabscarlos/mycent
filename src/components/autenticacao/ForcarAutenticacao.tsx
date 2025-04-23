import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { useRouter } from "next/router";
import { ReactNode, useContext } from "react";
import Carregando from "../template/Carregando";

interface ForcarAutenticacaoProps {
  children: ReactNode;
}

export default function ForcarAutenticacao(props: ForcarAutenticacaoProps) {
  const router = useRouter();
  const { usuario, carregando } = useContext(AutenticacaoContext);

  if (carregando) {
    return <Carregando />;
  } else if (usuario?.email) {
    return props.children;
  } else {
    router.push("/");
    return <Carregando />;
  }
}
