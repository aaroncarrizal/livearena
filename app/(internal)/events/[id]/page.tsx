import StreamSources from "@/components/StreamSources"

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  return (
    <div>
      <StreamSources/>
    </div>

  )
}
export default Page