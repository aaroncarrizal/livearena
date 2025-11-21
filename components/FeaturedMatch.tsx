/* eslint-disable @next/next/no-img-element */
import { CalendarClock, Play } from "lucide-react"
import { getMostPopularLiveMatch } from "@/api/streamed/actions/matchActions"
import { LiveBadge } from "./LiveBadge"
import { Button } from "./ui/button"
import Link from "next/link"
import { categoryMapper } from "@/lib/categoryMapper"
import Image from "next/image"

export const FeaturedMatch = async () => {
  const match = await getMostPopularLiveMatch()
  const date = new Date(match.date)

  return (
    <div className="relative h-[70vh] mb-12 overflow-hidden">
      <Image
        src={`/sport-images/${match.category}.webp`}
        fill
        alt={match.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
        <LiveBadge />
        <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 md:max-w-3xl">
          {match.title}
        </h1>
        <p className="text-2xl text-muted-foreground mb-6 max-w-2xl">
          {categoryMapper(match.category)}
        </p>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-x-2 text-muted-foreground">
            <CalendarClock className="text-lg" />
            <span className="text-lg font-medium">{date.toLocaleDateString() + ' ' + date.toLocaleTimeString()} </span>
          </div>
        </div>
        <Link href={`/events/${match.id}`}>
          <Button size="lg" className="text-primary-foreground font-semibold">
            <Play /> Watch Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
