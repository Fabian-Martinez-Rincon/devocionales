"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type Tema = "light" | "dark";

const STORAGE_KEY = "hdv-theme";
const listeners = new Set<() => void>();

function getSnapshot(): Tema {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerSnapshot(): Tema {
  return "light";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function aplicarTema(tema: Tema) {
  if (tema === "dark") {
    document.documentElement.dataset.theme = "dark";
  } else {
    delete document.documentElement.dataset.theme;
  }
  localStorage.setItem(STORAGE_KEY, tema);
  listeners.forEach((listener) => listener());
}

export default function ThemeToggle() {
  const tema = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => aplicarTema(tema === "dark" ? "light" : "dark")}
      aria-label={tema === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {tema === "dark" ? <Sun size={16} strokeWidth={2.25} /> : <Moon size={16} strokeWidth={2.25} />}
    </button>
  );
}
