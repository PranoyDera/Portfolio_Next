"use client";

import React, { useState } from "react";
import { Button } from "../Components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type CarouselWrapperProps = {
  components: React.ReactNode[];
  className?: string;
};

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  components,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? components.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === components.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={cn("relative w-full flex flex-col items-center", className)}>
      {/* Animated Component */}
      <div className="w-full overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ x: direction === "right" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === "right" ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {components[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-2">
        <Button
          onClick={handlePrev}
          variant="outline"
          className="px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition duration-300"
        >
          ⬅ Prev
        </Button>
        <Button
          onClick={handleNext}
          variant="outline"
          className="px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition duration-300"
        >
          Next ➡
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-4">
        {components.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? "right" : "left");
              setCurrentIndex(idx);
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              idx === currentIndex ? "bg-white" : "bg-gray-500"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselWrapper;
