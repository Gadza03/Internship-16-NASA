import Navbar from "../components/nav-bar/Navbar";
import { Outlet } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.7 } },
};

export default function MainLayout() {
  return (
    <motion.div>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={window.location.pathname}
          initial="initial"
          animate="animate"
          variants={pageVariants}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
