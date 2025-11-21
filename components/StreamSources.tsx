import { StreamSource } from "@/api/streamed/types/match.response";
import { StreamCard } from "./StreamCard";
import { getStreamsBySourceAction } from "@/api/streamed/actions/streamActions";

interface Props {
  sources: StreamSource[];
}

const StreamSources = async ({ sources }: Props) => {
  return (
    <div className="space-y-4">
      {await Promise.all(
        sources.map(async (source) => {
          const streams = await getStreamsBySourceAction(source.source, source.id);

          return (
            <div key={source.id} className={streams.length <= 0 ? 'hidden' : ''}>
              <h3 className="font-bold mb-2">{source.source}</h3>

              <div className="grid grid-cols-1 gap-4">
                {streams.map(stream => (
                  <StreamCard key={stream.id} stream={stream} />
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default StreamSources;
