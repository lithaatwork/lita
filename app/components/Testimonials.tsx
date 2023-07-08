import React from "react";
import Carousel from "./Carousel";
import { testimonialsData } from "@/lib/testimonials";

const Testimonials = () => {
  return (
    <section className="relative bg-slate-900">
      <Carousel slides={testimonialsData} autoSlide={true} autoSlideInterval={10000} />
    </section>
  );
};

export default Testimonials;
