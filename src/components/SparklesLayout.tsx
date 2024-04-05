"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SparklesCore } from "~/components/Sparkles";
import { cn } from "~/utils/cn";

interface SparklesLayoutProps extends React.HTMLProps<HTMLDivElement> {
  topNavLinkElement: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    if (!window) return;
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (!window) return;

    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};

export default function SparklesLayout({
  children,
  title,
  topNavLinkElement,
  className,
}: SparklesLayoutProps) {
  const [width] = useDeviceSize();
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <div
        className={cn(
          Boolean(className)
            ? className
            : "3xl:max-w-3xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl",
          "flex flex-col items-center rounded-md "
        )}
      >
        <Link href="/" className="mt-20 inline-flex pr-6 text-white">
          <span className="mr-2">&larr;</span>
          {topNavLinkElement}
        </Link>
        <h2 className="relative top-10 z-20 mb-2 mt-16 text-center text-4xl font-bold text-white sm:text-5xl md:top-5 md:text-7xl lg:top-0 lg:text-8xl">
          {title}
        </h2>
        <div className="relative h-40 w-[40rem] scale-50 md:scale-75 lg:mb-8 lg:scale-100">
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
            speed={width! < 640 ? 1 : 2}
            particleDensity={width! < 640 ? 50 : 150}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 h-full w-full bg-space [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        {children}
      </div>
    </div>
  );
}
