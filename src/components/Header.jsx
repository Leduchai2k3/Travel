import { NavLink } from "react-router-dom";
import Logo from "../icon/Logo";
import Search from "../icon/Search";

// eslint-disable-next-line react/prop-types
const Header = ({ children }) => {
  return (
    <div className="relative ">
      <div className="">
        <img src="bgHome.png" alt="" className="h-[860px] object-cover" />
      </div>
      <div className="absolute text-white top-0 flex items-center justify-between w-full h-[94px]">
        <div className="flex pt-[23px] pl-[30px] gap-[127px]">
          <div className="flex items-center">
            <Logo></Logo>
            <span className="text-[30px] font-medium leading-[43px]">
              Travel exprience
            </span>
          </div>
          <div className="flex gap-[42px] items-center">
            <span className="font-normal text-[15px]">
              What are you looking for?
            </span>
            <Search></Search>
          </div>
        </div>
        <div className="flex font-normal text-[15px] pr-[215px] gap-[100px]">
          <div className="font-normal text-[15px] flex gap-[40px]">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Listings</NavLink>
            <NavLink to={"/"}>Blog</NavLink>
          </div>
          <div className="font-normal text-[15px] flex gap-[40px]">
            <NavLink to={"/"}>Login</NavLink>
            <NavLink to={"/"}>Resgister</NavLink>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
