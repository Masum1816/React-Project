import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const UserData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <div>
          <h1>User UID: {user.uid}</h1>sj
        </div>
      ) : (
        <p>User Not Found</p>
      )}
    </>
  );
};

export default UserData;
