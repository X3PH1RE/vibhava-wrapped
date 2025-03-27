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
    <div className="relative mt-10 pb-16">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-green-200"></div>

      {/* Events */}
      <div className="relative space-y-20">
        {events.map((event, index) => (
          <div key={event.id} className="relative">
            {/* Time marker */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full bg-green-500 ring-4 ring-white shadow-sm"></div>
                <span className="mt-2 rounded-full bg-green-500 px-4 py-1 text-xs font-medium text-white shadow-sm">{event.time}</span>
              </div>
            </div>

            {/* Vertical dashed line from time marker to card */}
            <div className="absolute left-1/2 top-5 h-10 w-0 -translate-x-1/2 border-l-2 border-dashed border-green-200"></div>

            {/* Butterfly decorations - left side */}
            <div className="absolute left-[15%] top-20">
              <Butterfly className={`h-7 w-7 opacity-70 ${index % 2 === 0 ? "rotate-12" : "-rotate-12"}`} />
            </div>

            {/* Event card */}
            <div
              className={`ml-auto mt-14 w-[85%] cursor-pointer rounded-lg bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg ${expandedEvent === event.id ? 'ring-1 ring-green-200' : ''}`}
              onClick={() => toggleEvent(event.id)}
            >
              <div className="relative mb-4 overflow-hidden rounded-md">
                <Image
                  src={event.imageUrl || "/placeholder.svg"}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute right-0 top-0 h-14 w-14 bg-green-500 clip-corner"></div>
              </div>

              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>

              {event.additionalInfo && (
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-green-50 px-2 py-1 text-green-700">
                    {event.additionalInfo.location}
                  </span>
                  <span className="rounded-full bg-green-50 px-2 py-1 text-green-700">
                    {event.additionalInfo.speaker}
                  </span>
                </div>
              )}

              <p className={`mt-3 text-sm text-gray-600 ${expandedEvent === event.id ? "" : "line-clamp-3"}`}>
                {event.description}
              </p>
              
              {expandedEvent !== event.id && (
                <button 
                  className="mt-2 text-xs font-medium text-green-500 hover:text-green-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedEvent(event.id);
                  }}
                >
                  Read more
                </button>
              )}
            </div>

            {/* Additional butterfly decorations - right side */}
            <div className="absolute right-[10%] top-36">
              <Butterfly className={`h-6 w-6 opacity-60 ${index % 2 === 0 ? "-rotate-12" : "rotate-12"}`} />
            </div>
          </div>
        ))}

        {/* End marker */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="h-5 w-5 rounded-full bg-green-500 ring-4 ring-white shadow-sm"></div>
            <span className="mt-2 rounded-full bg-green-500 px-6 py-1 text-sm font-medium text-white shadow-sm">End</span>
          </div>
        </div>
      </div>
    </div>
  )
}

