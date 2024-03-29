import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SparklesLayout from "~/components/SparklesLayout";
import { getAllPostsFromNotion } from "~/services/posts";

export default async function ThoughtsPage() {
  const allPosts = await getAllPostsFromNotion();

  return (
    <SparklesLayout
      title="Thoughts"
      topNavLinkElement={<HomeIcon className="h-6"></HomeIcon>}
    >
      {allPosts.map((post) => (
        <>
          <Link
            className="w-full text-left text-white"
            href={"/thoughts/" + post.slug}
          >
            <h5 key={post.id}>{post.title}</h5>
            <p className="w-full text-left text-white">{post.date}</p>
          </Link>
          <br />
          <br />
        </>
      ))}
    </SparklesLayout>
  );
}
