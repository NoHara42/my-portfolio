"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Typewriter from "typewriter-effect";
import { CardBody, CardContainer, CardItem } from "~/components/3DCard";
import ThreeGreeting from "~/components/ThreeGreeting";
import ScrollDownIcon from "~/components/icons/ScrollDownIcon";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-transparent to-slate-900">
        <Image
          alt="An image of the northern lights"
          src="/northern-lights-3273425.jpg"
          fill
          quality={100}
          draggable={false}
          priority
          className="fixed z-[-1] h-screen w-screen object-cover"
        ></Image>
        <div className="flex min-h-screen flex-col items-center justify-center gap-16 md:flex-row xl:gap-24 ">
          <motion.div
            className="relative h-60 w-60 lg:h-64 lg:w-64 xl:h-80 xl:w-80"
            initial={{ x: -1000, rotate: -180 }}
            animate={{ x: 0, rotate: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Image
              alt="A picture of me"
              sizes="50vw, (min-width: 768px) 33vw"
              fill
              draggable={false}
              priority
              quality={100}
              className="aspect-square rounded-full object-cover"
              src="/resizedprofilepicture.jpg"
            ></Image>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 text-center"
            initial={{ x: 1000, rotate: 180 }}
            animate={{ x: 0, rotate: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
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
      <section className="h-[calc(100vh+256px)]">
        <ThreeGreeting className="-top-64 hidden h-full md:block"></ThreeGreeting>
        <div className="absolute top-0 flex h-full w-full flex-col justify-around">
          <motion.h1
            className="w-full bg-primary bg-gradient-to-tr from-primary to-white  bg-clip-text text-center text-9xl font-bold text-transparent"
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
      <section>
        <CardContainer>
          <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-primary/5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Finding purpose
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
            >
              I&apos;ve made a long-form blog to document my human experience.
            </CardItem>
            <div className="mt-20 flex items-center justify-between">
              <CardItem
                translateZ={20}
                as="div"
                className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
              >
                <Link href="/thoughts">Read my mind →</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="flex items-center"
      >
        <div className="showcase-container">
          <div className="relative aspect-square min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem]">
            <Image
              loading="eager"
              className="showcase-image object-cover"
              src="/csas1.gif"
              alt="3D Street-art Simulator Gif"
              fill
            />
          </div>
          <div className="showcase-text">
            <h3 className="showcase-title">3D Street-art Simulator</h3>
            <div className="showcase-description">
              I built a 3D game which runs in the browser using the three.js
              library. It supports multi-touch and can be used best on an
              android phone. <br />
              In future, I plan to extend the game to be usable on iOS devices
              and make the game collaborative (ie. multiplayer).
              <div className="showcase-link">
                <a
                  target="_blank"
                  href="https://collaborative-street-art-sim.herokuapp.com/"
                >
                  See the game here
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="showcase-container gap-8">
          <div className="relative aspect-[787/524] min-w-[16rem] md:order-1 md:min-w-[20rem] lg:min-w-[24rem]">
            <Image
              loading="eager"
              className="showcase-image"
              src="/perfect.gif"
              alt="Stopping Cues Gif"
              fill
            />
          </div>

          <div className="showcase-text">
            <h3 className="showcase-title">Stopping Cues:</h3>
            <div className="showcase-description">
              We built a digitally-humane firefox extension, that combats the
              habits people form when using the infinite scroll. It displays a
              stopwatch that times how long you have been scrolling - it also
              randomly presents you with funny little messages that politely
              remind you to stop scrolling.
              <div className="showcase-link">
                <a
                  target="_blank"
                  href="https://addons.mozilla.org/en-US/firefox/addon/stoppingcues-alpha/"
                >
                  Try the extension here
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="showcase-container">
          <div className="showcase-gallery-collection max-w-lg">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/idhPage1.png"
                alt="Digital Humanities paper image"
                fill
              />
            </div>
            <div className="showcase-graphs">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/idhPage8.png"
                  alt="Digital Humanities paper image"
                  fill
                />
              </div>
              <div className="showcase-whitespace"></div>
              <div className="relative aspect-[7/6]">
                <Image
                  src="/bias_hashtags_count_piechart.png"
                  alt="Digital Humanities paper image"
                  fill
                />
              </div>
              <div className="showcase-whitespace"></div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/newspaper_sentiments_linechart.png"
                  alt="Digital Humanities paper image"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="showcase-text">
            <h3 className="showcase-title">Brexit Twitter Crawler:</h3>
            <div className="showcase-description">
              We built a Twitter crawler, (a program that collects data from an
              API) to analyse the sentiment (reaction) of tweets of various UK
              newspaper publisher&apos;s followers - throughout the Brexit saga.
              <div className="showcase-link">
                <a
                  target="_blank"
                  href="/BrexitTwitterCrawler_DigitalHumanitiesProject.pdf"
                >
                  See the paper here
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="showcase-container">
          <div className="relative aspect-square min-w-[16rem] md:order-1  md:min-w-[20rem] lg:min-w-[24rem]">
            <Image
              className="showcase-image"
              loading="eager"
              src="/ThatOneMovie.gif"
              alt="That One Movie Dash Screen Picture"
              fill
            />
          </div>
          <div className="showcase-text">
            <h3 className="showcase-title">Semantic Movie Recommender:</h3>
            <div className="showcase-description">
              We built a web-app that prompts the user with a small dialogue,
              asking for the film the user is looking for. Following this, a
              semantic comparison is made between the user-input and aggregated
              descriptions of various movie DB APIs.
              <br />
              <br />
              After that, it returns the top 5 most semantically-similar films.
              <div className="showcase-link">
                <a
                  target="_blank"
                  href="https://nohara42.github.io/ThatOneMovie-Front-End/"
                >
                  See the web-app here
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="showcase-container">
          <div className="flex flex-col items-center gap-8">
            <div className="relative aspect-[2/1] h-40 lg:h-52 xl:h-64">
              <Image
                className="showcase-image"
                src="/GraphBIL.png"
                alt="The graph view of my bachelor thesis"
                fill
              />
            </div>
            <div className="relative aspect-[2/1] h-40 lg:h-52 xl:h-64">
              <Image
                className="showcase-image"
                src="/MetadataBIL.png"
                alt="The metadata view of my bachelor thesis"
                fill
              />
            </div>
          </div>
          <div className="showcase-text">
            <h3 className="showcase-title">Bachelor Thesis</h3>
            <h4 className="showcase-title text-lg">
              Biodiversity-in-Literature Explorer
            </h4>
            <div className="showcase-description">
              I built a full-stack app for my university bachelor thesis, that
              allows biodiversity researchers to explore large amounts of
              literature data using distant reading.
              <br />
              The app is built using React, TailwindCSS, Prisma ORM, PostgreSQL.
              <br />
              <div className="showcase-link">
                <a
                  target="_blank"
                  href="ch01.informatik.uni-leipzig.de:5100/bil-explorer/"
                >
                  See the full-stack app deployed here
                </a>
                <br />
                <br />
                <a
                  target="_blank"
                  href="https://github.com/NoHara42/BachelorThesis"
                >
                  See the repository here
                </a>
                <br />
                <br />
                <a
                  target="_blank"
                  href="/BioDiversityInLiterature-BachelorsThesis.pdf"
                >
                  See the thesis here
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="showcase-container">
          <div className="flex flex-col items-center gap-8 md:order-1">
            <div className="relative aspect-[10/9] w-52 lg:w-64 xl:w-72">
              <Image
                className="showcase-image"
                src="/prototype.jpg"
                alt="Egg Incubator Prototype Picture"
                fill
              />
            </div>
            <div className="relative aspect-[2/1] min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem]">
              <Image
                className="showcase-image"
                src="/eggIncubator.png"
                alt="Egg Incubator Dashboard Picture"
                fill
              />
            </div>
          </div>
          <div className="showcase-text">
            <h3 className="showcase-title">Egg Incubator Prototype:</h3>
            <div className="showcase-description">
              We prototyped a build-it-yourself open-sourced egg incubator using
              an ESP32 chip - running preact and hosting a web server, allowing
              the user to configure and monitor parameters such as the
              temperature and humidity inside the incubator.
              <br />
              <div className="showcase-link">
                <a
                  target="_blank"
                  href="https://github.com/fabfarm/fabfarmIncubator/"
                >
                  See the open-source project here
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <section className="flex flex-col items-center justify-around text-white md:flex-row">
        <motion.h1
          className="bg-primary bg-gradient-to-tr from-primary to-white bg-clip-text p-8 text-center text-transparent md:text-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          Let&apos;s get in touch.
        </motion.h1>
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="flex flex-row gap-8 md:flex-col lg:gap-16"
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ned-o-hara-b5840b127/"
            className="flex items-center gap-4"
          >
            <Image
              alt="Linkedin Logo"
              src="/logo-linkedin.svg"
              width="48"
              height="48"
              className="invert"
            ></Image>
            <h4 className="hidden md:block">LinkedIn</h4>
          </a>
          <a
            target="_blank"
            href="https://github.com/nohara42"
            className="flex items-center gap-4"
          >
            <Image
              alt="GitHub Logo"
              src="/logo-github.svg"
              width="48"
              height="48"
            ></Image>

            <h4 className="hidden md:block">GitHub</h4>
          </a>
          <a
            target="_blank"
            href="mailto:contact@nohara.me"
            className="flex items-center gap-4"
          >
            <Image
              alt="Email Icon"
              src="/mail-outline.svg"
              width="48"
              height="48"
              className="invert"
            ></Image>
            <h4 className="hidden md:block">Email</h4>
          </a>
        </motion.nav>
      </section>
    </>
  );
}
