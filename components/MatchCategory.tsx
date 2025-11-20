import { getLiveMatchesBySportAction } from '@/api/streamed/actions/matchActions';
import { ChevronRight } from 'lucide-react'
import { MatchCard } from './MatchCard';
import { cn } from '@/lib/utils';

interface Props {
  categoryName: string;
  categoryId: string;
}

export const MatchCategory = async ({ categoryName, categoryId }: Props) => {

  let matches = await getLiveMatchesBySportAction(categoryId);
  matches = matches.slice(0, 5);
  return (
    <div className={cn("mb-8", {
      'hidden': matches.length == 0
    })}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-foreground">{categoryName}</h2>
        <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm">View All</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {matches.map((match) => (
          <div key={match.id} className="w-[25%]">
            <MatchCard
              title={match.title}
              imageUrl={match.poster}
              matchId={match.id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
