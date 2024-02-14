import * as React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center px-16 py-10 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1110px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <nav className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <ul className="flex flex-col grow text-base font-medium text-white max-md:mt-10">
              <li className="text-2xl">Paliteh</li>
              <li className="mt-8">Об университете</li>
              <li className="mt-3">Абитуриенту</li>
              <li className="mt-3">Студентам</li>
              <li className="mt-3">Курсы</li>
              <li className="mt-3">Контакты</li>
              <li className="mt-12 whitespace-nowrap text-neutral-400 max-md:mt-10">
                © Paliteh. Все права защищены, 2021
              </li>
            </ul>
          </nav>
          <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 text-base leading-7 text-white whitespace-nowrap max-md:mt-10">
              <h2 className="text-2xl">Подпишись на нас</h2>
              <div className="flex gap-4 justify-between mt-9">
                <a
                  href="/kstu.kg"
                  className="w-7 aspect-square"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f96b54cf7c20ac1404b8e521d78a5fb996156f11aaab2b141ddb3235d8d5e5f?apiKey=560fbc2a70834c07805a703b08db725f&"
                    alt="kstu.kg"
                  />
                </a>
                <div className="grow my-auto">/kstu.kg</div>
              </div>
              <div className="flex gap-4 justify-between mt-5">
                <a
                  href="/kstu.kg"
                  className="w-7 aspect-square"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f8ab156f9cb37d6c1655dd7842fbb0b60604a928fc43221ab62f6dc93d07f46?apiKey=560fbc2a70834c07805a703b08db725f&"
                    alt="kstu.kg"
                  />
                </a>
                <div className="flex-auto my-auto">kstu.kg</div>
              </div>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2 text-white whitespace-nowrap max-md:mt-10">
              <h2 className="text-2xl">Получай новости первым</h2>
              <form className="flex flex-col justify-center px-2.5 py-1 mt-8 w-full text-base font-medium leading-10 border-white border-solid border-[0.7px]">
                <div className="flex  flex-row gap-3 justify-center">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    aria-label="Email"
                    aria-role="textbox"
                    className="bg-neutral-900   focus:outline-none border-2 rounded-md border-neutral-700  "
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/da855a44d2e3ff7069f5fd2f5ca829717da8b84b072d1159606636bef1d5e52f?apiKey=560fbc2a70834c07805a703b08db725f&"
                    alt=""
                    className="my-auto w-5 aspect-square"
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}