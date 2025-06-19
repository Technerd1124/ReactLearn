import { useState } from "react";

function Wrapper() {
  const [val, setVal] = useState("");
  return (
    <div>
      <h2> Get Input Field Value </h2>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="enter name"
      />

      {<h2> Hello {val.toUpperCase()}</h2>}
    </div>
  );
}

export function Forms() {
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");
  let [email, setEmail] = useState("");
  let [skills, setSkills] = useState([]);
  const HandleSkills = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <div style={{ border: "2px solid red" }}>
      <center>
        <h2>FORM to FIll</h2>
        <form action="" method="">
          {" "}
          <input
            type="text"
            value={name}
            placeholder=" Enter name"
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            value={pass}
            placeholder=" Enter Password"
            onChange={(event) => setPass(event.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            value={email}
            placeholder=" Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          {/* CHECK BOX HANDLING IN REACT  */}
          <br />
          <input type="checkbox" id="php" value="php" onChange={HandleSkills} />
          <label htmlFor="php">PHP</label>
          <br />
          <input
            type="checkbox"
            id="java"
            value="java"
            onChange={HandleSkills}
          />
          <label htmlFor="java">JAVAP</label>
          <br />
          <input type="checkbox" id="cpp" value="cpp" onChange={HandleSkills} />
          <label htmlFor="cpp">C++</label>
          <br />
          <br />
          <p> selected Skills : {skills}</p>
          <button
            onClick={() => {
              setEmail(""), setName(""), setPass("");
            }}
          >
            Clear
          </button>
          <h2> Name : {name}</h2>
          <h2> Password : {pass}</h2>
          <h2> Email ID : {email}</h2>
        </form>
      </center>
    </div>
  );
}
export default Wrapper;
