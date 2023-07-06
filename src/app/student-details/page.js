"use client"
import Script from "next/script"

const StudentDetails = () =>{
    return(
        <>
        <Script
        src="/location.js"
        onLoad={()=> console.log("script loaded")}
        />
        <h1 className="my-20">Student Details</h1>
        </>
    )
}

export default StudentDetails