
function UserProfile(props) {
  return (
    <div>
      <h1>User Profile</h1>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
