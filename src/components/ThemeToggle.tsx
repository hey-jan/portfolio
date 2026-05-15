"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-accent/50 animate-pulse" />
    );
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="flex items-center gap-1 bg-accent p-1 rounded-xl border border-border">
      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.name;
        
        return (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`
              relative flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200
              ${isActive 
                ? "bg-card text-text-primary shadow-sm border border-border" 
                : "text-text-secondary hover:text-text-primary hover:bg-card/50"
              }
            `}
            title={`${t.label} Mode`}
            aria-label={`Switch to ${t.label} mode`}
          >
            <Icon size={18} strokeWidth={2.5} />
            {isActive && (
              <span className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-text-primary" />
            )}
          </button>
        );
      })}
    </div>
  );
}
