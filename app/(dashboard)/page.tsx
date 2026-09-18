"use client";

import { useState } from "react";
import { Check, Download } from "lucide-react";

import { OverviewChart } from "@/components/dashboard/overview-chart";
import { PageHeader } from "@/components/dashboard/page-header";
import { RecentAccounts } from "@/components/dashboard/recent-accounts";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/dashboard-data";

const insights = [
  {
    title: "MRR plan accelerates into year end",
    description:
      "The 2026 plan moves from the January baseline toward a substantially higher December target, with the strongest lift concentrated in the second half.",
  },
  {
    title: "Retention is improving alongside usage",
    description:
      "Active usage is rising while churn continues to ease, strengthening the quality of current growth.",
  },
  {
    title: "Billing follow-up remains contained",
    description:
      "Most invoices are paid; only pending and failed items require collection follow-up.",
  },
];

const activity = [
  {
    title: "New account added",
    description: "Buen Día joined on the Pro plan.",
    time: "8 min ago",
  },
  {
    title: "Payment received",
    description: "Piedra Sur renewed its Pro subscription.",
    time: "24 min ago",
  },
  {
    title: "Snapshot exported",
    description: "The latest operating snapshot was downloaded.",
    time: "1 hr ago",
  },
];

function downloadCsv(filename: string, rows: string[][]) {
  const escapeCell = (value: string) => `"${value.replaceAll('"', '""')}"`;

  const csv = rows.map((row) => row.map(escapeCell).join(",")).join("\n");

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

export default function DashboardPage() {
  const [notice, setNotice] = useState<string | null>(null);

  const showNotice = (message: string) => {
    setNotice(message);

    window.setTimeout(() => {
      setNotice(null);
    }, 3500);
  };

  const exportOverview = () => {
    downloadCsv("pampalane-overview.csv", [
      ["Pampalane Overview"],
      ["Metric", "Value", "Change", "Period"],
      ...stats.map((stat) => [stat.label, stat.value, stat.delta, stat.hint]),
      [],
      ["Insight", "Description"],
      ...insights.map((item) => [item.title, item.description]),
    ]);

    showNotice("Overview exported successfully.");
  };

  return (
    <>
      <div className="space-y-6">
        <PageHeader
          title="Operating view"
          description="Revenue, usage, conversion and retention signals across Pampalane."
        >
          <Button variant="outline" size="lg" onClick={exportOverview}>
            <Download data-icon="inline-start" className="size-4" />
            Export snapshot
          </Button>
        </PageHeader>

        <section
          aria-labelledby="business-pulse-title"
          className="overflow-hidden border-y border-border/80"
        >
          <div className="grid xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]">
            {stats.map((stat, index) =>
              index === 0 ? (
                <div
                  key={stat.id}
                  className="py-7 md:py-9 xl:border-r xl:border-border/80 xl:pr-10"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p
                      id="business-pulse-title"
                      className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Business pulse
                    </p>

                    <span className="h-3 w-px bg-border" />

                    <span className="text-xs text-muted-foreground">
                      4 operating signals
                    </span>
                  </div>

                  <div className="mt-7 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>

                      <div className="mt-2 flex flex-wrap items-baseline gap-3">
                        <p className="text-5xl font-semibold tracking-[-0.045em] tabular-nums text-foreground md:text-6xl">
                          {stat.value}
                        </p>

                        <span className="text-sm font-semibold text-success">
                          {stat.delta}
                        </span>
                      </div>

                      <p className="mt-2 text-xs text-muted-foreground">
                        {stat.hint}
                      </p>
                    </div>

                    <div className="max-w-md border-l border-border/80 pl-5">
                      <p className="text-sm font-medium text-foreground">
                        Growth is broad, but not uniform.
                      </p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Revenue and active usage are moving up while churn is
                        easing. Conversion is the only core signal moving
                        against the current trend.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null,
            )}

            <div className="divide-y divide-border/80 xl:pl-8">
              {stats.slice(1).map((stat, index) => (
                <div
                  key={stat.id}
                  className="grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-4 py-5"
                >
                  <span className="font-mono text-[10px] text-muted-foreground/70">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {stat.label}
                    </p>

                    <p className="mt-1 truncate text-xs text-muted-foreground">
                      {stat.hint}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-semibold tracking-[-0.035em] tabular-nums text-foreground">
                      {stat.value}
                    </p>

                    <p
                      className={[
                        "mt-1 text-xs font-medium tabular-nums",
                        index === 0
                          ? "text-sky-600 dark:text-sky-400"
                          : index === 1
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-emerald-600 dark:text-emerald-400",
                      ].join(" ")}
                    >
                      {stat.delta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <OverviewChart />

          <aside className="border-y border-border/80 py-6 xl:border-y-0 xl:border-l xl:py-0 xl:pl-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-muted-foreground/70">
                    02
                  </span>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Operating signals
                  </p>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  Conditions shaping the current plan.
                </p>
              </div>

              <span className="text-xs tabular-nums text-muted-foreground">
                3 signals
              </span>
            </div>

            <div className="mt-5 divide-y divide-border/80 border-y border-border/80">
              {insights.map((item, index) => (
                <div
                  key={item.title}
                  className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-4 py-5 pl-4"
                >
                  <span
                    className={[
                      "absolute inset-y-5 left-0 w-0.5 rounded-full",
                      index === 0
                        ? "bg-blue-500"
                        : index === 1
                          ? "bg-emerald-500"
                          : "bg-amber-500",
                    ].join(" ")}
                  />

                  <span className="font-mono text-[10px] text-muted-foreground/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="text-sm font-medium leading-5 text-foreground">
                      {item.title}
                    </p>

                    <p className="mt-1.5 text-sm leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <RecentAccounts />

          <aside className="border-y border-border/80 py-6 xl:border-y-0 xl:border-l xl:py-0 xl:pl-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-muted-foreground/70">
                    04
                  </span>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Operating log
                  </p>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  Recent account and reporting events.
                </p>
              </div>

              <span className="text-xs tabular-nums text-muted-foreground">
                {activity.length} events
              </span>
            </div>

            <div className="mt-5 divide-y divide-border/80 border-y border-border/80">
              {activity.map((item, index) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[28px_minmax(0,1fr)_auto] gap-4 py-5"
                >
                  <div className="relative flex justify-center">
                    <span
                      className={[
                        "mt-1.5 size-1.5 rounded-full",
                        index === 0
                          ? "bg-sky-500"
                          : index === 1
                            ? "bg-emerald-500"
                            : "bg-muted-foreground/50",
                      ].join(" ")}
                    />

                    {index < activity.length - 1 ? (
                      <span className="absolute bottom-[-20px] top-4 w-px bg-border/80" />
                    ) : null}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-5 text-foreground">
                      {item.title}
                    </p>

                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <span className="pt-0.5 text-xs tabular-nums text-muted-foreground">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {notice ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 right-4 z-90 flex w-[calc(100%-2rem)] max-w-sm items-start gap-3 rounded-xl border bg-background p-4 shadow-lg"
        >
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
            <Check className="size-4" />
          </div>

          <div>
            <p className="text-sm font-semibold">Done</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{notice}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
