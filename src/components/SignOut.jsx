import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "./firebase";

function SignOut() {
  const [error, setError] = useState(null);

  const handleSignOut = async () => {
    try {
      const auth = getAuth(firebaseApp);
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
 
      {error && <div>{error}</div>}
      <button onClick={handleSignOut}>Sign Out</button>
    
    </>
  );
}

export default SignOut;