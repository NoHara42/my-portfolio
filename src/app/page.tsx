"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { CardBody, CardContainer, CardItem } from "~/components/3DCard";
import ContactSection from "~/components/ContactSection";
import ThreeGreeting from "~/components/ThreeGreeting";
import ScrollDownIcon from "~/components/icons/ScrollDownIcon";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-transparent to-slate-900">
        <Image
          alt="An image of the northern lights"
          src="/northern-lights-3273425.webp"
          fill
          sizes="100vw"
          quality={100}
          draggable={false}
          priority
          className="fixed z-[-1] h-screen w-screen object-cover"
        ></Image>
        <div className="flex min-h-screen flex-col items-center justify-center gap-16 md:flex-row xl:gap-24 ">
          <motion.div
            className="relative h-60 w-60 lg:h-64 lg:w-64 xl:h-80 xl:w-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeIn",
            }}
          >
            <Image
              alt="A picture of me"
              sizes="33vw"
              fill
              draggable={false}
              priority
              quality={100}
              className="aspect-square rounded-full object-cover"
              src="/resizedprofilepicture.webp"
            ></Image>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeIn",
            }}
          >
            <h1 className="font-medium text-white">Ned O&apos;Hara</h1>
            <Typewriter
              options={{
                cursorClassName: "text-white text-xl animate-ping lg:text-2xl",
                delay: 20,
                deleteSpeed: 20,
                autoStart: true,
                wrapperClassName: "text-white text-xl lg:text-2xl",
                loop: true,
                strings: [
                  "Digital Generalist",
                  "Full-Stack Developer",
                  "Web Designer",
                  "Humanist",
                  "Community Builder",
                  "Translator",
                ],
              }}
            />
          </motion.div>
        </div>
        <motion.div
          className="min-w-screen flex justify-center"
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ScrollDownIcon className="absolute bottom-10 scale-50 opacity-80 lg:scale-[0.6]"></ScrollDownIcon>
        </motion.div>
      </section>
      <section className="h-full">
        <ThreeGreeting className="-top-64 hidden h-full md:block"></ThreeGreeting>
        <div className="absolute top-0 flex h-full w-full flex-col justify-around">
          <motion.h1
            className="w-full bg-primary bg-gradient-to-tr from-primary to-white  bg-clip-text text-center text-7xl font-bold text-transparent md:text-8xl lg:text-9xl"
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.15,
            }}
          >
            &apos;ello
          </motion.h1>
        </div>
      </section>
      <section className="flex min-h-0 flex-col flex-wrap items-center justify-center gap-2 p-4 lg:flex-row lg:gap-8">
        <CardContainer containerClassName="py-4">
          <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-primary/5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
            <CardItem
              translateZ="70"
              className="text-2xl font-bold text-neutral-600 dark:text-white"
            >
              About me
            </CardItem>
            <CardItem
              as="p"
              translateZ="80"
              className="text-md mt-2 max-w-sm text-neutral-500 dark:text-neutral-300"
            >
              A short introduction if we haven&apos;t met yet.
            </CardItem>
            <div className="mt-20 flex items-center justify-between">
              <CardItem
                translateZ="50"
                as="div"
                className="rounded-xl px-4 py-2 text-sm font-normal dark:text-white"
              >
                <Link href="/about">Get to know me →</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer containerClassName="py-4">
          <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-primary/5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
            <CardItem
              translateZ="70"
              className="text-2xl font-bold text-neutral-600 dark:text-white"
            >
              Thoughts
            </CardItem>
            <CardItem
              as="p"
              translateZ="80"
              className="text-md mt-2 max-w-sm text-neutral-500 dark:text-neutral-300"
            >
              I&apos;ve made a long-form blog to share my human experience.
            </CardItem>
            <div className="mt-20 flex items-center justify-between">
              <CardItem
                translateZ="50"
                as="div"
                className="rounded-xl px-4 py-2 text-sm font-normal dark:text-white"
              >
                <Link href="/thoughts">Read my mind →</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer containerClassName="py-4">
          <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-primary/5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
            <CardItem
              translateZ="70"
              className="text-2xl font-bold text-neutral-600 dark:text-white"
            >
              Projects
            </CardItem>
            <CardItem
              as="p"
              translateZ="80"
              className="text-md mt-2 max-w-sm text-neutral-500 dark:text-neutral-300"
            >
              If you&apos;re interested in working with me.
            </CardItem>
            <div className="mt-20 flex items-center justify-between">
              <CardItem
                translateZ="50"
                as="div"
                className="rounded-xl px-4 py-2 text-sm font-normal dark:text-white"
              >
                <Link href="/projects">See my work →</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </section>
      <ContactSection></ContactSection>
    </>
  );
}
