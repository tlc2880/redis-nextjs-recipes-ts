import Link from 'next/link'

const getRecipes = async () => {
  
}

export default async function Home() {

  return (
    <main>
      <nav className="flex justify-between">
        <h1 className='font-bold'>Burrito Recipes on Redis!</h1>
        <Link href="/create" className="btn">Add a new recipe</Link>
      </nav>
      
      <p>List of recipes here.</p>
    </main>
  )
}
