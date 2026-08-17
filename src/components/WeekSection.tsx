import { Semana } from "@/data/devocionales";
import { construirMensajeSemana } from "@/lib/mensaje";
import { badgeClass, BADGE_LABEL, fechaCorta } from "@/lib/semana";
import CopyButton from "./CopyButton";

export default function WeekSection({ semana }: { semana: Semana }) {
  return (
    <section className={`week ${semana.estado === "actual" ? "now" : ""}`} id={`semana-${semana.numero}`}>
      <div className="week-head">
        <div>
          <h2 className="week-title">Semana {semana.numero}</h2>
          <p className="week-meta">{semana.meta}</p>
        </div>
        <span className={`badge ${badgeClass(semana.estado)}`}>{BADGE_LABEL[semana.estado]}</span>
      </div>
      <div className="week-actions">
        <CopyButton text={construirMensajeSemana(semana)} />
      </div>
      <div className="week-days">
        {semana.dias.map((dia) => (
          <article className="day-card" key={dia.fecha}>
            <div className="day-card-head">
              <span>{dia.dia}</span>
              <time dateTime={dia.fecha}>{fechaCorta(dia.fecha)}</time>
            </div>
            <div className="day-card-body">
              <div className="day-field">
                <span className="day-label">Parábola</span>
                <span className="day-value parabola">{dia.parabola}</span>
              </div>
              <div className="day-field">
                <span className="day-label">Versículos</span>
                <span className="day-value versiculo">{dia.versiculo}</span>
              </div>
              <div className="day-field">
                <span className="day-label">Responsable</span>
                <span className="day-value asignado">{dia.asignado}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
