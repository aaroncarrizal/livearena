/* eslint-disable @next/next/no-img-element */
import { Users, Play } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export const CustomHero = () => {
  const title = 'Seattle Seahawks vs Los Angeles Rams'
  const description = 'description'
  const viewers = 100
  return (
    <div className="relative h-[70vh] mb-12 overflow-hidden">
      <img
        src='https://www.oregonlive.com/resizer/v2/N7YSVDXDJZCCVLADKHL7PFPLNU.jpg?auth=70a3ab2079e3e113433a936ff10951d123bb8708a29533cc6922449a3c46340d&width=1280&smart=true&quality=90'
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
        <Badge className="mb-4 border-none text-primary-foreground font-bold bg-red-600">
          • LIVE NOW
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 max-w-3xl">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
          {description}
        </p>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">{viewers} watching</span>
          </div>
        </div>
        <Button size="lg" className="text-primary-foreground font-semibold">
          <Play className="w-5 h-5 mr-2" />
          Watch Now
        </Button>
      </div>
    </div>
  )
}
