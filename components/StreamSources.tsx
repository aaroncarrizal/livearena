import { ArrowLeft, Play } from "lucide-react";
// import { useParams } from "next/navigation";
import { Badge } from "./ui/badge"
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const StreamSources = () => {
  // const { streamId } = useParams();
  // const navigate = ();

  // Mock data - would come from API
  const streamTitle = "Premier League: Manchester United vs Liverpool";
  const sources = [
    {
      id: "alpha",
      name: "Alpha",
      streams: [
        { quality: "1080p", language: "English", viewers: "12.5K" },
        { quality: "720p", language: "English", viewers: "8.2K" },
        { quality: "480p", language: "Spanish", viewers: "3.1K" },
      ],
    },
    {
      id: "bravo",
      name: "Bravo",
      streams: [
        { quality: "1080p", language: "English", viewers: "15.3K" },
        { quality: "720p", language: "French", viewers: "4.7K" },
      ],
    },
    {
      id: "charlie",
      name: "Charlie",
      streams: [
        { quality: "4K", language: "English", viewers: "9.8K" },
        { quality: "1080p", language: "German", viewers: "5.4K" },
        { quality: "720p", language: "Portuguese", viewers: "2.9K" },
      ],
    },
    {
      id: "delta",
      name: "Delta",
      streams: [
        { quality: "1080p", language: "English", viewers: "11.2K" },
        { quality: "720p", language: "Italian", viewers: "3.6K" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          // onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2" />
          Back
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">{streamTitle}</h1>
          <p className="text-muted-foreground">Select a source to start watching</p>
        </div>

        <div className="space-y-6">
          {sources.map((source) => (
            <Card key={source.id} className="p-6 bg-card border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Source {source.name}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {source.streams.map((stream, idx) => (
                  <Card
                    key={idx}
                    className="group p-4 bg-secondary/50 border-border hover:bg-secondary/80 transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge className="bg-live bg-red-500 border-none text-primary-foreground mb-2">
                          {stream.quality}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{stream.language}</p>
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
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamSources;