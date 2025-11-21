import { Languages, Play } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { StreamResponse } from '@/api/streamed/types/stream.response'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Props {
  stream: StreamResponse;
  className?: string;
}

export const StreamCard = async ({ stream, className }: Props) => {
  return (
    <Link href={stream.embedUrl}>
      <Card
        className={cn("group p-4 bg-secondary/50 border-border hover:bg-secondary/80 transition-all duration-300 cursor-pointer", className)}
      >
        <pre>{JSON.stringify(stream, null, 2)}</pre>
        <div className="flex items-start justify-between mb-3">
          <div>
            <Badge className={cn(" bg-red-500 border-none text-primary-foreground mb-2", { 'hidden': stream.hd })}>
              HD
            </Badge>
            <span>
              <Languages />
              <p className="text-sm text-muted-foreground">{stream.language}</p>
            </span>
          </div>
          <Play className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-muted-foreground">
            {stream.viewers} watching
          </span>
          <Button size="sm" variant="default">
            Watch
          </Button>
        </div>
      </Card>
    </Link>
  )
}
