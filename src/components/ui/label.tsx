"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

// Upgraded label with larger font, spacing, and color accent
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-base font-semibold leading-tight select-none transition-colors duration-200 cursor-pointer",
        // Accent color for focus-within (input focused)
        "peer-focus:text-blue-600 dark:peer-focus:text-fuchsia-400",
        // Disabled and accessibility helpers
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        // For subtle appearance by default
        "text-neutral-700 dark:text-neutral-200",
        className
      )}
      {...props}
    />
  )
}

export { Label }
