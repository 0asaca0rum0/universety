import * as React from "react";
import Anouncment from "./Anouncment";

export default function Intro() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center px-16 pt-5 pb-8 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1125px] max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            
          </div>
                <Anouncment/>
          
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/660f613a272c1d56429f73cea707f4a7564b1c5fbf1c360488e994359cb2be27?apiKey=560fbc2a70834c07805a703b08db725f&"
                  className="grow w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow font-medium text-black max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl font-bold max-md:max-w-full">
                    Вручение сертификатов выпускникам курса
                  </div>
                  <div className="mt-5 text-lg leading-6 max-md:max-w-full">
                    Сегодня 3 декабря 2020 года в Академии цифровых инноваций
                    состоялось вручение сертификатов выпускникам курса
                    Фронтенд-разработки.
                  </div>
                  <div className="flex gap-5 justify-between self-start mt-12 text-sm leading-10 text-center whitespace-nowrap max-md:mt-10">
                    <div className="flex gap-2 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a66920edc489c36baac5f79ed377982524c5a25395ff983961977e277725c0c?apiKey=560fbc2a70834c07805a703b08db725f&"
                        className="my-auto w-4 aspect-square"
                      />
                      <div className="grow">Предыдущий</div>
                    </div>
                    <div className="flex gap-2 justify-between">
                      <div className="grow">Следующий</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/53dac5b2108d9dad3424062249e543b73a86709637cb9e46b506d7411e78957c?apiKey=560fbc2a70834c07805a703b08db725f&"
                        className="my-auto w-4 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col my-3 w-full max-w-[1113px] max-md:max-w-full">
          <div className="flex gap-5 justify-between px-px text-black max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-4xl font-bold max-md:max-w-full">
              Последние новости
            </div>
            <div className="flex flex-col justify-center px-2.5 py-1 text-base font-medium leading-10 border-black border-solid border-[0.7px]">
              <div className="flex gap-5 justify-between py-px">
                <div>Все новости</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e34457d233303811f43f436ea3eeaf3ab6529d223d9e651f9847bc3e91893fa?apiKey=560fbc2a70834c07805a703b08db725f&"
                  className="my-auto w-5 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="px-0.5 mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&"
                    className="w-full aspect-[1.59]"
                  />
                  <div className="mt-2 text-lg font-bold text-black">
                    Вручение сертификатов выпускникам курса
                  </div>
                  <div className="mt-1.5 text-base font-medium leading-6 text-zinc-700">
                    Сегодня 3 декабря 2020 года в Академии цифровых инноваций
                    состоялось вручение сертификатов
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&"
                    className="w-full aspect-[1.59]"
                  />
                  <div className="mt-2 text-lg font-bold text-black">
                    Вручение сертификатов выпускникам курса
                  </div>
                  <div className="mt-1.5 text-base font-medium leading-6 text-zinc-700">
                    Сегодня 3 декабря 2020 года в Академии цифровых инноваций
                    состоялось вручение сертификатов
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&"
                    className="w-full aspect-[1.59]"
                  />
                  <div className="mt-2 text-lg font-bold text-black">
                    Вручение сертификатов выпускникам курса
                  </div>
                  <div className="mt-1.5 text-base font-medium leading-6 text-zinc-700">
                    Сегодня 3 декабря 2020 года в Академии цифровых инноваций
                    состоялось вручение сертификатов
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-0.5 mt-10 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f&"
                    className="w-full aspect-[1.59]"
                  />
                  <div className="mt-2 text-lg font-bold text-black">
                    Вручение сертификатов выпускникам курса
                  </div>
                  <div className="mt-1.5 text-base font-medium leading-6 text-zinc-700">
                    Сегодня 3 декабря 2020 года в Академии цифровых инноваций
                    состоялось вручение сертификатов
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f&"
                    className="w-full aspect-[1.59]"
                  />
                  <div className="mt-2 text-lg font-bold text-black">
                    Вручение сертификатов выпускникам курса
                  </div>
                  <div className="mt-1.5 text-base font-medium leading-6 text-zinc-700">
                    Сегодня 3 декабря 2020 года в Академии цифровых инноваций
                    состоялось вручение сертификатов
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f&"
                    className="w-full aspect-[1.59]"
                  />
                  <div className="mt-2 text-lg font-bold text-black">
                    Вручение сертификатов выпускникам курса
                  </div>
                  <div className="mt-1.5 text-base font-medium leading-6 text-zinc-700">
                    Сегодня 3 декабря 2020 года в Академии цифровых инноваций
                    состоялось вручение сертификатов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-8 mb-10 w-full max-w-[1109px] max-md:max-w-full">
          <div className="text-4xl font-bold text-black max-md:max-w-full">
            Галерея
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/02c81dffaa6fe94739c69e87388d0ffc8efd62653952f60e149299b37fdfb3c4?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c81dffaa6fe94739c69e87388d0ffc8efd62653952f60e149299b37fdfb3c4?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c81dffaa6fe94739c69e87388d0ffc8efd62653952f60e149299b37fdfb3c4?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c81dffaa6fe94739c69e87388d0ffc8efd62653952f60e149299b37fdfb3c4?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c81dffaa6fe94739c69e87388d0ffc8efd62653952f60e149299b37fdfb3c4?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c81dffaa6fe94739c69e87388d0ffc8efd62653952f60e149299b37fdfb3c4?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c81dffaa6fe94739c69e87388d0ffc8efd62653952f60e149299b37fdfb3c4?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c81dffaa6fe94739c69e87388d0ffc8efd62653952f60e149299b37fdfb3c4?apiKey=560fbc2a70834c07805a703b08db725f&"
                  className="grow w-full aspect-[1.08]"
                />
              </div>
              <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66a9d2759e1dbb2aa501dca6c0a9bfadca63702c63f40b8e724e00ba6e3bc50c?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66a9d2759e1dbb2aa501dca6c0a9bfadca63702c63f40b8e724e00ba6e3bc50c?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66a9d2759e1dbb2aa501dca6c0a9bfadca63702c63f40b8e724e00ba6e3bc50c?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66a9d2759e1dbb2aa501dca6c0a9bfadca63702c63f40b8e724e00ba6e3bc50c?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66a9d2759e1dbb2aa501dca6c0a9bfadca63702c63f40b8e724e00ba6e3bc50c?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66a9d2759e1dbb2aa501dca6c0a9bfadca63702c63f40b8e724e00ba6e3bc50c?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66a9d2759e1dbb2aa501dca6c0a9bfadca63702c63f40b8e724e00ba6e3bc50c?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66a9d2759e1dbb2aa501dca6c0a9bfadca63702c63f40b8e724e00ba6e3bc50c?apiKey=560fbc2a70834c07805a703b08db725f&"
                  className="grow w-full aspect-[2.5] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47e064f54fcbca7ac737b2d19c7084368b4b6a23991544b0d60a5b0a981f6645?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e064f54fcbca7ac737b2d19c7084368b4b6a23991544b0d60a5b0a981f6645?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e064f54fcbca7ac737b2d19c7084368b4b6a23991544b0d60a5b0a981f6645?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e064f54fcbca7ac737b2d19c7084368b4b6a23991544b0d60a5b0a981f6645?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e064f54fcbca7ac737b2d19c7084368b4b6a23991544b0d60a5b0a981f6645?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e064f54fcbca7ac737b2d19c7084368b4b6a23991544b0d60a5b0a981f6645?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e064f54fcbca7ac737b2d19c7084368b4b6a23991544b0d60a5b0a981f6645?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e064f54fcbca7ac737b2d19c7084368b4b6a23991544b0d60a5b0a981f6645?apiKey=560fbc2a70834c07805a703b08db725f&"
                  className="grow w-full aspect-[1.54]"
                />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b89e4cfd6226a989fc64dafbee5ef153c8766c9674262cf11531a45b00fb9e8a?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b89e4cfd6226a989fc64dafbee5ef153c8766c9674262cf11531a45b00fb9e8a?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b89e4cfd6226a989fc64dafbee5ef153c8766c9674262cf11531a45b00fb9e8a?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b89e4cfd6226a989fc64dafbee5ef153c8766c9674262cf11531a45b00fb9e8a?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b89e4cfd6226a989fc64dafbee5ef153c8766c9674262cf11531a45b00fb9e8a?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b89e4cfd6226a989fc64dafbee5ef153c8766c9674262cf11531a45b00fb9e8a?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b89e4cfd6226a989fc64dafbee5ef153c8766c9674262cf11531a45b00fb9e8a?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b89e4cfd6226a989fc64dafbee5ef153c8766c9674262cf11531a45b00fb9e8a?apiKey=560fbc2a70834c07805a703b08db725f&"
                  className="grow w-full aspect-[1.56]"
                />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/02fe30a728c0c70730e3bb6341743667f8e6cb971b7379411914827c89b5289a?apiKey=560fbc2a70834c07805a703b08db725f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/02fe30a728c0c70730e3bb6341743667f8e6cb971b7379411914827c89b5289a?apiKey=560fbc2a70834c07805a703b08db725f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02fe30a728c0c70730e3bb6341743667f8e6cb971b7379411914827c89b5289a?apiKey=560fbc2a70834c07805a703b08db725f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/02fe30a728c0c70730e3bb6341743667f8e6cb971b7379411914827c89b5289a?apiKey=560fbc2a70834c07805a703b08db725f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/02fe30a728c0c70730e3bb6341743667f8e6cb971b7379411914827c89b5289a?apiKey=560fbc2a70834c07805a703b08db725f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02fe30a728c0c70730e3bb6341743667f8e6cb971b7379411914827c89b5289a?apiKey=560fbc2a70834c07805a703b08db725f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/02fe30a728c0c70730e3bb6341743667f8e6cb971b7379411914827c89b5289a?apiKey=560fbc2a70834c07805a703b08db725f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/02fe30a728c0c70730e3bb6341743667f8e6cb971b7379411914827c89b5289a?apiKey=560fbc2a70834c07805a703b08db725f&"
                  className="grow w-full aspect-[1.54]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}