import React, { useState, useEffect } from "react";
import axios from "axios";
import BookSection from "../components/BookSection";
import { Link } from "react-router-dom";

function Viewbooks() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token")); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log("Fetched token:", token);

        if (token) { 
          const res = await axios.get("http://localhost:3000/api/getbooks", {
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log("Fetched data:", res.data.message);
          setData(res.data.message);
        } else {
          console.warn("No token found in localStorage. Please login to access books.");
          
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books", error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []); 

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
            <p className="text-white">No books found.</p> // Display message
          )}
        </h4>
      </div>
    </div>
  );
}

export default Viewbooks;
