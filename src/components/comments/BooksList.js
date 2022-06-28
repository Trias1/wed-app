import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDataService from "../../services/book.services";
import "../../commoncss/comment.css";
import foto1 from "../../images/fott.JPG"

const BooksList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <div className="container">
          <div className="card-bodyyss">
            <Button variant="dark-edit" onClick={getBooks}>
              Refresh List
            </Button>
            <Table striped bordered hover size="sm">
              <thead></thead>
              <tbody>
                {books.map((doc) => {
                  return (
                    <div className="comment">
                      <div className="comment-image-container">
                        <img src={foto1} />
                      </div>
                      <div>
                        <h5> {doc.title}</h5>
                        <p className=""> {doc.author}</p>
                        <p className=""> {doc.status}</p>
                      </div>
                    </div>
                  );
                })}
              </tbody>
            </Table>
          </div>
      </div>
    </>
  );
};

export default BooksList;
