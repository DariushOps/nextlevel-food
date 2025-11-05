"use client";

import { useFormStatus } from "react-dom";

export default function MealFormSubmit() {
  const { pending } = useFormStatus();

  return <button>{pending ? "Submitting..." : "Share meal"}</button>;
}
