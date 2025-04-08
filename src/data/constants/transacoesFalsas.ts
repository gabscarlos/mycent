import Id from "@/logic/core/comum/Id";
import { TipoTransacao } from "@/logic/core/financas/TipoTransacao";
import Transacao from "@/logic/core/financas/Transacao";

const transacoesFalsas: Transacao[] = [
  {
    id: Id.novo(),
    descricao: "Salário",
    data: new Date(2025, 4, 8),
    valor: 7123.34,
    tipo: TipoTransacao.RECEITA,
  },
  {
    id: Id.novo(),
    descricao: "Conta de Luz",
    data: new Date(2025, 4, 7),
    valor: 320.0,
    tipo: TipoTransacao.DESPESA,
  },
  {
    id: Id.novo(),
    descricao: "Aluguel",
    data: new Date(2025, 4, 6),
    valor: 1817.59,
    tipo: TipoTransacao.DESPESA,
  },
  {
    id: Id.novo(),
    descricao: "Cartão de Crédito",
    data: new Date(2025, 4, 5),
    valor: 2200.0,
    tipo: TipoTransacao.DESPESA,
  },
  {
    id: Id.novo(),
    descricao: "Conta de Água",
    data: new Date(2025, 4, 4),
    valor: 174.35,
    tipo: TipoTransacao.DESPESA,
  },
  {
    id: Id.novo(),
    descricao: "Mensalidade MBA",
    data: new Date(2025, 4, 3),
    valor: 750.0,
    tipo: TipoTransacao.DESPESA,
  },
  {
    id: Id.novo(),
    descricao: "Investimentos",
    data: new Date(2025, 4, 2),
    valor: 2123.34,
    tipo: TipoTransacao.RECEITA,
  },
];

export default transacoesFalsas;
