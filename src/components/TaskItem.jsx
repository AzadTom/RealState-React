import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import toast from "react-hot-toast";

function TaskItem({ id, type }) {
  return (
    <>
      <div className="bg-[#2E2E2E]  flex  items-center gap-4 p-4  rounded-[1.5rem]">
        {/* Icon */}
        <div className="bg-[#1E1E1E] p-4 sm:p-8 rounded-[50%]">
          <img src={id} alt="icon" />
        </div>
        {/* content */}
        <div>
          <h2 className="text-xl sm:text-3xl font-semibold">Medical</h2>
          <p>{type}</p>
          <p className="font-thin">It taking from near hospital</p>
          <p>$30</p>
        </div>
        {/* Icon */}
        <div
          className="flex justify-end p-4 cursor-pointer text-white"
          onClick={() =>
            toast.success("Deleted Sucessfully!", {
              style: {
                border: "1px solid #1E1E1E",
                padding: "16px",
                color: "#fff",
                background: "#1E1E1E"
              },
              iconTheme: {
                primary: "#FFF",
                secondary: "#1E1E1E",
              },
            })
          }
        >
          <HighlightOffIcon />
        </div>
      </div>
    </>
  );
}

export default TaskItem;
