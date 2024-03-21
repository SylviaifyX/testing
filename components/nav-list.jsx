
export default function NavList() {
  return (
    <div className="hidden md:hidden xl:block">
      <ul className="flex items-center gap-8 flex-wrap cursor-pointer font-medium text-[16px]">
        <li className="relative">
          <li>Auctions</li>
          <ul className="absolute hidden p-4 bg-white shadow-xl left-0 w-[180px] top-8 rounded-md text-sm font-normal">
            <li className="mb-2">Live Auctions</li>
            <li className="mb-2">Featured Auctions</li>
            <li>Past Results</li>
          </ul>
        </li>
        <li className="relative">
          <button className="bg-[#4ad493] px-4 p-2 rounded-full">
            Sell a Car
          </button>
          <ul className="absolute hidden top-12 left-10 bg-black text-white w-20 p-1 text-sm text-center rounded">
            <li>Sell a car</li>
          </ul>
        </li>
        <li className="relative">
          <li> Community <span className="text-[10px] border-2 border-[#eeeef0] p-1">Beta</span></li> 
          <ul className="absolute hidden top-10 left-10 rounded bg-black text-white w-24 text-center p-1  text-sm">
            <li>Community</li>
          </ul>
        </li>
        <li className="relative">
          <li>{"What's"} Cars & Bids</li>
          <ul className="absolute hidden top-10 left-10 rounded bg-black text-white w-36 text-center p-1  text-sm">
            <li>{"what's"} cars & Bids</li>
          </ul>
        </li>
        <li className="relative">
          <li>Daily Email</li>
          <ul className="absolute hidden top-10 left-8 rounded bg-black text-white w-24 text-center p-1  text-sm">
            <li className="text-sm">Daily Email</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
