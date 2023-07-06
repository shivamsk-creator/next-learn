"use client";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


const roboto = Roboto({
  weight : "100",
  subsets: ["latin"]
})

const About = () => {
  const router = useRouter();


  const navigate = (page) => {
    router.push("/about/" + page);
  };
  return (
    <div>
      About{" "}
      <Link href="/" className="mx-10">
        Go to HomePage
      </Link>
      <Link href="/about/aboutcollege" className="mx-10">
        Go to About College Page
      </Link>
      <Link href="/about/aboutstudent" className="mx-10">
        Go to About Student Page
      </Link>
      <button onClick={() => navigate("aboutcollege")} className="mx-10">
        College Page
      </button>
      <button
        onClick={() => router.push("/about/aboutstudent")}
        className="mx-10"
      >
        Student Page
      </button>

    <div className="mt-20">

{/* <h2 style={{fontFamily: 'Roboto'}}>Text with link tag of fonts </h2> */}
<h2 className={roboto.className}>Text with importing font from next/font </h2>
    </div>
    </div>
  );
};

export default About;


