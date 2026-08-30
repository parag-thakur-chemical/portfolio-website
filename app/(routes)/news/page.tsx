import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewsPage() {
  const newsItems = {
    announcements: [
      {
        title: "Industry Research Collaboration with GGEPIL",
        description: "Industry research collaboration / consultancy with Green Gene Enviro Protection and Infrastructure Ltd, Surat (GGEPIL) — August 2026–Present.",
      },
      {
        title: "Seed Grant Awarded — ₹10 Lakh",
        description: "Development of Stable hybrid nanofluid system for CO2 absorption by SVNIT Surat as Seed Money Grant (Phase-III), from 01.05.2026 to 30.04.2028 (₹10,00,000).",
      },
      {
        title: "New Journal Publication (Q1)",
        description: "Group III–V xenes at the biointerface published in Nano-Structures & Nano-Objects, Volume 46, May 2026 (https://doi.org/10.1016/j.nanoso.2026.101628).",
      },
      {
        title: "PhD Student Achievement",
        description: "Research paper by PhD Scholar Mr. Jayraj Rana accepted for presentation at the 2nd Global Cleaner Production Conference, Melia Sitges, Spain (Journal of Cleaner Production, ELSEVIER, IF 10.7, Q1), 26–29 October 2026.",
      },
      {
        title: "Third Patent Granted",
        description: "Patent No. 590073 granted on 22 May 2026: Development of Novel Process for micro-reactor-based Extraction of Heavy Antimony using ionic liquid-based Hybrid Nanofluids.",
      },
    ],
    upcomingEvents: [
      {
        title: "Advances in Sustainable Research for Energy and Environmental Management (ASREEM-2026)",
        subtitle: "2nd Edition of International Conference — Secretary",
        description: "Dates: May 15–17, 2026, SVNIT, Surat",
        status: "upcoming",
      },
      {
        title: "2nd Global Cleaner Production Conference",
        subtitle: "PhD Scholar Jayraj Rana — Accepted Presentation",
        description: "Dates: 26–29 October 2026, Melia Sitges, Spain",
        status: "upcoming",
      },
    ],
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
