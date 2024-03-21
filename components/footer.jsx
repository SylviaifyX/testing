import Logo from "./logo";
import Image from "next/image";
import youTube from "../public/youtube.png";
import insta from "../public/insta.png";
import faceBook from "../public/facebook.png";
import ticktok from "../public/ticktok.png";
import twitter from "../public/twitter.png";
import Wrapper from "./wrapper";

export default function Footer() {
  return (
    <footer className="p-8  bg-[#eeeef0] ">
      <Wrapper className="flex flex-col  md:flex md:flex-row md:justify-between md:items-center gap-7">
        <div className="hidden md:flex ">
          <Logo />
        </div>

        <section className="grid grid-col-1 sm:grid-col-2 md:grid-cols-2 xl:grid-cols-3 items-center gap-16">
          <div className=" h-40">
            <h6 className="text-xs text-[#828282] font-normal text-bold mb-2.5">
              HOW IT WORKS
            </h6>
            <ul className="font-normal leading-8 text-[15px]">
              <li className="hover:underline cursor-pointer text-[#262626]">
                Buying a Car
              </li>
              <li className="hover:underline cursor-pointer text-[#262626]">
                Selling a Car
              </li>
              <li className="hover:underline cursor-pointer text-[#262626]">
                Finalizing the Sale
              </li>
              <li className="hover:underline cursor-pointer text-[#262626]">
                FAQs
              </li>
            </ul>
          </div>

          <div className=" h-40">
            <h6 className="text-xs text-[#828282] font-normal text-bold mb-2.5">
              SELLERS
            </h6>
            <ul className="font-normal leading-8 text-[15px]">
              <li className="hover:underline cursor-pointer text-[#262626]">
                Submit Your Car
              </li>
              <li className="hover:underline cursor-pointer text-[#262626]">
                Photography Guide
              </li>
              <li className="hover:underline cursor-pointer text-[#262626]">
                Inspections
              </li>
              <li className="hover:underline cursor-pointer text-[#262626]">
                Concierge Sales
              </li>
            </ul>
          </div>

          <div className=" h-40">
            <h6 className="text-xs text-[#828282] font-normal text-bold mb-2.5">
              HELPFUL LINKS
            </h6>
            <ul className="font-normal leading-8 text-[15px]">
              <li className="hover:underline cursor-pointer text-[#262626]">
                Community
              </li>
              <li className="hover:underline cursor-pointer text-[#262626]">
                Support
              </li>
              <li className="hover:underline cursor-pointer text-[#262626]">
                Shipping
              </li>
              <li className="hover:underline cursor-pointer text-[#262626]">
                Shop C&B Merch
              </li>
              <li className="hover:underline cursor-pointer text-[#262626]">
                Careers
              </li>
            </ul>
          </div>
        </section>
        <section className="">
          <div className="w-[34px] h-[34px] flex items-center gap-3 mt-3">
            <Image src={youTube} alt="youtube" width="100%" height="100%" />
            <Image src={insta} alt="instagram" width="100%" height="100%" />
            <Image src={faceBook} alt="facebook" width="100%" height="100%" />
            <Image src={ticktok} alt="ticktok" width="100%" height="100%" />
            <Image src={twitter} alt="twitter" width="100%" height="100%" />
          </div>
          <div className="mt-3 text-sm">
            <p className="font-normal text-[#262626] mb-2">
              © Copyright 2024 Cars and Bids LLC
            </p>
            <p className=" font-normal">
              <span className="hover:underline cursor-pointer text-[#262626]">
                Terms of Use{" "}
              </span>
              <span className="hover:underline cursor-pointer text-[#262626]">
                Privacy Policy{" "}
              </span>
            </p>
          </div>
        </section>
      </Wrapper>
    </footer>
  );
}
