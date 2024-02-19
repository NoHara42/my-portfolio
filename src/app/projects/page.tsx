"use client";

import { HomeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactSection from "~/components/ContactSection";
import SparklesLayout from "~/components/SparklesLayout";
import ScrollDownIcon from "~/components/icons/ScrollDownIcon";

export default function ProjectsPage() {
  return (
    <SparklesLayout
      className="w-full"
      title="Projects"
      topNavLinkElement={<HomeIcon className="h-6"></HomeIcon>}
    >
      <ScrollDownIcon className="scale-50 opacity-80"></ScrollDownIcon>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="showcase-container flex items-center"
      >
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
            library. It supports multi-touch and can be used best on an android
            phone. <br />
            In future, I plan to extend the game to be usable on iOS devices and
            make the game collaborative (ie. multiplayer).
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="showcase-container gap-8"
      >
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="showcase-container"
      >
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="showcase-container"
      >
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="showcase-container"
      >
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="showcase-container"
      >
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
            the user to configure and monitor parameters such as the temperature
            and humidity inside the incubator.
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
      </motion.section>
      <ContactSection></ContactSection>
    </SparklesLayout>
  );
}
