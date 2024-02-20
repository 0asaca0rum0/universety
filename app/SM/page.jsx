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
    <div className="px-0.5 mt-14 max-md:mt-10 max-md:max-w-full">
      <div className="grid gap-5 md:grid-cols-3">
        <SwiperNews items={items} />
      </div>
    </div>
  );
}
