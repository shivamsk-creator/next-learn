"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

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
    </div>
  );
};

export default About;
