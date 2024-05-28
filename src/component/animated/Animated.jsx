import { motion } from "framer-motion";
import { final, initial, transition } from "../../utilities/content";

const Animated = ({ className, children }) => {
  return (
    <motion.main
      initial={initial}
      animate={final}
      transition={transition}
      className={className}
    >
      {children}
    </motion.main>
  );
};

export default Animated;
