import { Shield } from "lucide-react";
import { semanas, serie } from "@/data/devocionales";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const total = semanas.length;
  const actualIndex = semanas.findIndex((s) => s.estado === "actual");
  const hechas = semanas.filter((s) => s.estado === "hecha").length;
  const numeroActual = actualIndex >= 0 ? actualIndex + 1 : hechas;
  const progresoPct = Math.round((numeroActual / total) * 1000) / 10;

  return (
    <header className="hero">
      <div className="hero-top">
        <div className="hero-top-left">
          <span className="hero-icon">
            <Shield size={17} strokeWidth={2} />
          </span>
          <p className="eyebrow">{serie.eyebrow}</p>
        </div>
        <ThemeToggle />
      </div>
      <h1>{serie.titulo}</h1>
      <p className="dek">{serie.descripcion}</p>
      <div className="progress">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progresoPct}%` }} />
        </div>
        <div className="progress-label">
          Semana {numeroActual} de {total}
        </div>
      </div>
    </header>
  );
}
