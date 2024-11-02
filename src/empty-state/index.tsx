import type { FC, ReactNode } from "react";

import { motion } from "framer-motion";

interface IEmptyStateProps {
  readonly description: string;
  readonly icon: ReactNode;
  readonly title: string;
}

export const EmptyState: FC<IEmptyStateProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="container  m-auto">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md h-full mx-auto flex flex-col items-center justify-center p-8 bg-content1 bg-gradient-to-b from-content1 to-background rounded-2xl shadow-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ scale: 1, rotate: 0 }}
          className="text-6xl mb-6 text-main_yellow bg-background p-4 rounded-full shadow-inner"
          initial={{ scale: 0, rotate: -180 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {icon}
        </motion.div>
        <h2 className="text-2xl font-bold  mb-3">{title}</h2>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};
