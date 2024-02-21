import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function LatestNews() {
  return (
    <div className="mt-12 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col md:flex-row max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&"
            className="grow w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow font-medium text-black max-md:mt-10 max-md:max-w-full">
            <div className="text-xl md:text-4xl font-bold max-md:max-w-full">
              Certificate Award Ceremony for Course Graduates
            </div>
            <div className="mt-5 text-lg leading-6 max-md:max-w-full">
              Today, December 3, 2020, the Academy of Digital Innovations held a
              certificate award ceremony for the graduates of the Frontend
              Development course.
            </div>
            {/* <div className="flex gap-5 justify-between self-start mt-12 text-lg leading-10 text-center whitespace-nowrap max-md:mt-10">
              <button className="flex gap-2 p-1 justify-between items-center hover:scale-110 transition-all hover:border-2 border-black">
                <IoIosArrowRoundBack size={"25"} />
                previous
              </button>
              <button className="flex gap-2 p-1 justify-between items-center hover:scale-110 transition-all hover:border-2 border-black">
                next
                <IoIosArrowRoundForward size={"25"} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
