import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-green-400 h-[48px] items-center p-4">
      <h1 className="font-bold text-xl">NavBar</h1>
      <nav className="flex gap-3 items-center">
        <a href="#" className="font-bold text-xl">
          Home |
        </a>
        <a href="#" className="font-bold text-xl">
          about |
        </a>
        <a href="#" className="font-bold text-xl">
          {" "}
          login
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
