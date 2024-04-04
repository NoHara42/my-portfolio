"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ThoughtsError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="mx-auto mt-40 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">
          Something went wrong... Try again later.
        </h2>
        <Link href="/">
          <span className="mr-2">&larr;</span>
          <span>Back to home...</span>
        </Link>
      </div>
    </div>
  );
}
