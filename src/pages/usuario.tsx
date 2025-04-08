import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";
import Pagina from "@/components/template/Pagina";
import Id from "@/logic/core/comum/Id";

export default function CadastroUsuario() {
  return (
    <Pagina>
      <Cabecalho />
      <Conteudo>Usuario</Conteudo>
    </Pagina>
  );
}
