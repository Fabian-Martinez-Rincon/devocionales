"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "hdv-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function alternar() {
    const siguiente = theme === "dark" ? "light" : "dark";
    setTheme(siguiente);
    if (siguiente === "dark") {
      document.documentElement.dataset.theme = "dark";
    } else {
      delete document.documentElement.dataset.theme;
    }
    localStorage.setItem(STORAGE_KEY, siguiente);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={alternar}
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {theme === "dark" ? <Sun size={16} strokeWidth={2.25} /> : <Moon size={16} strokeWidth={2.25} />}
    </button>
  );
}
