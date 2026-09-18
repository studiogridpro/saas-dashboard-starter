import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const accounts = [
  {
    name: "Lucía Fernández",
    company: "Piedra Sur",
    plan: "Pro",
    status: "Active",
    mrr: "$1,240",
  },
  {
    name: "Tomás Herrera",
    company: "Lago Norte",
    plan: "Enterprise",
    status: "Active",
    mrr: "$2,980",
  },
  {
    name: "Emma Collins",
    company: "Fieldnote",
    plan: "Starter",
    status: "Trial",
    mrr: "$320",
  },
  {
    name: "Martín Quiroga",
    company: "Buen Día",
    plan: "Pro",
    status: "Active",
    mrr: "$1,680",
  },
  {
    name: "Sophie Turner",
    company: "Common Thread",
    plan: "Pro",
    status: "Active",
    mrr: "$1,420",
  },
];

export function RecentAccounts() {
  return (
    <section
      aria-labelledby="recent-accounts-title"
      className="min-w-0 border-y border-border/80 py-6"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-muted-foreground/70">
              03
            </span>

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Account activity
            </p>
          </div>

          <h2
            id="recent-accounts-title"
            className="mt-3 text-xl font-semibold tracking-[-0.025em]"
          >
            Recent accounts
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            A compact view of current customer activity.
          </p>
        </div>

        <span className="text-xs tabular-nums text-muted-foreground">
          5 accounts
        </span>
      </div>

      <div className="mt-5 overflow-x-auto border-y border-border/80">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">MRR</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {accounts.map((account) => (
              <TableRow key={`${account.name}-${account.company}`}>
                <TableCell className="font-medium">{account.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {account.company}
                </TableCell>
                <TableCell>{account.plan}</TableCell>
                <TableCell>
                  <Badge variant="outline">{account.status}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium tabular-nums">
                  {account.mrr}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
