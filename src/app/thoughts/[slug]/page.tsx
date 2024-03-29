import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import NotionPage from "~/components/NotionPage";
import { getRecordMap } from "~/libs/notion";
import { getAllPostsFromNotion } from "~/services/posts";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-solarizedlight.css";
import "react-notion-x/src/styles.css";
import ContactSection from "~/components/ContactSection";

export const dynamic = "force-dynamic";

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const allPosts = await getAllPostsFromNotion();

  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }

  if (!post.published) {
    return (
      <article
        data-revalidated-at={new Date().getTime()}
        className="mx-auto mt-40 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold">Page not found...</h2>
        <Link href="/thoughts">
          <span className="mr-2">&larr;</span>
          <span>Back to thoughts</span>
        </Link>
      </article>
    );
  }

  const recordMap = await getRecordMap(post.id);

  return (
    <>
      <article
        data-revalidated-at={new Date().getTime()}
        className="mt-4 flex flex-col items-center md:mt-20"
      >
        <Link href="/thoughts" className="text-white">
          <span className="mr-2">&larr;</span>
          <span>Back to thoughts</span>
        </Link>
        {post.cover && (
          <div className="relative aspect-[3/2] w-[90vw] max-w-[900px]">
            <Image
              src={post.cover}
              alt="cover"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        <NotionPage post={post} recordMap={recordMap} />
        <ContactSection ctaTitle="Let's share ideas."></ContactSection>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const allPosts = await getAllPostsFromNotion();

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const allPosts = await getAllPostsFromNotion();
  const post = allPosts.find((p) => p.slug === slug);

  return post
    ? {
        title: post.title,
        openGraph: {
          images: [
            {
              url: post.cover,
              width: 400,
              height: 300,
            },
          ],
        },
      }
    : {};
}
