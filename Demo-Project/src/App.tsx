import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import Register from "./Register";
import Footer from "./Footer";
function App() {
  // const myCallback = ({flage,userName}:{flage:boolean,userName:string}) => {
  //     console.log(flage+","+userName)
  // }
  // <Login callbackFromParent={myCallback}></Login>
  return (
    <div>
      <Router>
        <Header loginFlage={false} userName={"reem"}></Header>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <div></div>
        <Footer></Footer>
      </Router>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
