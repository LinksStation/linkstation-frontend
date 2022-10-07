import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <h1>Signup</h1>
      <p>Already registerd?</p>
      <Link href="/auth/login">Login</Link>
    </div>
  );
};

export default index;
