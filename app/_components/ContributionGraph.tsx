import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const ContributionGraph = () => {
  return (
    <div>
        <Tabs defaultValue="github" className="w-100">
            <TabsList>
                <TabsTrigger value="github">Github</TabsTrigger>
                <TabsTrigger value="leetcode">Leetcode</TabsTrigger>
            </TabsList>
            <TabsContent value="github">
                <Card>
                    <CardHeader>
                        <CardTitle>Github</CardTitle>
                        <CardDescription>
                        View your key metrics and recent project activity. Track progress
                        across all your active projects.
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
                        View your key metrics and recent project activity. Track progress
                        across all your active projects.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        You have 12 active projects and 3 pending tasks.
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  )
}
export default ContributionGraph