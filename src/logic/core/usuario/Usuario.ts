export default interface Usuario {
  id: string;
  nome: string;
  email: string;
  imagemUrl: string | null;
  cpf?: string;
  telefone?: string;
  [chave: string]: unknown;
}
