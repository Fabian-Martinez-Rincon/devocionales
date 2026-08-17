"use client";

import { useMemo, useState } from "react";
import { semanas } from "@/data/devocionales";
import { getParticipantes } from "@/lib/participantes";
import ParticipantesFilter from "./ParticipantesFilter";
import WeekSection from "./WeekSection";

export default function Cronograma() {
  const [filtro, setFiltro] = useState<string | null>(null);
  const participantes = useMemo(() => getParticipantes(semanas), []);

  const semanaActual = semanas.find((s) => s.estado === "actual");
  const semanasPasadas = semanas.filter((s) => s.estado === "hecha");
  const semanasProximas = semanas.filter(
    (s) => s.estado === "propuesta" && (!semanaActual || s.numero > semanaActual.numero)
  );

  const diasActualFiltrados = semanaActual?.dias
    ? filtro
      ? semanaActual.dias.filter((d) => d.asignado === filtro)
      : semanaActual.dias
    : [];

  const hayProximasParaFiltro = semanasProximas.some((s) => s.dias?.some((d) => d.asignado === filtro));

  const semanasPasadasFiltradas = filtro
    ? semanasPasadas.filter((s) => s.dias?.some((d) => d.asignado === filtro))
    : semanasPasadas;

  return (
    <>
      <ParticipantesFilter participantes={participantes} filtro={filtro} onFiltroChange={setFiltro} />

      {semanaActual && (
        <div className="section-group">
          <p className="eyebrow section-heading">Esta semana</p>
          {filtro && diasActualFiltrados.length === 0 ? (
            <div className="pending-note">
              <strong>{filtro}</strong> no tiene devocionales asignados esta semana.
            </div>
          ) : (
            <WeekSection semana={semanaActual} filtro={filtro} />
          )}
        </div>
      )}

      {semanasProximas.length > 0 && (
        <div className="section-group">
          <p className="eyebrow section-heading">Próximas semanas</p>
          {filtro && !hayProximasParaFiltro && (
            <div className="pending-note">
              Todavía no hay devocionales de próximas semanas asignados a <strong>{filtro}</strong>.
            </div>
          )}
          {semanasProximas.map((semana) => (
            <WeekSection key={semana.numero} semana={semana} filtro={filtro} />
          ))}
        </div>
      )}

      {semanasPasadasFiltradas.length > 0 && (
        <details className="bank-group section-group" open={!!filtro} key={filtro ?? "todos"}>
          <summary>
            {filtro ? `Semanas pasadas de ${filtro}` : `Semanas pasadas (${semanasPasadas.length})`}
          </summary>
          <div className="pasadas-list">
            {semanasPasadasFiltradas.map((semana) => (
              <WeekSection key={semana.numero} semana={semana} filtro={filtro} />
            ))}
          </div>
        </details>
      )}
    </>
  );
}
