import React from "react";

export default function Header  ()  {
  return (
    <header className="flex gap-5 justify-evenly w-full max-md:flex-row max-md:max-w-full">
      <div className="flex flex-col justify-center items-start pr-16">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0a5a97d26374c49cf1edd7695cff30cf850c2c331970cf047db6f43560a0a2?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0a5a97d26374c49cf1edd7695cff30cf850c2c331970cf047db6f43560a0a2?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0a5a97d26374c49cf1edd7695cff30cf850c2c331970cf047db6f43560a0a2?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0a5a97d26374c49cf1edd7695cff30cf850c2c331970cf047db6f43560a0a2?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0a5a97d26374c49cf1edd7695cff30cf850c2c331970cf047db6f43560a0a2?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0a5a97d26374c49cf1edd7695cff30cf850c2c331970cf047db6f43560a0a2?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0a5a97d26374c49cf1edd7695cff30cf850c2c331970cf047db6f43560a0a2?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a0a5a97d26374c49cf1edd7695cff30cf850c2c331970cf047db6f43560a0a2?apiKey=560fbc2a70834c07805a703b08db725f&"className="aspect-square w-[65px]"
          alt="University Logo"
        />
      </div>
      <nav className="flex gap-5 justify-between py-5 my-auto text-base font-medium whitespace-nowrap text-zinc-900 max-md:flex-wrap max-md:max-w-full">
        <a href="/" className="grow">
          home
        </a>
        <a href="/SM" className="flex-auto">
         SM
        </a>
        <a href="/MI">MI</a>
        <a href="/staff">faculty and staff</a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/db6ac937f2a3fc96214ae6c13f3639b3e5ed9cbc29433cfee8298decea57308d?apiKey=560fbc2a70834c07805a703b08db725f&"
          className="w-5 aspect-square"
          alt="Search Icon"
        />
      </nav>
    </header>
  );
};

