import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SmallTitle from "./small-title"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <SmallTitle title="Welcome to NextJS App" />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Next JS Template 
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our software is secure, scalable, and flexible. Designed with both small hotels and large chains in mind, it ensures a seamless experience for guests and staff alike. Plus, with multi-currency and multi-language support, you can cater to international travelers with ease.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button size="lg" className="gap-2 rounded-full">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              See Features
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}