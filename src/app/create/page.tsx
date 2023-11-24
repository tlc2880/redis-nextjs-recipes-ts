'use client'
import { createRecipe } from '@/app/actions/create'
import React, { useState } from "react"

type FormData = {
  title: string,
  time: number,
  rating: number,
  description: string
}

export default function Create() {
  const [error, setError] = useState('')

  async function onSubmit(formData: FormData) {
    const result: any = await createRecipe(formData)

    if (result?.error) {
      setError(result.error)
    }
  }

  return (
    <main>
      <form action={onSubmit}>
        <h2>Add a New Recipe</h2>
        <input type="text" name="title" placeholder="title" />
        <input type="number" name="time" max={1000} min={1} placeholder="cooking time in minutes" />
        <input type="number" name="rating" max={5} min={1} placeholder="rating (1-5)" />
        <textarea name="description" placeholder="description..."></textarea>
        <button type="submit" className="btn">Add Recipe</button>
        {error && <div className="error">{error}</div>}
      </form>
    </main>
  )
}