import { useState } from "react";
import User from "./user";
import College from "./college";
import Student from "./Student";
import Wrapper, { Forms } from "./Wrapper";
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

  let CollegeName = ["pccoe", "pcp", "dyp", "coep", "aissms"];

  let [nameof, setName] = useState();
  return (
    <div>
      <center>
        <h1> USER COMPONENTS</h1>
      </center>
      {/* <h3>{name}</h3> */}
      {/* 

      <User name={name} age={age} email={email}/>
       */}

      <User user={userObj} />
      <hr />
      <User user={userObj2} />

      <hr />
      <center>
        <h1> COLLEGE COMPONENTS</h1>
      </center>
      <hr />

      <College collegeList={CollegeName[0]} />
      <College collegeList={CollegeName[1]} />
      <College collegeList={CollegeName[2]} />

      <hr />
      <center>
        <h1> STUDENT COMPONENTS</h1>
      </center>
      <hr />

      <button onClick={() => setName("Lily")}>Set Name</button>
      <Student name={nameof} />
      <hr />
      <center>
        <h1> WRAPPER COMPONENTS</h1>
      </center>
      <hr />
      <Wrapper></Wrapper>
      <hr />
      <br />
      <Forms />
    </div>
  );
}
export default App;
