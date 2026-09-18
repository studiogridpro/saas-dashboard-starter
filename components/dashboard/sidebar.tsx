"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const active = pathname === "/";

  return (
    <>
      {open ? (
        <div
          className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      ) : null}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-300 ease-in-out lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-5">
          <div className="flex size-9 items-center justify-center overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/icon.svg"
              alt="Pampalane"
              width={36}
              height={36}
              priority
            />
          </div>

          <div className="flex flex-1 flex-col leading-none">
            <span className="truncate text-sm font-semibold tracking-tight text-sidebar-foreground">
              Pampalane
            </span>

            <span className="mt-1 text-xs text-muted-foreground">
              Operating workspace
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon-sm"
            className="lg:hidden"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <X className="size-4" />
          </Button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
            Platform
          </p>

          <Link
            href="/"
            onClick={onClose}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "text-sidebar-foreground"
                : "text-muted-foreground hover:text-sidebar-foreground",
            )}
          >
            {active ? (
              <span className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-primary" />
            ) : null}

            <LayoutDashboard className="size-4 shrink-0" />

            <span className="flex-1 truncate">Overview</span>
          </Link>
        </nav>

        <div className="border-t border-sidebar-border px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Business pulse
              </p>

              <p className="mt-1 truncate text-sm font-medium text-sidebar-foreground">
                Pro · Pampalane
              </p>
            </div>

            <span className="size-2 shrink-0 rounded-full bg-success" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 border-t border-sidebar-border pt-3">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                MRR
              </p>

              <p className="mt-1 text-sm font-semibold tabular-nums text-sidebar-foreground">
                $42.8k
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                Accounts
              </p>

              <p className="mt-1 text-sm font-semibold tabular-nums text-sidebar-foreground">
                1.8k
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                Uptime
              </p>

              <p className="mt-1 text-sm font-semibold tabular-nums text-sidebar-foreground">
                99.97
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
