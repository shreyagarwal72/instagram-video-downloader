import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Better gradients, polish, and interaction
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 dark:focus-visible:ring-fuchsia-500/60 disabled:pointer-events-none disabled:opacity-50 select-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white hover:scale-[1.035] hover:shadow-xl hover:from-blue-700 hover:to-fuchsia-700 focus-visible:from-blue-700 focus-visible:to-fuchsia-700",
        destructive:
          "bg-gradient-to-r from-red-600 to-pink-600 text-white hover:scale-[1.03] hover:shadow-lg hover:from-red-700 hover:to-pink-700 focus-visible:ring-red-400/70",
        outline:
          "border-2 border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/40 hover:scale-105",
        secondary:
          "bg-gradient-to-r from-neutral-200 to-neutral-400 dark:from-neutral-800 dark:to-neutral-700 text-neutral-900 dark:text-neutral-100 hover:scale-105 shadow-none",
        ghost:
          "bg-transparent hover:bg-blue-50 dark:hover:bg-neutral-800/70 text-blue-600 dark:text-fuchsia-400 hover:scale-105",
        link: "text-blue-600 dark:text-fuchsia-400 underline underline-offset-4 hover:opacity-80",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-base",
        sm: "h-9 rounded-full px-4 py-1.5 text-sm",
        lg: "h-14 rounded-full px-8 py-3 text-lg",
        icon: "size-11",
      },
      rounded: {
        full: "rounded-full",
        md: "rounded-xl",
        none: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "full",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  rounded,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants, type ButtonProps };
