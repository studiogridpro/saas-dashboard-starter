import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5.5 w-fit shrink-0 select-none items-center justify-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium leading-none tracking-[0.01em] whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/35 disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive/40 aria-invalid:text-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.14)] [a&]:hover:bg-primary/90",

        secondary:
          "border-border/60 bg-secondary/70 text-secondary-foreground [a&]:hover:bg-secondary",

        outline:
          "border-border bg-background/70 text-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] [a&]:hover:bg-muted/70",

        ghost:
          "border-transparent bg-transparent text-muted-foreground [a&]:hover:bg-muted/70 [a&]:hover:text-foreground",

        link:
          "h-auto border-transparent bg-transparent px-0 text-primary underline-offset-4 [a&]:hover:underline",

        destructive:
          "border-destructive/20 bg-destructive/10 text-destructive [a&]:hover:bg-destructive/15 dark:border-destructive/30 dark:bg-destructive/15",

        success:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 [a&]:hover:bg-emerald-500/15 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300",

        warning:
          "border-amber-500/20 bg-amber-500/10 text-amber-700 [a&]:hover:bg-amber-500/15 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300",

        info:
          "border-sky-500/20 bg-sky-500/10 text-sky-700 [a&]:hover:bg-sky-500/15 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300",

        muted:
          "border-border/60 bg-muted/55 text-muted-foreground [a&]:hover:bg-muted",

        active:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300",

        paid:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300",

        resolved:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300",

        pending:
          "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300",

        invited:
          "border-sky-500/20 bg-sky-500/10 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300",

        open:
          "border-sky-500/20 bg-sky-500/10 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300",

        "in-progress":
          "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300",

        suspended:
          "border-rose-500/20 bg-rose-500/10 text-rose-700 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-300",

        failed:
          "border-rose-500/20 bg-rose-500/10 text-rose-700 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-300",

        high:
          "border-rose-500/20 bg-rose-500/10 text-rose-700 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-300",

        medium:
          "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300",

        low:
          "border-border/60 bg-muted/55 text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }