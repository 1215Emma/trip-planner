import react, { useState, useEffect, useRef } from "react";
import styles from "../styles/Layout.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import Navigation from "./Navigation";
import Header from "./Header";
import Maps from "./Maps";
import RadiusProfiles from "./RadiusProfiles";
import CreateRadius from "./CreateRadius";
import { motion, AnimatePresence } from "framer-motion";
import { firebase } from "../firebase/firebase";
import { FirebaseAuthProvider, useFirebaseAuth } from "../auth/AuthProvider";

const Layout: React.FC = ({ children }) => {
  const [isCreateRadiusOpen, setIsCreateRadiusOpen] = useState<boolean>(false);

  return (
    <>
      <FirebaseAuthProvider>
        <Navigation />
        <div className={styles.container}>
          <main className={styles.main}>
            <Header />
            {children}
            <div className={styles.contentContainer}>
              <div className={styles.mapRadiusContainer}>
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
                      className={styles.createRadius}
                    >
                      <CreateRadius

                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

                <RadiusProfiles
                  isCreateRadiusOpen={isCreateRadiusOpen}
                  setIsCreateRadiusOpen={setIsCreateRadiusOpen}
                />
            </div>
          </main>
        </div>
      </FirebaseAuthProvider>
    </>
  );
};

export default Layout;
