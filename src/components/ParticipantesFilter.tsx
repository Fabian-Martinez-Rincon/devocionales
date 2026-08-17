"use client";

import { Participante } from "@/lib/participantes";

type Props = {
  participantes: Participante[];
  filtro: string | null;
  onFiltroChange: (nombre: string | null) => void;
};

export default function ParticipantesFilter({ participantes, filtro, onFiltroChange }: Props) {
  if (participantes.length === 0) return null;

  return (
    <section className="participantes">
      <h2 className="week-title">Participantes</h2>
      <p className="week-meta">Tocá un nombre para ver qué devocionales le tocan preparar.</p>
      <div className="participantes-lista">
        <button
          type="button"
          className={`chip chip-button ${filtro === null ? "active" : ""}`}
          onClick={() => onFiltroChange(null)}
        >
          <strong>Todos</strong>
        </button>
        {participantes.map((p) => (
          <button
            type="button"
            key={p.nombre}
            className={`chip chip-button ${filtro === p.nombre ? "active" : ""}`}
            onClick={() => onFiltroChange(filtro === p.nombre ? null : p.nombre)}
          >
            <strong>{p.nombre}</strong>
            <span className="count-badge" title={`${p.cantidad} ${p.cantidad === 1 ? "devocional" : "devocionales"}`}>
              {p.cantidad}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
