import React from "react";
import img2 from "../assets/img2.jpg";
import { BiCircle, BiLogoDevTo, BiLogoWhatsapp, BiMouse } from "react-icons/bi";

const Services = () => {
  return (
    <div class="md:p-10 mt-6" id="services">
      <h1 class="text-green-500 text-2xl font-semibold text-center md:p-0 p-3">
        Services we Offer
      </h1>
      <div class="grid-cols-2 px-16">
        <div class="md:flex md:gap-20 items-center">
          <h1 class="text-4xl font-bold justify-center text-center">
            Our Company Services!
          </h1>

          <BiCircle class="text-5xl ml-28 md:ml-10 text-green-950 bg-zinc-100 shadow-lg px-3 rounded-full" />
          <p>
            We provide a wide range of services from all Cyber services to
            Tackling web development and Design needs. We are focused on
            providing quality over quantity!
          </p>
        </div>
      </div>
      {/**second services part- Grid columns */}
      <div class="grid-cols-2  md:flex w-full p-10 gap-20">
        {/*Starting side by side grids */}
        <div
          class="md:w-3/5 h-[70vh]  bg-cover bg-center bg-no-repeat relative rounded-2xl ring-sky-200"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div class="absolute inset-0 bg-gradient-to-b from-green-950 to-transparent opacity-100 rounded-2xl"></div>
          <div class="relative z-10 text-white p-8">
            <h1 class="text-4xl font-bold text-center">
              {" "}
              WEB DEVELOPMENT, Design, Graphic Design and support.
            </h1>
            {/**class button- whatsApp direct navigation */}
            <div class="text-center w-full mt-10">
              {" "}
              <a
                href="https://wa.me/message/WFYB5ZTQJL64P1"
                class=" text-xl gap-2 w-auto text-center flex rounded-xl justify-center bg-white text-green-800 p-3 top-10 items-center"
              >
                <BiLogoWhatsapp class='text-center items-center text-2xl text-green-950'/>
                Lets Chat
              </a>
            </div>
          </div>
        </div>

        {
          /**==================================== */
          <div class="">
            <div class="grid-cols-2 md:flex gap-20 items-center justify-center">
              {/**============== Top Grid section==================== */}
              <div
                class="items-center justify-center bg-white shadow-lg ring-emerald-200 p-10 rounded-2xl"
                id="grid-1"
              >
                <h1 class="text-center text-2xl font-semibold text-green-950">
                  Bulk Printing & Scanning
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum alias blanditiis laboriosam voluptatum commodi at
                  harum neque doloribus fugiat voluptas. Qui adipisci in
                  repudiandae! Quos delectus error a suscipit possimus.
                </p>
              </div>
              <div
                class="items-center justify-center bg-white shadow-lg ring-emerald-200 p-10 rounded-2xl"
                id="grid-2"
              >
                <h1 class="text-center text-2xl font-semibold text-green-950 ">
                  Government Online Services
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum alias blanditiis laboriosam voluptatum commodi at
                  harum neque doloribus fugiat voluptas. Qui adipisci in
                  repudiandae! Quos delectus error a suscipit possimus.
                </p>
              </div>
            </div>
            {/** ======================================== */}
            <div class="grid-cols-2 mt-10 md:flex gap-20 items-center justify-center">
              <div class="flex flex-col items-center bg-white shadow-lg ring-emerald-200 p-10 rounded-2xl">
                <BiLogoDevTo class="text-center text-3xl text-green-900" />
                <h1 class="text-center text-2xl font-semibold text-green-950">
                  Web Design and Development Services
                </h1>
              </div>
              <div class="flex flex-col items-center bg-white shadow-lg ring-emerald-200 p-10 rounded-2xl m-5">
                <BiMouse class="text-center text-3xl text-green-900" />
                <h1 class="text-center text-2xl font-semibold text-green-950">
                  Cyber Services - Laminating, Printing etc.
                </h1>
              </div>
            </div>
            {/** ======================================== */}
          </div>
          /******************************/
        }
      </div>
    </div>
  );
};

export default Services;
