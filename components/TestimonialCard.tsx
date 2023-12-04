import React from "react";
import Image from "next/image";

export default function TestimonialCard({
  img,
  quote,
  author,
  title,
}: {
  img: any;
  quote: string;
  author: string;
  title: string;
}) {
  return (
    <article
      className="p-9 w-[350px] justify-self-center    rounded-md bg-white"
      key={author}
    >
      <q className="text-[26px] leading-[36px]">{quote}</q>
      <div className="mt-10 flex items-center gap-4">
        <Image src={img} alt={author} width={58} height={58} />
        <div className="flex items-start justify-center gap-2 flex-col">
          <strong className="text-base">{author}</strong>
          <span className="text-sm">{title}</span>
        </div>
      </div>
    </article>
  );
}
