import { useAuth } from "../../hooks/useAuth";

function User() {

  const { user } = useAuth() 
  
  if (user) {
    return (
      <>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </>
    );
  }
  
}

export default User;
