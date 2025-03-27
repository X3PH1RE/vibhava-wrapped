import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import AnimatedGradientBackground from "@/components/animated-gradient-background"
import { getAllEvents } from "@/lib/api"

export default async function EventsPage() {
  const events = await getAllEvents()

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <AnimatedGradientBackground />

      <main className="relative z-10 mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-green-500 hover:text-green-600">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Wrapped
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold">All Vibhava Events</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <div key={event.id} className="rounded-lg bg-white p-4 shadow-md">
              <div className="relative mb-3 overflow-hidden rounded-md">
                <Image
                  src={event.imageUrl || "/placeholder.svg"}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">{event.time}</span>
              </div>

              <p className="mb-4 text-sm text-gray-600">{event.description}</p>

              <div className="text-sm text-gray-700">
                <div>
                  <span className="font-medium">Location:</span> {event.additionalInfo?.location}
                </div>
                <div>
                  <span className="font-medium">Speaker:</span> {event.additionalInfo?.speaker}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

