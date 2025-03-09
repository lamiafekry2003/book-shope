// "use client";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBagShopping, faHeart, faUser, faTimes, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

// export default function Navbar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const user = useSelector((state: RootState) => state.auth.user);
//   const handleLinkClick = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     <header className="bg-white ">
//       <div className="mx-auto max-w-screen px-8 py-5 flex items-center justify-between">
//         {/* Logo & User */}
//         <div className="flex items-center gap-3">
//           <a className="text-lg text-headtext font-bold flex items-center gap-2" href="#">
//             <div className="w-10 h-10 md:w-14 md:h-14 flex justify-center items-center font-bold text-xl bg-stone-300 rounded-full">
//               {user?.first_name[0]?.toLocaleUpperCase()}
//             </div>
//             {user && <p>Welcome {user.first_name.toLocaleUpperCase()}</p>}
//           </a>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6 text-lg font-medium uppercase">
//           <a className="text-neutral-900 hover:text-neutral-900/75" href="#">Home</a>
//           <a className="text-neutral-900 hover:text-neutral-900/75" href="#">Books</a>
//           <a className="text-neutral-900 hover:text-neutral-900/75" href="#">Orders</a>
//           <a className="text-neutral-900 hover:text-neutral-900/75" href="#">Contact Us</a>
//         </nav>

//         {/* Icons */}
//         <div className=" hidden md:flex items-center gap-4">
//           <a href="#"><FontAwesomeIcon icon={faUser} className="text-xl" /></a>
//           <a href="#"><FontAwesomeIcon icon={faBagShopping} className="text-xl" /></a>
//           <a href="#"><FontAwesomeIcon icon={faHeart} className="text-xl" /></a>
//         </div>
//         <button
//             className="md:hidden p-2 rounded-md  text-gray-600"
//             onClick={() => setSidebarOpen(true)}
//           >
//             <FontAwesomeIcon icon={faBarsStaggered} className="text-xl"  />
//       </button>
//       </div>

//       {/* Mobile Sidebar */}
//       <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${sidebarOpen ? "block" : "hidden"}`} onClick={() => setSidebarOpen(false)}></div>
//       <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 z-50 transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
//         <button className="absolute top-5 right-5 text-2xl" onClick={() => setSidebarOpen(false)}>
//           <FontAwesomeIcon icon={faTimes} />
//         </button>
//         <nav className="mt-10 flex flex-col gap-6 text-lg font-medium uppercase">
//           <a onClick={handleLinkClick} className="text-neutral-900 hover:text-neutral-900/75" href="#">Home</a>
//           <a onClick={handleLinkClick} className="text-neutral-900 hover:text-neutral-900/75" href="#">Books</a>
//           <a onClick={handleLinkClick} className="text-neutral-900 hover:text-neutral-900/75" href="#">Orders</a>
//           <a onClick={handleLinkClick} className="text-neutral-900 hover:text-neutral-900/75" href="#">Contact Us</a>
//         </nav>
//         <div className="  flex justify-between my-4 items-center gap-4">
//           <a href="#"><FontAwesomeIcon icon={faUser} className="text-xl" /></a>
//           <a href="#"><FontAwesomeIcon icon={faBagShopping} className="text-xl" /></a>
//           <a href="#"><FontAwesomeIcon icon={faHeart} className="text-xl" /></a>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faUser,
  faTimes,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const pathname = usePathname(); // Get current route

  const handleLinkClick = () => {
    setSidebarOpen(false); // Close sidebar when clicking a link
  };

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/dashboard/home" },
    { name: "Books", path: "/dashboard/books" },
    { name: "Orders", path: "/dashboard/orders" },
    { name: "Contact Us", path: "/dashboard/contact" },
  ];

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen px-8 py-5 flex items-center justify-between">
        {/* Logo & User */}
        <div className="flex items-center gap-3">
          <a
            className="text-lg text-headtext font-bold flex items-center gap-2"
            href="#"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 flex justify-center items-center font-bold text-xl bg-stone-300 rounded-full">
              {user?.first_name[0]?.toLocaleUpperCase()}
            </div>
            {user && <p>Welcome {user.first_name.toLocaleUpperCase()}</p>}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center  gap-6 text-lg font-medium uppercase">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              href={link.path}
              className={` relative ${
                pathname === link.path
                  ? "text-headtext "
                  : "text-neutral-900  hover:text-neutral-900/75"
              } ${
                index !== 0
                  ? "before:content-['|'] before:mr-3 before:text-neutral-300"
                  : ""
              } `}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center text-lg font-medium gap-4 text-nexttext">
          <a href="#" className="relative flex items-center">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </a>
          <a href="#" className="relative flex items-center">
            <span className="before:content-['|'] before:mr-3 before:text-neutral-300 "></span>
            <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
          </a>
          <a href="#" className="relative flex items-center">
            <span className="before:content-['|'] before:mr-3 before:text-neutral-300 "></span>
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-nexttext"
          onClick={() => setSidebarOpen(true)}
        >
          <FontAwesomeIcon icon={faBarsStaggered} className="text-xl" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="absolute top-5 right-5 text-2xl"
          onClick={() => setSidebarOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Mobile Navigation Links */}
        <nav className="mt-10 flex flex-col gap-6 text-lg font-medium uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={handleLinkClick}
              className={`block py-1 px-4 rounded transition-all ${
                pathname === link.path
                  ? "text-red-500"
                  : "text-neutral-900 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons in Sidebar */}
        <div className="flex justify-between my-4 items-center gap-4 text-nexttext">
          <a href="#">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
}
