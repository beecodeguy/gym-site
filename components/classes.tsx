import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Classes = () => {
  const classes = [
    {
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
      category: "STRENGTH",
      title: "WEIGHTLIFTING",
    },
    {
      image:
        "https://images.unsplash.com/photo-1593810451137-5dc55105dace?auto=format&fit=crop&q=80&w=1000",
      category: "CARDIO",
      title: "INDOOR CYCLING",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&q=80&w=1000",
      category: "STRENGTH",
      title: "KETTLEBELL POWER",
    },
    {
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1000",
      category: "STRENGTH",
      title: "BODYBUILDING",
    },
    {
      image:
        "https://images.unsplash.com/photo-1622599511051-16f55a1234d0?auto=format&fit=crop&q=80&w=1000",
      category: "CARDIO",
      title: "BOXING",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-medium mb-4">
            OUR CLASSES
          </h2>
          <h3 className="text-4xl font-bold">WHAT WE CAN OFFER</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
              }}
            >
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  fill
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-orange-500 text-sm font-medium block mb-2">
                    {classItem.category}
                  </span>
                  <div className="flex justify-between items-center">
                    <h4 className="text-2xl font-bold">{classItem.title}</h4>
                    <button className="bg-zinc-800 p-3 rounded-full transform group-hover:bg-orange-500 transition-colors duration-300">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
