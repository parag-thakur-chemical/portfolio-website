import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSummary() {

  const professionalExperience = [
    {
      role: "Assistant Professor",
      organization: "Sardar Vallabhbhai National Institute of Technology, Surat",
      duration: "October 2023 - Present",
      details: "Teaching and research in Chemical Engineering Department",
    },
    {
      role: "Post-Doc Fellow",
      organization: "Chonnam National University, South Korea",
      duration: "June 2023 - September 2023",
      details: "Research in nanotechnology and materials science",
    },
    {
      role: "Ad-hoc Faculty",
      organization: "National Institute of Technology, Warangal",
      duration: "August 2022 - May 2023",
      details: "Teaching and research responsibilities",
    },
    {
      role: "Research Fellow",
      organization: "Visvesvaraya National Institute of Technology, Nagpur",
      duration: "August 2018 - July 2022",
      details: "Ph.D. research in nanotechnology and process intensification",
    },
    {
      role: "Research Intern",
      organization: "Bhabha Atomic Research Centre, Mumbai",
      duration: "July 2017 - June 2018",
      details: "Research in microreactors and separation processes",
    },
  ];


  return (
    <section className="py-8 bg-white rounded-xl shadow mb-4 px-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Experience</h2>


      {/* Professional Experience Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Professional Journey</h2>
        <div className="grid gap-6">
          {professionalExperience.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{exp.role}</CardTitle>
                    <p className="text-base text-muted-foreground">{exp.organization}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm">{exp.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base">{exp.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      
    </section>
  );
} 