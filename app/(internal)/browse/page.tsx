import { getAllSports } from "@/api/streamed/actions/sportActions";
import { FeaturedMatch } from "@/components/FeaturedMatch";
import { MatchCategory } from "@/components/MatchCategory";

const Page = async () => {
  const categories = await getAllSports()
  // categories = categories.slice(0,2)/*  */
  return (
    <>
      <FeaturedMatch />
      <section className="px-4">
        {categories.map(category =>(
        <MatchCategory key={category.id} categoryName={category.name} categoryId={category.id}/>
      ))}

      </section>
    </>
  )
};

export default Page;