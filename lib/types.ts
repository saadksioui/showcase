/**
 * Type definitions for contribution data structures
 */

export interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface GitHubContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

export interface GitHubContributionWeek {
  contributionDays: GitHubContributionDay[];
}

export interface LeetCodeCalendar {
  [timestamp: string]: number;
}

export interface Skill {
  name: string;
  icon: string;
}
