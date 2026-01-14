export default function HeroSearch() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* App Name */}
        <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
          Campuz Mentorship
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Connect with Your Seniors.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
          Verified alumni from your college working at top companies.
        </p>

        {/* Search Bar (no button) */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-xl relative">
            <input
              type="text"
              placeholder="Search by Company (e.g. Google), Role, or Batch..."
              className="w-full rounded-full border border-gray-300 
                         px-6 py-4 text-gray-700 shadow-sm 
                         focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Class of 2023", "CSE Dept", "MBA Alumni", "Bangalore"].map(
            (tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm 
                           border border-gray-300 text-gray-700 
                           hover:bg-blue-50 transition cursor-pointer"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
