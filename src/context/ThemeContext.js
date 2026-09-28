import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext();

export const getAutoTheme = () => {
  const hour = new Date().getHours();
  // Morning / Daytime: 6:00 AM (06:00) to 5:59:59 PM (17:59) -> Bright (Light)
  // Evening / Night: 6:00 PM (18:00) to 5:59:59 AM (05:59) -> Dark
  return hour >= 6 && hour < 18 ? "light" : "dark";
};

export const ThemeProvider = ({ children }) => {
  // Mode can be: 'auto' | 'light' | 'dark'
  const [themeMode, setThemeModeState] = useState(() => {
    const saved = localStorage.getItem("defo_theme_mode");
    return saved === "light" || saved === "dark" || saved === "auto" ? saved : "auto";
  });

  const [currentTheme, setCurrentTheme] = useState(() => {
    if (themeMode === "auto") {
      return getAutoTheme();
    }
    return themeMode;
  });

  // Calculate if the real-world time is currently daytime
  const isDayTime = (() => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18;
  })();

  // Apply theme to DOM
  const applyThemeToDOM = useCallback((theme) => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
      if (document.body) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      }
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.setAttribute("data-theme", "light");
      if (document.body) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    }
  }, []);

  // Update theme whenever themeMode changes or when time changes in auto mode
  useEffect(() => {
    const active = themeMode === "auto" ? getAutoTheme() : themeMode;
    setCurrentTheme(active);
    applyThemeToDOM(active);

    // If auto mode, poll every 30 seconds to catch morning (06:00) and evening (18:00) boundaries
    if (themeMode === "auto") {
      const interval = setInterval(() => {
        const nextAuto = getAutoTheme();
        setCurrentTheme((prev) => {
          if (prev !== nextAuto) {
            applyThemeToDOM(nextAuto);
            return nextAuto;
          }
          return prev;
        });
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [themeMode, applyThemeToDOM]);

  const setThemeMode = (mode) => {
    setThemeModeState(mode);
    localStorage.setItem("defo_theme_mode", mode);
  };

  const toggleTheme = () => {
    // Quick toggle between light and dark
    const next = currentTheme === "dark" ? "light" : "dark";
    setThemeMode(next);
  };

  const cycleMode = () => {
    // Cycle between auto -> light -> dark -> auto
    if (themeMode === "auto") {
      setThemeMode("light");
    } else if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("auto");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        currentTheme,
        isAuto: themeMode === "auto",
        isDark: currentTheme === "dark",
        isLight: currentTheme === "light",
        isDayTime,
        setThemeMode,
        toggleTheme,
        cycleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
