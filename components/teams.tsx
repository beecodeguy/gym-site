import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Team = () => {
  const trainers = [
    {
      name: "Patrick Cortez",
      role: "Leader",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Athart Rachel",
      role: "Gym Trainer",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1000",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "James Brown",
      role: "Dance Trainer",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1000",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-orange-500 text-lg font-medium mb-4">
              OUR TEAM
            </h2>
            <h3 className="text-4xl font-bold">TRAIN WITH EXPERTS</h3>
          </div>
          <button className="border border-orange-500 text-orange-500 px-8 py-3 hover:bg-orange-500 hover:text-white transition-colors duration-300">
            APPOINTMENT
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
              }}
            >
              {/* Image Container */}
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay that slides up on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h4 className="text-2xl font-bold mb-2">{trainer.name}</h4>
                    <p className="text-orange-500 mb-6">{trainer.role}</p>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                      <a
                        href={trainer.socials.facebook}
                        className="hover:text-orange-500 transition-colors"
                      >
                        <FaFacebook className="w-5 h-5" />
                      </a>
                      <a
                        href={trainer.socials.twitter}
                        className="hover:text-orange-500 transition-colors"
                      >
                        <FaXTwitter className="w-5 h-5" />
                      </a>
                      <a
                        href={trainer.socials.instagram}
                        className="hover:text-orange-500 transition-colors"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <button className="w-8 h-1 bg-orange-500"></button>
          <button className="w-8 h-1 bg-zinc-700 hover:bg-orange-500 transition-colors"></button>
          <button className="w-8 h-1 bg-zinc-700 hover:bg-orange-500 transition-colors"></button>
        </div>
      </div>
    </section>
  );
};

export default Team;
