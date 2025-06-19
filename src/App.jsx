import { useState } from "react";
import User from "./user";
import College from "./college";
import Student from "./Student";
import Wrapper, { Forms } from "./Wrapper";
import UserData, { StudentData } from "./Looping";



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
  let CollegeName = ["pccoe", "pcp", "dyp", "coep", "aissms"];
  let [nameof, setName] = useState();
  return (
    <div>
      <center>
        <h1> USER COMPONENTS</h1>
     
      <User user={userObj} />
      <hr/>
     
        <h1> COLLEGE COMPONENTS</h1>
      
      <hr />
      <College collegeList={CollegeName[0]} />
      <hr />
     
        <h1> STUDENT COMPONENTS</h1>
    
      <hr />

      <button onClick={() => setName("Lily")}>Set Name</button>
      <Student name={nameof} />
      <hr />
  
        <h1> WRAPPER COMPONENTS</h1>
      <hr />
      <Wrapper></Wrapper>
      </center>
      <Forms />


      <br /><br /><hr />
    
      <UserData/>
{/* <StudentData></StudentData> */}
<StudentData/>

    
    </div>
  );
}
export default App;
