import Link from "next/link";
import { SparklesCore } from "~/components/Sparkles";
import { getAllPostsFromNotion } from "~/services/posts";

export default async function ThoughtsPage() {
  const allPosts = await getAllPostsFromNotion();

  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <div className="3xl:max-w-3xl flex max-w-xs flex-col items-center rounded-md sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
        <h2 className="relative z-20 mt-16 text-center text-3xl font-bold text-white sm:text-5xl md:text-7xl lg:text-9xl">
          Thoughts
        </h2>
        <div className="relative mb-8 h-40 w-[40rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent" />
          {/* Core component */}

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={150}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 h-full w-full bg-space [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
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
      </div>
    </div>
  );
}
