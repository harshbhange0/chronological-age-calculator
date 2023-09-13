import React from "react";
import Nav from "../../nav/Nav";
import InfoSection from "../../InfoSection";
import Footer from "../../Footer";

function Home() {
  return (
    <div className="bg_color h-auto text-white">
      <header className=" py-8  sm:py-10 lg:py-12">
        <Nav />
      </header>
      <main className="">
        <InfoSection/>
        <Footer/>
      </main>
    </div>
  );
}

export default Home;
