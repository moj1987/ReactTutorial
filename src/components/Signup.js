import React, { useState } from "react";
import UserPool from "../UserPool";
import {Auth} from 'aws-amplify';

// async function signUp(){
//   try{
//     const{user} = await Auth.signUp({
//       username,
//       password,
//       attributes:{
//         email,
//         phone_number,
//         firstName,
//         lastName
//       }
//     });
//     console.log(user);
//   }catch(err){
//     console.log('Error signing up: ', err);
//   }
// }


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
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
        <button type="submit">Sign UPPPP!</button>
      </form>
    </div>
  );
};
export default Signup;
