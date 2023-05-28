import { NavLink } from "react-router-dom";
import Logo from "../icon/Logo";
import Search from "../icon/Search";

const Head = ({ className }) => {
  return (
    <div
      className={`absolute text-white top-0 flex items-center justify-between w-full h-[94px] ${className}`}
    >
      <div className="flex pl-[30px] xl:gap-[80px] xs:gap-[20px] lg:gap-[40px] gap-[127px]">
        <div className="flex items-center">
          <Logo></Logo>
          <span className="text-[30px] font-medium leading-[43px]">
            Travel exprience
          </span>
        </div>
        <div className="flex gap-[42px] xs:gap-[10px] items-center sm:hidden">
          <span className="font-normal text-[15px] ">
            What are you looking for?
          </span>
          <Search></Search>
        </div>
      </div>
      <div className="flex font-normal xl:gap-[80px] lg:gap-[40px] xs:gap-[20px] xl:pr-[150px] lg:pr-[50px] xs:pr-[10px] text-[15px] pr-[215px] gap-[100px]">
        <div className="font-normal text-[15px] flex gap-[40px]">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/listing"}>Listings</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
        </div>
        <div className="font-normal text-[15px] flex gap-[40px]">
          <NavLink to={"/"}>Login</NavLink>
          <NavLink to={"/"}>Resgister</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Head;
