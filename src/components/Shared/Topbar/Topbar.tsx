import React from 'react'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="bg-nexttext text-white px-8 py-2 min-h-fit flex justify-between items-center">
        <div className="font-semibold flex items-center gap-x-1 ">
        <FontAwesomeIcon icon={faPhone} className=' text-white text-lg ' />
        <p className=' text-lg'>+91 8374902234</p>
        </div>
        <div className="flex items-center gap-x-1 space-x-3  md:space-x-4">
            <Link href={'/facebook'}>
            <FontAwesomeIcon icon={faFacebookF} className=' text-white text-lg ' />
            </Link>
            <Link href={'/instgrame'}>
            <FontAwesomeIcon icon={faInstagram} className=' text-white text-lg ' />
            </Link>
            <Link href={'/twitter'}>
            <FontAwesomeIcon icon={faTwitter} className=' text-white text-lg ' />
            </Link>
            <Link href={'/linkedin'}>
            <FontAwesomeIcon icon={faLinkedinIn} className=' text-white text-lg ' />
            </Link>
            </div>
    </div>
  )
}
