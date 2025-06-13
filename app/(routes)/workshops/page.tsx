import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function WorkshopsPage() {
  const workshopsOrganized = [
    {
      title: "2nd Edition of One-week Short Term Training Program on 'Instrumentation Techniques for the environmental remediation and hands-on Training' (ITER-2025)",
      organization: "SVNIT, Surat",
      date: "May 19-23, 2025",
      details: "Workshop on instrumentation techniques and environmental remediation",
    },
    {
      title: "1st Edition of 6-days Short Term Training Program (STTP) on 'Introduction to chemical engineering softwares' (IChES-25)",
      organization: "SVNIT, Surat",
      date: "January 11-12, 18-19, 25, February 1, 2025",
      details: "Training program on chemical engineering software applications",
    },
    {
      title: "1st Edition of One-week Short Term Training Program on 'Instrumentation Techniques for the environmental remediation and hands-on Training' (ITER-2024)",
      organization: "SVNIT, Surat",
      date: "May 13-17, 2024",
      details: "Workshop on instrumentation techniques and environmental remediation",
    },
  ];

  const workshopsAttended = [
    {
      title: "Empowering educators: student centric teaching pedagogy",
      organization: "SVNIT, Surat",
      date: "June 9-13, 2025",
      details: "One week workshop on teaching pedagogy",
    },
    {
      title: "REINVENT Workshop",
      organization: "SVNIT, Surat",
      date: "May 3, 2025",
      details: "One day workshop on innovation",
    },
    {
      title: "Pedagogy to promote design and entrepreneurship under CBDE, MMTTP",
      organization: "ABV-IIITM, Gwalior",
      date: "March 6-7, 2025",
      details: "Two days workshop on pedagogy and entrepreneurship",
    },
    {
      title: "Recent pedagogies for better learning",
      organization: "Institute Guest House, SVNIT",
      date: "July 22-25, 2024",
      details: "4-day faculty development programme",
    },
    {
      title: "Education and Institutional development (EDID-2024)",
      organization: "SVNIT, Surat",
      date: "May 15-21, 2024",
      details: "One week faculty development program",
    },
    {
      title: "Cyber-attacks and defense",
      organization: "C-DAC, Noida",
      date: "January 2-6, 2024",
      details: "One Week faculty Development program",
    },
    {
      title: "Greener and cleaner ultrasonic process for the production of nanomaterials and nano-pharmaceuticals",
      organization: "NIT, Warangal",
      date: "June 27 - July 2, 2022",
      details: "1 week GIAN (Global initiative of Academic network) with Foreign Faculty: Manickam Sivakumar, Brunei",
    },
    {
      title: "Green Processing & Synthesis",
      organization: "VNIT, Nagpur",
      date: "May 2-6, 2022",
      details: "1 week GIAN (Global initiative of Academic network) with Foreign Faculty: Prof. Ashok Kumar Muthupandian",
    },
    {
      title: "Writing and Evaluation of Scientific Research Articles",
      organization: "Research Promotion Cell, Seth Kesarimal Porwal College & Department of Chemistry, Taywade College",
      date: "July 31, 2021",
      details: "National Level Webinar",
    },
    {
      title: "Nanotechnology for the sustainable development and green processes",
      organization: "VNIT, Nagpur",
      date: "August 24-28, 2020",
      details: "AICTE ATAL sponsored 1 week workshop (Secured A+ Grade)",
    },
    {
      title: "Why manuscript get rejected",
      organization: "NIT, Jalandhar",
      date: "August 27, 2020",
      details: "1 day workshop",
    },
    {
      title: "Remote Sensing Applications in Agricultural Water Management",
      organization: "ISRO-IIRS",
      date: "August 3-7, 2020",
      details: "63rd ISRO-IIRS Outreach Program (Secured A grade)",
    },
    {
      title: "Opportunities for Chemist and Chemical Engineers in Chemical and Allied Industries",
      organization: "VJTI, Mumbai",
      date: "July 18, 2020",
      details: "Webinar",
    },
    {
      title: "CFD with OpenFOAM",
      organization: "VNIT, Nagpur",
      date: "July 23-28, 2020",
      details: "1-week STTP",
    },
    {
      title: "Pedagogy of Scientific Writing, Reporting and Scholarly Networks",
      organization: "Feroze Gandhi Institute of Engineering & Technology, Rae-Bareli",
      date: "June 19-23, 2020",
      details: "1 Week FDP",
    },
    {
      title: "Understanding open educational resources",
      organization: "Commonwealth of Learning, Canada",
      date: "June 23, 2020",
      details: "1 day webinar",
    },
    {
      title: "LATEX",
      organization: "IIT Bombay",
      date: "September 24 - November 11, 2019",
      details: "7 Week online course",
    },
    {
      title: "TGA, DSC, and DLS Training",
      organization: "VNIT, Nagpur",
      date: "April 3-6, 2019",
      details: "Two-day Training Session on TGA and DSC and Two-day Training on DLS",
    },
    {
      title: "DMA & Mechanical Hybrid Rheometer",
      organization: "TA Waters, Bangalore",
      date: "March 12-13, 2019",
      details: "Two days Training Session",
    },
    {
      title: "Process Intensification",
      organization: "NIT, Warangal",
      date: "January 7-11, 2019",
      details: "One week GIAN Workshop with Foreign Faculty: Andrzej Górak",
    },
    {
      title: "Python Workshop",
      organization: "VNIT, Nagpur",
      date: "August 10-12, 2018",
      details: "Three days' Workshop",
    },
    {
      title: "Advanced Industrial Waste Management Techniques",
      organization: "University Institute of Chemical Technology, North Maharashtra University, Jalgaon",
      date: "May 14-19, 2018",
      details: "One-week short term training program (STTP)",
    },
    {
      title: "Aspen plus, COMSOL, HINT, ANSYS FLUENT",
      organization: "Chemical Engineering Department, IIT Bombay",
      date: "2017",
      details: "Two days Workshops at Azeotropy 2017",
    },
    {
      title: "Process Intensification: Fundamentals to Applications",
      organization: "University Institute of Chemical Technology, North Maharashtra University, Jalgaon",
      date: "December 26, 2016 - January 4, 2017",
      details: "Two-week short term training program (STTP)",
    },
    {
      title: "ASPEN Workshop",
      organization: "Chemical Engineering Department, IIT Bombay",
      date: "2015",
      details: "Two days' Workshop at Azeotropy 2015",
    },
    {
      title: "COMSOL Workshop",
      organization: "U.I.C.T., Jalgaon",
      date: "2014",
      details: "One Day Workshop",
    },
  ];

  const expertLectures = [
    {
      title: "Expert Lecture at International Conference on Nano Structured Materials and Nanocomposites (ICN 2025)",
      organization: "Mahatma Gandhi University, Kottayam, Kerala",
      date: "September 12-14, 2025",
      details: "International Conference presentation",
    },
    {
      title: "Expert Lecture at Instrumentation Techniques for the environmental remediation and hands-on Training (ITER-2025)",
      organization: "SVNIT, Surat",
      date: "May 21, 2025",
      details: "2nd Edition of One-week STTP",
    },
    {
      title: "Expert Lecture at Introduction to chemical engineering software (IChES-25)",
      organization: "SVNIT, Surat",
      date: "January 12, 2025",
      details: "1st Edition of 6-days STTP",
    },
    {
      title: "Expert Lecture at Nanotechnology: Trends and Application",
      organization: "Jawaharlal Darda Institute of Engineering and Technology, Yavatmal",
      date: "January 14, 2025",
      details: "One-week STTP",
    },
    {
      title: "Expert Lecture at Instrumentation Techniques for the environmental remediation and hands-on Training (ITER-2024)",
      organization: "SVNIT, Surat",
      date: "May 15, 2024",
      details: "1st Edition of One-week STTP",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Workshops & Training Programs</h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Professional development through workshops, training programs, and expert lectures
        </p>
      </div>

      {/* Workshops Organized */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Workshops & STTP Organized</h2>
        <div className="grid gap-6">
          {workshopsOrganized.map((workshop, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{workshop.title}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{workshop.organization}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm">{workshop.date}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base">{workshop.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Expert Lectures */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Expert Lectures Delivered</h2>
        <div className="grid gap-6">
          {expertLectures.map((lecture, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{lecture.title}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{lecture.organization}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm">{lecture.date}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base">{lecture.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Workshops Attended */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Workshops & STTP Attended</h2>
        <div className="grid gap-6">
          {workshopsAttended.map((workshop, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{workshop.title}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{workshop.organization}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm">{workshop.date}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base">{workshop.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 