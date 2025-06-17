function User({ user }) {
  return (
    <div>
      <p> {user.name} Componant</p>
      <h2> Name: {user.name}</h2>
      <h2> Age: {user.age}</h2>
      <h2> Email: {user.email}</h2>
    </div>
  );
}


export default User;

