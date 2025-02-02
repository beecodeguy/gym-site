import React from "react";
import { Dumbbell, Apple, Heart, Activity } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <Dumbbell className="w-12 h-12 text-orange-500 group-hover:text-white " />
      ),
      title: "Modern equipment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
    },
    {
      icon: (
        <Apple className="w-12 h-12 text-orange-500 group-hover:text-white " />
      ),
      title: "Healthy nutrition plan",
      description:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      icon: (
        <Activity className="w-12 h-12 text-orange-500 group-hover:text-white " />
      ),
      title: "Proffesponal training plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
    },
    {
      icon: (
        <Heart className="w-12 h-12 text-orange-500 group-hover:text-white " />
      ),
      title: "Unique to your needs",
      description:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-medium mb-4">
            WHY CHOSE US?
          </h2>
          <h3 className="text-4xl font-bold">PUSH YOUR LIMITS FORWARD</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-zinc-900 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                <div className="group-hover:scale-110  transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
