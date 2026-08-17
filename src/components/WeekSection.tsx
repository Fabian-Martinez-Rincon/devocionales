import { Semana } from "@/data/devocionales";

const BADGE_LABEL: Record<Semana["estado"], string> = {
  hecha: "Hecha",
  actual: "Actual",
  propuesta: "Propuesta",
};

const BADGE_CLASS: Record<Semana["estado"], string> = {
  hecha: "done",
  actual: "now",
  propuesta: "pending",
};

type Props = {
  semana: Semana;
  filtro?: string | null;
};

export default function WeekSection({ semana, filtro }: Props) {
  const dias = filtro ? semana.dias?.filter((d) => d.asignado === filtro) : semana.dias;

  if (filtro && (!dias || dias.length === 0)) return null;

  return (
    <section className={`week ${semana.estado === "actual" ? "now" : ""}`} id={`semana-${semana.numero}`}>
      <div className="week-head">
        <div>
          <h2 className="week-title">Semana {semana.numero}</h2>
          <p className="week-meta">{semana.meta}</p>
        </div>
        <span className={`badge ${BADGE_CLASS[semana.estado]}`}>{BADGE_LABEL[semana.estado]}</span>
      </div>

      {dias ? (
        <div className="week-days">
          {dias.map((d) => (
            <div className="day-card" key={d.dia}>
              <div className="day-card-head">{d.dia}</div>
              <div className="day-card-body">
                <div className="day-field">
                  <span className="day-label">Parábola</span>
                  <span className="day-value parabola">{d.parabola}</span>
                </div>
                <div className="day-field">
                  <span className="day-label">Versículo</span>
                  <span className="day-value versiculo">{d.versiculo}</span>
                </div>
                <div className="day-field">
                  <span className="day-label">Asignado</span>
                  <span className={`day-value asignado ${d.asignado ? "" : "tbd"}`}>
                    {d.asignado ?? "A definir"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        semana.notaPendiente && (
          <div className="pending-note">
            <strong>Sin registrar acá.</strong> {semana.notaPendiente.replace(/^Sin registrar acá\.\s*/, "")}
          </div>
        )
      )}
    </section>
  );
}
