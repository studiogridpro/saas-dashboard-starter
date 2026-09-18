"use client";

import { useState } from "react";
import {
  Bell,
  CheckCheck,
  ChevronDown,
  FileChartColumn,
  LogOut,
  Menu,
  UserPlus,
  WalletCards,
} from "lucide-react";

import { ThemeToggle } from "@/components/dashboard/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const initialNotifications = [
  {
    id: 1,
    title: "Payment received",
    description: "Piedra Sur renewed its Pro subscription.",
    time: "5 min ago",
    icon: WalletCards,
    unread: true,
  },
  {
    id: 2,
    title: "New account",
    description: "Buen Día joined the workspace.",
    time: "28 min ago",
    icon: UserPlus,
    unread: true,
  },
  {
    id: 3,
    title: "Snapshot ready",
    description: "The latest operating snapshot is available.",
    time: "2 hr ago",
    icon: FileChartColumn,
    unread: true,
  },
];

/** Sticky dashboard topbar with theme, notifications and demo account controls. */
export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [demoNotice, setDemoNotice] = useState(false);

  const unreadCount = notifications.filter(
    (notification) => notification.unread,
  ).length;

  const markAsRead = (id: number) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      })),
    );
  };

  const handleDemoLogout = () => {
    setDemoNotice(true);

    window.setTimeout(() => {
      setDemoNotice(false);
    }, 3500);
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md md:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </Button>

        <div className="hidden min-w-0 flex-1 sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Pampalane workspace
          </p>

          <p className="mt-0.5 text-sm font-medium text-foreground">Overview</p>
        </div>

        <div className="flex flex-1 items-center justify-end gap-1.5 sm:flex-none">
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="relative rounded-xl"
                  aria-label={
                    unreadCount > 0
                      ? `Notifications, ${unreadCount} unread`
                      : "Notifications"
                  }
                />
              }
            >
              <Bell className="size-4" />

              {unreadCount > 0 ? (
                <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary ring-2 ring-background" />
              ) : null}
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">Notifications</p>

                    <p className="mt-0.5 text-xs font-normal text-muted-foreground">
                      {unreadCount > 0
                        ? `${unreadCount} unread`
                        : "You're all caught up"}
                    </p>
                  </div>

                  {unreadCount > 0 ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1.5 px-2 text-xs"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        markAllAsRead();
                      }}
                    >
                      <CheckCheck className="size-3.5" />
                      Mark all read
                    </Button>
                  ) : null}
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              {notifications.map((notification) => {
                const Icon = notification.icon;

                return (
                  <DropdownMenuItem
                    key={notification.id}
                    onClick={() => markAsRead(notification.id)}
                    className="items-start gap-3 py-3"
                  >
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-2">
                        <p className="flex-1 text-sm font-medium">
                          {notification.title}
                        </p>

                        {notification.unread ? (
                          <span
                            className="mt-1.5 size-2 shrink-0 rounded-full bg-primary"
                            aria-label="Unread"
                          />
                        ) : null}
                      </div>

                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {notification.description}
                      </p>

                      <p className="mt-1 text-[11px] text-muted-foreground/80">
                        {notification.time}
                      </p>
                    </div>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              className="ml-1 flex items-center gap-2 rounded-full outline-none transition focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-label="Account menu"
            >
              <Avatar>
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>

              <div className="hidden text-left leading-tight md:block">
                <p className="text-sm font-medium">Valentina Costa</p>
                <p className="text-xs text-muted-foreground">
                  valentina@pampalane.app
                </p>
              </div>

              <ChevronDown className="hidden size-4 text-muted-foreground md:block" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuLabel>
                <div className="flex flex-col gap-1">
                  <span>Pampalane</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    Demo workspace
                  </span>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                variant="destructive"
                onClick={handleDemoLogout}
              >
                <LogOut className="size-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {demoNotice ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-20 z-70 w-[calc(100%-2rem)] max-w-sm rounded-xl border bg-background p-4 shadow-lg"
        >
          <p className="text-sm font-semibold">Demo mode</p>

          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Connect this action to your authentication provider to enable sign
            out in production.
          </p>
        </div>
      ) : null}
    </>
  );
}
