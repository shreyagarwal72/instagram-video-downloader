"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-right" // Or "bottom-right" for mobile-friendliness
      expand={true} // Toasts expand for better desktop display
      closeButton={true} // Big, clear close button
      richColors={true} // Enables accent colors for different toast types
      className="group z-50"
      style={{
        "--normal-bg": "var(--popover, #fff)",
        "--normal-text": "var(--popover-foreground, #111)",
        "--normal-border": "var(--border, #ccc)",
        // Enhanced custom accent for animation and shadow
        "--toaster-shadow": "0 8px 32px 0 rgba(36, 44, 54, 0.16)",
        "--toaster-radius": "1rem",
      } as React.CSSProperties}
      toastOptions={{
        style: {
          borderRadius: "1rem",
          boxShadow: "0 6px 24px rgba(36,44,54,0.14)",
          fontSize: "1rem",
          fontWeight: 500,
          padding: "1.2rem 1.4rem",
          color: "var(--normal-text)",
          background: "var(--normal-bg)",
          border: "1px solid var(--normal-border)"
        },
        className: "animate-fade-in-up transition-all duration-300"
      }}
      {...props}
    />
  )
}

export { Toaster }
