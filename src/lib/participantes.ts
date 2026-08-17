import { Semana } from "@/data/devocionales";

export type Participante = {
  nombre: string;
  cantidad: number;
};

export function getParticipantes(semanas: Semana[]): Participante[] {
  const conteo = new Map<string, number>();

  for (const semana of semanas) {
    for (const dia of semana.dias ?? []) {
      if (!dia.asignado) continue;
      conteo.set(dia.asignado, (conteo.get(dia.asignado) ?? 0) + 1);
    }
  }

  return Array.from(conteo.entries())
    .map(([nombre, cantidad]) => ({ nombre, cantidad }))
    .sort((a, b) => b.cantidad - a.cantidad || a.nombre.localeCompare(b.nombre, "es"));
}
