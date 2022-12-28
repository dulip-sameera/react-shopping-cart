import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto p-4 text-customCyan flex items-center justify-center h-[80vh]">
      {/* Desktop */}
      <div className="w-[60%] text-center hidden md:block">
        <h1 className="text-5xl">
          Ooops! Page Not Found :{" "}
          <span className="text-customDarkCyan">404</span>
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="py-4 px-6 bg-customDarkGrey rounded-lg border-2 border-customDarkCyan mt-4"
        >
          Go Back
        </button>
      </div>

      {/* mobile */}
      <div className="w-[60%] text-center md:hidden">
        <h1 className="text-6xl mb-4">Ooops!</h1>
        <h1 className="text-5xl mb-5"> Page Not Found:404</h1>

        <button
          onClick={() => navigate(-1)}
          className="p-4 bg-customDarkGrey rounded-lg border-2 border-customDarkCyan"
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default Error;
