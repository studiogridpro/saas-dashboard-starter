"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";

type SidebarState = {
  open: boolean;
  pathname: string;
};

/**
 * The persistent dashboard layout: fixed sidebar + sticky topbar with a
 * scrollable content area. Manages the mobile sidebar open/close state.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [sidebarState, setSidebarState] = React.useState<SidebarState>({
    open: false,
    pathname,
  });

  const sidebarOpen = sidebarState.open && sidebarState.pathname === pathname;

  function openSidebar() {
    setSidebarState({
      open: true,
      pathname,
    });
  }

  function closeSidebar() {
    setSidebarState({
      open: false,
      pathname,
    });
  }

  return (
    <div className="min-h-svh bg-background">
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />

      <div className="lg:pl-64">
        <Topbar onMenuClick={openSidebar} />

        <main className="w-full px-4 py-6 md:px-6 md:py-8 lg:px-8 xl:px-10 2xl:px-12">
          {children}
        </main>
      </div>
    </div>
  );
}
