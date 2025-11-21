/* eslint-disable @next/next/no-img-element */
import { CalendarClock, Play } from "lucide-react"
import { getMostPopularLiveMatch } from "@/api/streamed/actions/matchActions"
import { LiveBadge } from "./LiveBadge"
import { Button } from "./ui/button"
import Link from "next/link"
import { categoryMapper } from "@/lib/categoryMapper"

export const FeaturedMatch = async () => {
  const match = await getMostPopularLiveMatch()
  const date = new Date(match.date)

  return (
    <div className="relative h-[70vh] mb-12 overflow-hidden">
      <img
        src='https://www.oregonlive.com/resizer/v2/N7YSVDXDJZCCVLADKHL7PFPLNU.jpg?auth=70a3ab2079e3e113433a936ff10951d123bb8708a29533cc6922449a3c46340d&width=1280&smart=true&quality=90'
        alt={match.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
        <LiveBadge />
        <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 max-w-3xl">
          {match.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
          {categoryMapper(match.category)}
        </p>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarClock className="w-5 h-5" />
            <span className="text-sm font-medium">{date.toLocaleDateString() + ' ' + date.toLocaleTimeString()} </span>
          </div>
        </div>
        <Link href={`/events/${match.id}`}>
          <Button size="lg" className="text-primary-foreground font-semibold">
            <Play className="w-5 h-5 mr-2" /> Watch Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
