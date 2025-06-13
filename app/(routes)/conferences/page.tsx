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
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Session Chair Roles</h2>
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
    </div>
  );
} 