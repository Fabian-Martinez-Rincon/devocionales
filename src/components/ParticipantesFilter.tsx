"use client";

import { Participante } from "@/lib/participantes";

type Props = { participantes: Participante[]; filtro: string | null; onFiltroChange: (nombre: string | null) => void };

export default function ParticipantesFilter({ participantes, filtro, onFiltroChange }: Props) {
  return (
    <section className="participantes">
      <h2 className="week-title">Participantes</h2>
      <p className="week-meta">Tocá un nombre para ver qué devocionales le toca preparar.</p>
      <div className="participantes-lista">
        <button type="button" className={`chip chip-button ${filtro === null ? "active" : ""}`} onClick={() => onFiltroChange(null)}>
          <strong>Todos</strong>
        </button>
        {participantes.map((participante) => (
          <button type="button" key={participante.nombre}
            className={`chip chip-button ${filtro === participante.nombre ? "active" : ""}`}
            onClick={() => onFiltroChange(filtro === participante.nombre ? null : participante.nombre)}>
            <strong>{participante.nombre}</strong>
            <span className="count-badge" title={`${participante.cantidad} devocionales`}>{participante.cantidad}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
