import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewsPage() {
  const newsItems = {
    announcements: [
      {
        title: "PhD Student Position Available",
        description: "Applications are open for PhD positions in our research group. Interested candidates are encouraged to apply."
      }
    ],
    upcomingEvents: [
      {
        title: "Introduction to Chemical Engineering Softwares (IChES-2.0)",
        subtitle: "2nd Edition of Short Term Training Program",
        description: "Dates: To be announced",
        status: "upcoming"
      },
      {
        title: "Advances in Sustainable Research for Energy and Environmental Management (ASREEM 2.0)",
        subtitle: "2nd Edition of International Conference",
        description: "Dates: February 13-15, 2026",
        status: "upcoming"
      }
    ]
  };

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">News & Updates</h2>
        
        {/* Announcements Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Announcements</h3>
          <div className="grid gap-6">
            {newsItems.announcements.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Upcoming Events</h3>
          <div className="grid gap-6">
            {newsItems.upcomingEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{event.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      {event.status}
                    </span>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 