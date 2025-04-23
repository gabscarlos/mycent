import Id from "@/logic/core/comum/Id";
import { app } from "../config/app";
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  OrderByDirection,
  query,
  setDoc,
  where,
  WhereFilterOp,
} from "firebase/firestore";

interface Filtro {
  atributo: string;
  operador: WhereFilterOp;
  valor: unknown;
}

export default class Colecao {
  async salvar<T extends { id?: string }>(
    caminho: string,
    entidade: T,
    id?: string
  ): Promise<T & { id: string }> {
    const db = getFirestore(app);
    const idFinal = id ?? entidade.id ?? Id.novo();
    const docRef = doc(db, caminho, idFinal);
    await setDoc(docRef, entidade);
    return {
      ...entidade,
      id: entidade.id ?? idFinal,
    };
  }

  async excluir(caminho: string, id?: string): Promise<boolean> {
    if (!id) return false;
    const db = getFirestore(app);
    const docRef = doc(db, caminho, id);
    const itemNoBanco = await getDoc(docRef);
    if (!itemNoBanco.exists()) return false;
    await deleteDoc(docRef);
    return true;
  }

  async consultar<T extends object>(
    caminho: string,
    ordenarPor?: string,
    direcao?: OrderByDirection
  ): Promise<(T & { id: string })[]> {
    const db = getFirestore(app);
    const colecaoRef = collection(db, caminho);
    const ordenacao = ordenarPor ? [orderBy(ordenarPor, direcao)] : [];
    const consulta = query(colecaoRef, ...ordenacao);
    const resultado = await getDocs(consulta);
    return resultado.docs
      .map(this._converterDoFirebase<T>)
      .filter((dado): dado is T & { id: string } => dado !== null);
  }

  async consultarPorId<T extends object>(
    caminho: string,
    id: string
  ): Promise<(T & { id: string }) | null> {
    const db = getFirestore(app);
    const docRef = doc(db, caminho, id);
    const resultado = await getDoc(docRef);
    return this._converterDoFirebase<T>(resultado);
  }

  async consultarComFiltros<T extends object>(
    caminho: string,
    filtros: Filtro[],
    ordenarPor?: string,
    direcao?: OrderByDirection
  ): Promise<(T & { id: string })[]> {
    const db = getFirestore(app);
    const colecaoRef = collection(db, caminho);

    const filtrosWhere =
      filtros?.map((f) => where(f.atributo, f.operador, f.valor)) ?? [];
    const ordenacao = ordenarPor ? [orderBy(ordenarPor, direcao)] : [];

    const consulta = query(colecaoRef, ...filtrosWhere, ...ordenacao);
    const resultado = await getDocs(consulta);
    return resultado.docs
      .map(this._converterDoFirebase<T>)
      .filter((dado): dado is T & { id: string } => dado !== null);
  }

  private _converterDoFirebase<T extends object>(
    snapshot: DocumentSnapshot<DocumentData>
  ): (T & { id: string }) | null {
    if (!snapshot.exists()) return null;

    const dados = snapshot.data();
    if (!dados) return null;

    const entidade = Object.keys(dados).reduce<Record<string, unknown>>(
      (obj, chave) => {
        const valor = dados[chave];
        const convertido =
          typeof valor === "object" && valor !== null && "toDate" in valor
            ? (valor as { toDate: () => unknown }).toDate()
            : valor;

        return { ...obj, [chave]: convertido };
      },
      {}
    );

    return {
      ...entidade,
      id: snapshot.id,
    } as T & { id: string };
  }
}
