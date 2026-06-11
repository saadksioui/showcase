import type { ContributionDay, ContributionWeek, LeetCodeCalendar } from "./types";

function getColor(count: number): string {
  if (count === 0) return "#ebedf0";
  if (count < 2) return "#9be9a8";
  if (count < 5) return "#40c463";
  if (count < 10) return "#30a14e";
  return "#216e39";
}

export function buildWeeks(calendar: LeetCodeCalendar): ContributionWeek[] {
  const today: Date = new Date();

  const start: Date = new Date();
  start.setDate(today.getDate() - 364);

  const days: ContributionDay[] = [];

  for (
    let d: Date = new Date(start);
    d <= today;
    d.setDate(d.getDate() + 1)
  ) {
    const date: string = d.toISOString().split("T")[0];

    const timestamp: number = Math.floor(
      new Date(date).getTime() / 1000
    );

    const count: number = calendar[timestamp] || 0;

    days.push({
      date,
      contributionCount: count,
      color: getColor(count),
    });
  }

  const weeks: ContributionWeek[] = [];

  for (let i: number = 0; i < days.length; i += 7) {
    weeks.push({
      contributionDays: days.slice(i, i + 7),
    });
  }

  return weeks;
}