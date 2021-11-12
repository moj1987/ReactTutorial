import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Signup />
      <br />
      <Login />
    </div>
  );
};

export default App;
