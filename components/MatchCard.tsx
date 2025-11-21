/* eslint-disable @next/next/no-img-element */
"use client"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  imageUrl?: string;
  matchId: string;
}

export const MatchCard = ({ title, imageUrl, matchId }: Props) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/events/${matchId}`)
  }
  return (
    <Card className="group relative overflow-hidden border-none bg-card hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={handleClick} >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={`https://streamed.su/${imageUrl}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-2 left-2 bg-red-600 border-none text-primary-foreground font-bold">
          • LIVE
        </Badge>
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3">
          <p className="text-sm font-semibold text-foreground line-clamp-1">{title}</p>
          {/* <p className="text-xs text-muted-foreground">{viewers} viewers</p> */}
        </div>
      </div>
    </Card>
  )
}
