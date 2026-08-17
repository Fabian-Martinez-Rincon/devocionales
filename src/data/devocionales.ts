export type EstadoSemana = "hecha" | "actual" | "propuesta";

export type Dia = {
  dia: string;
  parabola: string;
  versiculo: string;
  asignado: string | null;
};

export type Semana = {
  numero: number;
  meta: string;
  estado: EstadoSemana;
  notaPendiente?: string;
  dias?: Dia[];
};

export type BancoItem = {
  texto: string;
  referencia: string;
};

export type BancoGrupo = {
  titulo: string;
  items: BancoItem[];
};

export const serie = {
  eyebrow: "Devocionales · Lunes a Viernes",
  titulo: "Hombres de Valor",
  descripcion:
    'Cronograma de la serie "Las Parábolas" — grupo de WhatsApp. Un pasaje corto por día, con quién lo prepara.',
};

export const semanas: Semana[] = [
  {
    numero: 1,
    meta: "Ya pasada",
    estado: "hecha",
    notaPendiente:
      "Sin registrar acá. Si nos pasan qué parábolas vieron esta semana (y quién las presentó), se agregan con el mismo formato de las demás.",
  },
  {
    numero: 2,
    meta: "Ya pasada",
    estado: "hecha",
    notaPendiente: "Sin registrar acá. Mismo caso — pasen el detalle y se suma.",
  },
  {
    numero: 3,
    meta: "Las parábolas del Reino — Mateo 13",
    estado: "hecha",
    dias: [
      { dia: "Lunes", parabola: "El Sembrador", versiculo: "Mateo 13:3-9", asignado: "Rodri" },
      { dia: "Martes", parabola: "El Trigo y la Cizaña", versiculo: "Mateo 13:24-30", asignado: "Juan" },
      { dia: "Miércoles", parabola: "La Semilla de Mostaza", versiculo: "Mateo 13:31-32", asignado: "David" },
      { dia: "Jueves", parabola: "La Levadura", versiculo: "Mateo 13:33", asignado: "Salo" },
      { dia: "Viernes", parabola: "El Tesoro Escondido", versiculo: "Mateo 13:44", asignado: "Fabian" },
    ],
  },
  {
    numero: 4,
    meta: "Parábolas 11 a 15",
    estado: "actual",
    dias: [
      { dia: "Lunes", parabola: "La Moneda Perdida", versiculo: "Lucas 15:8-10", asignado: null },
      { dia: "Martes", parabola: "El Deudor que no perdonó", versiculo: "Mateo 18:21-35", asignado: null },
      { dia: "Miércoles", parabola: "El Fariseo y el Publicano", versiculo: "Lucas 18:9-14", asignado: null },
      { dia: "Jueves", parabola: "Las Diez Vírgenes", versiculo: "Mateo 25:1-13", asignado: null },
      { dia: "Viernes", parabola: "Los Talentos", versiculo: "Mateo 25:14-30", asignado: null },
    ],
  },
  {
    numero: 5,
    meta: "Por definir",
    estado: "propuesta",
    notaPendiente:
      "Todavía no tenemos la lista de parábolas para esta semana. Cuando la compartan, se agrega con el mismo formato de las demás.",
  },
  {
    numero: 6,
    meta: "Por definir",
    estado: "propuesta",
    notaPendiente:
      "Todavía no tenemos la lista de parábolas para esta semana. Cuando la compartan, se agrega con el mismo formato de las demás.",
  },
  {
    numero: 7,
    meta: "Por definir",
    estado: "propuesta",
    notaPendiente:
      "Todavía no tenemos la lista de parábolas para esta semana. Cuando la compartan, se agrega con el mismo formato de las demás.",
  },
  {
    numero: 8,
    meta: "Por definir",
    estado: "propuesta",
    notaPendiente:
      "Todavía no tenemos la lista de parábolas para esta semana. Cuando la compartan, se agrega con el mismo formato de las demás.",
  },
];

export const banco: BancoGrupo[] = [
  {
    titulo: "Parábolas principales sin usar (8)",
    items: [
      { texto: "Los Dos Cimientos: la Roca y la Arena", referencia: "Mateo 7:24-27; Lucas 6:46-49" },
      {
        texto: "El Remiendo Nuevo y los Odres Viejos",
        referencia: "Mateo 9:16-17; Marcos 2:21-22; Lucas 5:36-39",
      },
      { texto: "El Hombre Fuerte", referencia: "Mateo 12:29; Marcos 3:27; Lucas 11:21-22" },
      { texto: "Los Dos Deudores", referencia: "Lucas 7:41-43" },
      {
        texto: "La Lámpara Debajo del Almud",
        referencia: "Mateo 5:14-16; Marcos 4:21-25; Lucas 8:16-18; 11:33-36",
      },
      { texto: "El Crecimiento de la Semilla", referencia: "Marcos 4:26-29" },
      { texto: "Los Primeros Lugares en las Bodas", referencia: "Lucas 14:7-11" },
      { texto: "Los Siervos Inútiles", referencia: "Lucas 17:7-10" },
    ],
  },
  {
    titulo: "Otras comparaciones parabólicas (8)",
    items: [
      {
        texto: "El Esposo y los Invitados a la Boda",
        referencia: "Mateo 9:14-15; Marcos 2:18-20; Lucas 5:33-35",
      },
      { texto: "Los Muchachos que Juegan en la Plaza", referencia: "Mateo 11:16-19; Lucas 7:31-35" },
      { texto: "El Espíritu Inmundo que Regresa", referencia: "Mateo 12:43-45; Lucas 11:24-26" },
      { texto: "El Árbol Conocido por sus Frutos", referencia: "Mateo 7:16-20; 12:33-37; Lucas 6:43-45" },
      { texto: "El Ciego que Guía a Otro Ciego", referencia: "Mateo 15:14; Lucas 6:39-40" },
      { texto: "La Paja y la Viga en el Ojo", referencia: "Mateo 7:3-5; Lucas 6:41-42" },
      { texto: "El Adversario Camino al Juez", referencia: "Mateo 5:25-26; Lucas 12:57-59" },
      {
        texto: "La Puerta Estrecha y el Dueño que Cierra la Puerta",
        referencia: "Mateo 7:13-14; Lucas 13:24-30",
      },
    ],
  },
  {
    titulo: "Figuras y alegorías en Juan (3)",
    items: [
      { texto: "La Puerta de las Ovejas y el Buen Pastor", referencia: "Juan 10:1-18" },
      { texto: "La Vid Verdadera y los Pámpanos", referencia: "Juan 15:1-8" },
      { texto: "La Mujer que Da a Luz", referencia: "Juan 16:21-22" },
    ],
  },
];

export const notaFinal =
  'Semana 4 en adelante todavía no tiene "quién presenta" definido. Avisen quién va preparando cada devocional y se actualiza.';
