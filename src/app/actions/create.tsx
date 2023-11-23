'use server'

// import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

export async function createRecipe(formData: any) {
  const {title, time, rating, description} = Object.fromEntries(formData)

  
}