import React from "react";

import "./index.css";

export default function SignUp() {
  return (
    <div className="center">
      <h1>Sign Up</h1>
      <form action="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label htmlFor="username">username</label>
        </div>
        <div className="txt_field">
          <input type="E-mail" required />
          <span></span>
          <label htmlFor="E-mail">E-mail</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label htmlFor="">password</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label htmlFor="">Confirme password</label>
        </div>
        <div className="pass">forgot the password?</div>
        <input type="submit" value="Sign In" />
        <div className="signup_link">
          if you or a member? <a href="../">Sign In</a>
        </div>
      </form>
    </div>
  );
}
