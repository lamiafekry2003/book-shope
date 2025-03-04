import React from "react";
import Authlayout from "../Layouts/AuthLayout/layout";
import image from "../appends/Picture.png";
import logo from "../appends/Logo.png"
import Image from "next/image";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block h-screen overflow-hidden ">
      <Image src={image} alt="books" className=" object-cover h-screen"/>
      </div>
      <div>
        <div className="flex justify-center items-center my-5">
          <Image src={logo} alt="logo" className=" max-w-xs"/>
        </div>
        <Authlayout>{children}</Authlayout>
      </div>
    </div>
  );
}
