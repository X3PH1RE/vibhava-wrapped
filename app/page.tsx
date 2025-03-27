import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import AnimatedGradientBackground from "@/components/animated-gradient-background"
import UserTimeline from "@/components/user-timeline"
import { getUserData } from "@/lib/api"
import { Button } from "@/components/ui/button"

export default async function WrappedPage() {
  const userData = await getUserData()

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <AnimatedGradientBackground />

      <main className="relative z-10 mx-auto max-w-3xl px-5 pb-20 pt-6">
        {/* Header */}
        <header className="flex items-start justify-between border-b border-gray-100 pb-6">
          <div className="flex items-start gap-3">
            <Image
              src="/logo-vb.png"
              alt="Vibhava Innovation Summit"
              width={80}
              height={24}
              className="h-auto w-20 drop-shadow-sm"
            />
            
          </div>
          <div className="text-right">
            <span className="font-serif italic text-3xl md:text-4xl">Wrapped</span>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="mt-14 rounded-xl bg-white/70 p-8 shadow-sm">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Welcome to Your Wrapped</h2>
          <p className="mt-2 text-center text-gray-600">We hope you had an amazing time during Vibhava&apos;25</p>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Butterfly Placeholder */}
            <div className="flex items-center justify-center">
              <Image
                src="/butterfly.gif"
                alt="Butterfly"
                width={320}
                height={200}
                className="rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              />
            </div>

            {/* Stats */}
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-lg text-gray-700 md:text-xl">
                During the event, you interacted with
              </p>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-7xl font-bold text-green-500 md:text-8xl">{userData.projectsVisited}</span>
                <span className="mt-2 text-xl font-medium text-gray-800">
                  amazing projects
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mt-12 text-center">
          <div className="rounded-xl bg-white/70 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 md:text-2xl">Your Event Timeline</h3>
            <p className="mt-2 text-gray-600">Revisit your journey through Vibhava</p>
            <div className="mt-3 flex justify-center">
              <ChevronDown className="h-6 w-6 animate-bounce text-green-500" />
            </div>

            <UserTimeline events={userData.events} />
          </div>
        </section>

        {/* Action Buttons */}
        <section className="mt-14 rounded-xl bg-white/70 p-8 shadow-sm">
          <h3 className="mb-6 text-center text-xl font-semibold text-gray-800">What's Next?</h3>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <div className="w-full max-w-xs rounded-lg border-2 border-green-500 p-1 transition-all duration-300 hover:shadow-md sm:w-auto">
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 font-medium">
                <Link href="https://example.com/feedback">Share Your Feedback</Link>
              </Button>
            </div>
            <div className="w-full max-w-xs rounded-lg border-2 border-green-500 p-1 transition-all duration-300 hover:shadow-md sm:w-auto">
              <Button
                asChild
                variant="outline"
                className="w-full border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600 font-medium"
              >
                <Link href="https://example.com/project-details">Request Project Details</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 pt-8 text-center">
          <div className="mb-8">
            <p className="mb-4 text-gray-600">
              In the realm of <span className="font-medium text-green-500">Vibhava</span>, we transform visionary
              concepts into extraordinary technological achievements through boundless creativity.
            </p>
          </div>
          <p className="font-serif italic text-2xl text-gray-800">Recapped</p>
        </footer>
      </main>
    </div>
  )
}
