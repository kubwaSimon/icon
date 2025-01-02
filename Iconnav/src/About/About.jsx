import React from "react";
import img from "../assets/about.jpg";

const About = () => {
  return (
    <div className="about mt-7 xl:w-full text-center justify-center items-center p-10 mb-10 " id="about">
      <h1 class="text-2xl font-bold text-green-700">ABOUT US</h1>
      <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        {/*-Image position-*/}
        <div class="md:w-full w-64 md:h-80 p-5 lg:w-2/3 lg:h-auto">
          <img class="h-full w-full object-cover" src={img} alt="About_Info" />
        </div>
        {/*-End Image position-*/}
        <div class='bg-slate-100 rounded-xl md:z-10 ' /*class=*"max-w-lg items-center bg-slate-200 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-10 lg:w-4/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"*/>
          {/*-Paragraph position-*/}
          <div class="flex flex-col p-12 md:px-12 md:min-w-full">
            <h2 class="text-2xl font-medium uppercase text-green-700 lg:text-4xl">
              ICON - FOR TECHNOLOGY NEEDS
            </h2>
            <p class="mt-4 text-start">
              we are dedicated to empowering businesses through innovative cyber
              services, robust online solutions, and comprehensive IT support.
              Our mission is to provide cutting-edge technology that not only
              meets the needs of today but also anticipates the challenges of
              tomorrow. With a team of experienced professionals, we specialize
              in a wide range of services, including: <br />
              Cyber Services: Protecting your digital assets is our priority. We
              offer advanced security solutions to safeguard your organization
              against emerging threats and vulnerabilities. <br />
              Online Services: From cloud computing to data management, we help
              you navigate the digital landscape, ensuring that your operations
              are efficient, secure, and scalable. <br />
              IT Support and Consultation: Our expert consultants work closely
              with you to understand your unique needs, providing tailored IT
              strategies and ongoing support to keep your systems running
              smoothly. <br />
              Web Development: We create stunning, user-friendly websites that
              not only capture your brand’s essence but also drive engagement
              and conversions. Our development team utilizes the latest
              technologies to deliver custom solutions that elevate your online
              presence. At Icon Technology, we believe that technology should be
              a catalyst for growth. We are committed to building lasting
              partnerships with our clients, providing them with the tools and
              knowledge they need to thrive in an ever-evolving digital world.
            </p>
          </div>
        </div>
      </div>
      {/*-main Div-*/}
    </div>
  );
};

export default About;
