import { getLiveMatchesBySportAction } from '@/api/streamed/actions/matchActions';
import { ChevronRight } from 'lucide-react'
import { MatchCard } from './MatchCard';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

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
        <Button variant={'link'} className="flex items-center">
          View All <ChevronRight />
        </Button>
      </div>
      <div className="flex gap-x-4 scrollbar-hide overflow-x-scroll snap-x">
        {matches.map((match) => (
          // <div key={match.id} className="w-[25%] md:w-[50%] sm:w-full">
          <MatchCard
            key={match.id}
            match={match}
          />
          // </div>
        ))}
      </div>
    </div>
  )
}
