import React, { useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";

const CommentForm = ({}) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");

  const userCollectionRef = collection(db, "users");

  const createuser = async () => {
    await addDoc(userCollectionRef, { username: newName, comment: newComment });
  };
  return (
      <div className="container">
        <form onSubmit={onSubmit}>
          <div class="mb-3">
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nama anda"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            ></input>
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Comment"
              rows="3"
              onChange={(event) => {
                setNewComment(event.target.value);
              }}
            ></textarea>
            <button type="submit" class="btn btn-primary" onClick={createuser}>
              Submit
            </button>
          </div>
        </form>
      </div>
  );
};

export default CommentForm;
