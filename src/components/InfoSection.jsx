import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

function InfoSection() {
  return (
    <section className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-4 sm:w-[80%] sm:px-0 md:w-[70%]">
      <div className="flex flex-col gap-2  sm:flex-row sm:justify-center sm:gap-4 md:gap-8">
        <div className="mb-auto h-auto space-y-8 rounded-md border border-[#FFB777] px-4 py-2 shadow-md shadow-[#FFB777]">
          <h1 className="md:test-4xl text-center text-xl text-[#5DCBC4] sm:text-2xl">
            Quick Navigation
          </h1>
          <div className="flex flex-col space-y-2 ps-4">
            <span>1. Understanding Chronological Age Calculator </span>
            <span>2. What is Chronological Age?</span>
            <span>3. Need for Calculating Chronological Age</span>
            <span>4. Working Algorithm of this Calculator</span>
            <span>5. Age Save the Calculator as an App </span>
            <span>6.Summary</span>
          </div>
        </div>

        <div className=" mb-auto h-auto">
          <div className="rounded-md border border-[#FFB777] px-4 py-2 shadow-md  shadow-[#FFB777]">
            <span className="mx-auto block text-center">
              Scroll for More Interesting <br /> Information
            </span>
          </div>
          <div className="w-full ">
            <BsChevronDoubleDown className="mx-auto text-[100px]" />
          </div>
        </div>
      </div>

      <div className="w-full space-y-8 sm:w-[90%]  md:w-[80%]">
        <div className="mx-auto flex flex-col space-y-2 rounded-md border border-[#FFB777] px-4 py-2 shadow-md shadow-[#FFB777]">
          <h1 className="text-center text-xl text-[#5DCBC4] sm:text-2xl md:text-4xl">
            Understanding Chronological Age Calculator
          </h1>
          <p className="px-4 leading-6">
            A chronological age calculator is a utility tool that computes your
            age from birth to a given date. You can determine your chronological
            age by performing a simple calculation, that is, subtracting the
            date of birth from the date when asked. However, you don't need to
            apply this formula to obtain your age in the presence of this tool.
            Chronological age calculation is made easier with this advanced
            algorithmic tool.
          </p>
        </div>

        <div className="mx-auto flex flex-col space-y-2 rounded-md border border-[#FFB777] px-4 py-2 shadow-md shadow-[#FFB777]">
          <div className="mx-auto flex flex-col space-y-2  px-4 py-2">
            <h1 className="text-xl  text-[#5DCBC4] sm:text-2xl md:text-4xl">
              What is Chronological Age?
            </h1>
            <p>
              Chronological age is just a number to answer the "how old are you"
              question. Chronological age, often abbreviated to C.A., can be
              defined as the number of days, months, and years a person has
              lived from birth. Every day you live on earth, come into account
              of chronological age.
            </p>
          </div>
          <div className="mx-auto flex flex-col space-y-2 px-4 py-2">
            <h1 className="text-md  text-[#FFD9B8] sm:text-xl md:text-2xl">
              Age and Chronological Age
            </h1>
            <p>
              Hence, to determine your chronological age, you should start
              counting your age from the first given date (date of birth) to the
              last given date (the present day).
              <br />
              <span className="text-md my-4 block font-[200]">
                “Chronological order misses no events. Thus, while arranging
                dates in chronological order, we should always include days and
                months with the year.”
              </span>
              <br /> Generally, we tell people our age in just years or the
              number of birthdays we have celebrated.
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col space-y-2 rounded-md border border-[#FFB777] px-4 py-2 shadow-md shadow-[#FFB777]">
          <div className="mx-auto flex flex-col space-y-2 px-4 py-2">
            <h1 className="text-xl  text-[#5DCBC4] sm:text-2xl md:text-4xl">
              Need for Calculating Chronological Age
            </h1>
            <p>
              It is always asked in government forms or by medical experts
              before continuing further process.
              <span>
                A few reasons for calculating chronological age are: -
              </span>
            </p>
          </div>
          <dir className="flex flex-col gap-4 py-4 sm:flex-row">
            <div className="w-[90%] space-y-2 rounded-md border border-[#FFB777]  px-4 py-2 text-center shadow-md shadow-[#FFB777] md:mx-auto md:w-[40%]">
              <h2 className="text-lg text-[#FFD9B8] sm:text-xl md:text-2xl">
                Voting
              </h2>
              <p className="px-4">
                Citizens are eligible to elect their leader after reaching the
                minimum age requirement.{" "}
              </p>
            </div>
            <div className="w-[90%] space-y-2 rounded-md border border-[#FFB777] px-4 py-2 text-center shadow-md shadow-[#FFB777] md:mx-auto md:w-[40%]">
              <h2 className="text-lg text-[#FFD9B8] sm:text-xl md:text-2xl">
                Driver License
              </h2>
              <p className="px-4">
                Students are asked to reveal their chronological age before
                giving a driving test for a license.
              </p>
            </div>
          </dir>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
