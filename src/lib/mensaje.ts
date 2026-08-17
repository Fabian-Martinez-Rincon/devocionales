import { Semana } from "@/data/devocionales";
import { fechaCorta } from "./semana";

export function construirMensajeSemana(semana: Semana): string {
  const titulo =
    semana.estado === "actual"
      ? `📖 *Devocionales de esta semana*\n🗓️ ${semana.meta}`
      : `📖 *Devocionales de la semana del ${semana.meta}*`;

  const bloques = semana.dias.map(
    (dia) =>
      `🔹 *${dia.dia} ${fechaCorta(dia.fecha)}*\n_${dia.parabola}_\n📍 ${dia.versiculo}\n👤 Responsable: *${dia.asignado}*`
  );

  const cierre = "💪 ¡Que Dios los bendiga preparando cada devocional!";

  return [titulo, ...bloques, cierre].join("\n\n");
}
