import React from "react";
import Navbar from "../../nav/Nav";
import Footer from "../../Footer";
import Svg1 from "../../../assets/svg1.png";
import { BsFillStarFill } from "react-icons/bs";
function Contact() {
  return (
    <section className="bg_color  flex  flex-col justify-between text-[#ECEDF1]">
      <header className=" py-8  sm:py-10 lg:py-12">
        <Navbar />
      </header>
      <main className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-8 px-4 sm:w-[70%] sm:px-0 md:w-[60%]">
        <h1 className="mb-4 text-center text-6xl font-[600] text-[#FFB777]">
          Feedback
        </h1>
        <div className="mx-auto flex flex-col items-center space-y-2 rounded-md border border-[#FFB777] px-4 py-2">
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <div className="w-[50%]">
              <img src={Svg1} alt="" />
            </div>
            <div>
              <h1 className="mb-4 text-center text-xl text-[#5DCBC4] sm:text-2xl md:text-4xl">
                Share your Opinion
              </h1>
              <p className="px-4 leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
        <div className="border-[#FFB777]] space-y-6 rounded-md border bg-[#180c6eff] px-8 py-6 text-center text-3xl">
          <h1>Reach us Out</h1>
          <span className="text-[#FFB777] underline">Example@gmail.com</span>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-center text-[#FFD9B8]">Rate Us</h1>
          <div className="flex justify-center gap-5">
            <BsFillStarFill className="text-[#BAB21A]" />
            <BsFillStarFill className="text-[#BAB21A]" />
            <BsFillStarFill className="text-[#BAB21A]" />
            <BsFillStarFill className="text-[#D9D9D9]" />
            <BsFillStarFill className="text-[#D9D9D9]" />
          </div>
        </div>
      </main>
      <div className="mt-8">
        <Footer />
      </div>
    </section>
  );
}

export default Contact;
