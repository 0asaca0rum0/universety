import React from "react";
import { Axios } from "../util/axios";
import { removeHtmlTagsAndAttributes } from "../util/removehtml";
import Link from "next/link";
export default async function Recommandation() {
  const items = await Axios.get("/announcement")
    .then((res) => {
      let data = res.data;
      data = data?.slice(0, 2)?.map((e) => ({
        id: e?._id,
        imageUrl: "http://localhost:4000/" + e.thumbanil,
        title: e.title,
        description: removeHtmlTagsAndAttributes(e?.content),
      }));
      console.log(data);
      return data;
    })
    .catch((err) => console.error(err));
  return (
    <div className="w-full flex flex-col gap-3 pt-10">
      <div className="w-full h-0.5 bg-[#1e1e1e]"></div>
      <p className="text-lg md:text-2xl font-bold">Latest</p>
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
  );
}
