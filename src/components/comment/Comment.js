import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import foto1 from "../../images/fotouser.jpg";

const Comment = () => {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="section w-details-area center-text">
      <div className="container">
        {users.map((user) => {
          return (
            <div className="card">
              <div className="card-body">
                <div className="comment-image-container">
                  <img
                    src={foto1}
                  />
                </div>
                <div>
                  <h5> {user.username}</h5>
                  <p> {user.comment}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
