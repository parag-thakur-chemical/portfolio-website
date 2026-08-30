import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExperiencePage() {

  const administrativeRoles = {
    institute: [
      {
        title: "Warden, Bhabha Bhawan — Boys Hostel",
        subtitle: "From 4 Oct 2025 – Present",
      },
      {
        title: "Co-Chairperson, Mindbend-2026 — Technical Event of SVNIT",
        subtitle: "From 12 Jan 2026 – Present",
      },
      {
        title: "Co-Chairperson, Chemical Engineering Society (Student Chapter of AIChE)",
        subtitle: "From 12 Jan 2026 – Present",
      },
      {
        title: "Member Secretary, Orientation Program for First year UG, PG & PhD students",
        subtitle: "2024, 2025, 2026",
      },
      {
        title: "Member, Committee for National Institutional Ranking Framework (NIRF)",
        subtitle: "2025-26, 2026-27",
      },
      {
        title: "Member, B.Tech and M.Sc First Year Admission committee through JoSAA/CSAB",
        subtitle: "2025-26, 2026-27",
      },
      {
        title: "Member, B Tech I Fee Remission Committee",
        subtitle: "2023-24, 2024-25, 2025-26",
      },
      {
        title: "Member, Institute Level Anti-Ragging Committee",
        subtitle: "2026-27",
      },
      {
        title: "Member, Hostel Level Anti-Ragging Committee, Boys hostel (Gajjar Bhavan)",
        subtitle: "2024-25, 2025-26",
      },
      {
        title: "Member, Stock Verification Committee, Narmad Bhawan, ABV Bhawan",
        subtitle: "2025-26",
      },
      {
        title: "Member, Mess Inspection Committee, ABV Bhawan",
        subtitle: "2025-26",
      },
      {
        title: "Member, Invitation & Sponsorship Committee, Kashish-2025",
        subtitle: "8–9 Oct 2025",
      },
      {
        title: "Member, Organizing Committee, Sparsh-2026",
        subtitle: "11–13 April 2026",
      },
      {
        title: "Member, Disciplinary Committee and Registration Sub-committee, Convocation",
        subtitle: "21st Convocation (14 Oct 2025); 22nd Convocation (18 Aug 2026)",
      },
      {
        title: "Single Point of Contact, Biotechnology Theme, Prime Minister Research Chair Scheme",
        subtitle: "2026",
      },
      {
        title: "Member, Committee for Tender of networking work at various departments & Sections",
        subtitle: "2025-26",
      },
      {
        title: "Member, Document verification / Scrutiny / Paper Checking Committees (Establishment)",
        subtitle: "Faculty recruitment, Superintendent recruitment, Assistant Professor-Level 10 & Assistant Registrar (2025–2026)",
      },
      {
        title: "Mentor, Capacity Building on Design and Entrepreneurship (CBDE)",
        subtitle: "2025-26",
      },
      {
        title: "Invigilation Duties",
        items: [
          "NEET 25 (4 May 2025); NEET 26 (3 May 2026 & 21 June 2026)",
          "Junior Assistant Exam (15–17 February 2026)",
        ],
      },
      {
        title: "Presiding Officer",
        items: [
          "Surat Municipal Corporation Elections (26 April 2026)",
          "Gujarat Legislative Assembly Elections (7 May 2024)",
        ],
      },
      {
        title: "Member, PhD Thesis Evaluation Committee",
        items: [
          "Mr. Gajera Jeet Bhovanbhai (D20MA007), Date: 10/04/2024",
          "Ms. Rashmita Behera (DS19CH001), Date: 06/06/2025",
          "Ms. Shobha Rawat (DS19CE012), Date: 06/06/2025",
          "Ms. Nidhi (D22MA004), Date: 08/07/2026",
        ],
      },
    ],
    department: [
      {
        title: "Lab Co-In charge: CAD lab",
        subtitle: "New building and old building",
      },
      {
        title: "Department Coordinator, Career Development Cell (formally Training & Placement Cell)",
        subtitle: "19 April 2024 – Present",
      },
      {
        title: "Department Coordinator, Internship of UG & PG students",
        subtitle: "From 12/01/24 – Present",
      },
      {
        title: "Department Coordinator, Departmental website/social media update, Media Cell",
        subtitle: "August 2024 – Present",
      },
      {
        title: "Department Coordinator, Orientation Program",
        items: [
          "BTech 1st year (16–18 August 2024)",
          "MTech 1st year and PhD 1st year (30–31 August 2024)",
        ],
      },
      {
        title: "Member-Secretary, Committee for Higher Studies/Career Counselling",
        subtitle: "from 3/10/24 – Present",
      },
      {
        title: "Member-Secretary, Committee for Accreditation & Academic Audit",
        subtitle: "from 3/10/24 – Present",
      },
      {
        title: "Member-Secretary, Committee for Utilization of Various Open & Free Source Software",
        subtitle: "from 3/10/24 – Present",
      },
      {
        title: "Member-Secretary, Committee to review the admission rules of PhD program",
        subtitle: "2025-26",
      },
      {
        title: "Co-Chairperson, BIS Standards Club",
        subtitle: "from 26/12/23 – Present",
      },
      {
        title: "Member, Selection Committee, Teaching Assistant",
        subtitle: "2025-26 (16-06-2025; 18-08-2025; 21-01-2026)",
      },
      {
        title: "Member, PhD Admission Committee",
        subtitle: "Dec 2023, June 2024, Jan 2025, July 2025, Jan 2026, July 2026",
      },
      {
        title: "Member, Committee for Swachhotsav",
        subtitle: "17/09/2025 to 2/10/2025",
      },
      {
        title: "Document Verification Committee Member",
        items: [
          "MTech Admission (Institute Spot Round), 2024-25, 2025-26",
          "PhD admission (QIP) 2024-25, 2025-26",
          "PhD admission: 2026-27 Autumn Semester (Phase-III); AY 2023-24 Spring Semester",
        ],
      },
      {
        title: "Application Scrutiny Committee Member",
        items: [
          "MTech Admission (Institute Spot Round), 2024-25, 2025-26, 2026-27",
          "PhD admission, 2026-27 Autumn Semester (Phase-III)",
          "PhD admission, 2024-25 / 2025-26 (various phases)",
          "Summer Internship 2026",
        ],
      },
      {
        title: "PhD Examiner",
        items: [
          "Ms. Monali Chhatbar (D18CH006)",
          "Ms. Rashmita Patel (D23CH001)",
          "Mr. Arth Gandhi (D23CH002)",
          "Mr. Abhishek Mehta (D23CH003)",
          "Mr. Amit Kumar (D21CH003)",
          "Ms. Priti Sakhare (D24CH002)",
          "Mr. Bhargav Shukla (D24CH005)",
        ],
      },
      {
        title: "MTech Examiner",
        items: [
          "Mr. Jay Pandya (P22CH009)",
          "Mr. Shivam Modi (P22CH001)",
        ],
      },
      {
        title: "Purchase Committee member",
        items: [
          "FO-MD setup fabrication (DoChE/181/2024) — approx. ₹2,48,980",
          "Liqui-CelTM EXF 2.5X8 Series membrane contactor (DoChE/562/2024) — approx. ₹4,90,000",
          "Osmometer (DoChE/113/2024) — approx. ₹7,00,000",
          "Probe-type Sonicator — approx. ₹6,66,000",
          "10 Desktop PCs — approx. ₹5,00,000",
        ],
      },
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
