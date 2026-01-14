export default function HowItWorks() {
  const steps = [
    {
      title: "Login with College Email",
      desc: "Verify your college identity to access verified alumni.",
      icon: "⏱️",
    },
    {
      title: "Find Your Alumnus",
      desc: "Search by company, role, or batch from your branch.",
      icon: "🎯",
    },
    {
      title: "Get Guidance & Referrals",
      desc: "Book mentoring sessions or get career guidance directly.",
      icon: "🏅",
    },
  ];

  return (
    <section className="bg-blue-50 py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How It Works
        </h2>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center 
                         transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-20 h-20 
                           rounded-2xl bg-blue-600 text-white text-3xl 
                           shadow-lg group-hover:scale-110 transition"
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
