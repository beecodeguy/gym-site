"use client";

import type React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

interface Testimonial {
  image: string;
  text: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    image: "img/testimonial/testimonial-1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    name: "Marshmello Gomez",
  },
  {
    image: "img/testimonial/testimonial-2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    name: "Marshmello Gomez",
  },
];

const Testimonial: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xl text-orange-500 font-bold">Testimonial</span>
          <h2 className="text-4xl font-bold mt-2">Our client say</h2>
        </div>
        <Slider {...settings} className="ts_slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="text-center">
                <div className="mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt=""
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                </div>
                <div className="max-w-2xl mx-auto">
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <h5 className="text-xl font-semibold mb-2">
                    {testimonial.name}
                  </h5>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-orange-300 text-orange-300"
                        size={18}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
