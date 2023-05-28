import Footer from "../components/Footer";
import Head from "../components/Head";
import ItemHome from "../components/ItemHome";

const Listing = () => {
  return (
    <div className="w-full h-full">
      <Head className={"bg-[#ED4949]"}></Head>
      <div className="pt-[174px] flex flex-col items-center gap-[50px]">
        <div className=" flex flex-col items-center gap-2">
          <span className="font-medium text-[30px]">Listings</span>
          <span className=" text-[16px] text-[#717171]">Home / Listings</span>
        </div>
        <div className="pl-[375px] pr-[375px] grid grid-cols-3 gap-[30px]">
          <div className="col-span-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, dicta. Alias, dolore totam? Numquam eveniet quis,
            necessitatibus, ratione sed, corporis repudiandae vero dicta quidem
            ad voluptatum fuga eligendi praesentium impedit.
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <p className="flex gap-3">
                <span className="text-[#717171]">Showing</span>
                <span>1 – 8 of 10 results</span>
              </p>
              <div className="flex gap-3 items-center">
                <div className="flex gap-2">
                  <span className="text-[#717171]">Sort by:</span>
                  <span className="flex items-center gap-5">
                    <span>Default</span>
                    <svg
                      width="9"
                      height="5"
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.07671 4.86424L8.86404 1.07685C8.9517 0.989247 9 0.872312 9 0.747627C9 0.622941 8.9517 0.506006 8.86404 0.418408L8.58519 0.139492C8.40349 -0.0419999 8.10818 -0.0419999 7.92675 0.139492L4.74638 3.31986L1.56248 0.135963C1.47482 0.0483653 1.35795 -3.34045e-07 1.23333 -3.39492e-07C1.10858 -3.44945e-07 0.991712 0.0483653 0.903975 0.135963L0.625198 0.414879C0.537531 0.502546 0.489235 0.619412 0.489235 0.744097C0.489235 0.868783 0.537531 0.985718 0.625198 1.07332L4.41599 4.86424C4.50393 4.95205 4.62135 5.00028 4.74617 5C4.87148 5.00028 4.98883 4.95205 5.07671 4.86424Z"
                        fill="#222222"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      rx="7.5"
                      fill="white"
                      stroke="#EAEAEA"
                    />
                    <rect x="14" y="14" width="4" height="4" fill="#ED4949" />
                    <rect x="22" y="14" width="4" height="4" fill="#ED4949" />
                    <rect x="14" y="22" width="4" height="4" fill="#ED4949" />
                    <rect x="22" y="22" width="4" height="4" fill="#ED4949" />
                  </svg>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      rx="7.5"
                      fill="white"
                      stroke="#EAEAEA"
                    />
                    <rect x="10" y="13" width="2" height="2" fill="#C4C4C4" />
                    <rect x="10" y="19" width="2" height="2" fill="#C4C4C4" />
                    <rect x="10" y="25" width="2" height="2" fill="#C4C4C4" />
                    <rect x="15" y="13" width="15" height="2" fill="#C4C4C4" />
                    <rect x="15" y="19" width="15" height="2" fill="#C4C4C4" />
                    <rect x="15" y="25" width="15" height="2" fill="#C4C4C4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[30px]">
              <div className="col-span-1">
                <ItemHome
                  image="ItemHome.png"
                  avatar={"Avatar.png"}
                  address={"Sai Gon, Ho Chi Minh city"}
                  title={"Cheerful 1-bedroom in a townhouse with parking."}
                  description={
                    "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                  }
                ></ItemHome>
                <ItemHome
                  image="ItemHome.png"
                  avatar={"Avatar.png"}
                  address={"Sai Gon, Ho Chi Minh city"}
                  title={"Cheerful 1-bedroom in a townhouse with parking."}
                  description={
                    "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                  }
                ></ItemHome>
                <ItemHome
                  image="ItemHome.png"
                  avatar={"Avatar.png"}
                  address={"Sai Gon, Ho Chi Minh city"}
                  title={"Cheerful 1-bedroom in a townhouse with parking."}
                  description={
                    "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                  }
                ></ItemHome>
              </div>
              <div className="col-span-1">
                <ItemHome
                  image="ItemHome.png"
                  avatar={"Avatar.png"}
                  address={"Sai Gon, Ho Chi Minh city"}
                  title={"Cheerful 1-bedroom in a townhouse with parking."}
                  description={
                    "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                  }
                ></ItemHome>
                <ItemHome
                  image="ItemHome.png"
                  avatar={"Avatar.png"}
                  address={"Sai Gon, Ho Chi Minh city"}
                  title={"Cheerful 1-bedroom in a townhouse with parking."}
                  description={
                    "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                  }
                ></ItemHome>
                <ItemHome
                  image="ItemHome.png"
                  avatar={"Avatar.png"}
                  address={"Sai Gon, Ho Chi Minh city"}
                  title={"Cheerful 1-bedroom in a townhouse with parking."}
                  description={
                    "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                  }
                ></ItemHome>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[375px] pr-[375px] mt-[53px] flex items-center justify-center gap-[30px] pb-[120px]">
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M5.95306 10.8242L6.31589 10.4639C6.4292 10.3505 6.49162 10.1996 6.49162 10.0383C6.49162 9.87719 6.4292 9.72614 6.31589 9.61274L2.20543 5.50246L6.32045 1.38744C6.43376 1.27422 6.49609 1.12317 6.49609 0.962016C6.49609 0.80086 6.43376 0.649721 6.32045 0.536411L5.95986 0.176001C5.72537 -0.0586672 5.34341 -0.0586672 5.10892 0.176001L0.19188 5.07542C0.0786593 5.18864 -0.00111412 5.33951 -0.00111413 5.5021L-0.00111413 5.50398C-0.00111414 5.66522 0.0787489 5.8161 0.19188 5.92932L5.09559 10.8242C5.20881 10.9376 5.36425 10.9998 5.5254 11C5.68665 11 5.83993 10.9376 5.95306 10.8242Z"
            fill="#222222"
          />
        </svg>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-black rounded-full cursor-pointer hover:text-white hover:bg-[#234DD4]">
          1
        </span>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-black cursor-pointer rounded-full hover:text-white hover:bg-[#234DD4]">
          2
        </span>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-white bg-[#234DD4] cursor-pointer rounded-full hover:text-white hover:bg-[#234DD4]">
          3
        </span>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-black cursor-pointer  hover:text-white hover:bg-[#234DD4] rounded-full">
          4
        </span>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-black cursor-pointer rounded-full hover:text-white hover:bg-[#234DD4]">
          5
        </span>
        <span>...</span>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-black cursor-pointer rounded-full hover:text-white hover:bg-[#234DD4]">
          15
        </span>
        <span>
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M0.543028 0.175823L0.180204 0.536142C0.0668945 0.649542 0.00447124 0.800413 0.00447124 0.961658C0.00447125 1.12281 0.0668945 1.27386 0.180204 1.38726L4.29066 5.49754L0.175644 9.61256C0.0623339 9.72578 -4.90954e-08 9.87683 -4.20511e-08 10.038C-3.50067e-08 10.1991 0.0623339 10.3503 0.175644 10.4636L0.536232 10.824C0.770722 11.0587 1.15268 11.0587 1.38717 10.824L6.30421 5.92458C6.41743 5.81136 6.49721 5.66048 6.49721 5.4979L6.49721 5.49602C6.49721 5.33478 6.41734 5.1839 6.30421 5.07068L1.4005 0.175823C1.28728 0.0624236 1.13185 0.000179241 0.97069 -4.24302e-08C0.809445 -3.5382e-08 0.656159 0.0624237 0.543028 0.175823Z"
              fill="#222222"
            />
          </svg>
        </span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Listing;
