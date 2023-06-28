import Link from "next/link"

const  Study = () =>{
    return(
        <>
        <div><Link href="/" >HomePage</Link></div>
        <h2 className="text-xl font-semibold">Study Corner</h2>
       <p className="text-2xl my-10 ">All Lectures of College</p>
        </>
    )
}

export default Study