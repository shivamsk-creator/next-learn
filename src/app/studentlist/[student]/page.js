"use client"
import Link from "next/link"

const  Student = ({params}) =>{
    console.log(params)
    return(
        <>
        <div><Link href="/studentlist" >Back</Link></div>
        <h2 className="text-xl font-semibold">Student</h2>

        <p>Name : <span>{params.student}</span></p>
       
        </>
    )
}

export default Student