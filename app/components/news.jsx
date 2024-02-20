import { Axios } from "../util/axios";
import { removeHtmlTagsAndAttributes } from "../util/removehtml";
import SwiperNews from "./swiperNews";

// const items = [
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f",
//     title: "Certificate Award Ceremony for Course Graduates",
//     description:
//       "Today, December 3, 2020, the Academy of Digital Innovations held a certificate award ceremony",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f",
//     title: "Certificate Award Ceremony for Course Graduates",
//     description:
//       "Today, December 3, 2020, the Academy of Digital Innovations held a certificate award ceremony",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f",
//     title: "Certificate Award Ceremony for Course Graduates",
//     description:
//       "Today, December 3, 2020, the Academy of Digital Innovations held a certificate award ceremony",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/56511e57017fd436354ec1b0300e275d40ba9a1e9afdcdb736a322f527b4895e?apiKey=560fbc2a70834c07805a703b08db725f",
//     title: "Certificate Award Ceremony for Course Graduates",
//     description:
//       "Today, December 3, 2020, the Academy of Digital Innovations held a certificate award ceremony",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/1f32cc8bcc53cc5b88d0960bfeb5b8fae32588c4a4e1627d4f46b590c3eb79f0?apiKey=560fbc2a70834c07805a703b08db725f",
//     title: "Certificate Award Ceremony for Course Graduates",
//     description:
//       "Today, December 3, 2020, the Academy of Digital Innovations held a certificate award ceremony",
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/0e726a5e8db420573fcc142fcdf66e808dcad24fa56c5df6d28b7a6d996b0671?apiKey=560fbc2a70834c07805a703b08db725f",
//     title: "Certificate Award Ceremony for Course Graduates",
//     description:
//       "Today, December 3, 2020, the Academy of Digital Innovations held a certificate award ceremony",
//   },
// ];

export default async function News() {
  const items = await Axios.get("/announcement")
    .then((res) => {
      let data = res.data;
      data = data
        ?.filter((e) => !e?.departement || !e?.departement?.length)
        ?.map((e) => ({
          imageUrl: "http://localhost:4000/" + e.thumbanil,
          title: e.title,
          description: removeHtmlTagsAndAttributes(e?.content),
        }));
      console.log(data);
      return data;
    })
    .catch((err) => console.error(err));
  return (
    <div className="flex justify-center items-center px-6 md:px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col my-3 w-full max-w-[1113px] max-md:max-w-full">
        <div className="flex gap-5 justify-between px-px text-black max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-4xl font-bold max-md:max-w-full">
            Latest News
          </div>
          <div className="flex flex-col justify-center px-2.5 py-1 text-base font-medium leading-10 border-black border-solid border-[0.7px]">
            <div className="flex gap-5 justify-between py-px">
              <div>All News</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e34457d233303811f43f436ea3eeaf3ab6529d223d9e651f9847bc3e91893fa?apiKey=560fbc2a70834c07805a703b08db725f&"
                className="my-auto w-5 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="px-0.5 mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="w-full">
            <div className="grid gap-5 md:grid-cols-3">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <img
                    loading="lazy"
                    crossOrigin="anonymous"
                    src={item.imageUrl}
                    className="w-full aspect-[1.59] object-cover"
                  />
                  <div className="mt-2 text-lg font-bold text-black">
                    {item.title}
                  </div>
                  <div className="mt-1.5 text-base font-medium leading-6 text-zinc-700">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
