import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const keyMetrics = [
  { label: "Journal Publications", value: "11 (6 SCIE + 5 Scopus)" },
  { label: "Granted Patents", value: "3" },
  { label: "Sponsored Projects", value: "Seed Grant ₹10 Lakh" },
  { label: "Guest Editor", value: "2 SCIE Journals" },
  { label: "Authored Books", value: "2 (CRC Press)" },
  { label: "Book Chapters", value: "35 (Elsevier)" },
];

const impactMetrics = [
  { label: "Google Scholar", value: "930 citations · H-index 15" },
  { label: "Scopus", value: "710 citations · H-index 13" },
  { label: "PhD Students", value: "6 ongoing" },
  { label: "M.Tech Students", value: "2 completed · 1 ongoing" },
  { label: "Conference Activities", value: "37 total" },
  { label: "Workshops / STTP", value: "7 organized · 33 attended" },
];

export default function ProfessionalSummary() {
  return (
    <section className="py-8 bg-white rounded-xl shadow mb-4 px-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Professional Summary</h2>
      <p className="text-gray-700 mb-4">
        Key academic metrics and impact indicators (CV updated 31 July 2026).
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Academic & Research Output</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {keyMetrics.map((metric) => (
                <li key={metric.label} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                  <span className="text-sm text-muted-foreground">{metric.value}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Impact & Academic Service</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {impactMetrics.map((metric) => (
                <li key={metric.label} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                  <span className="text-sm text-muted-foreground">{metric.value}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
