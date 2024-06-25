import React, { useState, useEffect } from "react";
import axios from "axios";
import BookSection from "../components/BookSection";

function Viewbooks() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const token = localStorage.getItem("token"); 
                console.log("Fetched token:",token)
                const res = await axios.get("http://localhost:3000/api/getbooks", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("Fetched data", res.data.message)
                setData(res.data.message);
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
                        <div className="text-white w-full h-full bg-blue-black-gradient">Network timed out kindly login again to access the section</div>
                    ) : (
                        <BookSection data={data} />
                    )}
                </h4>
            </div>
        </div>
    );
}

export default Viewbooks;
