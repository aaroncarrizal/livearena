import { getAllSports } from "@/api/streamed/actions/sportActions";
import { CustomHero } from "@/components/CustomHero";
import { MatchCategory } from "@/components/MatchCategory";

const Index = async () => {
  const categories = await getAllSports()
  return (
    <>
      <CustomHero/>
      {categories.map(category =>(
        <MatchCategory key={category.id} categoryName={category.name} categoryId={category.id}/>
      ))}
    </>
  )
};

export default Index;