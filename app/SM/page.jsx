import React from "react";
import { removeHtmlTagsAndAttributes } from "../util/removehtml";
import { Axios } from "../util/axios";
import SwiperNews from "../components/swiperNews";

export default async function page() {
  const items = await Axios.get("/announcement")
    .then((res) => {
      let data = res.data;
      data = data
        ?.filter(
          (e) =>
            e?.faculte ==
              "Mathematics, Computer Science, and Material Science" &&
            e?.faculte?.includes("Material Science")
        )
        ?.map((e) => ({
          imageUrl: "http://localhost:4000/" + e.thumbanil,
          title: e.title,
          description: removeHtmlTagsAndAttributes(e?.content),
        }));
      return data;
    })
    .catch((err) => console.error(err));
  return (
    <div className="px-0.5 mt-14 w-full px-6">
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
  );
}
