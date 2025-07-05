import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";


export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);

  return (
    <div className={cn("absolute inset-0 -z-10 h-full w-full", className)} {...rest}>
      <div className="grid h-full w-full grid-cols-12">
        {rows.map((_, i) => (
          <motion.div
            key={`box-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: Math.random() * 0.4 + 0.05 }}
            transition={{
              duration: 2,
              delay: i * 0.002,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="border-b border-r border-neutral-800/50"
          />
        ))}
      </div>
    </div>
  );
};

export default BoxesCore;


