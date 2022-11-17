import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from './Assets/logo.png'
import Footer from "./Footer";

function SignUp() {
  const [full_name, setFull_name] = useState("")
  const [gender, setGender] = useState("")
  const [email_address, setEmail_address] = useState("")  
  const [password, setPassword] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    console.log('yes')
    const user = {
      full_name, gender, email_address, password
    }
    console.log(user)
    
    fetch('http://localhost:9292/new_users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  return (
    <div>
      <div className="header">
      <NavLink to="/">
            {/* <h2 id="h-t">ProductReview</h2> */}
            <img src = {logo} alt="Car Review" id="h-t"/>
          </NavLink>
          <div id="welcome">
          <h1 className="welcome1">WELCOME TO CAR REVIEW SIGN UP PAGE</h1>
          </div>
      </div>
      <section id="signUp" className="page">
        <div className="form">
          <form action="#" id="signUpForm" onSubmit={handleSubmit}>
            <span className="closeBtn">
              <Link to="/">
                <i className="fas fa-times"></i>
              </Link>
            </span>
            <div className="container-1">
              <h1 className="h1">Register</h1>
              <br></br>
              <p className="please">Please fill in this form to have an account.</p>
              <br></br>

              <label htmlFor="full-name">
                <b>Full_name</b>
              </label>
              <input
                className="input"
                type="text"
                placeholder="Enter full_name"
                name="full-name"
                id="full-name"
                onChange={(e)=>setFull_name(e.target.value)}
                required
              />
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                className="input"
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                onChange={(e)=>setEmail_address(e.target.value)}
                required
              />
              <label htmlFor="gender">
                <b>Gender</b>
              </label>
              <input
                className="input"
                type="text"
                placeholder="Enter your gender"
                name="gender"
                id="gender"
                onChange={(e)=>setGender(e.target.value)}
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                className="input"
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
              <p>
                By creating an account you agree to our{" "}
                <a href="/">Terms & Privacy</a>.
              </p>
              <button type="submit" className="registerbtn" id="registerbtn">
                <a href="/">Register</a>
              </button>
            </div>

            <div className="container-signin">
              <p className="question">
                Already have an account?{" "}
                <a href="/signIn" id="signIn">
                  Sign in
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

export default SignUp;
