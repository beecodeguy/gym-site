import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2070&auto=format&fit=crop"
          alt="Fitness training with kettlebells"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          REGISTRATION NOW TO GET MORE DEALS
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          WHERE HEALTH, BEAUTY AND FITNESS MEET.
        </p>
        <Button className="bg-orange-600 hover:bg-[#FF4A17] text-white px-8 py-6 text-lg uppercase tracking-wider transition-colors duration-300">
          Appointment
        </Button>
      </div>
    </section>
  );
}
