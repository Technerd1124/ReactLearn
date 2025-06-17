function College({ collegeList }) {
  function show() {
    for (let i = 0; i <= 7; i++) {
      return i;
    }
  }
  <h1> College Components</h1>;
  return (
    <>
      <div>
        <h1> College = {collegeList}</h1>
        <h1>{show}</h1>
      </div>
    </>
  );
}

export default College;
