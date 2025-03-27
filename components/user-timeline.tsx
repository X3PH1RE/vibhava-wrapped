"use client"

import { useState } from "react"
import Image from "next/image"
import type { Event } from "@/lib/types"
import Butterfly from "./butterfly"

interface UserTimelineProps {
  events: Event[]
}

export default function UserTimeline({ events }: UserTimelineProps) {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const toggleEvent = (eventId: string) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null)
    } else {
      setExpandedEvent(eventId)
    }
  }

  return (
    <div className="relative mt-8 pb-16">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-green-200"></div>

      {/* Events */}
      <div className="relative space-y-16">
        {events.map((event, index) => (
          <div key={event.id} className="relative">
            {/* Time marker */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-green-400 ring-4 ring-white"></div>
                <span className="mt-2 rounded-full bg-green-400 px-3 py-1 text-xs text-white">{event.time}</span>
              </div>
            </div>

            {/* Vertical dashed line from time marker to card */}
            <div className="absolute left-1/2 top-4 h-8 w-0 -translate-x-1/2 border-l-2 border-dashed border-green-200"></div>

            {/* Butterfly decorations - left side */}
            <div className="absolute left-[15%] top-16">
              <Butterfly className={`h-6 w-6 opacity-70 ${index % 2 === 0 ? "rotate-12" : "-rotate-12"}`} />
            </div>

            {/* Event card */}
            <div
              className="ml-auto mt-12 w-[85%] cursor-pointer rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg"
              onClick={() => toggleEvent(event.id)}
            >
              <div className="relative mb-3 overflow-hidden rounded-md">
                <Image
                  src={event.imageUrl || "/placeholder.svg"}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute right-0 top-0 h-12 w-12 bg-green-400 clip-corner"></div>
              </div>

              <h3 className="text-xl font-bold">{event.title}</h3>

              <p className={`mt-2 text-sm text-gray-600 ${expandedEvent === event.id ? "" : "line-clamp-3"}`}>
                {event.description}
              </p>
            </div>

            {/* Additional butterfly decorations - right side */}
            <div className="absolute right-[10%] top-32">
              <Butterfly className={`h-5 w-5 opacity-60 ${index % 2 === 0 ? "-rotate-12" : "rotate-12"}`} />
            </div>
          </div>
        ))}

        {/* End marker */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full bg-green-400 ring-4 ring-white"></div>
            <span className="mt-2 rounded-full bg-green-400 px-6 py-1 text-sm font-medium text-white">End</span>
          </div>
        </div>
      </div>
    </div>
  )
}

