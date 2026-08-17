export type EstadoSemana = "hecha" | "actual" | "propuesta";
export type Dia = { dia: string; fecha: string; parabola: string; versiculo: string; asignado: string };
export type Semana = { numero: number; meta: string; estado: EstadoSemana; dias: Dia[] };
export type BancoItem = { texto: string; referencia: string };
export type BancoGrupo = { titulo: string; items: BancoItem[] };

export const serie = {
  eyebrow: "Devocionales · Lunes a viernes",
  titulo: "Hombres de Valor",
  descripcion: 'Cronograma de la serie "Las Parábolas" — un pasaje por día, con fechas y responsables definidos.',
};

export const versiculoDestacado = {
  texto: "Tomad el yelmo de la salvación, y la espada del Espíritu, que es la palabra de Dios.",
  referencia: "Efesios 6:17",
};

const principales: BancoItem[] = [
  { texto: "Los dos cimientos: la roca y la arena", referencia: "Mateo 7:24-27; Lucas 6:46-49" },
  { texto: "El remiendo nuevo y los odres viejos", referencia: "Mateo 9:16-17; Marcos 2:21-22; Lucas 5:36-39" },
  { texto: "El hombre fuerte", referencia: "Mateo 12:29; Marcos 3:27; Lucas 11:21-22" },
  { texto: "Los dos deudores", referencia: "Lucas 7:41-43" },
  { texto: "El sembrador", referencia: "Mateo 13:1-23; Marcos 4:1-20; Lucas 8:4-15" },
  { texto: "La lámpara debajo del almud", referencia: "Mateo 5:14-16; Marcos 4:21-25; Lucas 8:16-18; 11:33-36" },
  { texto: "El crecimiento de la semilla", referencia: "Marcos 4:26-29" },
  { texto: "El trigo y la cizaña", referencia: "Mateo 13:24-30; 13:36-43" },
  { texto: "El buen samaritano", referencia: "Lucas 10:25-37" },
  { texto: "El amigo a medianoche", referencia: "Lucas 11:5-8" },
  { texto: "El rico insensato", referencia: "Lucas 12:13-21" },
  { texto: "La higuera estéril", referencia: "Lucas 13:6-9" },
  { texto: "El grano de mostaza", referencia: "Mateo 13:31-32; Marcos 4:30-32; Lucas 13:18-19" },
  { texto: "La levadura", referencia: "Mateo 13:33; Lucas 13:20-21" },
  { texto: "El tesoro escondido", referencia: "Mateo 13:44" },
  { texto: "La perla de gran precio", referencia: "Mateo 13:45-46" },
  { texto: "La red", referencia: "Mateo 13:47-50" },
  { texto: "El padre de familia que saca cosas nuevas y viejas", referencia: "Mateo 13:51-52" },
  { texto: "Los primeros lugares en las bodas", referencia: "Lucas 14:7-11" },
  { texto: "El constructor de la torre y el rey que va a la guerra", referencia: "Lucas 14:28-33" },
  { texto: "La oveja perdida", referencia: "Mateo 18:12-14; Lucas 15:3-7" },
  { texto: "El siervo que no quiso perdonar", referencia: "Mateo 18:21-35" },
  { texto: "La moneda perdida", referencia: "Lucas 15:8-10" },
  { texto: "El hijo pródigo", referencia: "Lucas 15:11-32" },
  { texto: "El mayordomo injusto", referencia: "Lucas 16:1-13" },
  { texto: "El rico y Lázaro", referencia: "Lucas 16:19-31" },
  { texto: "Los siervos inútiles", referencia: "Lucas 17:7-10" },
  { texto: "La viuda persistente y el juez injusto", referencia: "Lucas 18:1-8" },
  { texto: "El fariseo y el publicano", referencia: "Lucas 18:9-14" },
  { texto: "Los obreros de la viña", referencia: "Mateo 20:1-16" },
  { texto: "Los dos hijos", referencia: "Mateo 21:28-32" },
  { texto: "Los labradores malvados", referencia: "Mateo 21:33-46; Marcos 12:1-12; Lucas 20:9-19" },
  { texto: "El banquete de bodas y la gran cena", referencia: "Mateo 22:1-14; Lucas 14:15-24" },
  { texto: "La higuera que reverdece", referencia: "Mateo 24:32-35; Marcos 13:28-31; Lucas 21:29-33" },
  { texto: "Los siervos vigilantes y el mayordomo fiel", referencia: "Mateo 24:42-51; Marcos 13:34-37; Lucas 12:35-48" },
  { texto: "Las diez vírgenes", referencia: "Mateo 25:1-13" },
  { texto: "Los talentos y las diez minas", referencia: "Mateo 25:14-30; Lucas 19:11-27" },
  { texto: "Las ovejas y los cabritos", referencia: "Mateo 25:31-46" },
];

