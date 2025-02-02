export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-secondary flex items-center justify-between flex-col gap-16 lg:flex-row">
          <div className="w-full lg:w-60">
            <h2 className="font-manrope text-4xl font-bold mb-4 text-center lg:text-left">
              Our Stats
            </h2>
            <p className="text-sm text-gray-500 leading-6 text-center lg:text-left">
              We help you to unleash the power
            </p>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
              <StatBlock number="200+" text="Body Transformation" />
              <StatBlock number="20+" text="Award Winners" />
              <StatBlock number="1000+" text="Active Clients" />
              <StatBlock number="5+" text="Service Since" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatBlockProps {
  number: string;
  text: string;
}

function StatBlock({ number, text }: StatBlockProps) {
  return (
    <div className="block">
      <div className="font-manrope font-bold text-4xl text-orange-600 mb-3 text-center lg:text-left">
        {number}
      </div>
      <span className="text-center block lg:text-left">{text}</span>
    </div>
  );
}
