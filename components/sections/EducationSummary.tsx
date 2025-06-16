import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

  const additionalTraining = [
    {
      title: "Faculty Development Program on Education and Institutional Development",
      organization: "SVNIT, Surat",
      duration: "May 2024",
      details: "One week program focusing on educational methodologies and institutional development",
    },
    {
      title: "GIAN Program on Greener and Cleaner Ultrasonic Process",
      organization: "NIT, Warangal",
      duration: "June-July 2022",
      details: "International program on nanomaterials and nano-pharmaceuticals production",
    },
    {
      title: "GIAN Program on Green Processing & Synthesis",
      organization: "VNIT, Nagpur",
      duration: "May 2022",
      details: "Advanced training in green processing techniques",
    },
    {
      title: "AICTE ATAL Workshop on Nanotechnology",
      organization: "VNIT, Nagpur",
      duration: "August 2020",
      details: "Comprehensive workshop on nanotechnology for sustainable development (Secured A+ Grade)",
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

      <Separator className="my-8" />

      {/* Additional Training */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Professional Development</h2>
        <div className="grid gap-6">
          {additionalTraining.map((training, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{training.title}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{training.organization}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm">{training.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base">{training.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </section>
  );
} 