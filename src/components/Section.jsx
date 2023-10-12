import React from "react";

function Section({ children }) {
  return (
    <section className="text-white mx-auto flex flex-col items-center justify-center gap-8 px-4 py-5 sm:w-[80%] sm:px-0 md:w-[70%]">
      {children}
    </section>
  );
}

export default Section;
