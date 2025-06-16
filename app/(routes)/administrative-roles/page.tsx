import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExperiencePage() {

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

  return (
    <div className="space-y-12">

      {/* Administrative Roles Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Administrative Roles</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Institute Level</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {administrativeRoles.institute.map((role, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-base">{role}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Department Level</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {administrativeRoles.department.map((role, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <p className="text-base">{role}</p>
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