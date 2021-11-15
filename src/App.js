import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "@aws-amplify/core";
import awsExports from "./aws-exports";
import { Auth } from "aws-amplify";

Amplify.configure(awsExports);

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("Error signing out: ", error);
  }
}

async function globalSignOut() {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log("Error signing out: ", error);
  }
}

const App = () => {
  return (
    <div className="App">
      {/* <Signup />
      <br />
      <Login /> */}
      <br />
      <button onClick={signOut}>Sign out</button>
      <br />
      <br />
      <br />
      <button onClick={globalSignOut}>Sign out from all devices</button>
    </div>
  );
};

//export default App;
export default withAuthenticator(App);
