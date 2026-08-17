import { banco, semanas } from "@/data/devocionales";

export default function BankSection() {
  return (
    <section className="bank">
      <h2 className="week-title" style={{ marginBottom: 6 }}>
        Banco de reserva
      </h2>
      <p className="week-meta" style={{ marginBottom: 16 }}>
        Parábolas que no entraron en las {semanas.length} semanas — para estirar la serie o reemplazar
        alguna. Tocá para desplegar.
      </p>

      {banco.map((grupo) => (
        <details className="bank-group" key={grupo.titulo}>
          <summary>{grupo.titulo}</summary>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Parábola</th>
                  <th>Versículo</th>
                </tr>
              </thead>
              <tbody>
                {grupo.items.map((item) => (
                  <tr key={item.texto}>
                    <td className="parabola">{item.texto}</td>
                    <td className="versiculo">{item.referencia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      ))}
    </section>
  );
}
