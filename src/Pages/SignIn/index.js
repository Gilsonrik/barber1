import React from "react";
import "./index.css";

export default function SignIn() {
  return (
    <div className="center">
      <h1>Sign in</h1>
      <form action="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label htmlFor="username">username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label htmlFor="">password</label>
        </div>
        <div className="pass">forgot the password?</div>
        <input type="submit" value="Sign In" />
        <div className="signup_link">
          Not a member? <a href="../SignUp">Sign Up</a>
        </div>
      </form>
    </div>
  );
}
