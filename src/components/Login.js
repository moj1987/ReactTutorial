import React, { useState } from "react";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
       event.preventDefault();

       const user = new CognitoUser({
         Username: email,
         Pool: UserPool
       });

       const authDetails = new AuthenticationDetails({
Username:email,
Password: password
       });

       user.authenticateUser(authDetails, {
         onSuccess:(data)=>{
           console.log("onSuccess: ", data);
         },
         onFailure:(err)=>{
           console.log("onFailure: ", err);
         },
         newPasswordRequired: (data)=>{
           console.log("newPasswordRequired: ", data);
         }
       })
    
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <br />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <br />
        <button type="submit">HiT ME!!!</button>
      </form>
    </div>
  );
};
export default Login;
