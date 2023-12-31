import { useEffect, useState } from "react";

import { db } from "../configs/firebase";
import { collection, getDocs } from "firebase/firestore";

export default () => {
  const [users, setUsers] = useState([]);
  const usersDocs = collection(db, "users");

  useEffect(() => {
    (async () => {
      try {
        const response = await getDocs(usersDocs);
        setUsers(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    })();
  }, []);

  return { users };
};
