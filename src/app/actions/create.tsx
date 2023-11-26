'use server'

import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

// type FormData = {
//   title: string,
//   rating: number,
//   time: number,
//   description: string
// }

export async function createRecipe(formData: any) {
  const {title, time, rating, description} = Object.fromEntries(formData)

  // create a recipe id
  const id = Math.floor(Math.random() * 100000)
  
  // add the recipe to the sorted set
  const unique = await client.zAdd('recipes', {
    value: title,
    score: id
  }, { NX: true })

  if (!unique) {
    return {error: 'That recipe has already been added.'}
  }
    
  // save new hash for the recipe
  await client.hSet(`recipes:${id}`, {
    title,
    time,
    rating,
    description
  })

  redirect('/')
}