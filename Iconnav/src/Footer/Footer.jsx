import React from "react";

const Footer = () => {
  return (
    <div class="md:flex md:justify-between md:gap-96 border-t py-5 md:px-20 md:w-5/6 items-center text-center md:ml-20 w-full px-2">
      <p class="text-xs">
        © 2024 Icon Technologies & Cyber. All rights reserved.
      </p>
      <ul class="text-xs flex gap-5 text-center justify-center">
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
