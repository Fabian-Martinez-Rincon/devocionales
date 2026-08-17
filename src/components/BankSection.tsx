import { banco, semanas } from "@/data/devocionales";

export default function BankSection() {
  return (
    <section className="bank">
      <h2 className="week-title" style={{ marginBottom: 6 }}>Lista completa</h2>
      <p className="week-meta" style={{ marginBottom: 16 }}>
        Las 49 enseñanzas incluidas en las {semanas.length} semanas del cronograma. Tocá cada grupo para desplegarlo.
      </p>
      {banco.map((grupo) => (
        <details className="bank-group" key={grupo.titulo}>
          <summary>{grupo.titulo}</summary>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Parábola</th><th>Versículos</th></tr></thead>
              <tbody>{grupo.items.map((item) => (
                <tr key={item.texto}><td className="parabola">{item.texto}</td><td className="versiculo">{item.referencia}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </details>
      ))}
    </section>
  );
}
