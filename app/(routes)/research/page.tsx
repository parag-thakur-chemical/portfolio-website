import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Research | Parag's Portfolio",
  description: "Explore my research interests, publications, and academic contributions in AI, ML, and Computer Vision.",
}

const researchAreas = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "My research focuses on developing novel machine learning algorithms and architectures, with a particular emphasis on deep learning and neural networks. I explore ways to make AI systems more efficient, interpretable, and robust.",
    topics: [
      "Deep Learning Architectures",
      "Neural Network Optimization",
      "Explainable AI",
      "Transfer Learning",
      "Few-shot Learning",
    ],
  },
  {
    title: "Computer Vision",
    description: "I investigate advanced computer vision techniques for image and video understanding, with applications in medical imaging, autonomous systems, and augmented reality. My work combines traditional computer vision approaches with modern deep learning methods.",
    topics: [
      "Object Detection & Recognition",
      "Image Segmentation",
      "3D Vision",
      "Video Understanding",
      "Medical Image Analysis",
    ],
  },
  {
    title: "Natural Language Processing",
    description: "My research in NLP focuses on developing models that can better understand and generate human language, with applications in machine translation, text summarization, and conversational AI.",
    topics: [
      "Language Models",
      "Machine Translation",
      "Text Summarization",
      "Sentiment Analysis",
      "Dialogue Systems",
    ],
  },
]

const publications = [
  {
    title: "Efficient Neural Architecture Search for Computer Vision Tasks",
    authors: "Patil, P., Smith, J., & Johnson, A.",
    venue: "International Conference on Computer Vision (ICCV)",
    year: 2023,
    doi: "10.1234/iccv.2023.123",
    abstract: "We present a novel approach to neural architecture search that significantly reduces computational requirements while maintaining model performance. Our method achieves state-of-the-art results on multiple benchmark datasets.",
  },
  {
    title: "Interpretable Deep Learning Models for Medical Image Analysis",
    authors: "Patil, P., & Williams, R.",
    venue: "Medical Image Analysis",
    year: 2022,
    doi: "10.1234/mia.2022.456",
    abstract: "This paper introduces a new framework for building interpretable deep learning models for medical image analysis, with a focus on providing clear explanations for model decisions while maintaining high accuracy.",
  },
  {
    title: "Multi-modal Learning for Video Understanding",
    authors: "Johnson, A., Patil, P., & Brown, M.",
    venue: "Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2021,
    doi: "10.1234/cvpr.2021.789",
    abstract: "We propose a novel multi-modal learning approach that effectively combines visual, audio, and textual information for improved video understanding and action recognition.",
  },
]

const currentProjects = [
  {
    title: "AI for Healthcare",
    description: "Developing AI systems to assist in medical diagnosis and treatment planning, with a focus on interpretability and clinical validation.",
    status: "Active",
    collaborators: ["Medical Research Institute", "University Hospital"],
  },
  {
    title: "Autonomous Systems",
    description: "Researching robust computer vision systems for autonomous vehicles and robots, with emphasis on safety and real-world performance.",
    status: "Active",
    collaborators: ["Robotics Lab", "Automotive Research Center"],
  },
  {
    title: "Natural Language Understanding",
    description: "Building advanced language models that can better understand context and generate more human-like responses.",
    status: "Planning",
    collaborators: ["NLP Research Group"],
  },
]

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Research</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of artificial intelligence, machine learning, and computer vision
            to solve complex real-world problems.
          </p>
        </div>

        <Separator className="my-8" />

        {/* Research Areas */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Research Areas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Publications */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{pub.title}</CardTitle>
                  <CardDescription>
                    {pub.authors} • {pub.venue} • {pub.year}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{pub.abstract}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">DOI: {pub.doi}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Current Projects */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Current Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {currentProjects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge
                      variant={project.status === "Active" ? "default" : "secondary"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Collaborators:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.collaborators.map((collab, collabIndex) => (
                        <Badge key={collabIndex} variant="outline">
                          {collab}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Interested in Collaboration?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing potential research collaborations, academic partnerships,
            or industry projects. Feel free to reach out if you'd like to explore opportunities
            to work together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  )
} 