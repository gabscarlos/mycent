import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import Lista from "./Lista";
import { transacaoVazia } from "@/logic/core/financas/Transacao";
import Formulario from "./Formulario";
import NaoEncontrado from "../template/NaoEncontrado";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import CampoMesAno from "../template/CampoMesAno";
import Grade from "./Grade";

export default function Financas() {
  const {
    data,
    alterarData,
    alterarExibicao,
    transacoes,
    transacao,
    salvar,
    excluir,
    selecionar,
    tipoExibicao,
  } = useTransacao();

  function renderizarControles() {
    return (
      <div className="flex justify-between">
        <CampoMesAno data={data} dataMudou={alterarData} />
        <div className="flex gap-5">
          <Button
            className="bg-blue-500"
            leftSection={<IconPlus />}
            onClick={() => selecionar(transacaoVazia)}
          >
            Nova transação
          </Button>
          <SegmentedControl
            data={[
              { label: <IconList />, value: "lista" },
              { label: <IconLayoutGrid />, value: "grade" },
            ]}
            onChange={(tipo) => alterarExibicao(tipo as TipoExibicao)}
          />
        </div>
      </div>
    );
  }

  function renderizarTransacoes() {
    const props = { transacoes, selecionarTransacao: selecionar };
    return tipoExibicao === "grade" ? (
      <Grade {...props} />
    ) : (
      <Lista {...props} />
    );
  }

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo className="gap-5">
        {renderizarControles()}
        {transacao ? (
          <Formulario
            transacao={transacao}
            salvar={salvar}
            cancelar={() => selecionar(null)}
            excluir={excluir}
          />
        ) : transacoes.length ? (
          renderizarTransacoes()
        ) : (
          <NaoEncontrado>Nenhuma transação encontrada</NaoEncontrado>
        )}
      </Conteudo>
    </Pagina>
  );
}
