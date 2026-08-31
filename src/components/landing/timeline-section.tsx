import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Mic, Users, Coffee, Trophy, GraduationCap, Utensils, Award, Presentation } from "lucide-react"

const timelineData = [
  {
    day: "Day 1: Ignition",
    date: "September 15, 2025",
    events: [
      { time: "10:00 AM", title: "Inauguration Ceremony", venue: "Dnyanprasad Auditorium", icon: <GraduationCap className="h-5 w-5 text-primary" /> },
      { time: "11:00 AM", title: "Briefing on Event Objectives", venue: "Dnyanprasad Auditorium", icon: <Presentation className="h-5 w-5 text-primary" /> },
      { time: "12:00 PM", title: "Lunch Break", venue: "", icon: <Utensils className="h-5 w-5 text-primary" /> },
      { time: "01:30 PM", title: "Symposium, Startup Expo & IPL Auction", venue: "Multiple Venues", icon: <Mic className="h-5 w-5 text-primary" /> },
      { time: "05:30 PM", title: "Hi-Tea & Networking", venue: "Pharmacy Seminar Hall", icon: <Coffee className="h-5 w-5 text-primary" /> },
    ],
  },
  {
    day: "Day 2: Apex",
    date: "September 16, 2025",
    events: [
      { time: "11:00 AM", title: "Top 20 Startups Announcement", venue: "Dnyanprasad Auditorium", icon: <Trophy className="h-5 w-5 text-primary" /> },
      { time: "11:00 AM", title: "Mentorship & Networking Session", venue: "Pharmacy Seminar Hall", icon: <Users className="h-5 w-5 text-primary" /> },
      { time: "12:00 PM", title: "Lunch Break", venue: "", icon: <Utensils className="h-5 w-5 text-primary" /> },
      { time: "01:30 PM", title: "Final Pitching by Top Startups", venue: "Incubation Hub", icon: <Mic className="h-5 w-5 text-primary" /> },
      { time: "04:00 PM", title: "Prize Distribution & Vote of Thanks", venue: "Dnyanprasad Auditorium", icon: <Award className="h-5 w-5 text-primary" /> },
      { time: "04:30 PM", title: "Concluding Hi-Tea", venue: "Pharmacy Seminar Hall", icon: <Coffee className="h-5 w-5 text-primary" /> },
    ],
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            Event Schedule
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Two Days of Opportunity
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Follow our packed schedule, designed to maximize learning, networking, and pitching success.
          </p>
        </div>

        <div className="relative grid gap-10 md:grid-cols-2">
           <div className="absolute left-1/2 -ml-px hidden h-full w-px bg-border/50 md:block"></div>

          {timelineData.map((day) => (
            <Card key={day.day} className="relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{day.day}</CardTitle>
                <p className="text-muted-foreground">{day.date}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {day.events.map((event) => (
                    <div key={event.title} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        {event.icon}
                      </div>
                      <div>
                        <p className="font-semibold">{event.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {event.time}
                          {event.venue && ` @ ${event.venue}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
