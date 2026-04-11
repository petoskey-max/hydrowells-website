import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInScopeProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export const FadeInScope = ({ children, delay = 0, className = "", ...props }: FadeInScopeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, ...props.initial as object }}
      whileInView={{ opacity: 1, y: 0, ...props.whileInView as object }}
      viewport={{ once: true, amount: 0.2, ...props.viewport }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay, ...props.transition }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
