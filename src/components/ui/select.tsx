"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// Main Select wrapper (no UI, just for structure)
function Select(props: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

// Select Group structure
function SelectGroup(props: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

// The value area
function SelectValue(props: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

// Trigger: large, animated, brand accent, desktop perfect
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // Core style: pill, bold, border, shadow
        "flex items-center justify-between w-full gap-3 px-5 py-3 rounded-full border text-base font-semibold shadow transition-all bg-white dark:bg-neutral-900 ring-0 hover:border-blue-400 dark:hover:border-fuchsia-400 focus-visible:ring-2 focus-visible:ring-blue-400/80 dark:focus-visible:ring-fuchsia-500/60 select-none outline-none",
        // Text and placeholder styling
        "text-neutral-700 dark:text-neutral-100 data-[placeholder]:text-neutral-400",
        // Size options
        size === "sm" ? "py-2 px-4 text-sm" : "py-3 px-5 text-base",
        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-5 opacity-60 transition-transform duration-300" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

// The dropdown content: popper, brand accents, glassy shadow, animation
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & { position?: "popper" | "item-aligned" }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "z-50 min-w-[10rem] rounded-2xl border bg-white/95 dark:bg-neutral-900/95 text-neutral-800 dark:text-neutral-200 shadow-xl overflow-y-auto transition-all",
          // Pop-in animation & slide
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          // Border and focus accent
          "border-neutral-200 dark:border-neutral-800",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

// Dropdown group label: subtle, stylish
function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-3 py-1.5 text-xs text-neutral-400 font-medium select-none", className)}
      {...props}
    />
  )
}

// Dropdown item: brand focus, smooth highlight, fluid row
function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-pointer items-center gap-2 rounded-xl py-2 px-4 text-base font-medium outline-none select-none transition-all",
        // Brand accent on focus
        "focus:bg-blue-50 dark:focus:bg-fuchsia-950/50 focus:text-blue-600 dark:focus:text-fuchsia-400",
        // Disabled
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {/* Check on selected item */}
      <span className="absolute right-3 flex items-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-5 text-blue-600 dark:text-fuchsia-400" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

// List separator: clean, minimal
function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("my-2 h-px w-full bg-neutral-200 dark:bg-neutral-800", className)}
      {...props}
    />
  )
}

// Scroll up button for long lists
function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn("flex items-center justify-center py-1", className)}
      {...props}
    >
      <ChevronUpIcon className="size-4 opacity-50" />
    </SelectPrimitive.ScrollUpButton>
  )
}

// Scroll down button for long lists
function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("flex items-center justify-center py-1", className)}
      {...props}
    >
      <ChevronDownIcon className="size-4 opacity-50" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
