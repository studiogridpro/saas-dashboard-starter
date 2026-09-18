"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"

import { cn } from "@/lib/utils"

const avatarColors = [
  "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  "bg-violet-500/15 text-violet-600 dark:text-violet-400",
  "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  "bg-rose-500/15 text-rose-600 dark:text-rose-400",
  "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
]

function getAvatarColor(value?: React.ReactNode) {
  const text = typeof value === "string" ? value : ""

  const index =
    text.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) %
    avatarColors.length

  return avatarColors[index]
}

function Avatar({
  className,
  size = "default",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: "default" | "sm" | "md" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        [
          "group/avatar relative flex size-8 shrink-0",
          "overflow-visible rounded-full select-none",
          "ring-1 ring-border/70",
          "ring-offset-2 ring-offset-background",
          "shadow-[0_1px_2px_rgb(0_0_0/0.06)]",

          "after:pointer-events-none",
          "after:absolute after:inset-0",
          "after:rounded-full",
          "after:border after:border-white/10",

          "data-[size=sm]:size-7",
          "data-[size=md]:size-9",
          "data-[size=lg]:size-12",

          "dark:ring-border/80",
          "dark:shadow-[0_1px_2px_rgb(0_0_0/0.28)]",
        ],
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        [
          "aspect-square size-full",
          "rounded-full object-cover",
          "transition-opacity duration-200",
        ],
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  children,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        [
          "flex size-full items-center justify-center",
          "rounded-full",
          "text-sm font-semibold uppercase",
          "tracking-[-0.01em]",

          "group-data-[size=sm]/avatar:text-[11px]",
          "group-data-[size=md]/avatar:text-sm",
          "group-data-[size=lg]/avatar:text-base",

          getAvatarColor(children),
        ],
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  )
}

function AvatarBadge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        [
          "absolute right-0 bottom-0 z-10",
          "inline-flex items-center justify-center",
          "rounded-full bg-primary",
          "text-primary-foreground",
          "ring-2 ring-background",
          "shadow-sm select-none",

          "group-data-[size=sm]/avatar:size-2",
          "group-data-[size=sm]/avatar:[&>svg]:hidden",

          "group-data-[size=default]/avatar:size-2.5",
          "group-data-[size=default]/avatar:[&>svg]:size-2",

          "group-data-[size=md]/avatar:size-3",
          "group-data-[size=md]/avatar:[&>svg]:size-2",

          "group-data-[size=lg]/avatar:size-3.5",
          "group-data-[size=lg]/avatar:[&>svg]:size-2.5",
        ],
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        [
          "group/avatar-group flex -space-x-2",
          "*:data-[slot=avatar]:ring-2",
          "*:data-[slot=avatar]:ring-background",
          "*:data-[slot=avatar]:transition-transform",
          "*:data-[slot=avatar]:duration-150",
          "*:data-[slot=avatar]:hover:z-10",
          "*:data-[slot=avatar]:hover:-translate-y-0.5",
        ],
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        [
          "relative flex size-8 shrink-0",
          "items-center justify-center",
          "rounded-full",
          "bg-muted text-sm font-semibold",
          "text-muted-foreground",
          "ring-2 ring-background",
          "shadow-[0_1px_2px_rgb(0_0_0/0.06)]",

          "group-has-data-[size=sm]/avatar-group:size-7",
          "group-has-data-[size=md]/avatar-group:size-9",
          "group-has-data-[size=lg]/avatar-group:size-12",

          "[&>svg]:size-4",
          "group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
          "group-has-data-[size=lg]/avatar-group:[&>svg]:size-5",
        ],
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}