import { Semana } from "@/data/devocionales";

const BADGE_LABEL: Record<Semana["estado"], string> = { hecha: "Finalizada", actual: "Esta semana", propuesta: "Próxima" };
type Props = { semana: Semana; filtro?: string | null };

function fechaCorta(fecha: string) {
  return new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "short", timeZone: "UTC" })
    .format(new Date(`${fecha}T00:00:00Z`)).replace(".", "");
}

export default function WeekSection({ semana, filtro }: Props) {
  const dias = filtro ? semana.dias.filter((dia) => dia.asignado === filtro) : semana.dias;
  return (
    <section className={`week ${semana.estado === "actual" ? "now" : ""}`} id={`semana-${semana.numero}`}>
      <div className="week-head"><div><h2 className="week-title">Semana {semana.numero}</h2><p className="week-meta">{semana.meta}</p></div>
        <span className={`badge ${semana.estado === "actual" ? "now" : semana.estado === "hecha" ? "done" : "pending"}`}>{BADGE_LABEL[semana.estado]}</span></div>
      <div className="week-days">{dias.map((dia) => (
        <article className="day-card" key={dia.fecha}>
          <div className="day-card-head"><span>{dia.dia}</span><time dateTime={dia.fecha}>{fechaCorta(dia.fecha)}</time></div>
          <div className="day-card-body">
            <div className="day-field"><span className="day-label">Parábola</span><span className="day-value parabola">{dia.parabola}</span></div>
            <div className="day-field"><span className="day-label">Versículos</span><span className="day-value versiculo">{dia.versiculo}</span></div>
            <div className="day-field"><span className="day-label">Responsable</span><span className="day-value asignado">{dia.asignado}</span></div>
          </div>
        </article>
      ))}</div>
    </section>
  );
}
