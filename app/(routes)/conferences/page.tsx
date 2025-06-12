import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ConferencesPage() {
  const conferencePresentations = [
    {
      title: "Application of nanofluids for the PVT solar panels",
      conference: "16th International Conference on Advancement in Petrochemical Sector",
      organization: "CIPET: IPT-Lucknow",
      date: "March 2025",
      details: "Received Best oral presentation award",
    },
    {
      title: "Experimental analysis of fly ash based nanofluids for CO2 absorption",
      conference: "International Conference on Emerging Materials Trends",
      organization: "JECRC University, Jaipur",
      date: "December 2024",
      details: "Presented research on sustainable energy solutions",
    },
    {
      title: "Fly based nanofluids for thermal applications",
      conference: "International Conference on Water & Sustainable Development",
      organization: "VNIT, Nagpur",
      date: "November 2024",
      details: "Research presentation on thermal applications",
    },
    {
      title: "Recent trends of CO2 absorption process",
      conference: "6th Conference by Asia-Oceania Sono-chemical Society",
      organization: "NIT, Warangal",
      date: "September 2023",
      details: "Received Best oral presentation award",
    },
    {
      title: "Performance assessment of the CNT deposited surfaces for pool boiling application",
      conference: "International Conference on Advances in Sustainable Research",
      organization: "SVNIT, Surat",
      date: "August 2021",
      details: "Received Best oral presentation award",
    },
  ];

  const sessionChairRoles = [
    {
      conference: "18th Annual Session of Chemical Engineering Students Congress",
      organization: "NIT, Warangal",
      date: "September 2022",
      role: "Session In-charge",
    },
    {
      conference: "International Conference on Education 5.0",
      organization: "NIT, Warangal",
      date: "October 2022",
      role: "Session In-charge",
    },
  ];

  const conferenceAttendance = [
    {
      title: "International Conference on Multifunctional Electronic Materials and Processing",
      organization: "C-MET Pune",
      date: "March 2021",
      format: "Digital Platform",
    },
    {
      title: "International Conference on Chemical Science for Drug Discovery & Therapy",
      organization: "VNIT Nagpur",
      date: "July 2020",
      format: "Online Mode",
    },
    {
      title: "Intellectual Property and Startups Conference",
      organization: "Turnip Innovation Festivals",
      date: "January 2024",
      format: "Online Conference",
    },
  ];

  return (
    <div className="container mx-auto py-6 sm:py-8 space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Conferences & Presentations</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Academic contributions and participation in scientific conferences
        </p>
      </div>

      {/* Conference Presentations */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Conference Presentations</h2>
        <div className="grid gap-4">
          {conferencePresentations.map((conf, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{conf.title}</CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">{conf.conference}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{conf.organization}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit">{conf.date}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">{conf.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Session Chair Roles */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Session Chair Roles</h2>
        <div className="grid gap-4">
          {sessionChairRoles.map((role, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{role.conference}</CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">{role.organization}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{role.role}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit">{role.date}</Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Conference Attendance */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Conference Attendance</h2>
        <div className="grid gap-4">
          {conferenceAttendance.map((conf, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{conf.title}</CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">{conf.organization}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{conf.format}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit">{conf.date}</Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 