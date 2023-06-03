import { NavLink } from "react-router-dom";

const ItemArticles = ({ address, name, title, image }) => {
  return (
    <div className="relative bg-white flex flex-col gap-3 pb-3 rounded-lg border border-[#EAEAEA]">
      <div className="relative">
        <button className="absolute top-[24px] left-[24px] bg-[#2650D9] px-[20px] py-[6px] text-[14px] text-white rounded-xl">
          {address}
        </button>
        <NavLink to={"/blog/cafe-apartment"}>
          <img
            src={image}
            alt=""
            className="object-cover w-full p-2 overflow-hidden rounded-2xl"
          />
        </NavLink>
      </div>
      <div className="flex px-5 text-[#717171] gap-[40px] text-[14px]">
        <div className="flex justify-center gap-1 whitespace-nowrap">
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_638_1128)">
                <path
                  d="M13.8102 9.52183C13.313 9.08501 12.7102 8.70758 12.0181 8.40008C11.7223 8.2687 11.3761 8.40191 11.2447 8.69762C11.1134 8.99334 11.2466 9.33952 11.5423 9.47102C12.1258 9.73034 12.6287 10.0436 13.0367 10.4021C13.5396 10.8441 13.8281 11.484 13.8281 12.1582V13.2422C13.8281 13.5653 13.5653 13.8281 13.2422 13.8281H1.75781C1.43475 13.8281 1.17188 13.5653 1.17188 13.2422V12.1582C1.17188 11.484 1.46038 10.8441 1.96335 10.4021C2.55535 9.88186 4.2802 8.67188 7.5 8.67188C9.89079 8.67188 11.8359 6.72672 11.8359 4.33594C11.8359 1.94515 9.89079 0 7.5 0C5.10921 0 3.16406 1.94515 3.16406 4.33594C3.16406 5.7336 3.82896 6.97872 4.85893 7.77214C2.97432 8.18642 1.80199 8.98384 1.18984 9.52183C0.433731 10.1862 0 11.147 0 12.1582V13.2422C0 14.2115 0.788498 15 1.75781 15H13.2422C14.2115 15 15 14.2115 15 13.2422V12.1582C15 11.147 14.5663 10.1862 13.8102 9.52183V9.52183ZM4.33594 4.33594C4.33594 2.59129 5.75535 1.17188 7.5 1.17188C9.24465 1.17188 10.6641 2.59129 10.6641 4.33594C10.6641 6.08059 9.24465 7.5 7.5 7.5C5.75535 7.5 4.33594 6.08059 4.33594 4.33594V4.33594Z"
                  fill="#717171"
                />
              </g>
              <defs>
                <clipPath id="clip0_638_1128">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>{name}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2023-06-03"
              min="2023-01-01"
              max="2030-12-31"
              className="flex flex-row-reverse outline-none"
            ></input>
          </span>
        </div>
      </div>
      <div className="px-5 text-lg font-medium">
        <NavLink to={"/blog/cafe-apartment"}>
          <span>{title}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ItemArticles;
