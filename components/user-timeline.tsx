"use client"

import { useState } from "react"
import Image from "next/image"
import type { Event } from "@/lib/types"
import Butterfly from "./butterfly"
import { Clock, MapPin, User, Calendar } from "lucide-react"

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
    <div className="relative mt-10 pb-20">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-green-200"></div>

      {/* Events */}
      <div className="relative space-y-20">
        {events.map((event, index) => (
          <div key={event.id} className="relative" style={{ animationDelay: `${index * 0.15}s` }}>
            {/* Time marker - just the dot now, no time text */}
            <div className="absolute left-1/2 -translate-x-1/2 animate-pop z-10" style={{ animationDelay: `${0.3 + index * 0.15}s` }}>
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full bg-green-500 ring-4 ring-white shadow-sm"></div>
              </div>
            </div>

            {/* Zigzag connector line from time marker to card */}
            {index % 2 === 0 ? (
              <div className="absolute right-[85%] top-5 flex items-center">
                <div className="absolute left-0 top-10 h-px w-[calc(100%-10px)] border-t-2 border-dashed border-green-200 translate-y-[-50%]"></div>
                <div className="absolute left-0 top-5 h-10 w-0 border-l-2 border-dashed border-green-200"></div>
                <div className="absolute right-[10px] top-10 h-[50px] w-0 border-l-2 border-dashed border-green-200"></div>
              </div>
            ) : (
              <div className="absolute left-[85%] top-5 flex items-center">
                <div className="absolute right-0 top-10 h-px w-[calc(100%-10px)] border-t-2 border-dashed border-green-200 translate-y-[-50%]"></div>
                <div className="absolute right-0 top-5 h-10 w-0 border-l-2 border-dashed border-green-200"></div>
                <div className="absolute left-[10px] top-10 h-[50px] w-0 border-l-2 border-dashed border-green-200"></div>
              </div>
            )}

            {/* Butterfly decorations */}
            {index % 2 === 0 ? (
              // Left butterfly for even (left) cards
              <div className="absolute right-[15%] top-20 transition-all duration-500 hover:-rotate-12 hover:translate-y-[-5px]">
                <Butterfly className="h-7 w-7 opacity-70 -rotate-12" />
              </div>
            ) : (
              // Right butterfly for odd (right) cards
              <div className="absolute left-[15%] top-20 transition-all duration-500 hover:rotate-12 hover:translate-y-[-5px]">
                <Butterfly className="h-7 w-7 opacity-70 rotate-12" />
              </div>
            )}

            {/* Event card */}
            <div
              className={`mt-14 w-[80%] cursor-pointer rounded-lg bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg animate-slideUp ${
                expandedEvent === event.id ? 'ring-1 ring-green-200 scale-102' : 'hover:translate-y-[-3px]'
              } ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              style={{ animationDelay: `${0.5 + index * 0.15}s` }}
              onClick={() => toggleEvent(event.id)}
            >
              {/* Time indicator - new ribbon design, positioned at the top of the card */}
              <div className={`absolute ${index % 2 === 0 ? '-right-3' : '-left-3'} -top-3 z-10`}>
                <div className={`relative px-4 py-1 ${index % 2 === 0 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-green-400 to-teal-500 text-white text-xs font-medium shadow-md rounded-full flex items-center gap-1 animate-pop font-fredoka`} style={{ animationDelay: `${0.6 + index * 0.15}s` }}>
                  <Clock className="h-3 w-3" />
                  {event.time}
                  <div className={`absolute ${index % 2 === 0 ? '-right-1' : '-left-1'} -bottom-1 h-3 w-3 rounded-full bg-green-600 shadow-inner`}></div>
                </div>
              </div>

              <div className="relative mb-4 overflow-hidden rounded-md group">
                <Image
                  src={event.imageUrl || "/placeholder.svg"}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-0 h-14 w-14 bg-gradient-to-br from-green-400 to-teal-500 ${index % 2 === 0 ? 'transform rotate-90 clip-corner' : 'clip-corner'}`}></div>
              </div>

              <h3 className="font-righteous text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-teal-600">{event.title}</h3>

              {event.additionalInfo && (
                <div className="mt-2 flex flex-wrap gap-2 text-xs font-fredoka">
                  <span className="rounded-full bg-green-50 px-2 py-1 text-green-700 transition-colors duration-300 hover:bg-green-100 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.additionalInfo.location}
                  </span>
                  <span className="rounded-full bg-green-50 px-2 py-1 text-green-700 transition-colors duration-300 hover:bg-green-100 flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {event.additionalInfo.speaker}
                  </span>
                </div>
              )}

              <p className={`mt-3 text-sm text-gray-600 leading-relaxed font-light ${expandedEvent === event.id ? "" : "line-clamp-3"}`}>
                {event.description}
              </p>
              
              {expandedEvent !== event.id && (
                <button 
                  className="mt-2 text-xs font-medium text-green-500 hover:text-green-600 transition-colors duration-300 flex items-center gap-1 font-fredoka"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedEvent(event.id);
                  }}
                >
                  Read more
                  <span className="text-[0.6rem]">▼</span>
                </button>
              )}
            </div>

            {/* Additional butterfly decorations - opposite side */}
            {index % 2 === 0 ? (
              // Right butterfly for even (left) cards
              <div className="absolute left-[10%] top-36 transition-all duration-500 hover:rotate-12 hover:translate-y-[-5px]">
                <Butterfly className="h-6 w-6 opacity-60 rotate-12" />
              </div>
            ) : (
              // Left butterfly for odd (right) cards
              <div className="absolute right-[10%] top-36 transition-all duration-500 hover:-rotate-12 hover:translate-y-[-5px]">
                <Butterfly className="h-6 w-6 opacity-60 -rotate-12" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* End marker - positioned relatively after all events */}
      <div className="relative mt-16 flex justify-center animate-pop" style={{ animationDelay: `${0.3 + events.length * 0.15}s` }}>
        <div className="flex flex-col items-center">
          <div className="h-5 w-5 rounded-full bg-green-500 ring-4 ring-white shadow-sm"></div>
          <span className="mt-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-6 py-1 text-sm font-medium text-white shadow-sm font-pacifico">End</span>
        </div>
      </div>
    </div>
  )
}

