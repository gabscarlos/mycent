import { useCallback, useContext, useEffect, useState } from "react";
import AutenticacaoContext from "../contexts/AutenticacaoContext";
import Transacao from "@/logic/core/financas/Transacao";
import servicos from "@/logic/core";

export type TipoExibicao = "lista" | "grade";

export default function useTransacao() {
  const { usuario } = useContext(AutenticacaoContext);
  const [data, setData] = useState<Date>(new Date());
  const [tipoExibicao, setTipoExibicao] = useState<TipoExibicao>("lista");
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [transacao, setTransacao] = useState<Transacao | null>(null);

  const buscarTransacoes = useCallback(async () => {
    if (!usuario) return;
    const transacoes = await servicos.transacao.consultarPorMes(
      usuario,
      data ?? new Date()
    );
    setTransacoes(transacoes);
  }, [usuario, data]);

  useEffect(() => {
    buscarTransacoes();
  }, [buscarTransacoes, data]);

  async function salvar(transacao: Transacao) {
    if (!usuario) return;
    await servicos.transacao.salvar(transacao, usuario);
    setTransacao(null);
    await buscarTransacoes();
  }

  async function excluir(transacao: Transacao) {
    if (!usuario) return;
    await servicos.transacao.excluir(transacao, usuario);
    setTransacao(null);
    await buscarTransacoes();
  }

  return {
    data,
    transacoes,
    transacao,
    tipoExibicao,
    salvar,
    excluir,
    selecionar: setTransacao,
    alterarData: setData,
    alterarExibicao: setTipoExibicao,
  };
}
