// import React from 'react';
// import { useState } from 'react';
// import PropTypes from "prop-types";
// import "./login.css"


// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }








// function Login(setToken)
// {
//     const handleSubmit=async e=>{
//         e.preventDefault();
//         const token= await loginUser({
//             username,
//             password
//         })
//        setToken(token)
//     }






//     const[username,setUserName]=useState();
//     const[password,setPassword]=useState();
//     return (
//         <div className="login-wrapper">
//     <form onSubmit={handleSubmit}> 
//   <label>

//       <p>Username:</p>
//       <input type="text" placeholder="enter your username" onchange={(e)=>setUserName(e.target.value)}/>
//   </label>

//   <label>

//       <p>Password:</p>
//       <input type="password" placeholder="enter your password" onchange={(e)=>setPassword(e.target.value)}/><br></br>
//   </label><br></br>

//   <div>
//       <input type="submit" value="submit"/>
//   </div>
    

//     </form>
//     </div>
//     );
// }

// //Add in the PropType from the new prop and destructure the props object to pull out the setToken prop.
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };

// export default Login;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};