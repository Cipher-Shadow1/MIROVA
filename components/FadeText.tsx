"use client";

import { cn } from "../lib/utils";
import { motion } from "motion/react";

type FadeTextProps = {
  children: string;
  className?: string;
  delay?: number;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span";
};

export function FadeText({
  children,
  className,
  delay = 0,
  as: Tag = "p",
}: FadeTextProps) {
  const MotionTag = motion[Tag];

  return (
    <MotionTag className={cn("", className)}>
      {children.split(" ").map((word, index) => (
        <motion.span
          key={`${index}-${word}`}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.08,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </MotionTag>
  );
}
