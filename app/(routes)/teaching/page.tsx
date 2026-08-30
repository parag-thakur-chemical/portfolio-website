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
        semester: "2025-26 to 2026-27",
      },
      {
        code: "CH 427",
        name: "Nanomaterials Synthesis by Chemical Methods",
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
        name: "Fluid Flow Operations",
        level: "BTech 2nd year-III Sem",
        semester: "2025-26, 2026-27",
      },
      {
        code: "CH 204",
        name: "Chemical Reaction Engineering-I",
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
        name: "Chemical Engineering-I",
        level: "MTech 1st year-I Sem",
        semester: "2024-25",
      },
    ],
  };

  const studentGuidance = {
    phd: [
      "Jayraj Rana (D25CH001) - Supervisor",
      "Jay Narang (D25CH002) - Co-Supervisor",
      "Piyush Laxkar (D26CH002) - Supervisor",
      "Vikas Gupta (D26CH003) - Supervisor",
      "Ashwini Kharche (D26CH007) - Supervisor",
      "Sreshtha Paul (D26CH010) - Supervisor",
    ],
    mtech: [
      "Raj Parmar (P24CH005) - Completed",
      "Nishit Patel (P24CH004) - Completed",
      "Alok Mishra - Ongoing (July 2027)",
    ],
    highlights: [
      "Guided 9 BTech students for completed project work and currently guiding 10 BTech students.",
      "Organized mock interview programs for 100+ BTech students in 2024, 2025 and 2026.",
    ],
  };

  const guestLecturesOrganized = [
    "Dr. Nirav Lekinwala, CSTEP Bengaluru (25 June 2026)",
    "Dr. Bharat Jain, GCPC Gandhinagar (25 March 2026)",
    "Mr. Aashish Mehta, Luthra Group Surat (22 April 2026)",
  ];

  const industrialVisits = [
    "JK Lakshmi Cements Plant, Kadodara, Surat (10 August 2024)",
    "ONGC, Hazira, Surat (16 February 2025)",
  ];

  const studentAchievements = [
    "PhD scholar Jayraj Rana's paper accepted at 2nd Global Cleaner Production Conference, Spain (Oct 2026).",
    "Guided BTech team receiving ₹20,000 ASHINE SVNIT project funding (2025-26).",
    "Mentored BTech team securing 2nd place at ASTHRA-A national symposium (Oct 2025).",
  ];

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Teaching & Mentoring</h1>
        <p className="text-muted-foreground">Academic responsibilities and student guidance</p>
      </div>

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
                    <div className="flex justify-between items-start gap-3">
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
                    <div className="flex justify-between items-start gap-3">
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

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Student Guidance & Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <CardTitle>PhD Students</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {studentGuidance.phd.map((student, index) => (
                  <li key={index} className="text-muted-foreground">{student}</li>
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
                  <li key={index} className="text-muted-foreground">{student}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <CardTitle>Guidance Highlights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {studentGuidance.highlights.map((item, index) => (
                  <li key={index} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Student Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {studentAchievements.map((item, index) => (
                <li key={index} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Academic Activities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Guest Lectures Organized at DoChE, SVNIT</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {guestLecturesOrganized.map((lecture, index) => (
                  <li key={index} className="text-muted-foreground">{lecture}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Industrial Visits Organized</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {industrialVisits.map((visit, index) => (
                  <li key={index} className="text-muted-foreground">{visit}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
