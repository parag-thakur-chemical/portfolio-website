import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

export default function TeachingPage() {
  const currentCourses = {
    theory: [
      {
        code: "CH 108",
        name: "Programming for Chemical Engineers (Developed Curriculum)",
        level: "BTech 1st year-II Sem",
        semester: "2024-25, 2025-26",
      },
      {
        code: "CH 202",
        name: "Engineering Mathematics",
        level: "BTech 2nd year-III Sem",
        semester: "2023-24",
      },
      {
        code: "CH 252",
        name: "Introduction to Macro-Molecules (Developed Curriculum)",
        level: "BTech 2nd year-III Sem",
        semester: "2024-25 to 2026-27",
      },
      {
        code: "CH 374",
        name: "Data Science for Chemical Engineers (Developed Curriculum)",
        level: "BTech 3rd year-V Sem",
        semester: "2025-26, 2026-27",
      },
      {
        code: "CH 427",
        name: "Nanomaterials Synthesis by Chemical Method",
        level: "BTech 4th year-VII Sem",
        semester: "2024-25",
      },
    ],
    practicals: [
      {
        code: "CH 108",
        name: "Programming for Chemical Engineers",
        level: "BTech 1st year-II Sem",
        semester: "2024-25, 2025-26",
      },
      {
        code: "CH 203",
        name: "Fluid flow operations",
        level: "BTech 2nd year-III Sem",
        semester: "2025-26, 2026-27",
      },
      {
        code: "CH 204",
        name: "Chemical Reaction Engg-I",
        level: "BTech 2nd year-IV Sem",
        semester: "2023-24",
      },
      {
        code: "CH 205",
        name: "Heat Transfer",
        level: "BTech 2nd year-III Sem",
        semester: "2024-25 to 2026-27",
      },
      {
        code: "CH 206",
        name: "Mass Transfer",
        level: "BTech 2nd year-IV Sem",
        semester: "2023-24",
      },
      {
        code: "CH 301",
        name: "Mass Transfer-II",
        level: "BTech 3rd year-V Sem",
        semester: "2024-25",
      },
      {
        code: "CH 302",
        name: "Instrumentation & Process Control",
        level: "BTech 3rd year-VI Sem",
        semester: "2023-24",
      },
      {
        code: "CHCH 104",
        name: "Chemical Engg-I",
        level: "MTech 1st year-I Sem",
        semester: "2024-25",
      },
    ],
  };

  const studentGuidance = {
    phd: [
      "Jayraj Rana (D25CH001) — July 2025, Full-Time, Supervisor (Co-Supervisor: Dr. Arvind Mungray)",
      "Jay Narang (D25CH002) — July 2025, Full-Time, Co-Supervisor (Supervisor: Dr. Arvind Mungray)",
      "Piyush Laxkar (D26CH002) — July 2026, Full-Time, Supervisor (Co-Supervisor: Dr. Arvind Mungray)",
      "Vikas Gupta (D26CH003) — July 2026, Full-Time, Supervisor (Co-Supervisor: Dr. Arvind Mungray)",
      "Ashwini Kharche (D26CH007) — July 2026, Part-Time, Supervisor (Co-Supervisor: Dr. Amrut Mulay)",
      "Sreshtha Paul (D26CH010) — July 2026, Full-Time, Supervisor (Co-Supervisor: Dr. Lokesh Ramteke)",
    ],
    mtech: [
      "Raj Parmar (P24CH005) — Co-Guide with Dr. Arvind Mungray — Completed (July 2026)",
      "Nishit Patel (P24CH004) — Co-Guide with Dr. V. N. Lad — Completed (July 2026)",
      "Alok Mishra — Co-Guide with Dr. Arvind Mungray — Ongoing (July 2027)",
    ],
    btechNotes: [
      "Guided 9 B.Tech students for bachelor's projects; currently guiding 10 B.Tech students",
      "Organized mock interview programs for 100+ B.Tech students (2024, 2025, 2026)",
    ],
  };

  const guestLectures = [
    "Dr. Nirav Lekinwala, Senior Associate, Air Quality Sector, CSTEP, Bengaluru (25 June 2026)",
    "Dr. Bharat Jain, Member Secretary, Gujarat Cleaner Production Centre (GCPC), Gandhinagar (25 March 2026)",
    "Mr. Aashish Mehta, Vice President, Luthra Group, Surat (22 April 2026)",
  ];

  const industrialVisits = [
    "JK Lakshmi Cements Plant, Kadodara, Surat (10 August 2024)",
    "ONGC, Hazira, Surat (16 February 2025)",
  ];

  const studentAchievements = [
    "Research paper by PhD Scholar Mr. Jayraj Rana accepted for presentation at the 2nd Global Cleaner Production Conference, Melia Sitges, Spain, organized by Journal of Cleaner Production, ELSEVIER (IF 10.7, Q1), 26–29 October 2026",
    "Guided B.Tech student team that received ₹20,000 project funding from ASHINE SVNIT for development of Stable Hybrid Nanofluids, 2025-26",
    "Mentored B.Tech student team that secured 2nd place at ASTHRA — National level Technical Symposium, Dept. of Chemical Engg, BVRIT, Narsapur, Hyderabad (17–18 Oct 2025)",
  ];

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Teaching & Mentoring</h1>
        <p className="text-muted-foreground">
          Academic responsibilities and student guidance
        </p>
      </div>

      {/* Current Courses */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Courses Taught</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <CardTitle>Theory Courses</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentCourses.theory.map((course, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{course.name}</p>
                        <p className="text-sm text-muted-foreground">{course.code}</p>
                      </div>
                      <Badge variant="secondary">{course.semester}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.level}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <CardTitle>Laboratory Courses</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentCourses.practicals.map((course, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{course.name}</p>
                        <p className="text-sm text-muted-foreground">{course.code}</p>
                      </div>
                      <Badge variant="secondary">{course.semester}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.level}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Student Guidance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Student Guidance</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <CardTitle>PhD Students (Ongoing) — 6</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {studentGuidance.phd.map((student, index) => (
                  <li key={index} className="text-muted-foreground text-sm">{student}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <CardTitle>MTech Students</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {studentGuidance.mtech.map((student, index) => (
                  <li key={index} className="text-muted-foreground text-sm">{student}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <CardTitle>BTech Project Guidance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {studentGuidance.btechNotes.map((note, index) => (
                  <li key={index} className="text-muted-foreground">{note}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Guest Lectures Organized at DoChE, SVNIT</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc list-inside space-y-2">
              {guestLectures.map((item, index) => (
                <li key={index} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Industrial Visits Organized</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc list-inside space-y-2">
              {industrialVisits.map((item, index) => (
                <li key={index} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Students Achievements</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc list-inside space-y-2">
              {studentAchievements.map((item, index) => (
                <li key={index} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
