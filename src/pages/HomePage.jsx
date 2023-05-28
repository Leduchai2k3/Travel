// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import SearchButton from "../icon/SearchButton";
import Header from "../components/Header";
import ItemHome from "../components/ItemHome";
import Dot from "../icon/Dot";
import Pag from "../icon/Pag";
import ItemArticles from "../components/ItemArticles";
import Footer from "../components/Footer";

const StyledDiv = styled.div`
  display: flex;
  gap: 150px;
  div {
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    gap: 4 px;
    span {
      color: #222222;
      font-weight: 500;
    }
    p {
      color: #717171;
    }
  }
`;
const HomePage = () => {
  return (
    <div className="min-w-full h-full bg-[#F9F7F1] min-h-screen">
      <Header image={"bgHome.png"}>
        <div className="absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2 items-center">
          <h1 className="text-[50px] font-medium">
            Explore Amazing Destinations
          </h1>
          <div className="flex flex-col gap-[51px] items-center">
            <span className="text-[18px] font-normal">
              Find great places to stay, eat, shop, or visit from local experts.
            </span>
            <StyledDiv className="h-[70px] w-[1137px] bg-white rounded-[100px] items-center">
              <div className="ml-4">
                <span className="text-[#222222]">Where</span>
                <p className="text-[#717171]">Where are you going</p>
              </div>
              <div className="border-l border-[#000000]">
                <span className="text-[#222222]">Check in</span>
                <p className="text-[#717171]">Add dates </p>
              </div>
              <div className="border-l border-[#000000]">
                <span className="text-[#222222]">Check in</span>
                <p className="text-[#717171]">Add dates </p>
              </div>

              <div className="border-l border-[#000000]">
                <span className="text-[#222222]">Guest</span>
                <p className="text-[#717171]">Add guests</p>
              </div>
              <div className="absolute right-2">
                <SearchButton></SearchButton>
              </div>
            </StyledDiv>
          </div>
        </div>
      </Header>
      <div className="px-[375px] xl:px-[200px] lg:px-[100px] xs:px-[10px] sm:px-[20px] flex flex-col items-center w-full mt-[55px] mx-auto ">
        <div className="flex flex-col items-center gap-3 mx-auto ">
          <h3 className="text-[30px] font-medium">Exclusive deals</h3>
          <span className="text-[16px] font-normal text-center text-[#717171]">
            Discover some of the most popular listings in Vietnam based on user
            reviews and ratings.
          </span>
          <div className="grid grid-cols-3 sm:flex sm:flex-col gap-[30px] ">
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
          <div className="flex gap-2 mt-3">
            <Dot></Dot>
            <Pag></Pag>
            <Dot></Dot>
            <Dot></Dot>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center gap-3 mt-[80px]">
          <h3 className="text-[30px] font-medium">Exclusive deals</h3>
          <span className="text-[16px] font-normal text-[#717171]">
            Discover some of the most popular listings in Vietnam based on user
            reviews and ratings.
          </span>
          <div className="flex gap-[20px] mt-2">
            <div className="relative">
              <div className="absolute w-[100%] h-[100%] bg-black opacity-30 rounded-lg"></div>
              <img
                src="ImageTrendHome.png"
                alt=""
                className="h-[100%] rounded-lg"
              />
              <div className=" flex flex-col absolute bottom-[28px] text-white gap-1 items-center left-[50%] translate-x-[-50%]">
                <span className="text-lg font-medium">Ha Giang</span>
                <span className="text-sm font-normal">62 Listings</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-[100%] h-[100%] bg-black opacity-30 rounded-lg"></div>
              <img
                src="ImageTrendHome1.png"
                alt=""
                className="h-[100%] rounded-lg"
              />
              <div className=" flex flex-col absolute bottom-[28px] text-white gap-1 items-center left-[50%] translate-x-[-50%]">
                <span className="text-lg font-medium">Ha Giang</span>
                <span className="text-sm font-normal">62 Listings</span>
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] mt-2">
            <div className="relative">
              <div className="absolute w-[100%] h-[100%] bg-black opacity-30 rounded-lg"></div>
              <img
                src="ImageTrendHome3.png"
                alt=""
                className="h-[100%] rounded-lg"
              />
              <div className=" flex flex-col absolute bottom-[28px] text-white gap-1 items-center left-[50%] translate-x-[-50%]">
                <span className="text-lg font-medium">Ha Giang</span>
                <span className="text-sm font-normal">62 Listings</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-[100%] h-[100%] bg-black opacity-30 rounded-lg"></div>
              <img
                src="ImageTrendHome2.png"
                alt=""
                className="h-[100%] rounded-lg"
              />
              <div className=" flex flex-col absolute bottom-[28px] text-white gap-1 items-center left-[50%] translate-x-[-50%]">
                <span className="text-lg font-medium">Ha Giang</span>
                <span className="text-sm font-normal">62 Listings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] relative">
        <img src="Maskgroup.png" alt="" />
        <div className="absolute flex flex-col items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white gap-[70px]">
          <div className="flex flex-col items-center gap-3">
            <h3 className="font-medium text-[30px]">How it Works</h3>
            <span className="text-[16px] font-normal">
              Bringing business and community members together.
            </span>
          </div>
          <div className=" flex gap-[96px]">
            <div className="flex flex-col items-center gap-[37px]">
              <div className="w-[100px] h-[100px] bg-[#ED4949] rounded-full flex items-center justify-center">
                123
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[18px] font-medium">
                  Find accommodation
                </span>
                <span className="text-[15px] font-normal w-[310px] text-center">
                  Explore and engage with exceptional nearby accommodations,
                  immersing yourself in the authentic local lifestyle.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[37px]">
              <div className="w-[100px] h-[100px] bg-[#ED4949] rounded-full flex items-center justify-center">
                123
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[18px] font-medium">
                  Find accommodation
                </span>
                <span className="text-[15px] font-normal w-[310px] text-center">
                  Explore and engage with exceptional nearby accommodations,
                  immersing yourself in the authentic local lifestyle.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[37px]">
              <div className="w-[100px] h-[100px] bg-[#ED4949] rounded-full flex items-center justify-center">
                123
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[18px] font-medium">
                  Find accommodation
                </span>
                <span className="text-[15px] font-normal w-[310px] text-center">
                  Explore and engage with exceptional nearby accommodations,
                  immersing yourself in the authentic local lifestyle.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto flex items-center flex-col mt-[90px] gap-[45px]">
          <div className="flex flex-col items-center gap-2 ">
            <h3 className="text-[30px] font-medium">
              Testimonials From Our Customers
            </h3>
            <span className="font-normal text-[#717171]">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </span>
          </div>
          <div className="flex">
            <div className="w-[550px] relative h-[320px] rounded-[15px] flex flex-col items-center gap-[20px] justify-center">
              <div className="absolute w-full h-full bg-[#F9F7F1] opacity-60"></div>
              <img src="Avatar1.png" alt="" className=" w-[70px] h-[70px ]" />
              <div className="flex flex-col items-center gap-[2px]">
                <span className="text-[18px] font-medium">Viet</span>
                <span className="text-[15px] font-normal text-[#717171]">
                  Hai Phong
                </span>
              </div>
              <span className="text-[#717171] text-center w-[387px] text-[15px]">
                The best hotel booking site Ive used. Instant confirmation,
                competitive prices, and hassle-free cancellations.
              </span>
            </div>
            <div className="w-[550px] relative h-[320px] bg-white rounded-[15px] flex flex-col items-center gap-[20px] justify-center">
              <span className="absolute font-normal text-[100px] text-[#717171] left-[50px] top-[50px]">
                “
              </span>
              <img src="Avatar1.png" alt="" className=" w-[70px] h-[70px ]" />
              <div className="flex flex-col items-center gap-[2px]">
                <span className="text-[18px] font-medium">Viet</span>
                <span className="text-[15px] font-normal text-[#717171]">
                  Hai Phong
                </span>
              </div>
              <span className="text-[#717171] text-center w-[387px] text-[15px]">
                The best hotel booking site Ive used. Instant confirmation,
                competitive prices, and hassle-free cancellations.
              </span>
            </div>
            <div className="w-[550px] relative h-[320px] rounded-[15px] flex flex-col items-center gap-[20px] justify-center">
              <div className="absolute w-full h-full bg-[#F9F7F1] opacity-60"></div>
              <img src="Avatar1.png" alt="" className=" w-[70px] h-[70px ]" />
              <div className="flex flex-col items-center gap-[2px]">
                <span className="text-[18px] font-medium">Viet</span>
                <span className="text-[15px] font-normal text-[#717171]">
                  Hai Phong
                </span>
              </div>
              <span className="text-[#717171] text-center w-[387px] text-[15px]">
                The best hotel booking site Ive used. Instant confirmation,
                competitive prices, and hassle-free cancellations.
              </span>
            </div>
          </div>
          <div className="flex gap-2 ">
            <Dot></Dot>
            <Pag></Pag>
            <Dot></Dot>
            <Dot></Dot>
          </div>
        </div>
      </div>

      <div className="pl-[375px] pr-[375px] flex flex-col items-center w-full mt-[100px] mx-auto ">
        <div className="flex flex-col items-center gap-3 mx-auto">
          <h3 className="text-[30px] font-medium">Articles</h3>
          <span className="text-[16px] font-normal text-[#717171]">
            Checkout Latest News And Articles From Our Blog
          </span>
          <div className="grid grid-cols-3 gap-[30px] mt-[50px]">
            <ItemArticles
              image={"images.png"}
              name={"Bao Ngoc"}
              date={"May 20, 2021"}
              address={"Quang Binh"}
              title={
                "Explore the UNESCO World Heritage largest cave of Vietnam"
              }
            ></ItemArticles>
            <ItemArticles
              image={"images.png"}
              name={"Bao Ngoc"}
              date={"May 20, 2021"}
              address={"Quang Binh"}
              title={
                "Explore the UNESCO World Heritage largest cave of Vietnam"
              }
            ></ItemArticles>
            <ItemArticles
              image={"images.png"}
              name={"Bao Ngoc"}
              date={"May 20, 2021"}
              address={"Quang Binh"}
              title={
                "Explore the UNESCO World Heritage largest cave of Vietnam"
              }
            ></ItemArticles>
            <ItemArticles
              image={"images.png"}
              name={"Bao Ngoc"}
              date={"May 20, 2021"}
              address={"Quang Binh"}
              title={
                "Explore the UNESCO World Heritage largest cave of Vietnam"
              }
            ></ItemArticles>
            <ItemArticles
              image={"images.png"}
              name={"Bao Ngoc"}
              date={"May 20, 2021"}
              address={"Quang Binh"}
              title={
                "Explore the UNESCO World Heritage largest cave of Vietnam"
              }
            ></ItemArticles>
            <ItemArticles
              image={"images.png"}
              name={"Bao Ngoc"}
              date={"May 20, 2021"}
              address={"Quang Binh"}
              title={
                "Explore the UNESCO World Heritage largest cave of Vietnam"
              }
            ></ItemArticles>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="w-[200px] h-[55px] bg-[#ED4949] rounded-lg text-white font-semibold">
              View all articles
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[120px]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