const comparaciones: BancoItem[] = [
  { texto: "El esposo y los invitados a la boda", referencia: "Mateo 9:14-15; Marcos 2:18-20; Lucas 5:33-35" },
  { texto: "Los muchachos que juegan en la plaza", referencia: "Mateo 11:16-19; Lucas 7:31-35" },
  { texto: "El espíritu inmundo que regresa", referencia: "Mateo 12:43-45; Lucas 11:24-26" },
  { texto: "El árbol conocido por sus frutos", referencia: "Mateo 7:16-20; 12:33-37; Lucas 6:43-45" },
  { texto: "El ciego que guía a otro ciego", referencia: "Mateo 15:14; Lucas 6:39-40" },
  { texto: "La paja y la viga en el ojo", referencia: "Mateo 7:3-5; Lucas 6:41-42" },
  { texto: "El adversario camino al juez", referencia: "Mateo 5:25-26; Lucas 12:57-59" },
  { texto: "La puerta estrecha y el dueño que cierra la puerta", referencia: "Mateo 7:13-14; Lucas 13:24-30" },
];

const juan: BancoItem[] = [
  { texto: "La puerta de las ovejas y el buen pastor", referencia: "Juan 10:1-18" },
  { texto: "La vid verdadera y los pámpanos", referencia: "Juan 15:1-8" },
  { texto: "La mujer que da a luz", referencia: "Juan 16:21-22" },
];

export const banco: BancoGrupo[] = [
  { titulo: "38 parábolas principales", items: principales },
  { titulo: "8 comparaciones parabólicas", items: comparaciones },
  { titulo: "3 figuras y alegorías en Juan", items: juan },
];

const devocionales = [...principales, ...comparaciones, ...juan];
const responsables = ["Fabian", "Juan", "David", "Salomon", "Rodri"];
const nombresDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const INICIO = new Date(2026, 7, 17);

function fechaDesdeInicio(indice: number) {
  const fecha = new Date(INICIO);
  fecha.setDate(INICIO.getDate() + Math.floor(indice / 5) * 7 + (indice % 5));
  return fecha;
}

function fechaISO(fecha: Date) {
  return `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, "0")}-${String(fecha.getDate()).padStart(2, "0")}`;
}

function estadoDeSemana(inicio: Date, fin: Date): EstadoSemana {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  if (hoy < inicio) return "propuesta";
  if (hoy > fin) return "hecha";
  return "actual";
}

export const semanas: Semana[] = Array.from({ length: Math.ceil(devocionales.length / 5) }, (_, indiceSemana) => {
  const items = devocionales.slice(indiceSemana * 5, indiceSemana * 5 + 5);
  const dias = items.map((item, indiceDia) => {
    const indice = indiceSemana * 5 + indiceDia;
    return {
      dia: nombresDias[indiceDia], fecha: fechaISO(fechaDesdeInicio(indice)),
      parabola: item.texto, versiculo: item.referencia, asignado: responsables[indiceDia],
    };
  });
  const inicio = fechaDesdeInicio(indiceSemana * 5);
  const fin = fechaDesdeInicio(indiceSemana * 5 + items.length - 1);
  const formato = new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long" });
  return {
    numero: indiceSemana + 1,
    meta: `${formato.format(inicio)} al ${formato.format(fin)} de 2026`,
    estado: estadoDeSemana(inicio, fin), dias,
  };
});

export const notaFinal = "Cronograma completo: 49 enseñanzas del 17 de agosto al 23 de octubre de 2026.";
