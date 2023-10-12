import React from "react";

function PRCompo1({ children, childrenClass, subHeading, subHeadingClass }) {
  return (
    <div
      className={`pr_component1 ${
        childrenClass ? childrenClass : "mb-3 leading-6"
      }`}
    >
      {subHeading ? (
        <span
          className={`${
            subHeadingClass ? subHeadingClass : " "
          }  me-1 text-lg font-semibold text-[#5DCBC4] sm:text-xl md:text-2xl`}
        >
          {subHeading}
        </span>
      ) : (
        ""
      )}
      <>{children}</>
    </div>
  );
}

export default PRCompo1;
