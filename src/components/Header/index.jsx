import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-500 p-4 text-black flex items-center justify-center sticky top-0 z-50 w-full">
      <Link to="/" className="text-white font-bold text-xl no-underline">
        My Store
      </Link>
    </header>
  );
}

export default Header;
