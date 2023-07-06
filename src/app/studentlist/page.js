import Image from "next/image"
import Link from "next/link"
import poster from "../../../public/vercel.svg"

const StudentList = () => {
    return (
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
            <div className="bg-white p-10 m-10">
                <Image

                    src={poster}
                />
                <img

                    src={poster.src}
                />

                <Image
                    src="https://source.unsplash.com/random/?developer"
                    width={450}
                    height={200}
                    className="m-10"
                />

            </div>
        </>
    )
}

export default StudentList