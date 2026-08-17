"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(text);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    } catch {
      // clipboard no disponible; no hacemos nada
    }
  }

  return (
    <button type="button" className={`copy-button ${copiado ? "copiado" : ""}`} onClick={copiar}>
      {copiado ? <Check size={15} strokeWidth={2.5} /> : <Copy size={15} strokeWidth={2} />}
      <span>{copiado ? "Copiado" : "Copiar para el grupo"}</span>
    </button>
  );
}
