import React from 'react'

export default function Authlayout({children}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
   <div>
     {children}
   </div>
  )
}
