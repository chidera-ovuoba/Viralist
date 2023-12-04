import React from "react";
import TestimonialCard from "./TestimonialCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Testimonial_1 from "../public/assets/Ellipse 4.png";
import Testimonial_2 from "../public/assets/Ellipse 5.png";
import Testimonial_3 from "../public/assets/Ellipse 6.png";

const testimonialData = [
  {
    img: Testimonial_1,
    quote:
      "Buyer buzz partner network disruptive non-disclosure agreement business.",
    author: "Albus Dumbledore",
    title: "Manager @ Howarts",
  },
  {
    img: Testimonial_2,
    quote:
      "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
    author: "Severus Snape",
    title: "Manager @ Slytherin",
  },
  {
    img: Testimonial_3,
    quote:
      "Release facebook responsive web design business model canvas seed money monetization",
    author: "Harry Potter",
    title: "Team Leader @ Gryffindor",
  },
];

export default function Testimonial() {
  return (
    <section className="flex flex-col justify-center gap-10 py-16 max-w-[1280px] mx-auto px-10">
      <div className="flex items-center min-[700px]:flex-row flex-col justify-between gap-16 ">
        <h3 className="text-[55px] flex-1 min-[700px]:text-left text-center text-white leading-[56px]">
          An enterprise to ramp up your company
        </h3>
        <div className="flex justify-center items-center gap-10">
          <span className="p-7 text-[30px] bg-white rounded-full">
            <FaArrowLeftLong />
          </span>
          <span className="p-7 text-[30px] bg-white rounded-full">
            <FaArrowRightLong />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] place-items-start gap-10 py-16 max-w-[1280px]">
        {testimonialData.map((item) => (
          <TestimonialCard {...item} key={item.author} />
        ))}
      </div>
    </section>
  );
}
