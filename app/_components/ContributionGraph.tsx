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

const ContributionGraph = () => {
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
          <TabsList className="gap-2 rounded-3xl bg-white/5 p-[3px] shadow-inner shadow-black/10" variant="default">
            <TabsTrigger value="github">Github</TabsTrigger>
            <TabsTrigger value="leetcode">Leetcode</TabsTrigger>
          </TabsList>

          <TabsContent value="github">
            <Card>
              <CardHeader>
                <CardTitle>Github</CardTitle>
                <CardDescription>
                  View your key metrics and recent project work in a modern dashboard style.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                You have 12 active projects and 3 pending tasks.
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leetcode">
            <Card>
              <CardHeader>
                <CardTitle>Leetcode</CardTitle>
                <CardDescription>
                  Track your algorithm progress and keep every challenge organized.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                You have 12 active projects and 3 pending tasks.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ContributionGraph;
