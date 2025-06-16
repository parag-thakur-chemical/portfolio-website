import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

export default function TeachingPage() {
  const currentCourses = {
    theory: [
      {
        code: "CH 374",
        name: "Data Science for Chemical Engineers",
        level: "BTech 3rd year-V Sem",
        semester: "2025-26",
      },
      {
        code: "CH 252",
        name: "Introduction to Macro-Molecules",
        level: "BTech 2nd year-III Sem",
        semester: "2024-25, 2025-26",
      },
      {
        code: "CH 108",
        name: "Programming for Chemical Engineers",
        level: "BTech 1st year-II Sem",
        semester: "2024-25",
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
        code: "CH-205",
        name: "Heat Transfer laboratory",
        level: "BTech 2nd year-III Sem",
        semester: "2024-25, 2025-26",
      },
      {
        code: "CH 203",
        name: "Fluid flow operations laboratory",
        level: "BTech 2nd year-III Sem",
        semester: "2025-26",
      },
      {
        code: "CH-301",
        name: "Mass Transfer laboratory-II",
        level: "BTech 3rd year-V Sem",
        semester: "2024-25",
      },
      {
        code: "CHCH-104",
        name: "Chemical Engineering laboratory-I",
        level: "MTech 1st year-I Sem",
        semester: "2024-25",
      },
    ],
  };

  const studentGuidance = {
    phd: [
      "Jayraj Rana (Registered in May 2025)",
      "Jay Narang (Registered in May 2025)",
    ],
    mtech: [
      "Raj Parmar (P24CH005)",
      "Nishit Kumar Patel (P24CH004)",
    ],
    btech: [
      "Harsh Bhatia (U22CH047)",
      "Archit Kulshrestha (U22CH051)",
      "Prathamesh Vyas (U22CH053)",
      "Aman Singh (U22CH062)",
      "Harish Khandelwal (U22CH073)",
      "Sahil Bharodiya (U22CH074)",
    ],
    summerInterns: [
      "Anshu Mishra (U22CH094)",
      "Yash Dumbhare (U23CH033)",
      "Dushyant Singh Hada (U23CH034)",
    ],
  };

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
        <h2 className="text-2xl font-semibold mb-4">Current Courses</h2>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <CardTitle>BTech Students</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {studentGuidance.btech.map((student, index) => (
                  <li key={index} className="text-muted-foreground">{student}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <CardTitle>Summer Interns</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {studentGuidance.summerInterns.map((student, index) => (
                  <li key={index} className="text-muted-foreground">{student}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 