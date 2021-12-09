import react, { useState } from "react";
import styles from "../styles/Layout.module.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Login from "./Login";
import Maps from "./Maps";
import RadiusProfiles from "./RadiusProfiles";
import CreateRadius from "./CreateRadius";
import { motion, AnimatePresence } from "framer-motion";


const Layout: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [isCreateRadiusOpen, setIsCreateRadiusOpen] = useState<boolean>(false);

  return (
    <>
      {isLoggedIn ? (
        <>
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
                        exit={{y: "-100%", transition: {duration: 0.5}}}
                        className={styles.createRadius}
                      >
                        <CreateRadius
                          isCreateRadiusOpen={isCreateRadiusOpen}
                          setIsCreateRadiusOpen={setIsCreateRadiusOpen}
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
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default Layout;
