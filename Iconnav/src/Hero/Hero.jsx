import React from "react";
import Bg from "../assets/hero.jpg";
import {  BiSolidRightArrowAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <div class="relative bg-gradient-to-r from-green-200 to-slate-200 h-screen text-white overflow-hidden" id="home">
      <div class="absolute inset-0">
        <img
          class="object-cover object-center w-full h-full"
          src={Bg}
          alt="Bacground"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-black opacity-75"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center p-20">
        <h1 class="text-4xl font-bold leading-tight mb-4">
          THE BEST SERVICES IN & AROUND YOU.
        </h1>
        <p class=" flex flex-col text-xl text-slate-50 mb-4 xl:text-xl">
          We are strategising in dealing with all your day to day needs. From as
          small as printing, typing to as big as Designing your first website.!!
          <span class="text-4xl font-extrabold text-lime-500">
            ITS ALL COVERED
          </span>
        </p>
        <div class="md:flex  md:gap-10 md:mb-5 mb-5 items-center ">
          <div><a
            href="#"
            class="w-auto m-4 bg-emerald-300 text-black justify-between hover:bg-slate-200 md:py-2 px-5 rounded-full md:text-lg font-semibold transition duration-300 ease-in-out transform hover:shadow-xl flex items-center gap-4"
          >
            Lets Get Started
            <BiSolidRightArrowAlt class="text-3xl text-white" />
          </a></div>
          <div>          <a
            href="#contact"
            class="w-auto m-4 bg-white text-black justify-between hover:bg-slate-200 md:py-2 px-5 rounded-full md:text-lg font-semibold transition duration-300 ease-in-out transform hover:shadow-xl flex items-center gap-4"
          >
            Lets Get in Touch
            <BiSolidRightArrowAlt class="text-3xl text-black" />
          </a></div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
