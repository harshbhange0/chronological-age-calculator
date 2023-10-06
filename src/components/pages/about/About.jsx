import React from "react";
import Footer from "../../Footer";
import Navbar from "../../nav/Nav";

function About() {
  return (
    <section className="bg_color flex flex-col justify-between gap-8 text-[#ECEDF1]">
      <header className=" py-8  sm:py-10 lg:py-12">
        <Navbar />
      </header>
      <main className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-8 px-4 sm:w-[70%] sm:px-0 md:w-[60%]">
        <h1 className="mb-4 text-center text-6xl font-[600] text-[#FFB777]">
          About US
        </h1>
        <div className="mx-auto flex flex-col space-y-2 rounded-md border border-[#FFB777] px-4 py-2 shadow-md shadow-[#FFB777]">
          <p className="px-4 leading-6">
            Occasionally, we urgently need to calculate our age in months and
            days for any purpose. Solving this maths problem can be hectic in
            such situations and it takes time to calculate the correct
            chronological age <br />
            <br />
            <b>Domainname </b>
            is born to help people in calculating age. This calculator can be
            used for official purposes like applying for a driver&#39;s license
            where people need to disclose their age details. Additionally,
            medical professionals can utilize this tool to determine the
            chronological age of patients in order to indicate biomarkers for
            predicting biological age.
            <br />
            <br />
            Whether you want to play a family game with cousins or figure out
            Who is elder,
            <b> Domainname </b>
            can be handy for personal use too. The easy-to-use feature allows us
            to find the age in just a few easy steps, i.e. input dates and click
            the &quot;calculate&quot; button.
          </p>
        </div>
        <div className="mx-auto flex flex-col space-y-2 rounded-md border border-[#FFB777] px-4 py-2 shadow-md shadow-[#FFB777]">
          <h1 className="text-center text-xl text-[#5DCBC4] sm:text-2xl md:text-4xl">
            Who we are?
          </h1>
          <p className="px-4 leading-6">
            We are not individuals. We are a team! Our team is made of curious
            people for the people.
            <br />
            <br />
            Our journey begins with the idea of creating a calculator with the
            best user experience on the internet. The developers, content team,
            and designers of domainname give their 100% in making this tool and
            still continue hustling to bring the best version of it.
          </p>
        </div>
        <div className="mx-auto flex flex-col space-y-2 rounded-md border border-[#FFB777] px-4 py-2 shadow-md shadow-[#FFB777]">
          <h1 className="text-center text-xl text-[#5DCBC4] sm:text-2xl md:text-4xl">
            Our Purpose
          </h1>
          <p className="px-4 leading-6">
            Developing more useful tools with extra features is our purpose. We
            aim to work on solving and delivering first to people by
            understanding their demands. Instead of &quot;Just delivering
            average products,&quot; we focus on &quot;serving enticing
            products&quot; to pull and engage users just like a magnet. This is
            possible with &quot;we can do it&quot; attitude of our team. We
            strive hard to bring more for people. Hope you enjoy using
            <b>domainname.</b>
          </p>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default About;
