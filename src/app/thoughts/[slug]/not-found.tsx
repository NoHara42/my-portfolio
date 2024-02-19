import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto mt-40 text-center text-white">
      <h2 className="mb-4 text-3xl font-bold">Page not found...</h2>
      <Link href="/thoughts">
        <span className="mr-2">&larr;</span>
        <span>Back to thoughts</span>
      </Link>
    </div>
  );
}
