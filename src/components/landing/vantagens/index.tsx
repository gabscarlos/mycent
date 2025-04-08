import Area from "../comum/Area";
import Vantagem from "./Vantagem";
import vantagem1 from "../../../../public/vantagem-1.jpg";
import vantagem2 from "../../../../public/vantagem-2.jpg";
import vantagem3 from "../../../../public/vantagem-3.jpg";

export default function Vantagens() {
  return (
    <Area id="vantagens" className="bg-black py-16 sm:py-36">
      <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
        <Vantagem
          imagem={vantagem1}
          titulo="Gerenciador financeiro completo e simples de usar."
          subtitulo="Aqui você consegue ter o controle completo das suas finanças."
        />
        <Vantagem
          imagem={vantagem2}
          titulo="Organizado para você nunca perder o controle das suas finanças."
          subtitulo="Visualize e acompanhe seu dinheiro de uma forma simples e clara."
          inverter
        />
        <Vantagem
          imagem={vantagem3}
          titulo="Ideal para planejamento financeiro."
          subtitulo="Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro mais simples."
        />
      </div>
    </Area>
  );
}
