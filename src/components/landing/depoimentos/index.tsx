import Area from "../comum/Area";
import Depoimento from "./Depoimento";

export default function Depoimentos() {
  return (
    <Area
      id="depoimentos"
      className={`
            bg-gradient-to-r from-black via-zinc-900 to-black
            py-10 sm:py-20
        `}
    >
      <div className={`flex flex-col justify-center items-center`}>
        <h2 className="font-thin text-zinc-600 text-2xl sm:text-4xl mb-11 text-center">
          As pessoas estão dizendo...
        </h2>
        <div className="flex justify-center xl:justify-between items-center justify-items-center gap-7 w-full flex-wrap">
          <Depoimento
            avatar="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            nome="João Alves"
            titulo="Desenvolvedor de Software"
            texto="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro."
          />
          <Depoimento
            avatar="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            nome="Juliana Moraes"
            titulo="Diretora Comercial"
            texto="Com o BitCent, estou conseguindo organizar meu dinheiro de uma forma simples e clara. Recomendo para todos que desejam controlar suas finanças."
            destaque
          />
          <Depoimento
            avatar="https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            nome="Rafaela Vieira"
            titulo="Servidora Pública"
            texto="Estou adorando o BitCent! Com ele, consegui organizar meu dinheiro de uma forma simples. Eu indicaria para todas as pessoas que desejam organizar seu dinheiro."
          />
        </div>
      </div>
    </Area>
  );
}
