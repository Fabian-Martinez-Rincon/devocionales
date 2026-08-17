"use client";

import { ChevronLeft, ChevronRight, ListChecks } from "lucide-react";
import { useMemo, useState } from "react";
import { semanas } from "@/data/devocionales";
import { getParticipantes } from "@/lib/participantes";
import FiltroCard from "./FiltroCard";
import ParticipantesFilter from "./ParticipantesFilter";
import WeekSection from "./WeekSection";

export default function Cronograma() {
  const encontrada = semanas.findIndex((semana) => semana.estado === "actual");
  const [indice, setIndice] = useState(encontrada < 0 ? 0 : encontrada);
  const [filtro, setFiltro] = useState<string | null>(null);
  const participantes = useMemo(() => getParticipantes(semanas), []);
  const semana = semanas[indice];
  const semanasDelFiltro = filtro ? semanas.filter((s) => s.dias.some((dia) => dia.asignado === filtro)) : [];

  return (
    <>
      <ParticipantesFilter participantes={participantes} filtro={filtro} onFiltroChange={setFiltro} />

      {filtro ? (
        <div className="section-group">
          <div className="section-title section-heading">
            <span className="icon-badge">
              <ListChecks size={17} strokeWidth={2} />
            </span>
            <p className="eyebrow">
              Devocionales de {filtro} ({semanasDelFiltro.length})
            </p>
          </div>
          {semanasDelFiltro.length === 0 ? (
            <div className="pending-note">
              <strong>{filtro}</strong> todavía no tiene devocionales asignados.
            </div>
          ) : (
            <div className="filtro-grid">
              {semanasDelFiltro.map((s) => {
                const dia = s.dias.find((d) => d.asignado === filtro);
                return dia ? <FiltroCard key={s.numero} semana={s} dia={dia} /> : null;
              })}
            </div>
          )}
        </div>
      ) : (
        <>
          <nav className="week-pagination" aria-label="Navegación entre semanas">
            <button type="button" onClick={() => setIndice((valor) => valor - 1)} disabled={indice === 0}>
              <ChevronLeft size={16} strokeWidth={2.25} />
              <span>Anterior</span>
            </button>
            <button type="button" onClick={() => setIndice((valor) => valor + 1)} disabled={indice === semanas.length - 1}>
              <span>Siguiente</span>
              <ChevronRight size={16} strokeWidth={2.25} />
            </button>
          </nav>
          <WeekSection semana={semana} />
          <div className="week-dots" aria-label="Ir a una semana">
            {semanas.map((item, itemIndice) => (
              <button type="button" key={item.numero} className={itemIndice === indice ? "active" : ""}
                onClick={() => setIndice(itemIndice)} aria-label={`Ir a la semana ${item.numero}`}
                aria-current={itemIndice === indice ? "page" : undefined}>{item.numero}</button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
