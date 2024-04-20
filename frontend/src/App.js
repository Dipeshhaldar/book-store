import "./App.css";
import BookDetail from "./components/BookDetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddBooks from "./pages/AddBooks";
import Books from "./pages/Books";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks />} />
        <Route path="/books/:id" element={<BookDetail/>} exact />
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
