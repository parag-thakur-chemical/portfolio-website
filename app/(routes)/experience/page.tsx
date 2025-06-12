import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ExperiencePage() {
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
      role: "Research Fellow (Full Time)",
      organization: "Visvesvaraya National Institute of Technology, Nagpur",
      duration: "August 2018 - July 2022",
      details: "Ph.D. research in nanotechnology and process intensification",
    },
    {
      role: "Research Intern (Full Time)",
      organization: "Bhabha Atomic Research Centre, Mumbai",
      duration: "July 2017 - June 2018",
      details: "Research in microreactors and separation processes",
    },
  ];

  const administrativeRoles = {
    institute: [
      "Member, BTech and M Sc Admission committee through JoSAA/CSAB 2025",
      "Mentor, Capacity Building for Design & Entrepreneurship Development",
      "Member, B Tech I, Fee Remission Committee (2023-24, 2024-25)",
      "Member, Anti-Ragging Committee, Boys hostel (Gajjar Bhavan)",
    ],
    department: [
      "Member-Secretary, Committee for Higher Studies/Career Counselling",
      "Member-Secretary, Committee for Accreditation & Academic Audit",
      "Member-Secretary, Committee for Utilization of Various Open & Free Source Software",
      "Department Coordinator, Career Development Cell (2024-2026)",
      "Department Coordinator, Departmental website/social media update, Media Cell",
      "Co-Chairperson, BIS Standards Club",
    ],
  };

  const teachingExperience = {
    theory: [
      "Data Science for Chemical Engineers (CH 374), BTech 3rd year-V Sem",
      "Introduction to Macro-Molecules (CH 252), BTech 2nd year-III Sem",
      "Programming for Chemical Engineers (CH 108), BTech 1st year-II Sem",
      "Nanomaterials Synthesis by Chemical Methods (CH 427), BTech 4th year-VII Sem",
      "Engineering Mathematics (CH 202), BTech 2nd year-III Sem",
    ],
    practicals: [
      "Heat Transfer laboratory (CH-205), BTech 2nd year-III Sem",
      "Fluid flow operations laboratory (CH 203), BTech 2nd year-III Sem",
      "Programming for Chemical Engineers (CH 108), BTech 1st year-II Sem",
      "Mass Transfer laboratory-II (CH-301), BTech 3rd year-V Sem",
      "Chemical Engineering laboratory-I (CHCH-104), MTech 1st year-I Sem",
    ],
  };

  return (
    <div className="container mx-auto py-6 sm:py-8 space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Professional Experience</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          A comprehensive overview of my academic and professional journey
        </p>
      </div>

      {/* Professional Experience Section */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Professional Journey</h2>
        <div className="grid gap-4">
          {professionalExperience.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{exp.role}</CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">{exp.organization}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit">{exp.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">{exp.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Administrative Roles Section */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Administrative Roles</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Institute Level</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {administrativeRoles.institute.map((role, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-sm sm:text-base text-muted-foreground">•</span>
                    <p className="text-sm sm:text-base">{role}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Department Level</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {administrativeRoles.department.map((role, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-sm sm:text-base text-muted-foreground">•</span>
                    <p className="text-sm sm:text-base">{role}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Teaching Experience Section */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Teaching Experience</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Theory Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {teachingExperience.theory.map((course, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-sm sm:text-base text-muted-foreground">•</span>
                    <p className="text-sm sm:text-base">{course}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Laboratory Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {teachingExperience.practicals.map((course, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-sm sm:text-base text-muted-foreground">•</span>
                    <p className="text-sm sm:text-base">{course}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 