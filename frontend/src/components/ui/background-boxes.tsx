// src/components/ui/background-boxes-demo.tsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 grid grid-cols-20 gap-px opacity-30",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={i}
          className="h-2 w-2 bg-blue-200"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.02,
          }}
        />
      ))}
    </div>
  );
};

export default BoxesCore;