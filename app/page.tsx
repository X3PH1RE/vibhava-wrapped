import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Sparkles } from "lucide-react"

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
        <header className="flex items-start justify-between border-b border-gray-100 pb-6 animate-fadeIn">
          <div className="flex items-start gap-3">
            <Image
              src="/logo-vb.png"
              alt="Vibhava Innovation Summit"
              width={80}
              height={24}
              className="h-auto w-20 drop-shadow-sm hover:scale-105 transition-transform duration-300"
            />
          
          </div>
          <div className="text-right">
            <div className="relative">
              <span className="font-serif italic text-3xl md:text-4xl bg-gradient-to-r from-green-500 via-teal-400 to-emerald-600 bg-clip-text text-transparent drop-shadow-sm">Wrapped</span>
              <Sparkles className="absolute -top-4 -right-6 h-5 w-5 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="mt-14 rounded-xl bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-md animate-slideUp">
          <div className="relative">
            <h2 className="text-center text-3xl font-bold md:text-4xl tracking-tight">
              <span className="inline-block bg-gradient-to-r from-green-600 via-green-500 to-teal-500 bg-clip-text text-transparent pb-1">Welcome to Your Wrapped</span>
            </h2>
           
          </div>
          <p className="mt-2 text-center text-gray-600 leading-relaxed max-w-xl mx-auto font-light">
            We hope you had an <span className="font-medium text-green-600">amazing time</span> during Vibhava&apos;25
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Butterfly Placeholder */}
            <div className="flex items-center justify-center">
              <div className="group">
                <Image
                  src="/butterfly.gif"
                  alt="Butterfly"
                  width={320}
                  height={200}
                  className="rounded-lg shadow-md transition-all duration-300 hover:shadow-lg group-hover:scale-105"
                />
                <div className="mt-2 text-center text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Transforming ideas into reality
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-lg text-gray-700 md:text-xl font-light">
                During the event, you interacted with
              </p>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-7xl font-bold bg-gradient-to-b from-green-400 to-green-600 bg-clip-text text-transparent drop-shadow md:text-8xl animate-pulse">{userData.projectsVisited}</span>
                <span className="mt-2 text-xl font-medium text-gray-800 tracking-wide">
                  amazing projects
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mt-12 text-center">
          <div className="rounded-xl bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-md animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative inline-block">
              <h3 className="text-xl font-semibold text-gray-800 md:text-2xl bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">Your Event Timeline</h3>
              <div className="absolute -top-2 -right-4 transform rotate-12 text-teal-400 text-xs">✦</div>
              <div className="absolute -bottom-1 -left-4 transform -rotate-12 text-green-400 text-xs">✦</div>
            </div>
            <p className="mt-2 text-gray-600 font-light italic max-w-md mx-auto">
              Revisit your journey through Vibhava
            </p>
            <div className="mt-3 flex justify-center">
              <ChevronDown className="h-6 w-6 animate-bounce text-green-500" />
            </div>

            <UserTimeline events={userData.events} />
          </div>
        </section>

        {/* Action Buttons */}
        <section className="mt-14 rounded-xl bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-md animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <h3 className="mb-6 text-center text-xl font-semibold md:text-2xl">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">What's Next?</span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></span>
            </span>
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <div className="w-full max-w-xs rounded-lg border-2 border-green-500 p-1 transition-all duration-300 hover:shadow-md hover:-translate-y-1 sm:w-auto">
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 font-medium">
                <Link href="https://example.com/feedback">Share Your Feedback</Link>
              </Button>
            </div>
            <div className="w-full max-w-xs rounded-lg border-2 border-green-500 p-1 transition-all duration-300 hover:shadow-md hover:-translate-y-1 sm:w-auto">
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
        <footer className="mt-20 border-t border-gray-200 pt-8 text-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="mb-8">
            <p className="mb-4 text-gray-600 leading-relaxed font-light max-w-xl mx-auto text-sm md:text-base">
              In the realm of <span className="font-medium text-green-500 hover:text-green-600 transition-colors duration-300 cursor-pointer">Vibhava</span>, we transform visionary
              concepts into <span className="italic">extraordinary</span> technological achievements through <span className="font-medium">boundless creativity</span>.
            </p>
          </div>
          <p className="font-serif italic text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400">Recapped</p>
        </footer>
      </main>
    </div>
  )
}
