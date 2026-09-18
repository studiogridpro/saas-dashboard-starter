"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
)

const STORAGE_KEY = "dashboard-theme"
const THEME_CHANGE_EVENT = "dashboard-theme-change"

function getThemeSnapshot(): Theme {
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light"
}

function getServerThemeSnapshot(): Theme {
  return "light"
}

function applyThemeToDocument(theme: Theme) {
  const root = document.documentElement

  root.classList.remove("light", "dark")
  root.classList.add(theme)
}

function subscribeToTheme(onStoreChange: () => void) {
  function handleThemeChange() {
    onStoreChange()
  }

  function handleStorageChange(event: StorageEvent) {
    if (event.key !== STORAGE_KEY) {
      return
    }

    const nextTheme: Theme =
      event.newValue === "dark" ? "dark" : "light"

    applyThemeToDocument(nextTheme)
    onStoreChange()
  }

  window.addEventListener(
    THEME_CHANGE_EVENT,
    handleThemeChange
  )

  window.addEventListener(
    "storage",
    handleStorageChange
  )

  return () => {
    window.removeEventListener(
      THEME_CHANGE_EVENT,
      handleThemeChange
    )

    window.removeEventListener(
      "storage",
      handleStorageChange
    )
  }
}

/**
 * ThemeProvider manages light/dark mode by toggling the `light` / `dark`
 * class on the <html> element and persisting the choice to localStorage.
 * A tiny inline script in layout.tsx applies the stored theme before
 * hydration to avoid a flash of the wrong theme.
 */
export function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = React.useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  )

  const setTheme = React.useCallback((next: Theme) => {
    applyThemeToDocument(next)

    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore storage write failures.
    }

    window.dispatchEvent(
      new Event(THEME_CHANGE_EVENT)
    )
  }, [])

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  const value = React.useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme, setTheme]
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error(
      "useTheme must be used within a ThemeProvider"
    )
  }

  return context
}