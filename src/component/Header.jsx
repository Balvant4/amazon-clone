import React from "react";
import { amazonlogo } from "../images";
import { SlLocationPin } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
  return (
    <div>
      <div className=" bg-black text-white flex gap-5 h-[3rem] px-2 py-5 items-center sticky top-0 justify-between font-sans">
        <div className="left flex gap-5 items-center">
          <div className="flex items-center">
            <img
              className="text-white h-[7rem] object-contain"
              src={amazonlogo}
              alt="amazon-logo"
            />
          </div>
          <div className=" leading-3">
            <span className=" text-[12px]">Deliver to Balvant</span>
            <h1 className="flex items-center">
              <SlLocationPin className="" />
              <span className="text-[14px]">Chapra 841403</span>
            </h1>
          </div>
        </div>

        <div className="middle flex items-center">
          <input
            className="h-8 w-[40rem] rounded-l outline-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            placeholder="Search amazon.in"
          />

          <div className=" bg-searchbg text-white px-2 py-2 rounded-r cursor-pointer border border-orange-500">
            <IoSearch />
          </div>
        </div>

        <div className="right flex gap-5 items-center">
          <div className=" leading-3">
            <span className=" text-[12px]">Hello, Balvant</span>
            <h1 className="text-[14px]">Account & List</h1>
          </div>
          <div className=" leading-3">
            <span className="text-[12px]">Return</span>
            <h1 className="text-[14px]">& Orders</h1>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBasketIcon />
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
