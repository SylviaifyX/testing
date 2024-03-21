import Logo from "./logo";
import NavList from "./nav-list";
import Wrapper from "./wrapper";
import Image from "next/image";
import search from "../public/search.png";
import menuBar from "../public/menuBar.png"
import clock from "../public/clock.png";

export default function Header() {
  return (
    <header className="p-2">
      <Wrapper className=" hidden  md:flex sm:flex min-h-16 border-b-2 border-[#eeeef0]  items-center justify-between flex-wrap ">
        <Logo />
        <NavList />
        <div className="hidden w-[350px] bg-[#eeeef0] rounded-md md:flex sm:flex items-center gap-2 p-3 ">
          <div className="w-[19px] h-[19px]">
            <Image src={search} width="100%" height="100%" alt="searchicon" />
          </div>

          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="Search for cars (BMW, Audi,Ford)"
          />
        </div>

        <button className="hidden md:flex sm:flex p-3 bg-[#4ad493] rounded-md px-4">
          Sign Up
        </button>
      </Wrapper>

      {/* small screen */}
      <section className=" flex flex-col sm:hidden md:hidden w-full p-2 border-b-2 border-[#eeeef0] flex-wrap" >
          <div className=" flex items-center justify-between flex-wrap mb-2">
            <Logo />

            <button className=" flex md:hidden bg-[#4ad493] p-2 rounded-md px-2 text-[13px] font-bold">
              Sign Up
            </button>
            <div className="flex md:hidden w-[19px] h-[19px]">
              <Image
                src={search}
                width="100%"
                height="100%"
                alt="searchIcon"
              />
            </div>
            <div className="flex md:hidden w-[40px] h-[21px]">
            <Image
                src={menuBar}
                width="100%"
                height="100%"
                alt="MenuBar"
              />
            </div>
          </div>
          <div className="flex  items-center justify-between">
            <div className="flex item-center justify-between p-2 rounded-md w-[74%] bg-black text-white gap-4">
              <div className="flex items-center gap-2">
                <div className="w-[20px] h-[20px]">
                  <Image
                    alt="clockIcon"
                    width="100%"
                    height="100%"
                    src={clock}
                  />
                </div>

                <p>1 Day</p>
              </div>
              <div className="flex items-center gap-2 ">
                <h6 className="text-[#eeeef0]">Bid</h6>
                <p>$10,000</p>
              </div>
            </div>
            <button className="p-2 px-5 rounded-md bg-green-500">bid</button>
          </div>
      </section>
    </header>
  );
}
