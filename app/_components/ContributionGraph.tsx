"use client";
import type { ContributionWeek, GitHubContributionWeek } from "@/lib/types";
import { useEffect, useState } from "react";


interface HeatmapProps {
  weeks: (ContributionWeek | GitHubContributionWeek)[];
}

const Heatmap = ({ weeks = [] }: HeatmapProps) => {
  if (!weeks.length) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-sm text-muted-foreground">No data available</p>
      </div>
    );
  }
  
  const getColor = (count: number) => {
    if (!count) return "#ebedf0"; // light gray
    if (count === 1) return "#9be9a8";
    if (count <= 3) return "#40c463";
    if (count <= 7) return "#30a14e";
    return "#216e39";
  };

  // Build month labels aligned to week columns
  const monthBoundaries: { month: string; index: number }[] = [];
  weeks.forEach((week, i) => {
    const firstDay = week.contributionDays[0];
    const d = new Date(firstDay.date);
    const month = d.toLocaleString("default", { month: "short" });
    const prev = monthBoundaries[monthBoundaries.length - 1];
    if (!prev || prev.month !== month) {
      monthBoundaries.push({ month, index: i });
    }
  });

  return (
    <div className="rounded-lg p-2 overflow-visible">
      {/* Month labels */}
      <div className="mb-2">
        <div className="grid grid-flow-col auto-cols-fr">
          {monthBoundaries.map((m, idx) => {
            const start = m.index + 1; // grid starts at 1
            const end = monthBoundaries[idx + 1]?.index ?? weeks.length;
            const span = end - m.index;
            return (
              <div
                key={`${m.month}-${m.index}`}
                style={{ gridColumn: `${start} / span ${span}` }}
                className="text-sm text-gray-400"
              >
                {m.month}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-flow-col grid-rows-7 auto-cols-fr gap-1.5">
        {weeks.map((week: ContributionWeek | GitHubContributionWeek, weekIndex: number) =>
          week.contributionDays.map((day) => (
            <div
              key={`${weekIndex}-${day.date}`}
              className="group relative w-full"
            >
              <div
                className="aspect-square w-full rounded-md transition-all duration-150 hover:scale-110 cursor-pointer"
                style={{
                  backgroundColor: getColor(day.contributionCount),
                }}
                aria-label={`${day.contributionCount} contributions on ${day.date}`}
              />
              <div className="absolute top-full left-1/2 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur group-hover:block ring-1 ring-white/10 pointer-events-none z-50">
                <div className="font-medium">{day.contributionCount} contributions</div>
                <div className="text-xs text-slate-400">{day.date}</div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
        <span className="text-xs">Less</span>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#ebedf0' }} />
          <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#9be9a8' }} />
          <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#40c463' }} />
          <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#30a14e' }} />
          <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#216e39' }} />
        </div>
        <span className="text-xs">More</span>
      </div>
    </div>
  );
};


const ContributionGraph = () => {
  const [githubWeeks, setGithubWeeks] = useState<GitHubContributionWeek[]>([]);
  const [githubLoading, setGithubLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContributions = async (): Promise<void> => {
      try {
        const response: Response = await fetch("/api/github");

        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }

        const result: {
          data: {
            user: {
              contributionsCollection: {
                contributionCalendar: {
                  weeks: GitHubContributionWeek[];
                };
              };
            };
          };
        } = await response.json();

        setGithubWeeks(
          result.data.user.contributionsCollection.contributionCalendar.weeks
        );
      } catch (error: unknown) {
        console.error(error);
      } finally {
        setGithubLoading(false);
      }
    };

    fetchContributions();
  }, []);

  return (
    <section className="mt-5">
      <div className="w-full">
          <div>
            {githubLoading ? (
              <p>Loading contributions...</p>
            ) : (
              <Heatmap weeks={githubWeeks} />
            )}
          </div>
        </div>
    </section>
  );
};

export default ContributionGraph;
