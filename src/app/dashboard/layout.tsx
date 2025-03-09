import React from "react";
import MasterLayout from "../Layouts/MasterLayout/layout";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <MasterLayout>
        {children}
      </MasterLayout>
       
     
    </div>
  );
}
