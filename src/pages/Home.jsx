import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="container mx-auto p-4 flex flex-col justify-center items-center h-[90vh]">
      <h1
        className="text-4xl font-bold mb-10 md:text-9xl"
        style={{
          fontFamily: "Hanuman serif",
        }}
      >
        One Stop Bike Shop
      </h1>
      <Link
        to={"/store"}
        className="text-lg border-2 border-customCyan p-3 active:bg-customCyan active:text-customBlack hover:bg-customCyan hover:text-customBlack duration-300 rounded-md md:p-4"
      >
        Select Your Ride
      </Link>
    </section>
  );
};

export default Home;
