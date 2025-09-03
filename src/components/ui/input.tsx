import * as React from "react"
import { cn } from "@/lib/utils"

// Fluid, professional, and fully accessible input field
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Layout: full width, pleasant height and rounding
        "w-full h-12 px-4 py-3 rounded-xl border bg-white/90 dark:bg-neutral-900/70 text-base md:text-base font-medium shadow transition-all duration-150",
        // Placeholder, file input, selection colors
        "placeholder:text-neutral-400 dark:placeholder:text-neutral-500 file:text-foreground selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-fuchsia-600 dark:selection:text-neutral-100 file:inline-flex file:h-8 file:border-0 file:bg-transparent file:text-base file:font-medium",
        // Focus accent: brand border, strong shadow
        "focus:border-blue-500 focus:ring-2 focus:ring-blue-400/60 dark:focus:border-fuchsia-600 dark:focus:ring-fuchsia-700/40 focus:outline-none",
        // Error states
        "aria-invalid:border-red-600 aria-invalid:ring-red-300/40 dark:aria-invalid:border-red-400 dark:aria-invalid:ring-red-500/30",
        // Disabled
        "disabled:pointer-events-none disabled:opacity-50",
        // Smooth shadow and transition
        "shadow-xs hover:shadow-lg focus:shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export { Input }
