export interface Event {
  id: string
  title: string
  time: string
  description: string
  fullDescription: string
  imageUrl: string
  additionalInfo?: {
    location: string
    speaker: string
    [key: string]: string
  }
}

export interface UserData {
  userId: string
  name: string
  projectsVisited: number
  events: Event[]
}

