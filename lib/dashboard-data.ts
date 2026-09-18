export type Stat = {
  id: string;
  label: string;
  value: string;
  delta: string;
  hint: string;
};

export const stats: Stat[] = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: "$482,900",
    delta: "+12.5%",
    hint: "vs. last month",
  },
  {
    id: "users",
    label: "Active Users",
    value: "38,204",
    delta: "+8.2%",
    hint: "vs. last month",
  },
  {
    id: "conversion",
    label: "Conversion Rate",
    value: "3.84%",
    delta: "-1.1%",
    hint: "vs. last month",
  },
  {
    id: "churn",
    label: "Churn Rate",
    value: "2.3%",
    delta: "-0.4%",
    hint: "improved this month",
  },
];
