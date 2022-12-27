import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="container mx-auto p-4 flex justify-between items-center ">
      <div>
        <Link className="text-customCyan text-3xl" to={"/"}>
          Bike Shop
        </Link>
      </div>
      <div onClick={handleMobileNav}>
        {mobileNav ? (
          <AiOutlineClose size={20} className="text-customCyan" />
        ) : (
          <RxHamburgerMenu size={20} className="text-customCyan" />
        )}
      </div>
    </header>
  );
};

export default Header;
