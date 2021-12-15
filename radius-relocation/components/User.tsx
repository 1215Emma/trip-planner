import React, { useState } from "react";
import { useFirebaseAuth } from "../auth/AuthProvider";
import Image from "next/image";
import { firebase } from "../firebase/firebase";
import GoogleAuth from "./GoogleAuth";
import Google from '../public/images/google-logo.png'
import { IoMdArrowDropdown } from "react-icons/io";
import userStyles from "../styles/User.module.css";


const User: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const user = firebase.auth().currentUser;

  const isLoggedIn = useFirebaseAuth();
  console.log(isLoggedIn, "isLoggedIn");
  
  const userClicked = () => {
    const signOut = () => {
      // e.preventDefault();
      firebase.auth().signOut().then(() => {
        console.log("user has signed out")
      })
    }
    return (
      <div className={userStyles.userBtnClicked}>
        {user?.email}
        <button type="button" onClick={()=>{signOut()}}>Sign out</button>
      </div>
    )
  };
  if (isLoggedIn && user) {
    console.log("block 1");
    console.log(user, "in block 1")
    return (
      <div className={userStyles.profile}>
        <button
          type="button"
          className={userStyles.userBtn}
          onClick={() => {
            setIsProfileOpen(!isProfileOpen);
          }}
        >
          <div className={userStyles.user}>
            <Image
              src={`${user?.photoURL}`}
              alt="display picture"
              layout="fixed"
              width={35}
              height={35}
            />
            <h3 style={{ color: isProfileOpen ? "#128b7a" : "white" }}>
              {user?.displayName}
            </h3>
            <div className={userStyles.arrowDownContainer}>
              <IoMdArrowDropdown
                className={userStyles.arrowDown}
                style={{ color: isProfileOpen ? "#128b7a" : "white" }}
              />
            </div>
          </div>
        </button>
        {isProfileOpen && userClicked()}
      </div>
    );
  } else if (isLoggedIn == "unknown") {
    console.log("block 2");
    return <p>Loading...</p>;
  }
  return (
    <div className={userStyles.googleAuth}>
      <div>
        <button type="button" onClick={() => {
          GoogleAuth()
        }}>
          <Image
            src={Google}
            alt="Google logo"
            // layout="fill"
            // objectFit="contain"
            width={25}
            height={25}
          />
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default User;
