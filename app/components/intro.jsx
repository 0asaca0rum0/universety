import * as React from "react";
import Anouncment from "./Anouncment";
import News from "./news";
import LatestNews from "./latestNews";
import Gallery from "./gallary";
export default function Intro() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center px-16 pt-5 pb-8 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1125px] max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            
          </div>
                <Anouncment/>
          
          <LatestNews />
        </div>
      </div>
      <News />
     <Gallery/>  
    </div>
  );
}