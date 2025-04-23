export default class Data {
  private static _lingua = "pt-BR";

  static meses() {
    return Array(12)
      .fill(0)
      .map((_, i) => {
        return new Date(2000, i, 1)
          .toLocaleDateString(Data._lingua, { month: "short" })
          .toUpperCase()
          .substring(0, 3);
      });
  }

  static completa = {
    formatar(data: Date): string {
      return data?.toLocaleDateString?.(Data._lingua, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      } as Intl.DateTimeFormatOptions);
    },
    desformatar(valor: string): Date {
      const hoje = new Date();
      const partes = valor.split("/");
      const dia = partes[0] ? +partes[0] : hoje.getDay();
      const mes = partes[1] ? +partes[1] - 1 : hoje.getMonth();
      const ano = partes[2] ? +partes[2] : hoje.getFullYear();
      return new Date(ano, mes, dia);
    },
  };

  static diaMes = {
    formatar(data: Date, menor?: boolean): string {
      return data?.toLocaleDateString?.(Data._lingua, {
        day: "2-digit",
        month: menor ? "2-digit" : "short",
      } as Intl.DateTimeFormatOptions);
    },
  };

  static mesAno = {
    formatar(data: Date, menor?: boolean): string {
      return data?.toLocaleDateString?.(Data._lingua, {
        month: menor ? "short" : "long",
        year: "numeric",
      } as Intl.DateTimeFormatOptions);
    },
  };
}
