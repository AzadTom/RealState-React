import React from "react";

function History() {
  return (
    <>
      <div className="flex items-center  justify-between px-4 sm:mx-8 md:mx-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">History</h2>
        </div>
        <div className="bg-[#2E2E2E] p-8 rounded-[50%] hidden sm:block cursor-pointer">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.60369 21.3445V0.22514H13.9432V21.3445H8.60369ZM0.713778 13.4545V8.11506H21.8331V13.4545H0.713778Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default History;
