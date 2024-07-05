import React, { useState, useEffect } from "react";
import axios from "axios";
import BookSection from "../components/BookSection";
import { Link } from "react-router-dom";

function Viewbooks() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token")); // Store retrieved token in state

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log("Fetched token:", token); // Log retrieved token for debugging

        if (token) { // Check if token exists before using it
          const res = await axios.get("http://localhost:3000/api/getbooks", {
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log("Fetched data:", res.data.message);
          setData(res.data.message);
        } else {
          console.warn("No token found in localStorage. Please login to access books.");
          // Handle the case where there's no token (e.g., redirect to login page)
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books", error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []); // Empty dependency array to run only once after mount

  return (
    <div style={{ height: "100%" }} className="bg-blue-black-gradient w-full h-full">
      <div>
        <h4>
          {loading ? (
            <div style={{color:"white"}} className="text-white w-full h-full bg-blue-black-gradient">
              Network timed out kindly login again to access the section
            </div>
          ) : data ? (
            <BookSection data={data} />
          ) : (
            <p className="text-white">No books found.</p> // Display message if data is empty
          )}
        </h4>
      </div>
    </div>
  );
}

export default Viewbooks;
