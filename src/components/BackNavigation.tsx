"use client";

import { MdNotificationsNone } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

type BackNavigationProps = {
  currentPage: string;
};

export function BackNavigation({ currentPage }: BackNavigationProps) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <button onClick={() => router.back()}>
        <BiArrowBack className="w-6 h-6 text-black" />
      </button>
      <h2 className="text-2xl font-semibold">{currentPage}</h2>
      <MdNotificationsNone className="w-6 h-6 text-black" />
    </div>
  );
}
