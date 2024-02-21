"use client";
import React, { memo } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
export default memo(function Menu({ onCloseMenu }) {
  const router = useRouter();
  return (
    <div className="w-full max-h-full overflow-auto flex flex-col items-center gap-3 py-3 px-2">
      <Image
        height={50}
        width={100}
        loading="lazy"
        src={"/img/logo-univ3.webp"}
        className="aspect-square w-[65px]"
        alt="University Logo"
      />
      <ul className="w-full">
        <li
          onClick={() => {
            router.push("/");
            onCloseMenu();
          }}
          className="w-full flex items-center justify-between py-3 border-b"
        >
          <p> Home</p>
          <MdKeyboardArrowLeft />
        </li>
        <li
          onClick={() => {
            router.push("/SM");
            onCloseMenu();
          }}
          className="w-full flex items-center justify-between py-3 border-b"
        >
          <p> SM</p>
          <MdKeyboardArrowLeft />
        </li>
        <li
          onClick={() => {
            router.push("/MI");
            onCloseMenu();
          }}
          className="w-full flex items-center justify-between py-3 border-b"
        >
          <p> MI</p>
          <MdKeyboardArrowLeft />
        </li>
        <li
          onClick={() => {
            router.push("/staff");
            onCloseMenu();
          }}
          className="w-full flex items-center justify-between py-3 border-b"
        >
          <p> faculty and staff</p>
          <MdKeyboardArrowLeft />
        </li>
      </ul>
    </div>
  );
});
