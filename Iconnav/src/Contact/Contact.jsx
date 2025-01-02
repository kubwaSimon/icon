import React from "react";
import { BiEnvelope, BiLocationPlus, BiLogoWhatsapp } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
//import useNavigate from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  //const navigate = useNavigate();
  //preventing empty submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/#contact", {
        name,
        phone,
        message,
      });
      console.log(response.data);
      //Reset form fields
      setName("");
      setPhone("");
      setMessage("");
      navigate("/contact");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div class="p-10 justify-center items-center" id="contact">
      <h2 class="font-semibold text-center text-2xl text-green-700">
        Get In Touch With Us
      </h2>
      <div class="grid-cols-2 md:flex gap-10 justify-center mt-5">
        {/* Contact Information Section*/}
        <div class="md:w-1/2  items-center">
          <h1 class="text-green-500 text-2xl text-center justify-center p-2 ">
            Send Us a Message
          </h1>
          <p>
            Feel free to get in touch with our customer care team. You can also
            find our contact information below. Your feedback and suggestions
            will be greatly appreciated. We will always strive to serve you the
            best!
          </p>
          <ul class="flex flex-col gap-3 p-2 md:p-5">
            <li class="flex items-center gap-4">
              <BiEnvelope class="text-2xl" />
              smntech45@gmail.com
            </li>
            <li class="flex gap-3 items-center">
              <BiLogoWhatsapp class="text-green-500 text-2xl" />
              +2541-15085740
            </li>
            <li class="flex gap-3 items-center">
              <BiLocationPlus class="text-red-500 text-2xl" />
              Tuffoam - Everest Peak Building.
            </li>
          </ul>
        </div>
        {/* Contact Information Section*/}

        {/******************************************/}
        {/* Contact Form Section*/}
        <div class="md:w-1/2 w-full">
          <form onSubmit={handleSubmit} class="flex flex-col gap-1.5">
            <label>Your Name</label>
            <input
              class="md:w-5/6 bg-blue-100 md:p-1.5 outline-none p-2 rounded-2xl"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              class="md:w-5/6  bg-blue-100 md:p-1.5 p-2 rounded-2xl outline-none"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your Phone number"
              required
            />
            <label class="w-full">Your Message</label>
            <textarea
              class="md:w-5/6 bg-blue-100 p-5 md:p-1.5 rounded-3xl outline-none"
              name="message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-200 rounded-2xl items-center  text-center justify-center w-fit py-2 px-4 hover:bg-emerald-50"
            >
              {" "}
              Send Message{" "}
            </button>
          </form>
        </div>
        {/* Contact Form Section*/}
      </div>
    </div>
  );
};

export default Contact;
