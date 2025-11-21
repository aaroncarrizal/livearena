import { getAllSports } from "@/api/streamed/actions/sportActions";
import { FeaturedMatch } from "@/components/FeaturedMatch";
import { MatchCategory } from "@/components/MatchCategory";

const Page = async () => {
  const categories = await getAllSports()
  return (
    <section>
      <FeaturedMatch />
      <div className="px-4">
        {categories.map(category =>(
        <MatchCategory key={category.id} categoryName={category.name} categoryId={category.id}/>
      ))}

      </div>
    </section>
  )
};

export default Page;