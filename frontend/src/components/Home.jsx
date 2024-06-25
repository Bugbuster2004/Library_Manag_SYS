import React from "react";
import coffeeImage from "../assets/images/coffee-8595772_1280.jpg"; // Import image as a static asset
import book from "../assets/images/book1.png"; 

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Bookstore section */}
        <div className="w-full md:w-1/2 bg-blue-black-gradient text-center flex flex-col items-center justify-center h-1/2 md:h-screen">
          <h1 className="text-6xl font-bold text-white mt-10 xxl:text-8xl">Welcome to the store</h1>
          <button
            type="button"
            className="mt-10 py-2.5 px-5 mb-2 text-lg font-medium text-white focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            View Books
          </button>
        </div>
        {/* Image section */}
        <div className="w-full md:w-1/2 text-center flex items-center justify-center h-1/2 md:h-screen bg-blue-black-gradient">
          <img
          style={{height:"20rem",width:"20rem"}}
            src={book}
            alt="Book Image"
            className="object-cover h-full w-full md:h-auto md:w-auto rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
