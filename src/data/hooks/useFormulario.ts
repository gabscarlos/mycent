import { ChangeEvent, useState } from "react";

type InputElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type EventoInput = ChangeEvent<InputElement>;

function isChangeEvent(value: unknown): value is EventoInput {
  return (
    typeof value === "object" &&
    value !== null &&
    "target" in value &&
    typeof (value as { target: unknown }).target === "object" &&
    (value as { target: { value?: unknown } }).target?.hasOwnProperty("value")
  );
}

export default function useFormulario<T extends Record<string, unknown>>(
  dadosIniciais?: T
) {
  const [dados, setDados] = useState<T>(dadosIniciais ?? ({} as T));

  function alterarAtributo<K extends keyof T>(
    atributo: K,
    fn?: (valor: T[K]) => T[K]
  ) {
    return (valorOuEvento: T[K] | EventoInput) => {
      const valorExtraido: T[K] = isChangeEvent(valorOuEvento)
        ? (valorOuEvento.target.value as T[K])
        : valorOuEvento;

      setDados((prev) => ({
        ...prev,
        [atributo]: fn ? fn(valorExtraido) : valorExtraido,
      }));
    };
  }

  return {
    dados,
    alterarDados: setDados,
    alterarAtributo,
  };
}
