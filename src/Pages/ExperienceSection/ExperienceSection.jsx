import CountUp from "react-countup";

export default function ExperienceSection() {
  return (
    <div className="mb-10 mt-20">
      <div className="max-w-7xl mx-auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        
        {/* Experience Years */}
        <div className="p-6 bg-red-50 rounded-lg shadow-xl">
          <h2 className="text-5xl font-bold text-[#ff014dd9] mb-3">
            <CountUp start={0} end={2} duration={3} />+
          </h2>
          <p className="text-lg font-medium text-gray-700">Years of Learning Experience</p>
        </div>

        {/* Total Customers */}
        <div className="p-6 bg-red-50 rounded-lg shadow-xl">
          <h2 className="text-5xl font-bold text-[#ff014dd9] mb-3">
            <CountUp start={0} end={200} duration={3} />+
          </h2>
          <p className="text-lg font-medium text-gray-700">Happy Customers</p>
        </div>

        {/* Total Client Reviews */}
        <div className="p-6 bg-red-50 rounded-lg shadow-xl">
          <h2 className="text-5xl font-bold text-[#ff014dd9] mb-3">
            <CountUp start={0} end={50} duration={3} />+
          </h2>
          <p className="text-lg font-medium text-gray-700">Client Reviews</p>
        </div>

      </div>
    </div>
  );
}
