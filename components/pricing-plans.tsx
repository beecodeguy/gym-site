import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Class drop-in",
      price: "39.0",
      period: "SINGLE CLASS",
      features: [
        "Free riding",
        "Unlimited equipments",
        "Personal trainer",
        "Weight losing classes",
        "Month to mouth",
        "No time restriction",
      ],
      isHighlighted: false,
    },
    {
      name: "12 Month unlimited",
      price: "99.0",
      period: "SINGLE CLASS",
      features: [
        "Free riding",
        "Unlimited equipments",
        "Personal trainer",
        "Weight losing classes",
        "Month to mouth",
        "No time restriction",
      ],
      isHighlighted: true,
    },
    {
      name: "6 Month unlimited",
      price: "59.0",
      period: "SINGLE CLASS",
      features: [
        "Free riding",
        "Unlimited equipments",
        "Personal trainer",
        "Weight losing classes",
        "Month to mouth",
        "No time restriction",
      ],
      isHighlighted: false,
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-medium mb-4">OUR PLAN</h2>
          <h3 className="text-4xl font-bold">CHOOSE YOUR PRICING PLAN</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transform hover:-translate-y-2 transition-transform duration-300 ${
                plan.isHighlighted ? "bg-gray-300 text-black" : "bg-secondary"
              }`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 94%, 0 100%)",
              }}
            >
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-6">{plan.name}</h4>
                <div className="mb-6">
                  <span
                    className={`text-4xl font-semibold ${
                      plan.isHighlighted ? "text-orange-500" : "text-orange-500"
                    }`}
                  >
                    $ {plan.price}
                  </span>
                  <span
                    className={`block text-sm mt-2 ${
                      plan.isHighlighted ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`${
                        plan.isHighlighted ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 font-semibold transition-colors duration-300 ${
                    plan.isHighlighted
                      ? "bg-zinc-800 text-white hover:bg-orange-500"
                      : "bg-zinc-800 hover:bg-orange-500"
                  }`}
                >
                  ENROLL NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
