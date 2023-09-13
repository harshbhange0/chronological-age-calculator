import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-[#7f41feff] py-3 ">
      <div className="flex items-center justify-center gap-3">
        <Link to="/about">About</Link>
        <span>|</span>
        <span>Privacy Policy</span>
        <span>|</span>
        <span>Terms and Condition</span>
        <span>|</span>
        <span>FeedBack</span>
      </div>
      <span className=" text-md font-[900]">Copyright © 2022. All rights reserved.</span>
    </footer>
  );
}

export default Footer;
