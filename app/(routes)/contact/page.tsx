import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Globe, Linkedin, GraduationCap, BookOpen } from "lucide-react";

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
    <div className="container mx-auto py-6 sm:py-8 space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contact Information</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Get in touch and connect through professional networks
        </p>
      </div>

      {/* Contact Information */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 text-muted-foreground flex-shrink-0" />
              <p className="text-sm sm:text-base text-muted-foreground">{contactInfo.address}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <p className="text-sm sm:text-base text-muted-foreground">{contactInfo.phone}</p>
            </div>
            <div className="space-y-2">
              {contactInfo.email.map((email, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <a href={`mailto:${email}`} className="text-sm sm:text-base text-muted-foreground hover:underline break-all">
                    {email}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <p className="text-sm sm:text-base text-muted-foreground">
                ORCID:{" "}
                <a
                  href={`https://orcid.org/${contactInfo.orcid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all"
                >
                  {contactInfo.orcid}
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Research Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-base sm:text-lg">Google Scholar</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="text-center p-2 sm:p-3 bg-muted/50 rounded-lg">
                    <p className="text-xl sm:text-2xl font-bold">{researchMetrics.googleScholar.citations}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Citations</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-muted/50 rounded-lg">
                    <p className="text-xl sm:text-2xl font-bold">{researchMetrics.googleScholar.hIndex}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">h-index</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-muted/50 rounded-lg">
                    <p className="text-xl sm:text-2xl font-bold">{researchMetrics.googleScholar.i10Index}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">i10-index</p>
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-3 text-base sm:text-lg">Scopus</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="text-center p-2 sm:p-3 bg-muted/50 rounded-lg">
                    <p className="text-xl sm:text-2xl font-bold">{researchMetrics.scopus.citations}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Citations</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-muted/50 rounded-lg">
                    <p className="text-xl sm:text-2xl font-bold">{researchMetrics.scopus.hIndex}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">h-index</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Professional Profiles */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Professional Profiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {professionalProfiles.map((profile, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-3"
                >
                  <profile.icon className="w-8 h-8 text-muted-foreground" />
                  <p className="font-medium text-sm sm:text-base">{profile.platform}</p>
                  <Button variant="outline" className="w-full text-sm sm:text-base">
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