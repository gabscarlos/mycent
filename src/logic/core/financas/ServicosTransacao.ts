import Colecao from "@/logic/firebase/db/Colecao";
import Transacao from "./Transacao";
import Usuario from "../usuario/Usuario";
import Data from "@/logic/utils/Data";

export default class ServicosTransacao {
  private _colecao = new Colecao();

  async salvar(transacao: Transacao, usuario: Usuario) {
    return this._colecao.salvar(
      `financas/${usuario.email}/transacoes`,
      transacao
    );
  }

  async excluir(transacao: Transacao, usuario: Usuario) {
    return this._colecao.excluir(
      `financas/${usuario.email}/transacoes`,
      transacao.id
    );
  }

  async consultar(usuario: Usuario) {
    const caminho = `financas/${usuario.email}/transacoes`;
    return await this._colecao.consultar(caminho, "data", "desc");
  }

  async consultarPorMes(usuario: Usuario, data: Date) {
    const primeiro = new Date(data.getFullYear(), data.getMonth(), 1);
    const ultimo = new Date(
      data.getFullYear(),
      data.getMonth() + 1,
      0,
      23,
      59,
      59
    );

    const caminho = `financas/${usuario.email}/transacoes`;
    return await this._colecao.consultarComFiltros(caminho, [
      { atributo: "data", operador: ">=", valor: primeiro },
      { atributo: "data", operador: "<=", valor: ultimo },
    ]);
  }
}
