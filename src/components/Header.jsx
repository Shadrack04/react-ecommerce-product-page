import React, { useState } from "react";
import Nav from "./Nav";
import logo from "../../public/images/logo.svg";
import cartIcon from "../../public/images/icon-cart.svg";
import avatar from "../../public/images/image-avatar.png";
import menuIcon from "../../public/images/icon-menu.svg";
import MobileMenu from "./MobileMenu";

function Header({ cart }) {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className=" h-16 px-4 bg-white w-full flex gap-2 items-center justify-between sm:shadow-lg sm:mb-12">
      <div className=" flex  items-center  gap-6">
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
      </div>

      <div className=" flex gap-4 items-center ">
        <div className=" relative">
          <img className=" h-6" src={cartIcon} alt="" />
          <span className=" absolute -top-2 -right-2 bg-[hsl(26_100%_55%)] text-xs font-bold text-white z-10 px-2 rounded-full ">
            {cartItemCount}
          </span>
        </div>
        <img className=" h-8" src={avatar} alt="" />
      </div>

      <MobileMenu isOpenNav={isOpenNav} />
    </header>
  );
}

export default Header;
