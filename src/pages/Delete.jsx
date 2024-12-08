import React from "react";
import { useNavigate } from "react-router-dom";

const Delete = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-medium text-lg  hover:text-red-700">
        This Is a Back-end-part we will include later because <br /> This
        project is based on the front-end by using react js and tailwind css
      </h1>
      <button
        onClick={() => navigate("/my-appointments")}
        className="rounded-full bg-primary mt-3 p-3 cursor-pointer hover:bg-black hover:text-white"
      >
        Back to My-Appointments
      </button>
    </div>
  );
};

export default Delete;
