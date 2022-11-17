import React, {useState} from "react";
import { Link,NavLink } from "react-router-dom";
import logo from './Assets/logo.png'
import Footer from "./Footer";

function SignIn() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const user ={
      email,
      password
    }

  };

  return (
    <div className="sig">
      <div id="signHeader">
      <div className="header">
          <NavLink to="/">
            {/* <h2 id="h-t">ProductReview</h2> */}
            <img src = {logo} alt="Car Review" id="h-t"/>
          </NavLink>
        </div>
        <div id="welcome">
          <h1 className="welcome">WELCOME TO CAR REVIEW SIGN IN PAGE</h1>
          </div>
        </div>

      <section className="logInPage" id="logInPage">
        <div className="logIn">
          <form onSubmit={handleSubmit}>
            <span className="closeBtn1">
              <Link to="/">
                <i className="fas fa-times"></i>
              </Link>
            </span>

            <div className="container2">
              <h1>Log In</h1>
              <br></br>

              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                className="input"
                type="text" placeholder="Enter Email" name="email" id="email2"
                onChange={(e)=>setEmail(e.target.value)}
                required />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                className="input"
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw2"
                onChange={(e)=>setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="registerbtn"
                href="/">
                Log In
              </button>
            </div>

            <div className="container-signin">
              <p className="question">
                Don't have an account?{" "}
                <a href="/signUp" id="butt2">
                  Sign Up
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </section>
     <Footer></Footer>
    </div>
  );
}

export default SignIn;
