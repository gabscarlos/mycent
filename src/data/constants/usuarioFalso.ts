import Id from "@/logic/core/comum/Id";
import Usuario from "@/logic/core/usuario/Usuario";

export default {
  id: Id.novo(),
  nome: "João Alves",
  email: "joao@mail.com",
  imagemUrl: null,
} as Usuario;
