import { Semana } from "@/data/devocionales";

export const BADGE_LABEL: Record<Semana["estado"], string> = {
  hecha: "Finalizada",
  actual: "Esta semana",
  propuesta: "Próxima",
};

export function badgeClass(estado: Semana["estado"]) {
  return estado === "actual" ? "now" : estado === "hecha" ? "done" : "pending";
}

export function fechaCorta(fecha: string) {
  return new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "short", timeZone: "UTC" })
    .format(new Date(`${fecha}T00:00:00Z`))
    .replace(".", "");
}
