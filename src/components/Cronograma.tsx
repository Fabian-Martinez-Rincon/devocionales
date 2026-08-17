"use client";

import { useMemo, useState } from "react";
import { semanas } from "@/data/devocionales";
import { getParticipantes } from "@/lib/participantes";
import ParticipantesFilter from "./ParticipantesFilter";
import WeekSection from "./WeekSection";

export default function Cronograma() {
  const encontrada = semanas.findIndex((semana) => semana.estado === "actual");
  const [indice, setIndice] = useState(encontrada < 0 ? 0 : encontrada);
  const [filtro, setFiltro] = useState<string | null>(null);
  const participantes = useMemo(() => getParticipantes(semanas), []);
  const semana = semanas[indice];

  return (
    <>
      <ParticipantesFilter participantes={participantes} filtro={filtro} onFiltroChange={setFiltro} />
      <nav className="week-pagination" aria-label="Navegación entre semanas">
        <button type="button" onClick={() => setIndice((valor) => valor - 1)} disabled={indice === 0}>← Anterior</button>
        <div className="pagination-position"><strong>Semana {semana.numero}</strong><span>{semana.meta}</span></div>
        <button type="button" onClick={() => setIndice((valor) => valor + 1)} disabled={indice === semanas.length - 1}>Siguiente →</button>
      </nav>
      {filtro && !semana.dias.some((dia) => dia.asignado === filtro) ? (
        <div className="pending-note"><strong>{filtro}</strong> no tiene un devocional asignado en esta semana.</div>
      ) : <WeekSection semana={semana} filtro={filtro} />}
      <div className="week-dots" aria-label="Ir a una semana">
        {semanas.map((item, itemIndice) => (
          <button type="button" key={item.numero} className={itemIndice === indice ? "active" : ""}
            onClick={() => setIndice(itemIndice)} aria-label={`Ir a la semana ${item.numero}`}
            aria-current={itemIndice === indice ? "page" : undefined}>{item.numero}</button>
        ))}
      </div>
    </>
  );
}
