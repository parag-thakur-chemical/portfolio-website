import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExperiencePage() {

  const administrativeRoles = {
    institute: [
      {
        title: "Warden , Bhabha Bhavan",
        subtitle: "8/10/2025 - Till Date",
      },
      {
         title: "Member Secretary, Orientation Program for BTech , MTech , MBA and PhD students admitted in Year 2025-26",
         subtitle: "2025-26"
      },
      {
        title: "Member, BTech and M Sc Admission committee through JoSAA/CSAB 2025",
        subtitle: "Academic Year 2025-26"
      },
      {
        title: "Mentor, Capacity Building for Design & Entrepreneurship Development",
        subtitle: "Academic Year 2025-26"
      },
      {
        title: "Member, B Tech I, Fee Remission Committee",
        subtitle: "2023-24, 2024-25"
      },
      {
        title: "Member, Anti-Ragging Committee, Boys hostel (Gajjar Bhavan)",
        subtitle: "Academic Year 2025-26"
      },
      {
        title: "Invigilation duties",
        items: [
          "Junior Assistant Exam (15-17 February 2025)",
          "NEET (UG)-2025 (4 May 2025)"
        ]
      },
      {
        title: "Member, PhD Thesis Evaluation Committee",
        items: [
          "Mr. Gajera Jeet Bhovanbhai (Roll No. D20MA007), Date: 10/04/2024",
          "Ms. Rashmita Behera (Roll No. DS19CH001), Date: 06/06/2025"
        ]
      },
      {
        title: "Member, Organising Committee, 21st Convocation",
        subtitle:"SVNIT, Surat"
      },
      {
        title: "Member, Committee for National Institutional Ranking Framework (NIRF)",
      },
    ],
    department: [
      {
        title: "Member-Secretary, Committee for Higher Studies/Career Counselling",
        subtitle: "from 3/10/24 to till date"
      },
      {
        title: "Member-Secretary, Committee for Accreditation & Academic Audit",
        subtitle: "from 3/10/24 to till date"
      },
      {
        title: "Member-Secretary, Committee for Utilization of Various Open & Free Source Software",
        subtitle: "from 3/10/24 to till date"
      },
      {
        title: "Member, PhD Admission Committee",
        subtitle: "Dec 2023, June 2024, July 2025"
      },
      {
        title: "Member, PhD admission (QIP)",
        subtitle: "2024-25"
      },
      {
        title: "Member, MTech Admission Committee",
        subtitle: "2024-25"
      },
      {
        title: "Department Coordinator, Internship of UG & PG students",
        subtitle: "From 12/01/24 to till date"
      },
      {
        title: "Department Coordinator, Career Development Cell (formally Training & Placement Cell)",
        subtitle: "2024-2026"
      },
      {
        title: "Department Coordinator, Departmental website/social media update, Media Cell"
      },
      {
        title: "Co-Chairperson, BIS Standards Club",
        subtitle: "from 26/12/23 to till date"
      },
      {
        title: "Department Coordinator, Orientation Program",
        items: [
          "BTech 1st year (16-18 August 2024)",
          "MTech 1st year and PhD 1st year (30-31 August 2024)"
        ]
      },
      {
        title: "Lab Co-In charge: CAD lab",
        subtitle: "New building and old building"
      },
      {
        title: "PhD Examiner",
        items: [
          "Ms. Monali Chhatbar (D18CH006)",
          "Ms. Rashmita Patel (D23CH001)",
          "Mr. Arth Gandhi (D23CH002)",
          "Mr. Abhishek Mehta (D23CH003)"
        ]
      },
      {
        title: "MTech Examiner",
        items: [
          "Jay Pandya (P22CH009)",
          "Shivam Modi (P22CH001)"
        ]
      },
      {
        title: "Purchase Committee member",
        items: [
          "FO-MD setup fabrication (DoChE/181/2024) - Rs. 2,48,980",
          "Liqui-CelTM EXF 2.5X8 Series membrane contactor GS01, Polypropylene X50 (DoChE/562/2024) - Rs. 4,90,000",
          "Osmometer (DoChE/113/2024) - Rs. 7,00,000",
          "Probe-type Sonicator - Rs. 8,00,000",
          "Thermal Conductivity analyzer - Rs. 3,00,000"
        ]
      }
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
              <ul className="space-y-6">
                {administrativeRoles.institute.map((role, index) => (
                  <li key={index} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground mt-1">•</span>
                      <div>
                        <p className="text-base font-medium">{role.title}</p>
                        {role.subtitle && (
                          <p className="text-sm text-muted-foreground mt-1">{role.subtitle}</p>
                        )}
                      </div>
                    </div>
                    {role.items && (
                      <ul className="ml-6 space-y-2">
                        {role.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-muted-foreground mt-1">◦</span>
                            <p className="text-sm">{item}</p>
                          </li>
                        ))}
                      </ul>
                    )}
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
              <ul className="space-y-6">
                {administrativeRoles.department.map((role, index) => (
                  <li key={index} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground mt-1">•</span>
                      <div>
                        <p className="text-base font-medium">{role.title}</p>
                        {role.subtitle && (
                          <p className="text-sm text-muted-foreground mt-1">{role.subtitle}</p>
                        )}
                      </div>
                    </div>
                    {role.items && (
                      <ul className="ml-6 space-y-2">
                        {role.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-muted-foreground mt-1">◦</span>
                            <p className="text-sm">{item}</p>
                          </li>
                        ))}
                      </ul>
                    )}
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
