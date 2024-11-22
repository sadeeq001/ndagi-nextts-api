import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, BookOpen, Calendar, Laptop2, LucideIcon, PieChart, Zap } from "lucide-react"
import Image from "next/image"

interface FeatureProps {
  icon: LucideIcon
  title: string
  description: string
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="flex items-center space-x-4 p-0">
        <div className="rounded-full bg-blue-100 p-2">
          <Icon className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ModernFeatures() {
  const features: FeatureProps[] = [
    {
      icon: PieChart,
      title: "Result",
      description: "Experience the value of our platform's performance & results",
    },
    {
      icon: Calendar,
      title: "Event",
      description: "Organized to provide you with the resources & connections you need",
    },
    {
      icon: Laptop2,
      title: "App Integrations",
      description: "Bring all your tools & data together, & join with many of other apps.",
    },
    {
      icon: BookOpen,
      title: "Special Guide",
      description: "One guide for all our features to get more from our platform",
    },
    {
      icon: BarChart3,
      title: "Data Reporting",
      description: "Get real time insight into progress & allows teams to track their work",
    },
    {
      icon: Zap,
      title: "Presentation",
      description: "plan and structure work how you want. Quickly organizing tasks.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Our modern features</h2>
          <p className="text-muted-foreground">
            Using technology to make finance simpler, smarter and more rewarding.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {features.slice(0, 3).map((feature) => (
              <Feature key={feature.title} {...feature} />
            ))}
          </div>
          <div className="order-first md:order-none">
            <div className="relative mx-auto w-64 h-[500px] rounded-[40px]">
              <Image alt="" src="/images/phone.png" width={1092} height={592} className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-[36px] m-1" />
            </div>
          </div>
          <div className="space-y-8">
            {features.slice(3).map((feature) => (
              <Feature key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}