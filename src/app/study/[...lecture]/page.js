"use client"

import Link from "next/link"

const  Lecture = ({params}) =>{

    return(
        <>
        <div><Link href="/study" >Back</Link></div>
        <h2 className="text-xl font-semibold">Lectures & Days</h2>
       <p className="text-2xl my-10 ">Day : {params.lecture[0]}</p>
       <p className="text-2xl my-10 ">Lecture : {params.lecture[1]}</p>
        </>
    )
}

export default Lecture