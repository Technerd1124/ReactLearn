function UserData() {
  const userName = ["dhan0", "lily2", "piter53"];
  const rollno = [12, 23, 44];
  const userData = [
    {
      name: "dhana",
      age: 18,
      roll: 11,
    },
    {
      name: "sam",
      age: 17,
      roll: 10,
    },
    {
      name: "pitter",
      age: 20,
      roll: 11,
    },
  ];

  return (
    <div>
      <center>
        <h2> LOOPING</h2>

        <div style={{ border: "2px solid purple" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <h3>Name</h3>
            <h3>Roll Number</h3>
            <h3>Age</h3>
          </div>
          <div>
            {userData.map((user) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <p>{user.name}</p>

                <p>{user.roll}</p>

                <p>{user.age}</p>
              </div>
            ))}
          </div>
        </div>
      </center>
    </div>
  );
}

export function StudentData() {
  let student = [
    {
      name: "nidhi",
      marks: 90,
      rollnum: 12,
    },
    {
      name: "Dhanshri",
      marks: 88,
      rollnum: 18,
    },
    {
      name: "Aditi",
      marks: 78,
      rollnum: 12,
    },
  ];
  return (
    <div>
      <h2> Student Data </h2>
    </div>
  );
}

export default UserData;
