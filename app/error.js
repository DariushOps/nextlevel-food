"use client";

import Link from "next/link";
import classes from "./meals/page.module.css";

export default function Error() {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetching data. Please try again later.</p>
      <p className={classes.cta}>
        <Link href="/">Go to NextDariush</Link>
      </p>
    </main>
  );
}
