"use client";

import { HomeIcon } from "@heroicons/react/24/solid";
import ContactSection from "~/components/ContactSection";
import SparklesLayout from "~/components/SparklesLayout";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <SparklesLayout
      title="About me"
      className="w-full"
      topNavLinkElement={<HomeIcon className="h-6"></HomeIcon>}
    >
      <motion.section className="prose prose-invert min-h-0">
        <p>
          Personally, I like to make music, cook, travel, and write about how my
          perception of the world is changing. I&apos;m a part of the
          regenerative movement, and I&apos;m writing about regeneration as an
          antidote to weltschmerz. <br />
          (A German word that translates to &apos;world pain&apos;.)
        </p>
        <p>
          I grew up in London for most of my life, and moved to Germany to study
          when I turned 18. Since finishing my degree in Leipzig, I&apos;ve fled
          city-life and have been travelling to explore different kinds of
          communities around the world. My dream is to found a community of my
          own, distilled with all the impressions of all of the communities I
          have taken part in creating.
        </p>
        <p>
          Professionally, I&apos;m a full-stack developer with a B.Sc degree in
          the digital humanities.
          <br />I build things minimally with simplicity that make a bold
          impression.
          <br />
          I&apos;m passionate about web development, and building offline
          as-well-as online communities. I&apos;m currently working a lot with
          React, NextJS, and SvelteKit. I&apos;m interested in AI, data
          visualisation, and 3D web-design.
        </p>
      </motion.section>
      <ContactSection ctaTitle="Let's connect."></ContactSection>
    </SparklesLayout>
  );
}
