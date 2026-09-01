import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationSummary() {


  const educationDetails = [
    {
      degree: "Doctor of Philosophy (Ph.D.)",
      specialization: "Chemical Engineering",
      institution: "Visvesvaraya National Institute of Technology, Nagpur",
      duration: "2019-2022",
      details: "Research focused on nanotechnology, process intensification, and sustainable energy solutions",
    },
    {
      degree: "Master of Technology (M.Tech)",
      specialization: "Chemical Engineering",
      institution: "University Institute of Chemical Technology, Jalgaon",
      duration: "2016-2018",
      details: "Specialized in process design and optimization",
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Chemical Engineering",
      institution: "University Institute of Chemical Technology, Jalgaon",
      duration: "2012-2016",
      details: "Comprehensive study of chemical engineering fundamentals and industrial processes",
    },
  ];

  return (
    <section className="py-8 bg-white rounded-xl shadow mb-4 px-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Education</h2>


      {/* Education Section */}<section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Academic Qualifications</h2>
        <div className="grid gap-6">
          {educationDetails.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{edu.degree}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{edu.specialization}</p>
                      <p className="text-base text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm">{edu.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </section>
  );
}
