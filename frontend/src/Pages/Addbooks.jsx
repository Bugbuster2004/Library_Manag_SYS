import React, { useState } from "react";
import axios from "axios";

function Addbooks() {
  const[Data,setData] =useState({title:"",author:"",genre:"",imageUrl:"",price:"",description:""})
  const userId = localStorage.getItem("user"); // Assuming userId is stored in localStorage

  const change = (e) =>{
    const {name, value} = e.target;
    setData({ ...Data, [name]: value});
  }
  const submit  = async(e) =>{
    e.preventDefault();
    const token = localStorage.getItem("token")
    const bookData = { ...Data, userId }; // Add userId to the book data

    await axios.post("http://localhost:3000/api/addbooks", bookData,{
      headers: { Authorization: `Bearer ${token}`
      
    },

    }).then((res)=> alert(res.data.message))
    
    setData({
      title:"",author:"",genre:"",imageUrl:"",price:"",description:""
    })
  }
  console.log(Data)
  return (
    <div style={{height:"100vh"}} className="bg-blue-black-gradient h-screen flex items-center justify-center ">
      <div className="max-w-sm mx-auto rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 w-full  ">
        <h2 className="text-center text-xl font-medium mb-5 text-white">Book Details</h2>
        <form className=" ">
          {/* Book Name */}
          <div className="mb-5 ">
            <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Title
            </label>
            <input 
              type="text"
              id="bookName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter Book Name"
              required
              value={Data.title}
              name="title"
              onChange={change}
            />
          </div>
          {/* Genre */}
          <div className="mb-5 ">
            <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Genre
            </label>
            <input 
              type="text"
              id="genre"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter Genre"
              required
              value={Data.genre}
              name="genre"
              onChange={change}
            />
          </div>

          {/* Author Name */}
          <div className="mb-5">
            <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter Author Name"
              required
              value={Data.author}
              name="author"
              onChange={change}
            />
          </div>

          {/* Image */}
          <div className="mb-5">
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Book Image
            </label>
            <input
              type="text"
              id="imageUrl"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={Data.imageUrl}
              name="imageUrl"
              onChange={change}
            />
          </div>
          {/* price */}
          <div className="mb-5">
            <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Price(Rs)
            </label>
            <input
              type="text"
              id="authorName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter Price"
              required
              value={Data.price}
              name="price"
              onChange={change}
            />
          </div>

          {/* Description */}
          <div className="mb-5">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Description
            </label>
            <textarea
              id="description"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-24 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter Book Description"
              required
              value={Data.description}
              name="description"
              onChange={change}
            />
          </div >
          <div className="flex justify-center items-center">


          <button type="submit" onClick={submit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center  items-center ">Submit</button>
          </div>

          
        </form>
    </div>
    </div>
    
)
}
export default Addbooks;