import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function EducationPage() {
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
    <div className="container mx-auto py-6 sm:py-8 space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Educational Background</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Academic journey and professional development
        </p>
      </div>

      {/* Academic Qualifications */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Academic Qualifications</h2>
        <div className="grid gap-4">
          {educationDetails.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{edu.degree}</CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">{edu.specialization}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{edu.institution}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit">{edu.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Additional Training */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Professional Development</h2>
        <div className="grid gap-4">
          {additionalTraining.map((training, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{training.title}</CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">{training.organization}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit">{training.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">{training.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 