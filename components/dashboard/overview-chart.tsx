"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", revenue: 22000 },
  { month: "Feb", revenue: 28000 },
  { month: "Mar", revenue: 26000 },
  { month: "Apr", revenue: 38000 },
  { month: "May", revenue: 34000 },
  { month: "Jun", revenue: 43000 },
  { month: "Jul", revenue: 48000 },
  { month: "Aug", revenue: 45000 },
  { month: "Sep", revenue: 56000 },
  { month: "Oct", revenue: 54000 },
  { month: "Nov", revenue: 62000 },
  { month: "Dec", revenue: 68000 },
];

const startMrr = data[0].revenue;
const targetMrr = data[data.length - 1].revenue;
const plannedLift = targetMrr - startMrr;

function formatCurrency(value: number) {
  return `$${Math.round(value / 1000)}k`;
}

export function OverviewChart() {
  return (
    <section
      aria-labelledby="mrr-trajectory-title"
      className="border-y border-border/80 py-6 md:py-7"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-muted-foreground/70">
                01
              </span>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Revenue signal
              </p>
            </div>

            <h2
              id="mrr-trajectory-title"
              className="mt-3 text-xl font-semibold tracking-[-0.025em] text-foreground"
            >
              2026 MRR trajectory
            </h2>

            <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
              Planned recurring revenue progression from the January baseline to
              the year-end target.
            </p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-border/80 border-y border-border/80 lg:min-w-[420px]">
            <div className="py-3 pr-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Jan baseline
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight tabular-nums">
                {formatCurrency(startMrr)}
              </p>
            </div>

            <div className="px-5 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Dec target
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight tabular-nums">
                {formatCurrency(targetMrr)}
              </p>
            </div>

            <div className="py-3 pl-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Planned lift
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight tabular-nums">
                +{formatCurrency(plannedLift)}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-[54px] right-2 top-0 flex justify-between">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground/60">
              Baseline
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
              Target
            </span>
          </div>

          <div className="h-[320px] w-full pt-5">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 12,
                  right: 8,
                  bottom: 0,
                  left: 0,
                }}
              >
                <defs>
                  <linearGradient id="revenue-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="var(--color-primary)"
                      stopOpacity={0.22}
                    />

                    <stop
                      offset="100%"
                      stopColor="var(--color-primary)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  vertical={false}
                  stroke="var(--color-border)"
                  opacity={0.55}
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={14}
                  tick={{
                    fill: "var(--color-muted-foreground)",
                    fontSize: 11,
                  }}
                />

                <YAxis
                  width={46}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  tickFormatter={formatCurrency}
                  tick={{
                    fill: "var(--color-muted-foreground)",
                    fontSize: 11,
                  }}
                />

                <Tooltip
                  cursor={{
                    stroke: "var(--color-border)",
                  }}
                  formatter={(value) => [
                    `$${Number(value).toLocaleString()}`,
                    "Planned MRR",
                  ]}
                  contentStyle={{
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-popover)",
                    color: "var(--color-popover-foreground)",
                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.14)",
                    padding: "10px 12px",
                  }}
                  labelStyle={{
                    color: "var(--color-muted-foreground)",
                    marginBottom: 4,
                  }}
                  itemStyle={{
                    color: "var(--color-foreground)",
                    fontWeight: 500,
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-primary)"
                  strokeWidth={2.5}
                  fill="url(#revenue-fill)"
                  activeDot={{
                    r: 4,
                    strokeWidth: 2,
                    stroke: "var(--color-background)",
                    fill: "var(--color-primary)",
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
