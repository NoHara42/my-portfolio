"use client";

import clsx from "clsx";
import { motion, useScroll } from "framer-motion";
import { type MutableRefObject, useRef, useState } from "react";

function ScrollDownIcon({ className }: { className: string }) {
  const { scrollYProgress } = useScroll();

  const [invertedScrollYProgressValue, setInvertedScrollYProgressValue] =
    useState(1);

  scrollYProgress.on("change", () =>
    setInvertedScrollYProgressValue(1 - scrollYProgress.get() * 5)
  );

  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  return invertedScrollYProgressValue > 0 ? (
    <motion.div
      ref={ref}
      style={{ opacity: invertedScrollYProgressValue }}
      className={clsx(
        className,
        "flex h-16 w-8 items-center justify-center rounded-full ring-[3px] ring-white"
      )}
    >
      <div className="h-4 w-4 animate-up-down rounded-full bg-white"></div>
    </motion.div>
  ) : null;
}

export default ScrollDownIcon;
