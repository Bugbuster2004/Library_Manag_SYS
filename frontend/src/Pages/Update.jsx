import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state.book;

  

  useEffect(() => {
    if (!book || !book._id) {
      console.error("Invalid book data", book);
      navigate("/viewbooks"); // Redirect to view books 
    }
  }, [book, navigate]);

  const [title, setTitle] = useState(book?.title || "");
  const [description, setDescription] = useState(book?.description || "");
  const [price, setPrice] = useState(book?.price || "");
  const [imageUrl, setImageUrl] = useState(book?.imageUrl || "");
  const token = localStorage.getItem("token");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedBook = { title, description, price, imageUrl };
    console.log("Updating book with ID:", book._id); // Debugging line

    try {
      const response = await axios.post(
        `http://localhost:3000/api/updateBooks/${book._id}`,
        updatedBook,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Book updated", response.data);
      navigate("/viewbooks"); // Navigate back to book list
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized! Please login again.");
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("There was an error updating the book!", error);
      }
    }
  };

  return (
    <div style={{height:"100vh"}} className="bg-blue-black-gradient w-full h-full flex items-center justify-center">
      <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Update Book</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Update</button>
      </form>
    </div>
  );
}

export default Update;
