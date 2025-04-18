import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import Lista from "./Lista";
import { transacaoVazia } from "@/logic/core/financas/Transacao";
import Formulario from "./Formulario";
import NaoEncontrado from "../template/NaoEncontrado";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import useTransacao from "@/data/hooks/useTransacao";

export default function Financas() {
  const { transacoes, transacao, salvar, excluir, selecionar } = useTransacao();

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo className="gap-5">
        <Button
          className="bg-blue-500"
          leftSection={<IconPlus />}
          onClick={() => selecionar(transacaoVazia)}
        >
          Nova transação
        </Button>
        {transacao ? (
          <Formulario
            transacao={transacao}
            salvar={salvar}
            cancelar={() => selecionar(null)}
            excluir={excluir}
          />
        ) : transacoes.length ? (
          <Lista transacoes={transacoes} selecionarTransacao={selecionar} />
        ) : (
          <NaoEncontrado>Nenhuma transação encontrada</NaoEncontrado>
        )}
      </Conteudo>
    </Pagina>
  );
}
