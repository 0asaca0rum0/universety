import * as React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center px-16 py-10 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1110px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <nav className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <ul className="flex flex-col grow text-base font-medium text-white max-md:mt-10">
              <li className="text-2xl">
                University of adrar ,faculty of SM&MI
              </li>
              <li className="mt-8">
                <a href="/">home</a>
              </li>
              <li className="mt-3">
                <a href="/SM"> SM</a>
              </li>
              <li className="mt-3">
                <a href="/MI"> MI</a>
              </li>
              <li className="mt-3">
                <a href="/staff"> staff</a>
              </li>
              <li className="mt-3">
                <a href="/contactUs"> contact us</a>
              </li>
            </ul>
          </nav>
          <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 text-base leading-7 text-white whitespace-nowrap max-md:mt-10">
              <h2 className="text-2xl">Follow us</h2>
              <div className="flex gap-4 justify-between items-center mt-9">
                <a
                  href="#"
                  className=" flex gap-4 justify-between items-center mt-5 "
                >
                  <FaFacebook />
                  <div className="grow my-auto">University of adrar</div>
                </a>
              </div>
              <div className="flex gap-4 justify-between mt-5">
                <a href="#" className="w-7 aspect-square"></a>
                <div className="flex-auto my-auto"></div>
              </div>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2 text-white whitespace-nowrap max-md:mt-10">
              <h2 className="text-2xl">Get the news first</h2>
              <form className="flex flex-col justify-center px-2.5 py-1 mt-8 w-full text-base font-medium leading-10 border-white border-solid border-[0.7px]">
                <div className="flex  flex-row gap-3 justify-center items-center  ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    aria-label="Email"
                    className="bg-black   focus:outline-none border-2 rounded-md border-gray-700  "
                  />
                  <IoSend className="hover:text-blue-500 hover:scale-125 hover:skew-x-12 hover:-rotate-45 transition-all" />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
