"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn(
          "w-full caption-bottom border-collapse text-sm",
          className
        )}
        {...props}
      />
    </div>
  )
}

function TableHeader({
  className,
  ...props
}: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "border-b border-border bg-transparent",
        "[&_tr]:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableBody({
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "[&_tr:last-child]:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableFooter({
  className,
  ...props
}: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        [
          "border-t border-border",
          "bg-transparent font-medium",
          "text-foreground",
          "[&>tr]:last:border-b-0",
        ],
        className
      )}
      {...props}
    />
  )
}

function TableRow({
  className,
  ...props
}: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        [
          "border-b border-border/80",
          "transition-colors duration-150 ease-out",
          "hover:bg-foreground/[0.025]",
          "has-aria-expanded:bg-foreground/[0.035]",
          "data-[state=selected]:bg-foreground/[0.04]",
          "data-[state=selected]:hover:bg-foreground/[0.05]",
        ],
        className
      )}
      {...props}
    />
  )
}

function TableHead({
  className,
  ...props
}: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        [
          "h-11 px-4",
          "text-left align-middle",
          "text-[10px] font-semibold uppercase",
          "tracking-[0.12em] text-muted-foreground",
          "whitespace-nowrap",
          "[&:has([role=checkbox])]:pr-0",
          "[&>[role=checkbox]]:translate-y-[1px]",
        ],
        className
      )}
      {...props}
    />
  )
}

function TableCell({
  className,
  ...props
}: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        [
          "px-4 py-3.5",
          "align-middle text-foreground",
          "whitespace-nowrap",
          "[&:has([role=checkbox])]:pr-0",
          "[&>[role=checkbox]]:translate-y-[1px]",
        ],
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "mt-4 text-sm leading-5 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}