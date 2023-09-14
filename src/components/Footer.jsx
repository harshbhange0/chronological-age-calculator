import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-[#7f41feff] py-3 ">
      <div className="mb-2 flex flex-row items-center justify-center gap-3 text-sm">
        <Link  className="text-center" to="/about">About</Link>
        <span className="text-center" >|</span>
        <span className="text-center" >Privacy Policy</span>
        <span className="text-center" >|</span>
        <span className="text-center" >Terms and Condition</span>
        <span className="text-center" >|</span>
        <span className="text-center" >FeedBack</span>
      </div>
      <span className=" text-md font-[900]">
        Copyright © 2022. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
