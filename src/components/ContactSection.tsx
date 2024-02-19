"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection({
  ctaTitle = "Let's get in touch.",
}: {
  ctaTitle?: string;
}) {
  return (
    <section className="flex w-full flex-col items-center justify-around text-white md:flex-row">
      <motion.h1
        className="bg-primary bg-gradient-to-tr from-primary to-white bg-clip-text p-8 text-center text-transparent md:text-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        {ctaTitle}
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
  );
}
