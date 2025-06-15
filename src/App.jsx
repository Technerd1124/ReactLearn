import { useState } from "react";
import User from "./user";
function App() {
  // const [f , setCar]= useState("BMW")

  // let name="lily"
  // let age = 12
  // let email="dhan@gmail.com"

  let userObj = {
    name: "dhanashri",
    age: "180",
    email: "Dhanshri@ggmial.com",
  };

  let userObj2 = {
    name: "Lily",
    age: "20",
    email: "lily@ggmial.com",
  };

  return (
    <div>
      {/* <h3>{name}</h3> */}
      {/* 

      <User name={name} age={age} email={email}/>
       */}

      <User user={userObj} />
      <hr/>
      <User user={userObj2} />
    </div>
  );
}

export default App;
