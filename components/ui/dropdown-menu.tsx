"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu(props: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal(props: MenuPrimitive.Portal.Props) {
  return (
    <MenuPrimitive.Portal
      data-slot="dropdown-menu-portal"
      {...props}
    />
  )
}

function DropdownMenuTrigger(props: MenuPrimitive.Trigger.Props) {
  return (
    <MenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 6,
  className,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50 outline-none"
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            [
              "z-50 max-h-(--available-height)",
              "w-(--anchor-width) min-w-44 max-w-80",
              "origin-(--transform-origin)",
              "overflow-x-hidden overflow-y-auto",
              "rounded-xl border border-border/70",
              "bg-popover/98 p-1.5 text-popover-foreground",
              "shadow-[0_12px_36px_rgb(0_0_0/0.12),0_2px_8px_rgb(0_0_0/0.06)]",
              "backdrop-blur-xl",
              "outline-none",
              "duration-150 ease-out",

              "data-open:animate-in",
              "data-open:fade-in-0",
              "data-open:zoom-in-95",

              "data-closed:animate-out",
              "data-closed:overflow-hidden",
              "data-closed:fade-out-0",
              "data-closed:zoom-out-95",

              "data-[side=bottom]:slide-in-from-top-1.5",
              "data-[side=top]:slide-in-from-bottom-1.5",
              "data-[side=left]:slide-in-from-right-1.5",
              "data-[side=right]:slide-in-from-left-1.5",
              "data-[side=inline-start]:slide-in-from-right-1.5",
              "data-[side=inline-end]:slide-in-from-left-1.5",

              "dark:border-border/80",
              "dark:bg-popover/96",
              "dark:shadow-[0_16px_48px_rgb(0_0_0/0.38),0_2px_10px_rgb(0_0_0/0.24)]",
            ],
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

function DropdownMenuGroup(props: MenuPrimitive.Group.Props) {
  return (
    <MenuPrimitive.Group
      data-slot="dropdown-menu-group"
      {...props}
    />
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<"div"> & {
  inset?: boolean
}) {
  return (
    <div
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        [
          "px-2 py-1.5",
          "text-[11px] font-semibold uppercase",
          "tracking-[0.08em] text-muted-foreground",
          "data-[inset=true]:pl-9",
        ],
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        [
          "group/dropdown-menu-item",
          "relative flex min-h-9 cursor-default items-center gap-2",
          "rounded-lg px-2.5 py-2",
          "text-sm font-medium leading-none",
          "outline-hidden select-none",
          "transition-[background-color,color,transform]",
          "duration-150 ease-out",

          "focus:bg-accent",
          "focus:text-accent-foreground",
          "focus:**:text-accent-foreground",

          "data-inset:pl-9",

          "data-disabled:pointer-events-none",
          "data-disabled:opacity-45",

          "data-[variant=destructive]:text-destructive",
          "data-[variant=destructive]:focus:bg-destructive/10",
          "data-[variant=destructive]:focus:text-destructive",
          "data-[variant=destructive]:focus:**:text-destructive",

          "dark:data-[variant=destructive]:focus:bg-destructive/15",

          "[&_svg]:pointer-events-none",
          "[&_svg]:shrink-0",
          "[&_svg]:text-muted-foreground",
          "[&_svg:not([class*='size-'])]:size-4",

          "data-[variant=destructive]:[&_svg]:text-destructive",
        ],
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub(props: MenuPrimitive.SubmenuRoot.Props) {
  return (
    <MenuPrimitive.SubmenuRoot
      data-slot="dropdown-menu-sub"
      {...props}
    />
  )
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        [
          "group/dropdown-menu-sub-trigger",
          "relative flex min-h-9 cursor-default items-center gap-2",
          "rounded-lg px-2.5 py-2",
          "text-sm font-medium leading-none",
          "outline-hidden select-none",
          "transition-colors duration-150 ease-out",

          "focus:bg-accent",
          "focus:text-accent-foreground",
          "focus:**:text-accent-foreground",

          "data-popup-open:bg-accent",
          "data-popup-open:text-accent-foreground",
          "data-popup-open:**:text-accent-foreground",

          "data-open:bg-accent",
          "data-open:text-accent-foreground",
          "data-open:**:text-accent-foreground",

          "data-inset:pl-9",

          "data-disabled:pointer-events-none",
          "data-disabled:opacity-45",

          "[&_svg]:pointer-events-none",
          "[&_svg]:shrink-0",
          "[&_svg]:text-muted-foreground",
          "[&_svg:not([class*='size-'])]:size-4",
        ],
        className
      )}
      {...props}
    >
      {children}

      <ChevronRightIcon
        className={cn(
          "ml-auto size-4",
          "transition-transform duration-150",
          "group-data-popup-open/dropdown-menu-sub-trigger:translate-x-0.5"
        )}
      />
    </MenuPrimitive.SubmenuTrigger>
  )
}

function DropdownMenuSubContent({
  align = "start",
  alignOffset = -5,
  side = "right",
  sideOffset = 6,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      className={cn(
        [
          "w-auto min-w-44",
          "rounded-xl border border-border/70",
          "bg-popover/98 p-1.5",
          "shadow-[0_12px_36px_rgb(0_0_0/0.14),0_2px_8px_rgb(0_0_0/0.08)]",
          "backdrop-blur-xl",

          "dark:border-border/80",
          "dark:bg-popover/96",
          "dark:shadow-[0_16px_48px_rgb(0_0_0/0.4),0_2px_10px_rgb(0_0_0/0.24)]",
        ],
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      checked={checked}
      className={cn(
        [
          "group/dropdown-menu-checkbox-item",
          "relative flex min-h-9 cursor-default items-center gap-2",
          "rounded-lg py-2 pr-9 pl-2.5",
          "text-sm font-medium leading-none",
          "outline-hidden select-none",
          "transition-colors duration-150 ease-out",

          "focus:bg-accent",
          "focus:text-accent-foreground",
          "focus:**:text-accent-foreground",

          "data-inset:pl-9",

          "data-disabled:pointer-events-none",
          "data-disabled:opacity-45",

          "[&_svg]:pointer-events-none",
          "[&_svg]:shrink-0",
          "[&_svg]:text-muted-foreground",
          "[&_svg:not([class*='size-'])]:size-4",
        ],
        className
      )}
      {...props}
    >
      {children}

      <span
        data-slot="dropdown-menu-checkbox-item-indicator"
        className="pointer-events-none absolute right-2.5 flex size-5 items-center justify-center"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon className="size-4 text-foreground" />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
    </MenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup(props: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        [
          "group/dropdown-menu-radio-item",
          "relative flex min-h-9 cursor-default items-center gap-2",
          "rounded-lg py-2 pr-9 pl-2.5",
          "text-sm font-medium leading-none",
          "outline-hidden select-none",
          "transition-colors duration-150 ease-out",

          "focus:bg-accent",
          "focus:text-accent-foreground",
          "focus:**:text-accent-foreground",

          "data-inset:pl-9",

          "data-disabled:pointer-events-none",
          "data-disabled:opacity-45",

          "[&_svg]:pointer-events-none",
          "[&_svg]:shrink-0",
          "[&_svg]:text-muted-foreground",
          "[&_svg:not([class*='size-'])]:size-4",
        ],
        className
      )}
      {...props}
    >
      {children}

      <span
        data-slot="dropdown-menu-radio-item-indicator"
        className="pointer-events-none absolute right-2.5 flex size-5 items-center justify-center"
      >
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon className="size-4 text-foreground" />
        </MenuPrimitive.RadioItemIndicator>
      </span>
    </MenuPrimitive.RadioItem>
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn(
        "-mx-1.5 my-1.5 h-px bg-border/70",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        [
          "ml-auto pl-4",
          "text-[11px] font-medium",
          "tracking-[0.04em] text-muted-foreground",
          "transition-colors",
          "group-focus/dropdown-menu-item:text-accent-foreground",
        ],
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}