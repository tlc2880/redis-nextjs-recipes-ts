'use server'

import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

// type FormData = {
//   title: string,
//   time: number,
//   rating: number,
//   description: string
// }

export async function createRecipe(formData: any) {
  const {title, time, rating, description} = Object.fromEntries(formData)

  // create a recipe id
  const id = Math.floor(Math.random() * 100000)
  
  // save new hash for the recipe
  await client.hSet(`recipes:${id}`, {
    title,
    time,
    rating,
    description
  })

  redirect('/')
}