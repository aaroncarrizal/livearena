/* eslint-disable @next/next/no-img-element */
import { Card } from "./ui/card"
import { LiveBadge } from "./LiveBadge";
import Link from "next/link";
import { MatchResponse } from "@/api/streamed/types/match.response";
import { cn } from "@/lib/utils";

interface Props {
  match: MatchResponse
}

export const MatchCard = ({ match }: Props) => {
  return (
    <Link href={`/events/${match.id}`} tabIndex={0} role="link" className={cn("rounded-lg snap-center", {'hidden': match.sources.length <= 0})}>
      <Card className="group relative overflow-hidden border-none p-0 w-64 md:w-sm lg:w-lg cursor-pointer"  >
        <div className="aspect-video relative overflow-hidden">
          <img
            src={`https://streamed.su/${match.poster}`}
            alt={match.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <LiveBadge />
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3">
            <p className="text-sm font-semibold text-foreground line-clamp-1">{match.title}</p>
          </div>
        </div>
      </Card>
    </Link>
  )
}
