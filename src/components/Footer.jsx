import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-[#7f41feff] py-3 px-2 sm:px-0 ">
      <div className="mb-2 flex flex-row items-center justify-center gap-3 text-sm">
        <Link className="text-center" to="/about">
          About
        </Link>
        <span className="text-center">|</span>
        <Link to="/privacy-policy" className="text-center">
          Privacy Policy
        </Link>
        <span className="text-center">|</span>
        <Link to="/terms-condition" className="text-center">
          Terms and Condition
        </Link>
        <span className="text-center">|</span>
        <Link to="/contact" className="text-center">FeedBack</Link>
      </div>
      <span className=" text-md font-[900]">
        Copyright © 2022. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
