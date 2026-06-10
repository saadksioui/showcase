import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex items-center justify-center rounded-2xl border border-transparent text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90",
        outline:
          "border-white/10 bg-white/5 text-foreground hover:bg-white/10 hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm shadow-secondary/20 hover:bg-secondary/90",
        ghost:
          "bg-transparent text-foreground hover:bg-white/10",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 gap-2 px-5",
        xs: "h-8 gap-1 rounded-xl px-3 text-xs",
        sm: "h-9 gap-2 rounded-xl px-4 text-sm",
        lg: "h-12 gap-2 px-6 text-base",
        icon: "h-10 w-10 rounded-full p-0",
        "icon-xs": "h-8 w-8 rounded-full p-0",
        "icon-sm": "h-9 w-9 rounded-full p-0",
        "icon-lg": "h-12 w-12 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
