"use server";

import { saveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function sharedMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !meal.image.size === 0
  ) {
    return { message: "Invalid Input" };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
