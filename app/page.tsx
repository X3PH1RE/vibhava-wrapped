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

      <main className="relative z-10 mx-auto max-w-3xl px-4 pb-20">
        {/* Header */}
        <header className="flex items-start justify-between pt-6 md:pt-10">
          <div className="flex items-start gap-2">
            <Image
              src="components/logo-vb.png"
              alt="Vibhava Innovation Summit"
              width={80}
              height={24}
              className="h-auto w-16"
            />
            <p className="text-xs font-light leading-tight md:text-sm">
              Vibhava
              <br />
              Innovation
              <br />
              Summit
            </p>
          </div>
          <div className="text-right">
            <span className="font-serif italic text-2xl md:text-3xl">Wrapped</span>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold">Welcome to Wrapped</h2>
          <p className="mt-1 text-gray-700">We hoped you had an amazing time during Vibhava&apos;25</p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Butterfly Placeholder */}
            <div>
              <Image
                src="/components/ezgif-6e2e1a34550b69.gif"
                alt="Butterfly"
                width={300}
                height={200}
                className="rounded-md"
              />
            </div>

            {/* Stats */}
            <div className="flex flex-col items-end justify-center text-center">
              <p className="text-lg">
                During the event, you interacted and experienced with
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-7xl font-bold text-green-500 flex justify-center w-full">{userData.projectsVisited}</span>
                <span className="text-base leading-tight">
                  amazing projects
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mt-12 text-center">
          <h3 className="text-lg">Here is your timeline</h3>
          <div className="mt-2 flex justify-center">
            <ChevronDown className="h-6 w-6 animate-bounce text-green-500" />
          </div>

          <UserTimeline events={userData.events} />
        </section>

        {/* Action Buttons */}
        <section className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <div className="w-full max-w-xs rounded-lg border-2 border-green-500 p-1 sm:w-auto">
            <Button asChild className="w-full bg-green-500 hover:bg-green-600">
              <Link href="https://example.com/feedback">Share Your Feedback</Link>
            </Button>
          </div>
          <div className="w-full max-w-xs rounded-lg border-2 border-green-500 p-1 sm:w-auto">
            <Button
              asChild
              variant="outline"
              className="w-full border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600"
            >
              <Link href="https://example.com/project-details">Request Project Details</Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 pt-8 text-center">
          <div className="mb-8">
            <p className="mb-4">
              In the realm of <span className="font-medium text-green-500">Vibhava</span>, we transform visionary
              concepts into extraordinary technological achievements through boundless creativity.
            </p>
          </div>
          <p className="font-serif italic text-2xl">Recapped</p>
        </footer>
      </main>
    </div>
  )
}
