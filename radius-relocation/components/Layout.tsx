import react, { useState } from "react";
import styles from "../styles/Layout.module.css";
import Navigation from "./Navigation";
import Maps from "./Maps";
import RadiusProfiles from "./RadiusProfiles";
import CreateRadius from "./createRadiusForm/CreateRadius";
import { motion, AnimatePresence } from "framer-motion";
import { FirebaseAuthProvider } from "../auth/AuthProvider";

const Layout: React.FC = ({ children }) => {
  const [isCreateRadiusOpen, setIsCreateRadiusOpen] = useState<boolean>(false);

  return (
    <FirebaseAuthProvider>
      <Navigation />
      <main>
        {children}
        <Maps />
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {isCreateRadiusOpen && (
            <motion.div
              initial={{ opacity: 1, y: "-100%" }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              exit={{ y: "-100%", transition: { duration: 0.5 } }}
              className='absolute h-full w-[calc(100vw-41.5rem)] bg-formColor'
            >
              <CreateRadius />
            </motion.div>
          )}
        </AnimatePresence>
        <RadiusProfiles
          isCreateRadiusOpen={isCreateRadiusOpen}
          setIsCreateRadiusOpen={setIsCreateRadiusOpen}
        />
      </main>
    </FirebaseAuthProvider>
  );
};

export default Layout;
