import React from "react";
import Image from "next/image";
import { Axios } from "@/app/util/axios";
import { formatList } from "@/app/util/formatText";
import Recommandation from "@/app/components/latest";
export default async function page({ params }) {
  const { id } = params;
  const item = await Axios.get("/announcement/annoncement/" + id)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  await Axios.get("/announcement/view/" + id)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return (
    <div className="w-full pb-10 pt-[90px]">
      <div className="w-full flex flex-col gap-3">
        <div className="flex flex-col w-full items-center">
          <div className="h-[230px] md:h-[498px] w-11/12 relative">
            <Image
              src={"http://localhost:4000/" + item?.thumbanil}
              className="object-cover"
              fill
              alt="thumbanil"
            />
          </div>
        </div>
        <section className="w-full flex flex-col items-center">
          <div className="w-10/12">
            <p className="text-lg md:text-2xl font-bold">{item?.title}</p>
            <div className="flex gap-5">
              <p className="">ahmed ghaname</p>
              <p className="">{item?.faculty}</p>
              <p className="">
                {formatList(item?.departement, "en-US", "conjunction", "short")}
              </p>
              <p> {formatList(item?.years, "en-US", "conjunction", "short")}</p>
              {/* <p className="text-[#5a5a5a]">2022/11/11</p> */}
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center">
          <div
            className="w-10/12"
            dangerouslySetInnerHTML={{ __html: item?.content }}
          ></div>
        </section>
        <section className="w-full flex flex-col items-center">
          <div className="w-10/12">
            <Recommandation />
          </div>
        </section>
      </div>
    </div>
  );
}
