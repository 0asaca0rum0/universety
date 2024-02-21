import React from "react";
import { removeHtmlTagsAndAttributes } from "../util/removehtml";
import { Axios } from "../util/axios";
import SwiperNews from "../components/swiperNews";
import Link from "next/link";
export default async function page() {
  const items = await Axios.get("/announcement")
    .then((res) => {
      let data = res.data;
      data = data
        ?.filter(
          (e) =>
            e?.faculte ==
              "Mathematics, Computer Science, and Material Science" &&
            e?.departement?.includes("Material Science")
        )
        ?.map((e) => ({
          id: e?._id,
          imageUrl: "http://localhost:4000/" + e.thumbanil,
          title: e.title,
          description: removeHtmlTagsAndAttributes(e?.content),
          departement: e?.departement,
          years: e?.years,
          faculty: e?.faculte,
        }));
      return data;
    })
    .catch((err) => console.error(err));
  return (
    <div className="w-full flex flex-col items-center pt-[85px]">
      <div className="w-11/12 flex flex-col gap-4 pb-5">
        <h1 className="text-lg">Material Science</h1>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <Link
              href={`/annoncement/${item?.id}`}
              key={index}
              className="flex flex-col"
            >
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
                {item.description?.substring(0, 100)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
