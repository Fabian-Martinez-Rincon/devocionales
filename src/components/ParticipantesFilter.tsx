"use client";

import { Users } from "lucide-react";
import { Participante } from "@/lib/participantes";

type Props = { participantes: Participante[]; filtro: string | null; onFiltroChange: (nombre: string | null) => void };

export default function ParticipantesFilter({ participantes, filtro, onFiltroChange }: Props) {
  return (
    <section className="participantes">
      <div className="section-title">
        <span className="icon-badge">
          <Users size={17} strokeWidth={2} />
        </span>
        <h2 className="week-title">Participantes</h2>
      </div>
      <p className="week-meta">Tocá un nombre para ver qué devocionales le toca preparar.</p>
      <div className="participantes-lista">
        <button type="button" className={`chip chip-button ${filtro === null ? "active" : ""}`} onClick={() => onFiltroChange(null)}>
          <strong>Todos</strong>
        </button>
        {participantes.map((participante) => (
          <button type="button" key={participante.nombre}
            className={`chip chip-button ${filtro === participante.nombre ? "active" : ""}`}
            onClick={() => onFiltroChange(filtro === participante.nombre ? null : participante.nombre)}>
            <span className="chip-avatar">{participante.nombre.charAt(0)}</span>
            <strong>{participante.nombre}</strong>
            <span className="count-badge" title={`${participante.cantidad} devocionales`}>{participante.cantidad}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
