"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Menu from "./menu";
import { useOutside } from "@/app/hooks/useOutside";
import Image from "next/image";
export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [positionScroll, setPositinScroll] = useState(
    typeof window !== "undefined" ? window.screenY : 0
  );
  const [headerPosition, setHeaderPosition] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const refSearch = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const menuRef = useRef(null);
  const [isOutsideMenu, setIsOutsideMenu] = useOutside(menuRef);
  useEffect(() => {
    const handlePosition = () => {
      if (positionScroll < window.scrollY) {
        setHeaderPosition("-translate-y-full");
      } else {
        setHeaderPosition("");
      }
      setPositinScroll(window.scrollY);
    };
    window.addEventListener("scroll", handlePosition);
    return () => window.removeEventListener("scroll", handlePosition);
  }, [positionScroll]);
  useEffect(() => {
    if (isOutsideMenu) {
      setIsMenuActive(false);
    }
  }, [isOutsideMenu]);
  useEffect(() => {
    if (isMenuActive) {
      setIsOutsideMenu(false);
    }
  }, [isMenuActive]);
  const handleSearch = () => {
    setIsSearchVisible((prevValue) => !prevValue);
  };
  useEffect(() => {
    if (refSearch.current && isSearchVisible) {
      refSearch.current.focus();
    }
  }, [isSearchVisible]);
  const handleSearchQuery = (e) => {
    if (e?.key === "Enter" || e?.type == "click") {
      router.replace("/");
    }
  };
  const handleMenu = useCallback(() => {
    setIsMenuActive((prevValue) => !prevValue);
  });
  return (
    <>
      <header
        className={`w-full fixed shadow-md bg- z-50 bg-white ${headerPosition} duration-500 flex-row flex items-center justify-around py-5 md:py-2`}
      >
        <button
          className={`md:w-[97px] md:h-[59px] w-[49px] h-[29px] relative ${
            isSearchVisible ? "hidden md:inline-block " : "inline-block"
          }`}
          onClick={() => router.push("/")}
        >
          {" "}
          <Image
             height={50}
             width={100}
            loading="lazy"
            src={"/img/logo-univ3.webp"}
            className="aspect-square w-[65px]"
            alt="University Logo"
          />
        </button>
        <div
          className={`flex items-center w-full justify-center md:w-fit ${
            isSearchVisible ? "" : "hidden"
          }`}
        >
          <IoCloseOutline
            onClick={handleSearch}
            className={`cursor-pointer ${isSearchVisible ? "" : "hidden"}`}
            size={30}
          />
          <div
            className={`transition-all px-2  md:w-fit h-full z-40 right-0 bg-white border top-0 peer-focus:border-black`}
          >
            <div className="flex items-center">
              <input
                defaultValue={searchParams.get("s")}
                onKeyDown={handleSearchQuery}
                ref={refSearch}
                type="text"
                className="peer focus:border-none focus:outline-none"
                placeholder="Search..."
              />
              <CiSearch
                className="cursor-pointer my-2"
                onClick={handleSearchQuery}
                size={30}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div
            className={`md:flex-row-reverse transition-all duration-500 justify-between ${
              isSearchVisible ? "hidden" : "md:flex hidden"
            } items-center gap-10`}
          >
            <nav className="md:flex hidden gap-5 justify-between items-center py-5 my-auto text-base font-medium whitespace-nowrap text-zinc-900 max-md:flex-wrap max-md:max-w-full">
              <Link href="/" className="grow text-lg">
                home
              </Link>
              <Link href="/SM" className="flex-auto text-lg">
                SM
              </Link>
              <Link href="/MI" className="text-lg">
                MI
              </Link>
              <Link href="/staff" className="text-lg">
                faculty and staff
              </Link>
            </nav>
          </div>
          <div
            className={`gap-5 items-center ${
              isSearchVisible ? "hidden md:flex" : "flex"
            }`}
          >
            <CiSearch
              onClick={handleSearch}
              className={`cursor-pointer ${isSearchVisible ? "hidden" : ""}`}
              size={30}
            />
            <button
              onClick={handleMenu}
              className="flex flex-col md:hidden  items-center gap-1 cursor-pointer"
            >
              <div
                className={`h-1 w-6 rounded-lg bg-black  duration-300 ${
                  isMenuActive ? "-translate-x-4" : ""
                }`}
              ></div>
              <div
                className={`h-1 w-6 rounded-lg bg-black  duration-300 ${
                  isMenuActive ? "-translate-x-2" : ""
                }`}
              ></div>
              <div className="h-1 w-6 rounded-lg bg-black "></div>
            </button>
          </div>
        </div>
      </header>
      <div
        ref={menuRef}
        className={`fixed transition-all w-[80%] md:w-4/12 lg:w-3/12 h-screen ${
          isMenuActive ? "" : "-translate-x-full"
        } z-50 left-0-0 bg-white shadow-sm top-0`}
      >
        <Menu onCloseMenu={handleMenu} />
      </div>
    </>
  );
}
