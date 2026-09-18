import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap outline-none select-none transition-[background-color,border-color,color] duration-150 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/92 aria-expanded:bg-primary/92",

        secondary:
          "border-border bg-transparent text-foreground hover:bg-foreground/[0.035] aria-expanded:bg-foreground/[0.045]",

        outline:
          "border-border bg-transparent text-foreground hover:border-foreground/25 hover:bg-foreground/[0.025] aria-expanded:bg-foreground/[0.035]",

        ghost:
          "bg-transparent text-foreground hover:bg-foreground/[0.035] aria-expanded:bg-foreground/[0.045]",

        muted:
          "border-border/80 bg-transparent text-muted-foreground hover:border-border hover:bg-foreground/[0.025] hover:text-foreground aria-expanded:bg-foreground/[0.035]",

        destructive:
          "border-destructive/30 bg-transparent text-destructive hover:bg-destructive/[0.06] focus-visible:border-destructive/50 focus-visible:ring-destructive/20 dark:border-destructive/40 dark:hover:bg-destructive/[0.1] dark:focus-visible:ring-destructive/40",

        success:
          "border-emerald-500/30 bg-transparent text-emerald-700 hover:bg-emerald-500/[0.06] dark:border-emerald-400/30 dark:text-emerald-300 dark:hover:bg-emerald-400/[0.08]",

        link: "h-auto rounded-none border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline focus-visible:ring-0",
      },

      size: {
        default:
          "h-9 px-3.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",

        xs: "h-7 gap-1.5 rounded-md px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",

        sm: "h-8 gap-1.5 rounded-md px-3 text-[0.8rem] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",

        lg: "h-10 gap-2 rounded-md px-4 text-sm has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",

        xl: "h-11 gap-2 rounded-lg px-5 text-sm has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",

        icon: "size-9 rounded-md",

        "icon-xs": "size-7 rounded-md [&_svg:not([class*='size-'])]:size-3",

        "icon-sm": "size-8 rounded-md [&_svg:not([class*='size-'])]:size-3.5",

        "icon-lg": "size-10 rounded-md [&_svg:not([class*='size-'])]:size-4.5",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
