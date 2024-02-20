export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pb-4 lg:gap-4">
      {categories.map((category) => (
        <span
          key={category}
          className="rounded-2xl bg-primary px-2 text-sm lg:px-4 lg:py-1"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
