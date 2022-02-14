import React from 'react';
import "./login.css"

function Login() {
    return (
        <div className="login-wrapper">
    <form>
  <label>

      <p>Username:</p>
      <input type="text" placeholder="enter your username"/>
  </label>

  <label>

      <p>Password:</p>
      <input type="text" placeholder="enter your password"/><br></br>
  </label><br></br>

  <div>
      <input type="submit" value="submit"/>
  </div>
    

    </form>
    </div>
    );
}

export default Login;