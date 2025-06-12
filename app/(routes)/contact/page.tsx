import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, GraduationCap, BookOpen } from "lucide-react";

export default function ContactPage() {
  const contactInfo = {
    address: "003, Chem. Engg. Dept., Sardar Vallabhbhai National Institute of Technology, Surat-395 007 (Gujarat) INDIA",
    phone: "+91 89992 54795",
    email: ["paragthakur674@gmail.com", "paragthakur@ched.svnit.ac.in"],
    orcid: "0000-0003-2227-0143",
  };

  const professionalProfiles = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/parag-Thakur-50255813b/",
      icon: Linkedin,
    },
    {
      platform: "Research Gate",
      url: "https://www.researchgate.net/profile/Parag_Thakur",
      icon: BookOpen,
    },
    {
      platform: "Google Scholar",
      url: "https://scholar.google.com/citations?user=RB2cw7oAAAAJ&hl=en",
      icon: GraduationCap,
    },
    {
      platform: "Web of Science",
      url: "https://www.webofscience.com/wos/author/record/AAC-8681-2021",
      icon: Globe,
    },
  ];

  const researchMetrics = {
    googleScholar: {
      citations: 746,
      hIndex: 13,
      i10Index: 19,
    },
    scopus: {
      citations: 619,
      hIndex: 12,
    },
  };

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact & Profiles</h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Get in touch and connect through various professional platforms
        </p>
      </div>

      {/* Contact Information */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact Information</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Academic Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-base font-medium">Department of Chemical Engineering</p>
                <p className="text-base text-muted-foreground">Sardar Vallabhbhai National Institute of Technology</p>
                <p className="text-base text-muted-foreground">Surat, Gujarat - 395007, India</p>
              </div>
              <div className="space-y-2">
                <p className="text-base">
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:parag.thakur@svnit.ac.in" className="text-primary hover:underline">
                    parag.thakur@svnit.ac.in
                  </a>
                </p>
                <p className="text-base">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+91-261-2201730" className="text-primary hover:underline">
                    +91-261-2201730
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Research Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div>
                  <h3 className="font-semibold mb-4 text-base sm:text-lg">Google Scholar</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl sm:text-3xl font-bold">{researchMetrics.googleScholar.citations}</p>
                      <p className="text-sm text-muted-foreground">Citations</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl sm:text-3xl font-bold">{researchMetrics.googleScholar.hIndex}</p>
                      <p className="text-sm text-muted-foreground">h-index</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl sm:text-3xl font-bold">{researchMetrics.googleScholar.i10Index}</p>
                      <p className="text-sm text-muted-foreground">i10-index</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-base sm:text-lg">Scopus</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl sm:text-3xl font-bold">{researchMetrics.scopus.citations}</p>
                      <p className="text-sm text-muted-foreground">Citations</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl sm:text-3xl font-bold">{researchMetrics.scopus.hIndex}</p>
                      <p className="text-sm text-muted-foreground">h-index</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Professional Profiles */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Professional Profiles</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {professionalProfiles.map((profile, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-4"
                >
                  <profile.icon className="w-8 h-8 text-muted-foreground" />
                  <p className="font-medium text-base">{profile.platform}</p>
                  <Button variant="outline" className="w-full">
                    Visit Profile
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 