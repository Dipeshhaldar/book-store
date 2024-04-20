import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookDetail.css";

const BookDetail = () => {
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });

  const navigate = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1000/api/v1/getBooks/${id}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchHandler().then((data) => setData(data.book));
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:1000/api/v1/updateBook/${id}`, {
          bookname: String(Data.bookname),
          author: String(Data.author),
          description: String(Data.description),
          image: String(Data.image),
          price: Number(Data.price),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/books"));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  return (
    <div>
      <div
        className="bg-dark d-flex justify-content-center align-items-center"
        style={{ minHeight: "91.5vh" }}
      >
        <div className="rounded bg-secondary p-4 update-book__main__section">
        <h1 className="update-book__main__heading">Update Book Details</h1>
          <div className="mb-3 update-book__form__layout">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Book Name:
            </label>
            <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter book name"
                  name="bookname"
                  value={Data.bookname}
                  onChange={handleChange}
                />
          </div>
          <div className="mb-3 update-book__form__layout">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Author:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the name of the author"
              name="author"
              onChange={handleChange}
              value={Data.author}
            />
          </div>
          <div className="mb-3 update-book__form__layout">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Description:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter description of the book"
              name="description"
              onChange={handleChange}
              value={Data.description}
            />
          </div>
          <div className="mb-3 update-book__form__layout">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Image:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the URL of the image"
              name="image"
              onChange={handleChange}
              value={Data.image}
            />
          </div>
          <div className="mb-3 update-book__form__layout">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Price:
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the price of the book"
              name="price"
              onChange={handleChange}
              value={Data.price}
            />
          </div>
          <div className="update-book__submit__button__style">
          <button className="update-book__submit__button" onClick={handleSubmit}>
            Submit
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
