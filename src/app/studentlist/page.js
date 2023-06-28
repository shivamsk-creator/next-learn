import Link from "next/link"

const  StudentList = () =>{
    return(
        <>
        <div><Link href="/" >HomePage</Link></div>
        <h2 className="text-xl font-semibold">Students List</h2>
        <ul>
            <li>
                <Link href="/studentlist/1">Awnish</Link>
            </li>
            <li>
                <Link href="/studentlist/2">Akshay</Link>
            </li>
            <li>
                <Link href="/studentlist/3">Alka</Link>
            </li>
            <li>
                <Link href="/studentlist/4">Abhishek</Link>
            </li>
            <li>
                <Link href="/studentlist/5">Shivam</Link>
            </li>
            <li>
                <Link href="/studentlist/6">Prashant</Link>
            </li>
            
        </ul>
        </>
    )
}

export default StudentList