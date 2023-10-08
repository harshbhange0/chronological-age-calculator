import React from "react";

function BoxContainer({
  headingClass,
  containerClass,
  children,
  heading,
  contentClass,
}) {
  return (
    <div
      className={`${
        containerClass ? containerClass : "mb-auto px-4 py-2 h-auto space-y-8  "
      }box_container  rounded-md border border-[#FFB777]  shadow-md shadow-[#FFB777] `}
    >
      {heading ? (
        <h1
          className={`${headingClass?headingClass:""} box_container_heading  text-center text-2xl text-[#5DCBC4] sm:text-3xl md:text-4xl `}
        >
          {heading}
        </h1>
      ) : (
        ""
      )}
      <span
        className={`${
          contentClass
            ? contentClass
            : " box_container_content px-4 text-sm  leading-6 sm:text-lg "
        } box_container_content block`}
      >
        {children}
      </span>
    </div>
  );
}

export default BoxContainer;
