import React, { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import BookSection from "../components/BookSection";
function Viewbooks() {
    const [Data, setData] = useState()
    useEffect(() =>{
        const fetch = async ()=>{
            await axios.get("http://localhost:3000/api/getbooks").then((res) =>setData(res.data.message))
        }
        fetch();
    })
    return (  
    <div style={{height:"100%"}} className=" bg-blue-black-gradient w-full h-full ">
        <div>
            <h4>{Data ? (<BookSection data={Data}/>): (<div className=" text-white"> loading</div>)}</h4>
        </div>
    </div>
    );
}

export default Viewbooks;