import React from "react";
import Footer from "../../Footer";
import Navbar from "../../nav/Nav";

function About() {
  return (
    <section className="bg_color text-[#ECEDF1] flex flex-col justify-between gap-8">
      <header className=" py-8  sm:py-10 lg:py-12">
        <Navbar />
      </header>
      <main className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-8 px-4 sm:w-[70%] sm:px-0 md:w-[60%]">
        <h1 className="text-6xl text-center font-[600] mb-4 text-[#FFB777]">About US</h1>
        <div className="mx-auto flex flex-col space-y-2 rounded-md border shadow-md shadow-[#FFB777] border-[#FFB777] px-4 py-2">
          <h1 className="text-center text-xl text-[#5DCBC4] sm:text-2xl md:text-4xl">
            Who we are?
          </h1>
          <p className="px-4 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="mx-auto flex flex-col space-y-2 rounded-md border shadow-md shadow-[#FFB777] border-[#FFB777] px-4 py-2">
          <h1 className="text-center text-xl text-[#5DCBC4] sm:text-2xl md:text-4xl">
            Our Purpose
          </h1>
          <p className="px-4 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </main>
      <Footer/>
    </section>
  );
}

export default About;
