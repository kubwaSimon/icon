import React, { useEffect, useState } from "react";
import { BiAlignLeft, BiHome, BiSearch, BiX } from "react-icons/bi";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  document.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    //checking scroll height
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add("bg-white","text-black", "shadow-lg");
      navbar.classList.remove("bg-green-500","text-white");
    } else {
      navbar.classList.add("bg-green-500","text-white");
      navbar.classList.remove("bg-white","text-black", "shadow-lg");
    }
  });
  return (
    <>
      <div
        className="bg-green-500 shadow-lg flex h-20 items-center max-w-full text-white justify-between transition-colors sticky top-0 z-[120] scroll-smooth"
        id="navbar"
      >
        <span class="  ml-5 mr-25 text-yellow-200 text-2xl font-bold tracking-wider">
          <img src={Logo} alt="ICON" className="w-32 sd:w-20" />
        </span>
        {/*Code for big screeens - full code */}

        <ul class=" ml-20 flex items-center justify-between gap-5 font-semibold mr-5 transition-all">
          <div class="lg:flex hidden gap-5">
            <li class="gap-1 flex items-center">
              <a
                href="#home"
                class="flex items-center cursor-pointer gap-3 hover:border-b-red-400 hover:border-b-2 p-2 rounded-xl "
              >
                <BiHome class="text-white text-2xl font-Nunito  " />
                HOME
              </a>
            </li>
            <li class="hover:border-b-red-400 hover:border-b-2 p-2 rounded-xl">
              <a href="#services">SERVICES</a>
            </li>
            <li class="hover:border-b-red-400 hover:border-b-2 p-2 rounded-xl">
              <a href="#about">ABOUT US</a>
            </li>
            <li class="hover:border-b-red-400 hover:border-b-2 p-2 rounded-xl">
              <a href="#contact">CONTACT</a>
            </li>
            <li class="hover:border-b-red-400 hover:border-b-2 p-2 rounded-xl">
              <a href="#">HELP CENTER</a>
            </li>
            <li class="flex relative items-center cursor-pointer gap-4 text-black bg-white p-1.5 rounded-full shadow-inner">
              <BiSearch />
              <input
                type="text"
                placeholder="Search itmes....."
                class="focus:outline-none "
              />
            </li>
            {/*Code for big screeens - BACK TO TOP */}
          </div>
          {/*Code for mid screeens - full code */}
          <ul class="lg:hidden ">
            <div className={`${click ? "w-60% visible" : "invisible"}`}>
              <div class="gap-2 p-10 rounded-md flex mt-0 flex-col right-5 top-5 absolute z-50 mr-11 bg-green-400">
                <li>
                  <a href="#home">HOME</a>
                </li>
                <li>
                  <a href="#services">SERVICES</a>
                </li>
                <li>
                  <a href="#about">ABOUT US</a>
                </li>
                <li>
                  <a href="#contact">CONTACT</a>
                </li>
                <li>
                  <a href="/">HELP CENTER</a>
                </li>
                <li>
                  <BiSearch />
                </li>
              </div>
            </div>
          </ul>
          <div
            onClick={() => setClick(!click)}
            class="lg:hidden cursor-pointer w-6 text-4xl"
          >
            <BiAlignLeft />
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
