import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SparklesLayout from "~/components/SparklesLayout";
import { getAllPostsFromNotion } from "~/services/posts";

export const revalidate = 60; // revalidate at most every min

export default async function ThoughtsPage() {
  const allPosts = await getAllPostsFromNotion();

  return (
    <SparklesLayout
      title="Thoughts"
      topNavLinkElement={<HomeIcon className="h-6"></HomeIcon>}
    >
      {allPosts
        ?.filter((post) => post.published)
        .map((post) => (
          <>
            <Link
              className="w-full px-20 text-left text-white"
              href={"/thoughts/" + post.slug}
            >
              <h6 className="block md:hidden" key={post.id}>
                {post.title}
              </h6>
              <h5 className="hidden md:block" key={post.id}>
                {post.title}
              </h5>
              <p className="w-full text-left text-white">{post.date}</p>
            </Link>
            <br />
            <br />
          </>
        ))}
    </SparklesLayout>
  );
}
