import react, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Image from "next/image";
import loginStyles from "../styles/Login.module.css";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import google from "../public/images/google-logo.png";
import LALoginPoster from "../public/images/LA-login-poster-cropped.png";
type Props = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  // email: string;
};

const Login: React.FC<Props> = ({ setIsLoggedIn }) => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)
  return (
    <div className={loginStyles.loginContainer}>
      <div className={loginStyles.loginContent}>
        <h1 className={loginStyles.title}>
          <span>Radius</span> <span>Relocation</span>
        </h1>
        {/* <Maps /> */}
        {/* <p className={loginStyles.description}>
          Find what matters to you around your next home
        </p>
        <div className={loginStyles.contentCards}>
          <ul>
            <li>
              <h2>Step 1</h2>
              <p>Pin homes from other sites such as Zillow or PadMapper.</p>
              <h2>insert visual image/animation here</h2>
            </li>
            <li>
              <h2>Step 2</h2>
              <p>
                Mark places that are important to you such as the gym or your
                favorite restaurant.
              </p>
              <h2>insert visual image/animation here</h2>
            </li>
            <li>
              <h2>Step 3</h2>
              <p>
                Visually see the distance of all your favorite places around the
                radius of your potential home.
              </p>
              <h2>insert visual image/animation here</h2>
            </li>
          </ul>
        </div> */}
      </div>
      {/* <button className={loginStyles.loginButtonClosed}>
        Log in
        <HiOutlineArrowNarrowRight />
      </button> */}
      <div className={loginStyles.formContainer}>
        <div className={loginStyles.loginImg}>
          <Image
            src={LALoginPoster}
            alt="poster of LA"
            layout="intrinsic"
            objectFit="contain"
          />
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.email) {
          //     errors.email = "Required";
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = "Invalid email address";
          //   }
          //   return errors;
          // }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={loginStyles.form}>
              <label>Email</label>
              <Field
                type="email"
                name="email"
                placeholder="e.g. emma@radiusrelocation.com"
              />
              <ErrorMessage name="email" component="div" />
              <label>Password</label>
              <Field
                type="password"
                name="password"
                placeholder="e.g. ILoveMangos1!"
              />
              <ErrorMessage name="password" component="div" />
              <button
                type="submit"
                onClick={() => setIsLoggedIn(true)}
                disabled={isSubmitting}
              >
                Log in
              </button>
            </Form>
          )}
        </Formik>
        <div className={loginStyles.signInWithGoogle}>
          <button className={loginStyles.google}>
            <Image
              src={google}
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
    </div>
  );
};

export default Login;
