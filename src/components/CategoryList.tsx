export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="flex gap-4 pb-4">
      {categories.map((category) => (
        <span
          key={category}
          className="rounded-2xl bg-primary px-4 py-2 text-sm"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
