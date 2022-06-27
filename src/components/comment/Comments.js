import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import foto1 from "../../images/fott.JPG";
import { createComment as createCommentApi } from "./api";

import "../../commoncss/comment.css";

const Comments = () => {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

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
        <CommentForm submitLabel="Write" handleSubmit={addComment} />
        {users.map((user) => {
          return (
            <div className="card">
              <div className="card-bodyys">
                <div className="comment">
                  <div className="comment-image-container">
                    <img src={foto1}/>
                  </div>
                  <div>
                  <h5> {user.username}</h5>
                  <p className="commentary"> {user.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
