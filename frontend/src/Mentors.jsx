import { useEffect, useState } from "react";

export default function Mentors() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/mentors")
      .then(res => res.json())
      .then(data => setMentors(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 px-6 py-12">
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-14">
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">
          Unlock Guidance from Alumni
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl">
          Connect with experienced alumni mentors and get real guidance
          for academics, careers, and beyond.
        </p>
      </div>

      {/* Mentor Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mentors.map(mentor => (
          <div
            key={mentor._id}
            className="
              bg-white rounded-2xl p-6
              border border-slate-200
              shadow-sm
              transition-all duration-300
              hover:shadow-xl hover:-translate-y-1
            "
          >
            {/* Top */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600
                              flex items-center justify-center
                              font-bold text-xl">
                {mentor.name.charAt(0)}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {mentor.name}
                </h2>
                <p className="text-sm text-slate-500">
                  Batch {mentor.batch}
                </p>
              </div>
            </div>

            {/* Role */}
            <p className="mt-4 font-medium text-slate-800">
              {mentor.role}
            </p>
            <p className="text-sm text-slate-500">
              {mentor.company}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {mentor.skills.map(skill => (
                <span
                  key={skill}
                  className="
                    text-xs font-medium
                    px-3 py-1 rounded-full
                    bg-slate-100 text-slate-700
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              className="
                mt-6 w-full py-2.5 rounded-xl
                bg-blue-600 text-white font-semibold
                transition
                hover:bg-blue-700
              "
            >
              Request Mentorship
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
