"use client";
import * as React from "react";
import { Carousel } from "./importer.jsx";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Anouncment() {
  return (
    <>
      <Carousel
        className="rounded-xl "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/30"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ loop, handlePrev, lastIndex }) => (
          <button
            onClick={handlePrev}
            disabled={!loop && lastIndex === 0}
            className="absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-black/30 active:bg-black/50 grid place-items-center"
          >
            <FaArrowLeft size={"20"} className="" />
          </button>
        )}
        nextArrow={({ loop, handleNext, lastIndex }) => (
          <button
            onClick={handleNext}
            disabled={!loop && lastIndex}
            className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-black/30 active:bg-black/50 grid place-items-center"
          >
            <FaArrowRight size={"20"} />
          </button>
        )}
      >
        <div className="w-full h-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f"
            className="w-full h-full aspect-[1.59] object-cover"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f"
            className="w-full h-full aspect-[1.59] object-cover"
          />
        </div>

        <div className="w-full h-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/66a9d2759e1dbb2aa501dca6c0a9bfadca63702c63f40b8e724e00ba6e3bc50c?apiKey=560fbc2a70834c07805a703b08db725f"
            className="w-full h-full aspect-[1.59] object-cover"
          />
        </div>
      </Carousel>
    </>
  );
}
