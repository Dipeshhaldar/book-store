import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddBooks.css";

const AddBooks = () => {
  const navigate = useNavigate();

  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/bookstore/add", Data)
      .then((res) => alert(res.data.message))
      .then(() => navigate("/books"));
    setData({
      bookname: "",
      author: "",
      description: "",
      image: "",
      price: "",
    });
  };

  return (
    <>
      <div
        className="bg-dark d-flex justify-content-center align-items-center"
        style={{ minHeight: "91.5vh" }}
      >
        <div id="contact" className="contact__me__main__section">
          <h1 className="contact__me__main__heading">Add Book</h1>
          <section>
            <div className="contact__me__flex__container">
              <form className="contact__me__form__layout" action="">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter book name"
                  name="bookname"
                  value={Data.bookname}
                  onChange={change}
                />
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter the name of the author"
                  name="author"
                  onChange={change}
                  value={Data.author}
                />
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter description of the book"
                  name="description"
                  onChange={change}
                  value={Data.description}
                />
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter the URL of the image"
                  name="image"
                  onChange={change}
                  value={Data.image}
                />
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter the price of the book"
                  name="price"
                  onChange={change}
                  value={Data.price}
                />
                <div className="contact__me__submit__button__style">
                  <button
                    onClick={submit}
                    className="contact__me__submit__button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddBooks;
