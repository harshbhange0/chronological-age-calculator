import React, { useState } from "react";
import BoxContainer from "./BoxContainer";

function DatePiker({ title, isCurrent, type, placeholder, updateSharedData }) {
  const [date, setDate] = useState("");
  const todayDate = new Date();
  let day = (
    todayDate.getDate() >= 10 ? todayDate.getDate() : "0" + todayDate.getDate()
  ).toString();
  let month = todayDate.getMonth() + 1;
  let year = todayDate.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  const handleOnChange = (e) => {
    const newData = e.target.value;
    setDate(newData);
    updateSharedData(newData);
  };

  return (
    <div className="my-3 grid w-full grid-cols-1 gap-3 px-5 sm:grid-cols-1 md:grid-cols-2">
      <h2 className="text-xl text-center text-white sm:text-2xl md:text-3xl">
        {title}
      </h2>
      <BoxContainer containerClass="">
        <input
          type={type}
          value={isCurrent ? currentDate : date}
          onChange={handleOnChange}
          required
          className="mx-auto w-full bg-transparent p-2 text-center outline-none placeholder-text-center placeholder-text-sm sm:text-xl placeholder-sm:text-xl"
          placeholder={placeholder}
        />
      </BoxContainer>
    </div>
  );
}

export default DatePiker;
