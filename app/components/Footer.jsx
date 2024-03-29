import * as React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center px-16 py-10 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="w-full ">
        <div className="flex gap-5 flex-col-reverse">
          <nav className="flex flex-col w-full">
            <ul className="flex flex-col text-white">
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
          <div className="flex flex-col-reverse md:flex-row">
            <section className="flex flex-col ml-5 w-full">
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
            <section className="flex flex-col ml-5">
              <div className="flex flex-col mt-2 gap-3 text-white whitespace-nowrap max-md:mt-10">
                <h2 className="text-2xl">Get the news first</h2>
                <form className="flex  flex-row gap-3 justify-center items-center  ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    aria-label="Email"
                    className="bg-black px-2  focus:outline-none border-2 py-2 border-gray-700  "
                  />
                  <IoSend className="hover:text-blue-500 hover:scale-125 hover:skew-x-12 hover:-rotate-45 transition-all" />
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}
