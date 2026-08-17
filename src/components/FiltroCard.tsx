import { Dia, Semana } from "@/data/devocionales";
import { badgeClass, BADGE_LABEL, fechaCorta } from "@/lib/semana";

type Props = {
  semana: Semana;
  dia: Dia;
};

export default function FiltroCard({ semana, dia }: Props) {
  return (
    <div className="filtro-card">
      <div className="filtro-card-head">
        <span>Semana {semana.numero}</span>
        <span className={`badge ${badgeClass(semana.estado)}`}>{BADGE_LABEL[semana.estado]}</span>
      </div>
      <div className="filtro-card-date">
        {dia.dia} · {fechaCorta(dia.fecha)}
      </div>
      <div className="filtro-card-body">
        <span className="day-value parabola">{dia.parabola}</span>
        <span className="day-value versiculo">{dia.versiculo}</span>
      </div>
    </div>
  );
}
