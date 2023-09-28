import React from "react";
import { MdNotificationsNone, MdFilterList } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";

export function HomeHeader() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Discover</h2>
        <MdNotificationsNone className="w-6 h-6 fill-black" />
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="w-full flex items-center bg-[#F2F2F2] px-4 py-3 rounded-xl gap-2">
          <TfiSearch className="w-6 h-6" />
          <input
            type="text"
            placeholder="Search anything"
            className="bg-transparent outline-none"
          />
        </div>
        <div className="p-3.5 rounded-xl bg-black">
          <MdFilterList className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <button className="py-2 px-9 rounded-xl bg-black text-white">
          All
        </button>
        <button className="py-2 px-9 rounded-xl bg-[#F2F2F2]">Men</button>
        <button className="py-2 px-9 rounded-xl bg-[#F2F2F2]">Women</button>
        <button className="py-2 px-9 rounded-xl bg-[#F2F2F2]">Kids</button>
      </div>
    </div>
  );
}
