import { client } from "@/lib/db"
import Link from 'next/link'

const getRecipes = async () => {
  const result = await client.zRangeWithScores('recipes', 0, -1)

  const recipes = await Promise.all(result.map(b => {
    return client.hGetAll(`recipes:${b.score}`)
  }))

  return recipes
}

export default async function Home() {
  const recipes = await getRecipes()
  return (
    <main>
      <nav className="flex justify-between">
        <h1 className='font-bold'>Burrito Recipes on Redis!</h1>
        <Link href="/create" className="btn">Add a new recipe</Link>
      </nav>
      
      {recipes.map(recipe => (
        <div key={recipe.title} className="card"> 
          <h2>{recipe.title}</h2>
          <p>Cooking time: {recipe.time}</p>
          <p>Rating: {recipe.rating}</p>
          <p>{recipe.description}</p>
        </div>
      ))}
    </main>
  )
}
