import { getMatchByIdAction } from "@/api/streamed/actions/matchActions"
import BackButton from "@/components/BackButton"
import StreamSources from "@/components/StreamSources"

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const match = await getMatchByIdAction(id)
  return (
    <section className="min-h-screen bg-background container mx-auto px-4 py-8">
      <BackButton/>
      <div className="mb-8">
        <pre>{JSON.stringify(match, null, 2)}</pre>
        <h1 className="text-4xl font-bold text-foreground mb-2">{match.title}</h1>
        <p className="text-muted-foreground">Select a source to start watching</p>
      </div>
      <StreamSources sources={match.sources} />
    </section>

  )
}
export default Page