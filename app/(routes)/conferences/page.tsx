import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ConferencesPage() {
  const sessionChairRoles = [
    {
      conference: "18th Annual Session of Chemical Engineering Students Congress (SCHEMCON 2022)",
      organization: "NIT, Warangal",
      date: "September 23-24, 2022",
      role: "Session In-charge",
    },
    {
      conference: "International Conference on Education 5.0 - Role of Institution, Industry and Society (ERIIS-2022)",
      organization: "NIT, Warangal",
      date: "October 14-15, 2022",
      role: "Session In-charge",
    },
  ];

  const conferencePresentations = [
    {
      title: "Application of nanofluids for the PVT solar panels",
      conference: "16th International Conference on Advancement in Petrochemical Sector and Empowering Sustainable Development Leading to Viksit Bharat-APM 2025",
      organization: "CIPET: IPT-Lucknow",
      date: "March 8-10, 2025",
      details: "Received Best oral presentation award",
    },
    {
      title: "Experimental analysis of fly ash based nanofluids for CO2 absorption",
      conference: "International Conference on Emerging Materials Trends in Chemistry to Revolutionize Indian Chemical Industries for Viksit Bharat@2047",
      organization: "JECRC University, Jaipur",
      date: "December 19-21, 2024",
      details: "Research presentation on sustainable energy solutions",
    },
    {
      title: "Fly based nanofluids for thermal applications",
      conference: "International Conference on Water & Sustainable Development 2024 (ICWSD 2024)",
      organization: "VNIT, Nagpur",
      date: "November 8-9, 2024",
      details: "Research presentation on thermal applications",
    },
    {
      title: "Experimental and numerical analysis of CO2 absorption processes using fly ash based nanofluids",
      conference: "15th International Conference on Advancement in Polymeric Materials-APM 2025",
      organization: "CIPET: IPT-Ahmedabad",
      date: "March 14-16, 2024",
      details: "Research presentation on CO2 absorption processes",
    },
    {
      title: "Recent trends of CO2 absorption process",
      conference: "6th Conference by Asia-Oceania Sono-chemical Society (AOSS-23)",
      organization: "NIT, Warangal",
      date: "September 28-30, 2023",
      details: "Received Best oral presentation award",
    },
    {
      title: "Experimental and numerical analysis of CO2 absorption processes using fly ash based nanofluids",
      conference: "CHEM-CONFLUX-22",
      organization: "NIT, Prayagraj",
      date: "April 14-16, 2022",
      details: "Received Best oral presentation award",
    },
    {
      title: "Performance assessment of the CNT deposited surfaces for pool boiling application",
      conference: "International Conference on Advances in Sustainable Research for Energy and Environmental Management (ASREEM-2021)",
      organization: "SVNIT, Surat",
      date: "August 6-8, 2021",
      details: "Received Best oral presentation award",
    },
    {
      title: "Synthesis of BNNP+Mxene/Polycarbonate nanocomposite using twin-screw extrusion reactor for thermal property enhancement",
      conference: "International Conference on Advances in Sustainable Research for Energy and Environmental Management (ASREEM-2021)",
      organization: "SVNIT, Surat",
      date: "August 6-8, 2021",
      details: "Research presentation on nanocomposite synthesis",
    },
    {
      title: "Review on the Application of Nanofluids for the Environmental Remediation",
      conference: "International Conference on Advances in Sustainable Research for Energy and Environmental Management (ASREEM-2021)",
      organization: "SVNIT, Surat",
      date: "August 6-8, 2021",
      details: "Review presentation on nanofluids applications",
    },
    {
      title: "Development of efficient CO2 absorption processes using MWCNT based nanofluids",
      conference: "2nd International Conference on Chemical, Bio & Environmental Engineering (CHEMBIOEN-2021)",
      organization: "NIT, Jalandhar",
      date: "August 20-22, 2021",
      details: "Research presentation on CO2 absorption",
    },
    {
      title: "Synthesis of BNNP+Mxene/Polycarbonate nanocomposite using twin-screw extrusion reactor for thermal property enhancement",
      conference: "International Chemical Engineering Conference 2021 (ICheEC 2021)",
      organization: "NIT, Jalandhar",
      date: "September 17-19, 2021",
      details: "Research presentation on nanocomposite synthesis",
    },
    {
      title: "Synthesis of BNNP+Mxene/Polycarbonate nanocomposite using twin-screw extrusion reactor for thermal property enhancement",
      conference: "International Conference on Reaction Engineering (ICRE-2021)",
      organization: "NIT, Raipur",
      date: "May 7-8, 2021",
      details: "Research presentation on nanocomposite synthesis",
    },
    {
      title: "Photo-thermal Removal of CO2 from MWCNT/HMDA nanofluid",
      conference: "The Ninth DAE-BRNS Biennial Symposium on Emerging Trends in Separation Science and Technology (SESTEC-2020)",
      organization: "BARC, Mumbai",
      date: "March 22-26, 2021",
      details: "Research presentation on CO2 removal",
    },
    {
      title: "Numeric and experimental investigation of cobalt oxide-based nanofluids in direct absorption solar collector",
      conference: "International Conference on Multifunctional and Hybrid Materials for Chemical Process, Energy, Environment and Medical Applications (ICMHCEE 2019)",
      organization: "NIT, Trichy, Tamil Nadu",
      date: "September 9-11, 2019",
      details: "Research presentation on nanofluids investigation",
    },
    {
      title: "Numeric and experimental study of the car radiator performance",
      conference: "CHEM-CONFLUX-20",
      organization: "NIT, Prayagraj",
      date: "February 14-16, 2020",
      details: "Research presentation on radiator performance",
    },
    {
      title: "Comparative study on the thermal property and haze enhancement using boron nitride nanosheets and MXene nanoparticles in a polycarbonate matrix",
      conference: "MHRD, GoI, TEQIP-III Sponsored International E-Conference on Recent Transformations in Chemical & Textile Technology",
      organization: "Online Conference",
      date: "August 24-26, 2020",
      details: "Research presentation on thermal properties",
    },
    {
      title: "Study of Visco-Elastic property enhancement of MWCNT based polypropylene (PP) Nanocomposites",
      conference: "11th National Conference on Solid State Chemistry and Allied Areas (NCSCA-2019)",
      organization: "S.K. Porwal College, Nagpur",
      date: "December 20-21, 2019",
      details: "Research presentation on nanocomposites",
    },
    {
      title: "Study of thermal property enhancement of MWCNT based polypropylene (PP) Nanocomposites",
      conference: "First International Conference on Recent Advances in Materials and Manufacturing (ICRAMM 2019)",
      organization: "KLE Dr. M.S. Sheshgiri COET, Belagavi, Karnataka",
      date: "September 12-14, 2019",
      details: "Research presentation on thermal properties",
    },
    {
      title: "Numerical Simulation of Liquid-liquid two-phase flow at different Microfluidics junctions",
      conference: "The Eighth DAE-BRNS Biennial Symposium on Emerging Trends in Separation Science and Technology (SESTEC-2018)",
      organization: "BITS, Pilani (Goa)",
      date: "May 23-26, 2018",
      details: "Research presentation on microfluidics",
    },
    {
      title: "Reactive Stripping & Precipitation of Uranium in microreactors",
      conference: "The Eighth DAE-BRNS Biennial Symposium on Emerging Trends in Separation Science and Technology (SESTEC-2018)",
      organization: "BITS, Pilani (Goa)",
      date: "May 23-26, 2018",
      details: "Research presentation on uranium processing",
    },
    {
      title: "Column Design by Visual Basic and Comparative Study with MATLAB",
      conference: "International Conference on Global Trends in Engineering, Technology and Management (ICGTETM-2017)",
      organization: "SSBT's COET, Jalgaon",
      date: "December 22-24, 2017",
      details: "Research presentation on column design",
    },
    {
      title: "Portable and Low-Cost Source of Light",
      conference: "SCHEMCON-2015",
      organization: "MIT Academy of Engineering, Alandi (D), Pune",
      date: "September 12-13, 2015",
      details: "Research presentation on light source",
    },
    {
      title: "Production of Biodiesel from Algae",
      conference: "CHEMCOALESCE 2015",
      organization: "Sir Visvesvaraya Institute of Technology, Nasik",
      date: "2015",
      details: "Research presentation on biodiesel production",
    },
    {
      title: "Review on Heat Pipes",
      conference: "National level student paper presentation (MILESTONE 2014)",
      organization: "College of Engineering and Technology, Jalgaon",
      date: "2014",
      details: "Review presentation on heat pipes",
    },
    {
      title: "War gases",
      conference: "Recent Advances in Chemical Sciences and Technology-2013",
      organization: "North Maharashtra University, Jalgaon",
      date: "2013",
      details: "Research presentation on war gases",
    },
    {
      title: "Agitated Absorber",
      conference: "AVISHKAR-2014",
      organization: "North Maharashtra University, Jalgaon",
      date: "2014",
      details: "Research presentation on agitated absorber",
    },
    {
      title: "Computational fluid dynamics of Micro-reactors",
      conference: "AVISHKAR-2017",
      organization: "North Maharashtra University, Jalgaon",
      date: "2017",
      details: "Research presentation on micro-reactors",
    },
    {
      title: "Software development for process calculations",
      conference: "AVISHKAR-2017",
      organization: "North Maharashtra University, Jalgaon",
      date: "2017",
      details: "Research presentation on software development",
    },
    {
      title: "Reactive stripping and precipitation of Uranium in Micro-reactors",
      conference: "Research Scholars Day (RSD-2019)",
      organization: "VNIT, Nagpur",
      date: "2019",
      details: "Research presentation on uranium processing",
    },
  ];

  const conferenceAttendance = [
    {
      title: "International Conference on Multifunctional Electronic Materials and Processing (MEMP-2021)",
      organization: "C-MET Pune",
      date: "March 8-10, 2021",
      format: "Digital Platform",
    },
    {
      title: "International Conference on Chemical Science for Drug Discovery & Therapy 2020",
      organization: "Department of Chemistry VNIT Nagpur",
      date: "July 22-26, 2020",
      format: "Online Mode",
    },
    {
      title: "Intellectual Property and Startups Conference",
      organization: "Turnip Innovation Festivals 2024",
      date: "January 20, 2024",
      format: "Online Conference",
    },
  ];

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
    {
      title: "5-Days STTP on 'Introduction to Standards' sponsored by Beureu of Indian Standards",
      organization: "SVNIT, Surat",
      date: "2nd Oct, 4th Oct, 5th Oct, 11th Oct, 12th Oct, 2025",
      details: "Workshop on indian standards",
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
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Conferences & Presentations</h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Academic contributions and participation in scientific conferences
        </p>
      </div>

      {/* Session Chair Roles */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Session Chair Roles / Expert</h2>
        <div className="grid gap-6">
          {sessionChairRoles.map((role, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{role.conference}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{role.organization}</p>
                      <p className="text-base text-muted-foreground">{role.role}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm">{role.date}</Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Conference Presentations */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Conference Presentations</h2>
        <div className="grid gap-6">
          {conferencePresentations.map((conf, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{conf.title}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{conf.conference}</p>
                      <p className="text-base text-muted-foreground">{conf.organization}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm">{conf.date}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base">{conf.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Conference Attendance */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Conference Attendance</h2>
        <div className="grid gap-6">
          {conferenceAttendance.map((conf, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{conf.title}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{conf.organization}</p>
                      <p className="text-base text-muted-foreground">{conf.format}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm">{conf.date}</Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

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
