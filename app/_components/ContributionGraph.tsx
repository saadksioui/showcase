"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import type { ContributionWeek, GitHubContributionWeek, LeetCodeCalendar } from "@/lib/types";
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
  
  return (
    <div className="rounded-lg bg-linear-to-br from-white/5 to-transparent p-6 ring-1 ring-white/10 overflow-visible">
      <div className="grid grid-flow-col grid-rows-7 auto-cols-fr gap-1.5">
        {weeks.map((week: ContributionWeek | GitHubContributionWeek, weekIndex: number) =>
          week.contributionDays.map((day) => (
            <div
              key={`${weekIndex}-${day.date}`}
              className="group relative w-full"
            >
              <div
                className="aspect-square w-full rounded-md transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-white/20 cursor-pointer"
                style={{
                  backgroundColor: day.color,
                  opacity: day.contributionCount === 0 ? 0.4 : 1,
                }}
                aria-label={`${day.contributionCount} contributions on ${day.date}`}
              />
              <div className="absolute top-full left-1/2 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900/95 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur group-hover:block ring-1 ring-white/10 pointer-events-none z-50">
                <div className="font-medium">{day.contributionCount} contributions</div>
                <div className="text-xs text-slate-400">{day.date}</div>
              </div>
            </div>
          ))
        )}
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
    <section id="stats" className="rounded-[2rem] border border-white/10 bg-card/85 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Stats</p>
          <h2 className="text-3xl font-heading font-semibold tracking-tight text-foreground sm:text-4xl">
            Contribution overview
          </h2>
        </div>

        <Tabs defaultValue="github" className="w-full">
          <TabsList className="gap-2 rounded-3xl bg-white/5 p-0.75 shadow-inner shadow-black/10" variant="default">
            <TabsTrigger value="github">Github</TabsTrigger>
            <TabsTrigger value="leetcode">Leetcode</TabsTrigger>
          </TabsList>

          <TabsContent value="github">
            <Card>
              <CardHeader>
                <CardTitle>GitHub Contributions</CardTitle>
                <CardDescription>
                  Your contribution activity over the last year.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {githubLoading ? (
                  <p>Loading contributions...</p>
                ) : (
                  <Heatmap weeks={githubWeeks} />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ContributionGraph;
