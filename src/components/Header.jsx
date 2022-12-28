import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const cartItemQty = useSelector((state) => state.cart.totalQty);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="container mx-auto p-4 flex justify-between items-center  ">
      <div>
        <Link
          className="text-customCyan text-3xl hover:text-customDarkCyan font-bold"
          to={"/"}
        >
          Bike Shop
        </Link>
      </div>

      {/* Desktop view */}
      <nav className="text-customCyan gap-10 text-xl hidden md:flex ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "scale-125 border-b-2 border-b-customDarkCyan text-customDarkCyan duration-300"
              : "hover:scale-125 hover:border-b-2 hover:border-b-customCyan duration-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/store"}
          className={({ isActive }) =>
            isActive
              ? "scale-125 border-b-2 border-b-customDarkCyan text-customDarkCyan duration-300"
              : "hover:scale-125 hover:border-b-2 hover:border-b-customCyan duration-300"
          }
        >
          Store
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "scale-125 border-b-2 border-b-customDarkCyan text-customDarkCyan duration-300"
              : "hover:scale-125 hover:border-b-2 hover:border-b-customCyan duration-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) => (isActive ? "scale-125" : "")}
        >
          {({ isActive }) =>
            isActive ? (
              <div className="relative">
                <BsCartFill size={30} />
                <div className="absolute -top-1 -right-1 bg-red-400 rounded-full px-1 text-sm text-center">
                  {cartItemQty}
                </div>
              </div>
            ) : (
              <div className="relative">
                <BsCart size={30} />
                <div className="absolute -top-1 -right-1 bg-red-400 rounded-full px-1 text-center  text-sm">
                  {cartItemQty}
                </div>
              </div>
            )
          }
        </NavLink>
      </nav>

      {/* mobile view */}
      <div onClick={handleMobileNav} className="hover:cursor-pointer md:hidden">
        {mobileNav ? (
          <AiOutlineClose size={20} className="text-customCyan" />
        ) : (
          <RxHamburgerMenu size={20} className="text-customCyan" />
        )}
      </div>

      <div
        className={
          mobileNav
            ? "fixed left-0 top-0 w-[60%] h-full bg-customBlack ease-in-out duration-500 border-r-2 border-r-customDarkCyan md:hidden"
            : " fixed left-[-100%] top-0 w-[60%] h-full bg-customBlack ease-in-out duration-500 border-r-2 border-r-customDarkCyan md:hidden"
        }
      >
        <div className="p-4">
          <Link className="text-customCyan text-3xl mb-10" to={"/"}>
            Bike Shop
          </Link>
        </div>

        <nav className="text-customCyan flex flex-col gap-5 p-4 text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "scale-105 bg-customDarkGrey p-2 duration-300"
                : "hover:scale-105 hover:bg-customDarkGrey p-2 duration-300"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "scale-105 bg-customDarkGrey p-2 duration-300"
                : "hover:scale-105 hover:bg-customDarkGrey p-2 duration-300"
            }
            to={"/store"}
          >
            Store
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "scale-105 bg-customDarkGrey p-2 duration-300"
                : "hover:scale-105 hover:bg-customDarkGrey p-2 duration-300"
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "scale-105 bg-customDarkGrey p-2 duration-300"
                : "hover:scale-105 hover:bg-customDarkGrey p-2 duration-300"
            }
            to={"/cart"}
          >
            {({ isActive }) =>
              isActive ? (
                <div className="flex justify-between items-center px-2">
                  <BsCartFill size={20} /> {cartItemQty}
                </div>
              ) : (
                <div className="flex justify-between items-center px-2">
                  <BsCart size={20} /> {cartItemQty}
                </div>
              )
            }
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
