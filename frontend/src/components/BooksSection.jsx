import React from "react";
import axios from "axios";
import "./BookSection.css"
import { Link, useNavigate, useParams } from "react-router-dom";

const BooksSection = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();

  return (
    
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3 mb-0">
      {data &&
        data.map((item, index) => (
          <div
            className="m-3 border__box"
          >
            <div>
              <img
                className="img-fluid book__image"
                src={item.image}
                alt="/"
              />
            </div>
            <h5 className="px-2 my-1 book__name">
              {item.bookname.slice(0, 50)}
            </h5>
            <h6
              className="mb-2 px-2 book__name"
            >
              Rs. {item.price}
            </h6>
            <h6 className=" mb-2 px-2 book__name">
              {item.description}
            </h6>
            <div className="d-flex justify-content-around align-items-center my-2">
              <Link to={`/books/${item._id}`} className="book__button update__button">
                Update
              </Link>
              <button
                onClick={async () => {
                  await axios
                    .delete(
                      `http://localhost:1000/api/v1/deleteBook/${item._id}`
                    )
                    .then((res) => res.data)
                    // .then(() => navigate("/"))
                    .then(() => navigate("/books"));
                }}
                className="book__button delete__button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
