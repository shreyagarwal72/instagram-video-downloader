"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// Root container: adds responsive padding/rounded for desktop+mobile
function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className="w-full max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-700"
      {...props}
    />
  )
}

// Item: spacing, interactive border animation for open items
function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b border-neutral-200 dark:border-neutral-700 transition-all duration-300 overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

// Trigger: modern button, hover/focus/active state, fluid spacing, icon animation
function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:ring-2 focus-visible:ring-blue-400 dark:focus-visible:ring-fuchsia-500 flex flex-1 items-center justify-between gap-4 rounded-lg px-6 py-5 text-lg font-semibold transition-all bg-transparent hover:bg-blue-50 dark:hover:bg-neutral-900/60 outline-none cursor-pointer select-none",
          "data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-neutral-900/60 shadow-xs",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <ChevronDownIcon
          className="text-blue-500 dark:text-fuchsia-400 pointer-events-none size-6 transition-transform duration-300"
          // Enhanced icon rotation on open/close
          data-slot="accordion-chevron"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

// Content: elegant animation, padding, fade-in for smoothness
function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-base text-neutral-700 dark:text-neutral-200 px-6 bg-white dark:bg-neutral-900 transition-all duration-300 ease-in-out",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="py-4">{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
