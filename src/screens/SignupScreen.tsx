import React, { useRef } from "react";
import * as auth from "../shared/firebase";
import './SignupScreen.css'

const SignupScreen: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const register = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      nameRef?.current?.value &&
      emailRef?.current?.value &&
      passwordRef?.current?.value
    ) {
      auth.registerWithEmailAndPassword(
        nameRef?.current?.value,
        emailRef?.current?.value,
        passwordRef?.current?.value
      );
    } else {
      alert("Please fill the necessary details");
    }
  };

  const signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      nameRef?.current?.value &&
      emailRef?.current?.value &&
      passwordRef?.current?.value
    ) {
      auth
        .logInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {
          console.log(authUser);
        })
        .catch((error) => alert(error.message));
    }
  };

  const signInWithGoogle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    auth.signInWithGoogle()
        .then((authUser) => {
          console.log(authUser);
        })
        .catch((error) => alert(error.message));
  
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={nameRef} placeholder="Full Name" type="Full name" />
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={ signIn }>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
        <h4>
          <span className="signupScreen__link" onClick={signInWithGoogle}>
           Login with your Google account
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
