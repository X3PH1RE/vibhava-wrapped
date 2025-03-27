import type { UserData, Event } from "./types"

export async function getUserData(): Promise<UserData> {
  // In a real application, this would be a fetch to your API
  // For now, we'll return mock data

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    userId: "user123",
    name: "Attendee",
    projectsVisited: 4, // This would come from the API
    events: [
      {
        id: "event1",
        title: "Gen AI workshop",
        time: "9:00 am",
        description:
          "Discover the power of Generative AI through hands-on exploration of innovative technologies that create and solve complex problems. Learn practical applications, engage with cutting-edge tools, and see how artificial intelligence is transforming industries.",
        imageUrl: "/placeholder.svg?height=400&width=600",
        additionalInfo: {
          location: "Main Hall",
          speaker: "Dr. Aisha Patel",
        },
      },
      {
        id: "event2",
        title: "Leadership and Startup",
        time: "10:30 am",
        description:
          "Explore entrepreneurial mindsets and leadership strategies essential for launching successful startups in today's competitive landscape. Connect with industry veterans, learn about funding opportunities, and develop the skills needed to transform your ideas into viable businesses.",
        imageUrl: "/placeholder.svg?height=400&width=600",
        additionalInfo: {
          location: "Innovation Lab",
          speaker: "Raj Mehta, Founder & CEO",
        },
      },
      {
        id: "event3",
        title: "Gen AI workshop",
        time: "12:30 pm",
        description:
          "Discover the power of Generative AI through hands-on exploration of innovative technologies that create and solve complex problems. Learn practical applications, engage with cutting-edge tools, and see how artificial intelligence is transforming industries.",
        imageUrl: "/placeholder.svg?height=400&width=600",
        additionalInfo: {
          location: "Tech Hub",
          speaker: "Prof. Sarah Johnson",
        },
      },
      {
        id: "event4",
        title: "Leadership and Startup",
        time: "2:30 pm",
        description:
          "Explore entrepreneurial mindsets and leadership strategies essential for launching successful startups in today's competitive landscape. Connect with industry veterans, learn about funding opportunities, and develop the skills needed to transform your ideas into viable businesses.",
        imageUrl: "/placeholder.svg?height=400&width=600",
        additionalInfo: {
          location: "Collaboration Space",
          speaker: "Maya Williams, Venture Capitalist",
        },
      },
    ],
  }
}

export async function getAllEvents(): Promise<Event[]> {
  // In a real application, this would be a fetch to your API
  // For now, we'll return mock data

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: "event1",
      title: "Gen AI workshop",
      time: "9:00 am",
      description:
        "Discover the power of Generative AI through hands-on exploration of innovative technologies that create and solve complex problems. Learn practical applications, engage with cutting-edge tools, and see how artificial intelligence is transforming industries.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      additionalInfo: {
        location: "Main Hall",
        speaker: "Dr. Aisha Patel",
      },
    },
    {
      id: "event2",
      title: "Leadership and Startup",
      time: "10:30 am",
      description:
        "Explore entrepreneurial mindsets and leadership strategies essential for launching successful startups in today's competitive landscape. Connect with industry veterans, learn about funding opportunities, and develop the skills needed to transform your ideas into viable businesses.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      additionalInfo: {
        location: "Innovation Lab",
        speaker: "Raj Mehta, Founder & CEO",
      },
    },
    {
      id: "event3",
      title: "Gen AI workshop",
      time: "12:30 pm",
      description:
        "Discover the power of Generative AI through hands-on exploration of innovative technologies that create and solve complex problems. Learn practical applications, engage with cutting-edge tools, and see how artificial intelligence is transforming industries.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      additionalInfo: {
        location: "Tech Hub",
        speaker: "Prof. Sarah Johnson",
      },
    },
    {
      id: "event4",
      title: "Leadership and Startup",
      time: "2:30 pm",
      description:
        "Explore entrepreneurial mindsets and leadership strategies essential for launching successful startups in today's competitive landscape. Connect with industry veterans, learn about funding opportunities, and develop the skills needed to transform your ideas into viable businesses.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      additionalInfo: {
        location: "Collaboration Space",
        speaker: "Maya Williams, Venture Capitalist",
      },
    },
    {
      id: "event5",
      title: "Networking Session",
      time: "4:00 pm",
      description:
        "Connect with industry professionals, fellow innovators, and potential collaborators in this structured networking opportunity. Exchange ideas, build relationships, and discover potential partnerships that could shape the future of your projects.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      additionalInfo: {
        location: "Grand Hall",
        speaker: "Facilitated by Vibhava Team",
      },
    },
    {
      id: "event6",
      title: "Future of Tech Panel",
      time: "5:30 pm",
      description:
        "Join industry leaders as they discuss emerging technologies and predict the future landscape of innovation. Gain insights into upcoming trends, potential disruptions, and how to position yourself at the forefront of technological advancement.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      additionalInfo: {
        location: "Main Stage",
        speaker: "Panel of Industry Experts",
      },
    },
  ]
}

