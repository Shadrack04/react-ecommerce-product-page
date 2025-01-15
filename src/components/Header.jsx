import React, { useState } from "react";
import Nav from "./Nav";
import logo from "../../public/images/logo.svg";
import cartIcon from "../../public/images/icon-cart.svg";
import avatar from "../../public/images/image-avatar.png";
import menuIcon from "../../public/images/icon-menu.svg";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <header className=" h-16 px-4 bg-white w-full flex gap-2 items-center justify-between">
      <div className=" flex gap-4 items-center">
        <img
          onClick={() => setIsOpenNav(!isOpenNav)}
          className=" sm:hidden z-50"
          src={menuIcon}
          alt="menu icon"
        />
        <img src={logo} alt="Logo image" />
      </div>
      <Nav />

      <div className=" flex gap-4 items-center ">
        <img className=" h-6" src={cartIcon} alt="" />
        <img className=" h-8" src={avatar} alt="" />
      </div>

      <MobileMenu isOpenNav={isOpenNav} />
    </header>
  );
}

export default Header;
