"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate, stagger } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffectLoop = ({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        // Animate letters in
        await animate(
          "span",
          { opacity: 1, display: "inline-block" },
          { duration: 0.3, delay: stagger(0.1), ease: "easeInOut" }
        );

        // Wait a little before hiding
        await new Promise((res) => setTimeout(res, 1000));

        // Animate letters out
        await animate(
          "span",
          { opacity: 0, display: "inline-block" },
          { duration: 0.2, delay: stagger(0.05), ease: "easeInOut" }
        );
      }
    };

    loopAnimation();
  }, [animate]);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                className={cn(`dark:text-white text-black opacity-0`, word.className)}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName)}
      ></motion.span>
    </div>
  );
};
