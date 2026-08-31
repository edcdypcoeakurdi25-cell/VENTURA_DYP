import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Lightbulb, Trophy, Rocket } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "500+ Startup Pitches",
      description: "A massive platform for emerging startups to showcase their ideas to a diverse audience.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Investor & Academia Connect",
      description: "Bringing together startups, investors, and academia to foster innovation and entrepreneurial excellence.",
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Signature IPL Auction",
      description: "Engage in our unique and exciting IPL-style auction game for startups.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Startup Expo",
      description: "Startups get a chance to showcase their innovations to the public and potential investors.",
    },
  ]

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              About The Event
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              The Epicenter of Entrepreneurial Excellence
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ventura is the annual flagship entrepreneurship summit of Dr. D. Y. Patil College of Engineering, Akurdi, organized by the Entrepreneurship Development Cell & Incubation and Innovation Cell. The summit features over 500 startup pitches, investors, Hi-Tea sessions, and the signature IPL Auction game, bringing together startups, investors, and academia on a common platform to foster innovation and entrepreneurial excellence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:max-w-none mt-12">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                {highlight.icon}
                <CardTitle className="font-headline">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
