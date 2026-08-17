import { HeartHandshake } from "lucide-react";
import { notaFinal } from "@/data/devocionales";

export default function Footer() {
  return (
    <footer>
      <span className="icon-badge footer-icon">
        <HeartHandshake size={16} strokeWidth={2} />
      </span>
      <p>{notaFinal}</p>
    </footer>
  );
}
