import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BookSection({ data, setData }) {
    const navigate = useNavigate();
    const [selectedBook, setSelectedBook] = useState(null);
    // const [data,setData] = useState(null);
    // const storage = localStorage.getItem("token");

    const handleUpdateClick = (book) => {
        setSelectedBook(book);
        navigate("/update", { state: { book } });
    };
    const handleDeleteClick = async (bookId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("No token found in localStorage.");
                return;
            }
    
            console.log(`Token: from delete ${token}`); 
    
            const response = await axios.delete(`http://localhost:3000/api/deletebook/${bookId}`, {
                headers: { Authorization: `Bearer ${token}`
      
    },
            });
    
            if (response.status === 200) {
                // Filter out the deleted book from the data

                const updatedData = data.filter((item) => item._id !== bookId);
                setData(updatedData);

            }
        } catch (error) {
            console.error("Error deleting the book:", error);
        }
    };
    
    

    console.log(data);
    return (
        <div  className="flex flex-wrap justify-center items-center text-white gap-4 p-4">
            {data && data.map((item, index) => (
                <div
                    key={index}
                    className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:-translate-y-2 hover:shadow-2xl m-2"
                >
                    <a href="#">
                        <img
                            style={{ height: "300px", width: "200px" }}
                            className="mx-auto p-8 rounded-t-lg items-center"
                            src={item.imageUrl}
                            alt="failure"
                        />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {item.description}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs {item.price}</span>
                            <button
                                onClick={() => handleUpdateClick(item)}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                UPDATE
                            </button>
                            <button
                                onClick={() => handleDeleteClick(item._id)}
                                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookSection;
